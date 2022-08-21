const Sequelize = require('sequelize'); // 시퀄라이즈 패키지이자 생성자

const Comment = require('./comment');
const User = require('./user');

const Category = require('./category');
const SubscriptionService = require('./subscriptionService');
const ComparisonItem = require('./comparisonItem');
const ComparisonValue = require('./comparisonValue');

const env = process.env.NODE_ENV || 'development';
const config = require('../../config/config')[env]; // config/config.json에서 데이터베이스 설정을 불러옴
const db = {};

config.host = process.env.DB_HOST;
config.username = process.env.DB_USERNAME;
config.password = process.env.DB_PASSWORD;

console.log('>>>>' + config.host);
const sequelize = new Sequelize(config.database, config.username, config.password, config); // new Sequelize를 통해 MySQL 연결 객체 생성

db.sequelize = sequelize; // 연결 객체를 나중에 재사용 하기 위해 db.Sequelize에 넣음

// db 객체에 User, Comment 모델을 담음 -> 앞으로 db를 require해서 User, Comment에 접근 가능
db.Comment = Comment;
db.User = User;
db.Category = Category;
db.SubscriptionService = SubscriptionService;
db.ComparisonItem = ComparisonItem;
db.ComparisonValue = ComparisonValue;

// 각 모델의 static init을 호출, init이 실행되어야 테이블이 모델로 연결(테이블-모델 연결)
Comment.init(sequelize);
User.init(sequelize);
Category.init(sequelize);
SubscriptionService.init(sequelize);
ComparisonItem.init(sequelize);
ComparisonValue.init(sequelize);

// 다른 테이블과 관계를 연결
Comment.associate(db);
User.associate(db);
Category.associate(db);
SubscriptionService.associate(db);
ComparisonItem.associate(db);
ComparisonValue.associate(db);

module.exports = db;
