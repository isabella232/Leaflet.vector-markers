'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _VectorMarkers = require('./VectorMarkers');

var _VectorMarkers2 = _interopRequireDefault(_VectorMarkers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function extendLeaflet(Leaflet) {
  Leaflet.VectorMarkers = (0, _VectorMarkers2.default)(Leaflet);
  return Leaflet.VectorMarkers;
}

// If window.L is defined, presume it is Leaflet and extend it.0:w
// Otherwise export a factory function (of suppled Leaflet) to be extended later.

if (window.L) {
  extendLeaflet(window.L);
}

exports.default = extendLeaflet;