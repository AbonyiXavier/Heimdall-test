"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _questionThree = _interopRequireDefault(require("../controllers/3-questionThree"));

var lowestIndex = _questionThree["default"].lowestIndex;
var router = new _express.Router();
router.post("/lowest-index", lowestIndex);
var _default = router;
exports["default"] = _default;