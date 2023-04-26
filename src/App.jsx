import React,{useState} from 'react'
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './App.css'
function App() {

const markers=[
  {
    id: 0,
    geocode: [48.86, 2.3522],
    popUp: "hello, i am ahsan"
  },
  { 
    id: 1,
    geocode: [48.85, 2.3522],
    popUp: "hello, i am ahsan 123"
  },
  {
    id: 2,
    geocode: [48.855, 2.34],
    popUp: "hello, i am ahsan 786"
  }
]
  return (
    <>
       <div>
      <MapContainer  center={[48.8556, 2.3522]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
 {
  markers.map((market,key) =>
    {return ( <Marker position={market.geocode} key={key}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>)}
  )
 }
</MapContainer>
</div>
</>
  )
}
export default App
