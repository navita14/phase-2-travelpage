import React, {useState,useCallback} from "react"
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import APIkey from "../env";

export default function Map(){

        const containerStyle = {
            width: '1500px',
            height: '1000px'
          };
          
          const center = {
            lat: -3.745,
            lng: -38.523
          };

        const { isLoaded } = useJsApiLoader({
            id: 'google-map-script',
            googleMapsApiKey: APIkey
          }) 

          const [map, setMap] = useState(null)

  const onLoad = useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    // map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <div className="maps-container">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={2}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </div>
  ) : <></>
}


 
