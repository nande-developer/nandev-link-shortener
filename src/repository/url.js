const {
  Url
} = require('../loaders/sequelize').models;

class URLRepository {

  /**
   *
   * @param hash {string}
   * @param old_url {string}
   * @param new_url {string}
   */
  storeUrlData(hash, old_url, new_url) {

    return Url.create({
      'hash': hash,
      'old_url': old_url,
      'new_url': new_url
    });

  }

  /**
   *
   * @param hash {string}
   */
  findHashUrl(hash) {

    return Url.findOne({
      where: {
        hash: hash
      },
      raw: true
    });

  }

}

module.exports = new URLRepository();
