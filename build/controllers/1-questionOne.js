"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var questionOneController = /*#__PURE__*/function () {
  function questionOneController() {
    (0, _classCallCheck2["default"])(this, questionOneController);
  }

  (0, _createClass2["default"])(questionOneController, null, [{
    key: "inputValidation",
    value: function inputValidation(request, response) {
      var _request$body = request.body,
          data = _request$body.data,
          rules = _request$body.rules;
      var dataObjectProvided = Object.keys(data);
      var DataMissing = rules.filter(function (rule) {
        return dataObjectProvided.every(function (elem) {
          return elem !== rule;
        });
      });

      if (DataMissing.length === 0) {
        return response.status(200).json({
          status: 200,
          message: "Valid"
        });
      }

      return response.status(400).json({
        status: 400,
        missingInputItems: DataMissing
      });
    }
  }]);
  return questionOneController;
}();

exports["default"] = questionOneController;