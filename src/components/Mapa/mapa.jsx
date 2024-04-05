import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import "leaflet-defaulticon-compatibility";

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import style from './Mapa.module.css'

export const Mapa = () => {
    return (
        <MapContainer center={[-25.424961470967066, -49.27229941062326]} zoom={30} scrollWheelZoom={true} className={style.map}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[-25.424961470967066, -49.27229941062326]}>
                <Popup>
                    Senai Celso Charuri
                </Popup>    
            </Marker>
        </MapContainer>
    )
}

