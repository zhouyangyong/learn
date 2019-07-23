const router = require('express').Router();

const articles = require('../controllers/article.controller');
router.get('/articles', articles.getArticle)

module.exports = router;