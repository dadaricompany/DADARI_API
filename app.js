const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');

const { swaggerUi, specs } = require('./config/swagger/swagger');

const nunjucks = require('nunjucks');

const db = require('./src/models'); // require('./models/index.js')와 같음 - index.js는 require 시 이름 생략 가능
const indexRouter = require('./src/controller');
const usersRouter = require('./src/controller/users');
const commentsRouter = require('./src/controller/comments');
const subscriptionServiceRouter = require('./src/controller/subscriptionService.ctrl');

const buildErrorResponse = require('./src/utils/exceptionUtils').buildErrorResponse;

const app = express(); // require해온 express 실행

app.set('port', process.env.PORT || 4000); // 포트번호 4000로 세팅
app.set('view engine', 'html');

nunjucks.configure('views', {
    // render 시, views 폴더로 이동
    express: app,
    watch: true,
});

if (process.env.NODE_ENV !== 'test') {
    // test 코드에서 db sync를 await로 맞춤
    db.sequelize
        .sync({ force: false }) // true : 테이블을 재생성
        .then(() => {
            console.log('데이터베이스 연결 성공');
        })
        .catch((err) => {
            console.error(err);
        });
}

app.models = db;

var safesitelist = [
  'http://localhost:3000',
  'https://dadari-web.vercel.app',
  'https://www.dadari.kr',
  'https://www.dadari.co.kr',
];

var corsOptions = {
    origin: function (origin, callback) {
        var issafesitelisted = safesitelist.indexOf(origin) !== -1;
        callback(null, issafesitelisted);
    },
    credentials: true,
};

//cors에 옵션사용할경우
app.use(cors(corsOptions));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, { explorer: true }));
app.use(morgan('dev'));
app.use('/', express.static(path.join(__dirname, 'public'))); // static이라서 사용자가 public 아래의 하위 폴더에 모두 접근 가능
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 라우터 분리
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/comments', commentsRouter);
app.use('/subscriptionService', subscriptionServiceRouter);

// 라우터 주소가 없을 때 감
app.use((req, res, next) => {
    const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
    error.status = 404;
    next(error);
});

// 에러발생 수행됨. ErrorResponse 생성함수 호출
app.use(buildErrorResponse);

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
});


module.exports = app;
