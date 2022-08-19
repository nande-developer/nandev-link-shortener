const Joi = require("joi");

const {BaseValidator} = require('@nandev/ndk');

class ShortenerValidator extends BaseValidator {

  validateUrl(req) {
      const Schema = Joi.object({
        url: Joi.string()
          .uri()
          .required()
      })

      return this.validateBody(Schema, req)
  }

}

module.exports = new ShortenerValidator();
