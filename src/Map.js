import React from 'react'
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";


const Map = ({ coordinates }) => {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_API_KEY,

    });

    return (

        <div>

            <div>
                {!isLoaded ? (
                    <h1>Loading...</h1>
                ) : (
                    <GoogleMap {...coordinates}
                        zoom={8}
                        center={{ lat: parseFloat(coordinates.lat), lng: parseFloat(coordinates.lng) }}
                        mapContainerClassName="map-container">

                        {/* {<MarkerF position={{ lat: parseFloat(coordinates.lat), lng: parseFloat(coordinates.lng) }} />} */}

                    </GoogleMap>
                )}
            </div>
        </div>

    );
}

// IMPORTANT : Pensez a exporter le composant!
export default Map