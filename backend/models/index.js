const Sequelize = require('sequelize'); 
const config = require(__dirname + '/../config/config.json')["development"]; // db 연결 정보
const db = {}; 

const sequelize = new Sequelize(
  config.database, 
  config.username, 
  config.password, 
  config
);

const Todo = require('./Todo')(sequelize, Sequelize)