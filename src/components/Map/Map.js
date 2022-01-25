import React from "react";
import { useContext } from "react";
import { AppContext } from '../App/App';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './mapStyles.css';

function Map() {
    const {
        state: {
        weatherInfo, 
        isLoading, 
        requestErrorWasFound 
    }} = useContext(AppContext);

    return(
        weatherInfo && !isLoading && !requestErrorWasFound ?

            <div className="row map-row-styles">
                <div className="col map-container-styles">
                    <MapContainer 
                    className="map-styles" 
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
                        draggable={true} 
                        position={{
                            lat: weatherInfo.location.lat, 
                            lng: weatherInfo.location.lon
                        }}>
                            <Popup className="pop-up-styles">
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