import Icon from './Icon'

export default function(Leaflet) {
  const IconClass = Icon(Leaflet);
  return {
    version: '0.0.6-looker',
    Icon: IconClass,
    icon: function(options) {
      return new IconClass(options)
    }
  };
}
