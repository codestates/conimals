const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  development: {
    username: 'admin',
    password: process.env.DATABASE_PASSWORD,
    database: 'conimals',
    host: 'conimals-database.cv8xyyitpqcj.ap-northeast-2.rds.amazonaws.com',
    dialect: 'mysql',
  },
  test: {
    username: 'admin',
    password: process.env.DATABASE_PASSWORD,
    database: 'conimals',
    host: 'conimals-database.cv8xyyitpqcj.ap-northeast-2.rds.amazonaws.com',
    dialect: 'mysql',
  },
  production: {
    username: 'admin',
    password: process.env.DATABASE_PASSWORD,
    database: 'conimals',
    host: 'conimals-database.cv8xyyitpqcj.ap-northeast-2.rds.amazonaws.com',
    dialect: 'mysql',
  },
};
