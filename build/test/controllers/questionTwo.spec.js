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
describe("Testing Question Two Endpoint", function () {
  describe("Remove item type property from object ", function () {
    it("should return data object", function (done) {
      _chai["default"].request(_index["default"]).patch("".concat(url, "/remove-item")).send({
        data: _questionData.data,
        item: "type"
      }).end(function (error, response) {
        (0, _chai.expect)(response).to.have.status(200);
        (0, _chai.expect)(response.body.status).to.equal(200);
        (0, _chai.expect)(response.body).to.have.property("output");
        done();
      });
    });
    it("should return attribute not found", function (done) {
      _chai["default"].request(_index["default"]).patch("".concat(url, "/remove-item")).send({
        data: _questionData.data,
        item: "noItemFromObject"
      }).end(function (error, response) {
        (0, _chai.expect)(response).to.have.status(404);
        (0, _chai.expect)(response.body.status).to.equal(404);
        (0, _chai.expect)(response.body.message).to.equal("attribute not found");
        done();
      });
    });
  });
});