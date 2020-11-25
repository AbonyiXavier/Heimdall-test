"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _chai = _interopRequireWildcard(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _index = _interopRequireDefault(require("../index"));

_chai["default"].should();

_chai["default"].use(_chaiHttp["default"]);

describe("/ should display Welcome to Heimdall Technologies APIs Test questions....", function () {
  it("it should get the home page", function (done) {
    _chai["default"].request(_index["default"]).get("/").end(function (error, response) {
      (0, _chai.expect)(response).to.have.status(200);
      (0, _chai.expect)(response.body.message).to.equal("Welcome to Heimdall Technologies APIs Test questions....");
      done();
    });
  });
});
var _default = describe;
exports["default"] = _default;