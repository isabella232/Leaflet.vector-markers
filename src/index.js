import VectorMarkers from './VectorMarkers'

function extendLeaflet(Leaflet) {
  Leaflet.VectorMarkers = VectorMarkers(Leaflet);
  return Leaflet.VectorMarkers;
}

// If window.L is defined, presume it is Leaflet and extend it.0:w
// Otherwise export a factory function (of suppled Leaflet) to be extended later.

if (window.L) {
  extendLeaflet(window.L);
}

export default extendLeaflet;
