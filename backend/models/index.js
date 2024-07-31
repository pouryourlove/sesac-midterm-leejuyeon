const Sequelize = require('sequelize'); 
const config = require(__dirname + '/../config/config.json')["development"]; // db 연결 정보
const db = {}; 

const sequelize = new Sequelize(
  config.database, 
  config.username, 
  config.password, 
  config
);

db.Sequelize = Sequelize;
db.Sequelize = sequelize

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("데이터베이스 연결됨.");
  })
  .catch((err) => {
    console.error(err);
  });

module.exports = db;