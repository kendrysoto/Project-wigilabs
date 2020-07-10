import React, { useState } from 'react';
import { 
    GoogleMap,
    withScriptjs,
    withGoogleMap,

} from 'react-google-maps';



const Map = (props) => {

    //props.coordinate
    //10.395131, -75.482779

    // 6.2518401 -75.563591
    

    return (
        <>
        {console.log("#####")}
        {console.log(props)}
        {console.log("++++")}
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