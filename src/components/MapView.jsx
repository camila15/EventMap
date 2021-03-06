import React, { useState } from 'react'
import { LayersControl, MapContainer, Marker, Popup, TileLayer, Tooltip, useMapEvents } from 'react-leaflet'
import places from '../assets/js/data.js'
import Markers from './Markers'

const MapView = () => {


  function LocationMarker() {
    const [position, setPosition] = useState(null)
    const map = useMapEvents({
      click() {
        map.locate()
      },
      locationfound(e) {
        setPosition(e.latlng)
        map.flyTo(e.latlng, map.getZoom())
      },
    })

    return position === null ? null : (
      <Marker position={position}>
        <Popup>Tú estás aquí</Popup>
      </Marker>
    )
  }

  return (
    <div className='map'>
      <MapContainer center={[6.223043940312917, -75.57495402006079]} zoom={15} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LayersControl>
          {
            places.map(place => (
              <LayersControl.Overlay checked name={place.name} key={place.name}>
                <Marker position={place.geometry} >
                  <Popup>
                    {
                      place.image  ? <img src={place.image} alt={place.name} className="img-fluid align-items-center"></img> : <></>                   
                      }
                    <h1>{place.name}</h1>
                    {place.description ? <p>{place.description}</p> : null
                    }
                    {
                      place.description2 ? <p>{place.description2}</p> : null
                    }
                    <p><b>{place.date}</b></p>
                  </Popup>
                  <Tooltip>{place.name}</Tooltip>
                </Marker>
              </LayersControl.Overlay>
            ))
          }
        </LayersControl>
      </MapContainer>
    </div>
  )
}

export default MapView