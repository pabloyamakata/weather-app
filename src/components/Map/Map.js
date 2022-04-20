import React from "react";
import { useContext } from "react";
import { AppContext } from '../App/App';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import styles from './Map.module.css';

function Map() {
    const {
        state: {
        weatherInfo, 
        isLoading, 
        requestErrorWasFound 
    }} = useContext(AppContext);

    return(
        weatherInfo && !isLoading && !requestErrorWasFound ?

            <div className={`row ${styles.mapRow}`}>
                <div className={`col ${styles.mapContainer}`}>
                    <MapContainer 
                    className={styles.map} 
                    center={{
                        lat: weatherInfo.location.lat, 
                        lng: weatherInfo.location.lon
                    }} 
                    zoom={9}>
                        <TileLayer 
                        attribution='&copy; 
                        <a href="https://www.openstreetmap.org/copyright">
                        OpenStreetMap</a> contributors' 
                        url="https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png" />
                        <Marker 
                        position={{
                            lat: weatherInfo.location.lat, 
                            lng: weatherInfo.location.lon
                        }}>
                            <Popup className={styles.popup}>
                                Hey there! <br /> You are in {weatherInfo.location.name}. 
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>

        : null
    )
}

export default Map;