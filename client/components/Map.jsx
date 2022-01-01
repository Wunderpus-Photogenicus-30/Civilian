import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import ReactMapGL from 'react-map-gl';
// import mapboxgl from '!mapbox-gl';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import { bindActionCreators } from 'redux';


// mapboxgl.accessToken = "pk.eyJ1IjoiY2hsb2VsdTI5IiwiYSI6ImNreHZld3N0aTZ4czIydHFoeG1lbXptOGYifQ.vZ7brhHmInbKGS3AtbdMCQ"
console.log('in Map.jsx')
//destructuring the state to get lng, lat, zoom from redux state and put them into prop obj 

const mapStateToProps = ({map: { container, style, lng, lat, zoom }}) => ({
    container,
    style,
    lng,
    lat,
    zoom
  })

// allows us to use the actions in actions.js without having to wrap them so that we can invoke those functions
// directly even though they were not created in this page
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const Map = (props) => {

    console.log(props)
    console.log(process.env.REACT_APP_MAPBOX_ACCESS_TOKEN)
        // if (map.current) return; // initialize map only once
        // map.current = new mapboxgl.Map({
        // container: mapContainer.current,
        // style: 'mapbox://styles/mapbox/streets-v11',
        // center: [lng, lat],
        // zoom: zoom
        // });
        

    return (
        <div>
            <ReactMapGL mapboxApiAccessToken = {process.env.REACT_APP_MAPBOX_ACCESS_TOKEN} style={{height:'100vh', width:'100vw'}} longitude={props.lng} latitude={props.lat} zoom = {props.zoom}/>
        </div>
        );
}
export default connect(mapStateToProps, mapDispatchToProps)(Map);