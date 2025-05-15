import {useFilterContext} from '../contexts/filterContext';
import {PropertyData} from '../utils/commonFunctions';

import {
  GoogleMap,
  Marker,
  OverlayView,
  useJsApiLoader,
} from '@react-google-maps/api';
import React, {useEffect, useState} from 'react';

const containerStyle = {
  width: '100%',
  height: '700px',
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

const center = {
  lat: 39.8283,
  lng: -98.5795, // Geographic center of the US
};

const hotelIcon = 'https://cdn-icons-png.flaticon.com/512/235/235889.png';

// const hotelLocations = [
//   {
//     id: 1,
//     name: 'Hotel NYC',
//     lat: 40.7128,
//     lng: -74.006,
//     summary: 'Luxury hotel in New York City.',
//   },
//   {
//     id: 2,
//     name: 'Hotel LA',
//     lat: 34.0522,
//     lng: -118.2437,
//     summary: 'Modern hotel in Los Angeles.',
//   },
//   {
//     id: 3,
//     name: 'Hotel Chicago',
//     lat: 41.8781,
//     lng: -87.6298,
//     summary: 'Comfortable hotel in Chicago.',
//   },
//   {
//     id: 4,
//     name: 'Hotel Miami',
//     lat: 25.7617,
//     lng: -80.1918,
//     summary: 'Beachfront hotel in Miami.',
//   },
//   {
//     id: 5,
//     name: 'Hotel Seattle',
//     lat: 47.6062,
//     lng: -122.3321,
//     summary: 'Downtown hotel in Seattle.',
//   },
// ];

const MapComponent = ({properties}) => {
  const {isLoaded} = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyCmFUNpUaU8BdgqLAq0_EKXfroXHh_mMD8',
  });
  const [hoveredHotelId, setHoveredHotelId] = useState();
  const [zoom, setZoom] = useState(4);
  const [mapCenter, setMapCenter] = useState(center);
  const {filters} = useFilterContext();
  const getPixelPositionOffset = () => ({
    x: 0,
    y: -40, // lift it above the marker
  });

  useEffect(() => {
    console.log('this is the hotel filter', filters);
    if (filters.hotel) {
      setZoom(6);
      const property = PropertyData.find(
        (property) => property.name === filters.hotel
      );
      setMapCenter({
        lat: +property?.coordinates?.split(',')?.[0] || center.lat,
        lng: +property?.coordinates?.split(',')?.[1] || center.lng,
      }); // NYC
      setTimeout(() => {
        setZoom(14);
      }, 1000);
    }
  }, [filters]);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={mapCenter}
      zoom={zoom}
      options={{
        styles: darkMapStyle,
        disableDefaultUI: true,
      }}
    >
      {properties.map((hotel) => (
        <React.Fragment key={hotel.id}>
          <Marker
            position={{
              lat: +hotel.coordinates.split(',')[0],
              lng: +hotel.coordinates.split(',')[1],
            }}
            icon={{
              url: hotelIcon,
              scaledSize: new window.google.maps.Size(40, 40),
            }}
            onMouseOver={() => setHoveredHotelId(hotel.id)}
            onMouseOut={() => setHoveredHotelId(null)}
          />

          {hoveredHotelId === hotel.id && (
            <OverlayView
              position={{
                lat: +hotel.coordinates.split(',')[0],
                lng: +hotel.coordinates.split(',')[1],
              }}
              mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
              getPixelPositionOffset={getPixelPositionOffset}
            >
              <div
                style={{
                  background: '#fff',
                  padding: '10px',
                  borderRadius: '8px',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
                  display: 'flex',
                  flexDirection: 'column',
                  width: '300px',
                  color: '#333',
                }}
              >
                {/* Image Section */}
                <div
                  style={{
                    width: '100%',
                    height: '180px',
                    overflow: 'hidden',
                    borderRadius: '6px',
                    marginBottom: '8px',
                  }}
                >
                  <img
                    src={hotel.imageUrl}
                    alt="hotel"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                </div>

                {/* Text Section */}
                <strong style={{fontSize: '16px', marginBottom: '4px'}}>
                  {hotel.name}
                </strong>
                <p style={{margin: 0, fontSize: '14px'}}>
                  {hotel.feedbackSummary}
                </p>
                <strong
                  style={{marginTop: '6px', fontSize: '13px', fontWeight: 500}}
                >
                  Ratings : {hotel.feedbackRating}
                </strong>
              </div>
            </OverlayView>
          )}
        </React.Fragment>
      ))}
    </GoogleMap>
  ) : (
    <div>Loading...</div>
  );
};

export default MapComponent;
