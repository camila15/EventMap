import React from 'react';
import { Marker, Popup, Tooltip } from 'react-leaflet';

const Markers = ({places}) => {
  const markers = places.map(place => (
    <Marker position={place.geometry}>
    <Popup>
        <h1>{place.name}</h1>
        <p>{place.description}</p>
        <img src={place.image} alt={place.name} className="img-fluid align-items-center"></img>
        <p><b>{place.date}</b></p>
    </Popup>
    <Tooltip>{place.name}</Tooltip>
  </Marker>
  ))
  return (markers);
}

export default Markers