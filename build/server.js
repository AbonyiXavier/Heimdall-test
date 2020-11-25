"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _index = _interopRequireDefault(require("./index"));

var PORT = process.env.PORT || 8080;

_index["default"].listen(PORT, function () {
  console.log("Server running at: http://localhost:".concat(PORT));
});