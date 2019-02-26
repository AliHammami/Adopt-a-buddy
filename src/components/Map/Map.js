import React from 'react';
import MapWithGeocode from '../Map/MapWithGeocode';

class Map extends React.Component {
  render() {
    const location = this.props.location;

    return (
      <MapWithGeocode
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBZWkDSBZ0Aw1ZLMbuNa51n3TV82qL3oSQ&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '400px' }} />}
        mapElement={<div style={{ height: '100%' }} />}
        location={location}
      />
    );
  }
}

export default Map;
