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
describe("Testing Question Three Endpoint", function () {
  describe("Lowest Index for Aladdin's to return 0", function () {
    it("should return lowest 0", function (done) {
      _chai["default"].request(_index["default"]).post("".concat(url, "/lowest-index")).send(_questionData.data2).end(function (error, response) {
        (0, _chai.expect)(response).to.have.status(200);
        (0, _chai.expect)(response.body.status).to.equal(200);
        (0, _chai.expect)(response.body).to.have.property("message");
        (0, _chai.expect)(response.body.message).to.equal(0);
        done();
      });
    });
    it("should return -1", function (done) {
      _chai["default"].request(_index["default"]).post("".concat(url, "/lowest-index")).send(_questionData.data3).end(function (error, response) {
        (0, _chai.expect)(response.body).to.be.an("object");
        done();
      });
    });
  });
});