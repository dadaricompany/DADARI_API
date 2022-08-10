const express = require('express');
const path = require('path');
const morgan = require('morgan');
const nunjucks = require('nunjucks');

const { sequelize } = require('./src/models'); // require('./models/index.js')와 같음 - index.js는 require 시 이름 생략 가능
const indexRouter = require('./src/controller');
const usersRouter = require('./src/controller/users');
const commentsRouter = require('./src/controller/comments');
const subscriptionServiceRouter = require('./src/controller/subscriptionService.ctrl');

const buildErrorResponse = require('./src/utils/exceptionUtils').buildErrorResponse;

const app = express(); // require해온 express 실행

app.set('port', process.env.PORT || 3000); // 포트번호 3001로 세팅
app.set('view engine', 'html');

nunjucks.configure('views', {
    // render 시, views 폴더로 이동
    express: app,
    watch: true,
});

sequelize
    .sync({ force: false }) // 서버 실행 시 MySQL과 연동되도록 함, force: true면 서버 실행 시 마다 테이블을 재생성, 테이블을 잘못 만든 경우에 true로 설정
    .then(() => {
        console.log('데이터베이스 연결 성공');
    })
    .catch((err) => {
        console.error(err);
    });

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
