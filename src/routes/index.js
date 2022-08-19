const express = require('express');
const router = express.Router();

const ShortenUrlHandler = require('../handler/http/shortener');

router.get('/', function(req, res, next) {
  res.send({ title: 'Nandev Link Shortener API 🔥' });
});

router.get('/:hash', ShortenUrlHandler.redirectUrl);
router.post('/shortener', ShortenUrlHandler.shortUrl);




module.exports = router;
