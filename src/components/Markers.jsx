import React from 'react';
import { Marker, Popup } from 'react-leaflet';

const Markers = ({data}) => {

  return (
    <Marker position={[6.210633381958949, -75.57748859785474]}>
          <Popup>
            El Polipuerto
          </Popup>
        </Marker>
  )
}

export default Markers