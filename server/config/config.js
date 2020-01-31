require('dotenv').config();

module.exports = {
  'dev': {
    'username': 'arin_kwak',
    'password': process.env.DB_DEV_PASSWORD,
    'database': process.env.DB_DEV_NAME,
    'host': process.env.DB_DEV_HOST,
    'dialect': 'mariadb',
  },
  'test': {
    'dialect': 'sqlite',
    'storage': 'database.sqlite',
  },
  'production': {
    'username': 'yun_kwak',
    'password': process.env.DB_PASSWORD,
    'database': process.env.DB_NAME,
    'host': process.env.DB_HOST,
    'dialect': 'mariadb',
  },
};
