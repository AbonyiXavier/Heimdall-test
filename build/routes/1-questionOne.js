"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _questionOne = _interopRequireDefault(require("../controllers/1-questionOne"));

var inputValidation = _questionOne["default"].inputValidation;
var router = new _express.Router();
router.post("/input-validate", inputValidation);
var _default = router;
exports["default"] = _default;