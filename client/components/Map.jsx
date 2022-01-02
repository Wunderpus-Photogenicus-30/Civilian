import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import { bindActionCreators } from 'redux';


// mapboxgl.accessToken = "pk.eyJ1IjoiY2hsb2VsdTI5IiwiYSI6ImNreHZld3N0aTZ4czIydHFoeG1lbXptOGYifQ.vZ7brhHmInbKGS3AtbdMCQ"
console.log('in Map.jsx')
//destructuring the state to get lng, lat, zoom from redux state and put them into prop obj 

const mapStateToProps = ({map: {viewport}}) => ({
    viewport,
  })

// allows us to use the actions in actions.js without having to wrap them so that we can invoke those functions
// directly even though they were not created in this page
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const Map = (props) => {

    // console.log(props)
    // console.log(process.env.REACT_APP_MAPBOX_ACCESS_TOKEN)

    //mocking data to randomly display pins on map
    const mockData = []
    for(let i = 0; i < 10; i++){
        const lat = .02 - Math.random() * 0.04
        const lng = .02 - Math.random() * 0.04
        mockData.push({latitude: 40.71 + lat, longitude: -74 + lng})

    }

    

    return (
        <div>
            <ReactMapGL mapboxApiAccessToken = {process.env.REACT_APP_MAPBOX_ACCESS_TOKEN} mapStyle='mapbox://styles/chloelu29/ckxwc6fdl24xz14phmw34jij0' height='800px' width='1000px' {...props.viewport} onViewportChange={(newViewport) => {
                // console.log(props.viewport)
                props.setMap(newViewport)
            }}>
                {mockData.map((el, key) => {
                    return (
                    <Marker key={key + 1} latitude={el.latitude} longitude={el.longitude}>
                    {/* button onclick post pops up */}
                        <button onClick={(e) => {
                            console.log(e)



                        }}style={{backgroundColor: 'transparent'}}><img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCkP7QFhZEIqrhTgIxZIJKmW0zBB50L1Fc6xVI4T7U8cNaNHxEOjxu3Wl578bNT6DHmsY&usqp=CAU'} alt='pin' style={{backgroundColor: 'transparent', height: '50px', width: '50px'}}/></button>
                    </Marker>
                    )
                }
                )}
                <Marker key={0} latitude={40.7128} longitude={-74}>
                    <button>original</button>
                </Marker>
            </ReactMapGL>
        </div>
        );
}
export default connect(mapStateToProps, mapDispatchToProps)(Map);