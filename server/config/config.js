const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  development: {
    username: 'root',
    password: process.env.DATABASE_PASSWORD,
    database: 'conimals',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  test: {
    username: 'root',
    password: process.env.DATABASE_PASSWORD,
    database: 'conimals',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    username: 'admin',
    password: process.env.DATABASE_PASSWORD,
    database: 'conimals',
    host: 'theconimals-database.cv8xyyitpqcj.ap-northeast-2.rds.amazonaws.com',
    dialect: 'mysql',
  },
};
