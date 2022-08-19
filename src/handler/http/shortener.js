const {HTTPBaseHandler} = require('@nandev/ndk');

const ShortenerValidator = require('../../validator/shortener')
const ShortenerService = require('../../usecase/shortener');

class ShortenerHandler extends HTTPBaseHandler {

  async shortUrl(req, res) {
    const validation = ShortenerValidator.validateUrl(req)

    return ShortenerService.shorten(validation)
      .then(data => {
        return super.successResponse(res, 'success', data)
      })
      .catch(err => {
        return super.badRequest(res, err.message)
      });
  }

  async redirectUrl(req, res) {

    return ShortenerService.getUrl(req.params.hash)
      .then(data => {
        return res.redirect(data.url);
      })
      .catch(err => {
        return super.badRequest(res, err.message)
      });
  }

}

module.exports = new ShortenerHandler()
