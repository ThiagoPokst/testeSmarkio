const Sequelize = require('sequelize');
const dbConfig = require('../config/db');

const Comment = require('../models/Comment');

const connection = new Sequelize(dbConfig);

Comment.init(connection);

Comment.associate(connection.models);

module.exports = connection;