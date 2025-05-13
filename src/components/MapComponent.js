import {GoogleMap, useJsApiLoader} from '@react-google-maps/api';
import React from 'react';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 37.7749,
  lng: -122.4194,
};

const darkMapStyle = [
  {elementType: 'geometry', stylers: [{color: '#212121'}]},
  {elementType: 'labels.icon', stylers: [{visibility: 'off'}]},
  {elementType: 'labels.text.fill', stylers: [{color: '#757575'}]},
  {elementType: 'labels.text.stroke', stylers: [{color: '#212121'}]},
  {
    featureType: 'administrative',
    elementType: 'geometry',
    stylers: [{color: '#757575'}],
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [{color: '#2c2c2c'}],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{color: '#383838'}],
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [{color: '#2f2f2f'}],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{color: '#000000'}],
  },
];

const MapComponent = () => {
  const {isLoaded} = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyCmFUNpUaU8BdgqLAq0_EKXfroXHh_mMD8',
  });

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={12}
      options={{
        styles: darkMapStyle,
        disableDefaultUI: true,
      }}
    />
  ) : (
    <div>Loading...</div>
  );
};

export default MapComponent;
