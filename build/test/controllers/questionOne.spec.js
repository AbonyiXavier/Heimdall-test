"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _chai = _interopRequireWildcard(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _index = _interopRequireDefault(require("../../index"));

var _questionData = require("./question-data");

_chai["default"].should();

_chai["default"].use(_chaiHttp["default"]);

var url = "/api/v1";
describe("Testing Question One Endpoint", function () {
  describe("All Input Validation passes", function () {
    it("should return valid if all input items are present in the request body'", function (done) {
      _chai["default"].request(_index["default"]).post("".concat(url, "/input-validate")).send({
        data: _questionData.data,
        rules: _questionData.rules
      }).end(function (error, response) {
        (0, _chai.expect)(response).to.have.status(200);
        (0, _chai.expect)(response.body.message).to.equal("Valid");
        done();
      });
    });
  });
});