"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var questionTwoController = /*#__PURE__*/function () {
  function questionTwoController() {
    (0, _classCallCheck2["default"])(this, questionTwoController);
  }

  (0, _createClass2["default"])(questionTwoController, null, [{
    key: "removeItem",
    value: function removeItem(request, response) {
      var _request$body = request.body,
          data = _request$body.data,
          item = _request$body.item;
      var dataObjectProvided = Object.keys(data).length;
      delete data[item];
      return Object.keys(data).length === dataObjectProvided ? response.status(404).json({
        status: 404,
        message: "attribute not found"
      }) : response.status(200).json({
        status: 200,
        output: data
      });
    }
  }]);
  return questionTwoController;
}();

exports["default"] = questionTwoController;