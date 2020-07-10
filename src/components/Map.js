import React, { useState } from 'react';
import { 
    GoogleMap,
    withScriptjs,
    withGoogleMap,

} from 'react-google-maps';


const Map = (props) => {
    return (
        <>
           <GoogleMap
           defaultZoom={10} 
           defaultCenter={{lat: props.lat, lng: props.lng}}
           /> 
        </>

    );
};


export default withScriptjs(
    withGoogleMap(Map)
)