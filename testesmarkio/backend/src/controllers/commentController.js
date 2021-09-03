const Comment = require('../models/Comment');

module.exports = {
  async index(req, res) {
    const user = await Comment.findAll();

    return res.json(comment);
  },
  async store(req, res) {
    const user = await Comment.create();

    return res.json(comment);
  },

};