"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _questionOne = _interopRequireDefault(require("./1-questionOne"));

var _questionTwo = _interopRequireDefault(require("./1-questionTwo"));

var _questionThree = _interopRequireDefault(require("./3-questionThree"));

var router = new _express.Router();
router.use("/v1", _questionOne["default"]);
router.use("/v1", _questionTwo["default"]);
router.use("/v1", _questionThree["default"]);
var _default = router;
exports["default"] = _default;