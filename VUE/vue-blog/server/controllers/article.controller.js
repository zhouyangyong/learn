const mongoose = require('mongoose');
const Article = mongoose.model('Article');

exports.getArticle = async (req, res) => {
  const total = await Article.find({}).exec().length;
  const data = await Article.find({}).exec();
  res.json({
    total,
    data
  });
}