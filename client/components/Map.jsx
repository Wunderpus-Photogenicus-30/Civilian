import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import { bindActionCreators } from 'redux';
import CustomMapController from './CustomMapController';

console.log('in Map.jsx')
//destructuring the state to get lng, lat, zoom from redux state and put them into prop obj 

const mapStateToProps = ({map: {viewport, pinLocations}}) => ({
  viewport,
  pinLocations
})

// allows us to use the actions in actions.js without having to wrap them so that we can invoke those functions
// directly even though they were not created in this page
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const mapController = new CustomMapController();

const Map = (props) => {
  //console.log(props.pinLocations)

  return (
    
    <ReactMapGL mapboxApiAccessToken = {
      process.env.REACT_APP_MAPBOX_ACCESS_TOKEN} 
      
      // on dbl click => get coordinates, open incident modal, create a pin and send off to reducer 
      onDblClick={({ lngLat: [longitude, latitude] }) => {console.log(longitude, latitude); props.onOpenIncidentFormClick()}}
      mapStyle='mapbox://styles/chloelu29/ckxwc6fdl24xz14phmw34jij0' 
      doubleClickZoom={false}
      attributionControl={false}
      
      {...props.viewport} 
      
      onViewportChange={(newViewport) => {props.setMap(newViewport)}
    }>
        {props.pinLocations.map((el, key) => {
          return (
            
          <Marker key={key + 1} latitude={el.latitude} longitude={el.longitude}>
          {/* button onclick post pops up */}
            <button onClick={(e) => {props.changeActivePost(el.latitude, el.longitude)}} style={{backgroundColor: 'transparent'}}>
              <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCkP7QFhZEIqrhTgIxZIJKmW0zBB50L1Fc6xVI4T7U8cNaNHxEOjxu3Wl578bNT6DHmsY&usqp=CAU'} alt='pin' style={{backgroundColor: 'transparent', height: '50px', width: '50px'}}/>
            </button>
          </Marker>
          )
        }
        )}
        <Marker key={0} latitude={40.7128} longitude={-74}>
            <button>original</button>
        </Marker>
    </ReactMapGL>

  );
}
export default connect(mapStateToProps, mapDispatchToProps)(Map);