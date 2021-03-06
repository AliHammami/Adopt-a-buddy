import React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';

function MapComponent(props) {
  const coordinates = props.coordinates;
  return (
    <GoogleMap
      defaultCenter={coordinates}
      defaultZoom={13}
      center={coordinates}
    >
      <Marker
        position={coordinates}
      />
    </GoogleMap>
  );
}

function withGeocode(WrappedComponent) {
  return class extends React.Component {
    state = {
      coordinates: {
        lat: 0,
        lng: 0,
      },
    }

    componentWillMount() {
      this.geocodeLocation();
    }

    geocodeLocation() {
      const location = this.props.location;
      const geocoder = new window.google.maps.Geocoder();

      geocoder.geocode({ address: location }, (result, status) => {
        if (status === 'OK') {
          const geometry = result[0].geometry.location;
          const coordinates = { lat: geometry.lat(), lng: geometry.lng() };

          this.setState({
            coordinates,
          });
        }
      });
    }

    render() {
      return (
        <WrappedComponent {...this.state} />
      );
    }
  };
}

const MapWithGeocode = withScriptjs(withGoogleMap(withGeocode(MapComponent)));

export default MapWithGeocode;
