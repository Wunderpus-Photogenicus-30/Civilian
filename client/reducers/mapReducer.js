import * as types from '../constants/actionTypes';
import axios from 'axios';
import { defaultMaxListeners } from 'events';


const allIncidents = [];
axios.get(`api/incidents`)
.then(({data}) => {
    console.log('data', data);
    for(let incident of data){
        allIncidents.push(incident)
    }
})
.catch(console.error);
console.log('allIncidents', allIncidents)


const initialState = {
  viewport: {
    latitude: 40.7128,
    longitude: -74.0060,
    zoom: 12,
    width: '100%', // TODO: remove height and width 
    height: '100%'
  },
  pinLocations: [],
  allIncidents: allIncidents
}

const mapReducer = (state = initialState, action) => {
    // console.log(state)
  switch (action.type){
    case types.SET_MAP:
        const newState = Object.assign(state, action.payload)
    return {
        ...state,
        viewport: {
            ...newState
        }
    };
    case types.GET_COORDINATES: 
        
        return {
            ...state,
            pinLocations: action.payload
        }
    default:
    return state;

    }
}
export default mapReducer;