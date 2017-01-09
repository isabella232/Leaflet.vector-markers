'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (Leaflet) {
  var IconClass = (0, _Icon2.default)(Leaflet);
  return {
    version: '0.0.6-looker',
    Icon: IconClass,
    icon: function icon(options) {
      return new IconClass(options);
    }
  };
};

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }