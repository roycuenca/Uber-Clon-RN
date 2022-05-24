import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MapView, { Marker } from 'react-native-maps';
import tw from 'twrnc';
import { selectDestination, selectOrigin, setTravelTimeInformation } from '../../redux/slices/navSlice';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_MAPS_KEY } from '@env';

const Map = () => {
  const distatch = useDispatch();
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const mapRef = useRef(null);

  useEffect(() => {
    if (!origin || !destination) return;

    // Zoom & fit to makers
    mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
      edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
    });
  }, [origin, destination]);

  useEffect(() => {
    if (!origin || !destination) return;

    const getTravelTime = async () => {
      fetch(
        `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin.description}&destinations=${destination.description}&key=${GOOGLE_MAPS_KEY}`
      )
        .then((res) => res.json())
        .then((data) => {
          distatch(setTravelTimeInformation(data.rows[0].elements[0]));
        })
        .catch((error) => console.log(error));
    };

    getTravelTime();
  }, [origin, destination, GOOGLE_MAPS_KEY]);

  const requireMapViewDirections = origin && destination && (
    <MapViewDirections
      origin={origin?.description}
      destination={destination?.description}
      apikey={GOOGLE_MAPS_KEY}
      strokeWidth={3}
    />
  );

  const requireOriginMarker = origin?.location && (
    <Marker
      coordinate={{
        latitude: origin?.location?.lat,
        longitude: origin?.location?.lng,
      }}
      title='Origin'
      description={origin?.description}
      identifier='origin'
    />
  );

  const requireDestinationMarker = destination?.location && (
    <Marker
      coordinate={{
        latitude: destination?.location?.lat,
        longitude: destination?.location?.lng,
      }}
      title='Destination'
      description={destination?.description}
      identifier='destination'
    />
  );

  return (
    <MapView
      ref={mapRef}
      style={tw`flex-1`}
      mapType='mutedStandard'
      initialRegion={{
        latitude: origin?.location?.lat,
        longitude: origin?.location?.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}>
      {requireMapViewDirections}
      {requireOriginMarker}
      {requireDestinationMarker}
    </MapView>
  );
};

export default Map;
