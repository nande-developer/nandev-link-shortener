const UrlRepository = require('../repository/url')

const moment = require('moment');
const shortid = require('shortid');

class ShortenerUsecase {

  async shorten(url) {

    const simpleHash = shortid.generate();

    const newUrl = `${process.env.API_URL}${simpleHash}`;

    let storeUrl = await UrlRepository.storeUrlData(simpleHash, url.url, newUrl);

    if(storeUrl) {
      return {
        oldUrl: url.url,
        shortenUrl: newUrl
      }
    }

  }

  async getUrl(hash) {

    let getUrlData = await UrlRepository.findHashUrl(hash);

    if(getUrlData) {
      if(shortid.isValid(getUrlData.hash)) {
        return {
          url: getUrlData.old_url
        }
      }
    }

  }

}

module.exports = new ShortenerUsecase();
