var DataTypes = require("sequelize").DataTypes;
var _Url = require("./url");

function initModels(sequelize) {
  var Url = _Url(sequelize, DataTypes);


  return {
    Url,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
