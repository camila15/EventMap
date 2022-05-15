import React from 'react';
import { Marker, Popup } from 'react-leaflet';

const Markers = ({places}) => {
  const markers = places.map(place => (
    <Marker position={place.geometry}>
    <Popup>
        <h1>{place.name}</h1>
        <p>{place.description}</p>
        <img src={place.image} alt={place.name} className="img-fluid"></img>
        <p><b>{place.date}</b></p>
    </Popup>
  </Marker>
  ))
  return (markers);
}

export default Markers