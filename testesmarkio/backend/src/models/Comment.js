const { Model, DataTypes } = require('sequelize');

class Comment extends Model {
  static init(sequelize) {
    super.init({
      text: DataTypes.STRING(500),
    }, {
      sequelize
    })
  }
}

module.exports = Comment;