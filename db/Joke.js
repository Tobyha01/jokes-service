const {Sequelize, sequelize} = require('./db');

const Joke = sequelize.define('joke', {
  content: Sequelize.STRING,
  tags: Sequelize.STRING
});

module.exports = { Joke };
