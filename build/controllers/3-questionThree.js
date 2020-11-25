"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var questionThreeController = /*#__PURE__*/function () {
  function questionThreeController() {
    (0, _classCallCheck2["default"])(this, questionThreeController);
  }

  (0, _createClass2["default"])(questionThreeController, null, [{
    key: "lowestIndex",
    value: function lowestIndex(request, response) {
      var _request$body = request.body,
          magic = _request$body.magic,
          distance = _request$body.distance;

      if (toString.call(magic) !== "[object Array]" || toString.call(distance) !== "[object Array]") {
        response.send("This function takes in only arrays");
      } // eslint-disable-next-line no-restricted-globals
      // if (!magic.some(isNaN) || !distance.some(isNaN)) {
      //   response.send("Correct! All Numbers");
      // } else {
      //   response.send("Only numbers are allowed in the array");
      // }


      var lowestIndex = magic[0];
      var both = magic.reduce(function (acc, elem, i) {
        var figure = acc + elem - distance[i];
        if (figure < lowestIndex) lowestIndex = i;
        return figure;
      }, 0);
      return both < 0 ? response.status(400).json({
        status: 400,
        message: -1
      }) : response.status(200).json({
        status: 200,
        message: lowestIndex
      });
    }
  }]);
  return questionThreeController;
}();

exports["default"] = questionThreeController;