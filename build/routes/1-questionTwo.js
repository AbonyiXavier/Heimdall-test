"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _questionTwo = _interopRequireDefault(require("../controllers/2-questionTwo"));

var removeItem = _questionTwo["default"].removeItem;
var router = new _express.Router();
router.patch("/remove-item", removeItem);
var _default = router;
exports["default"] = _default;