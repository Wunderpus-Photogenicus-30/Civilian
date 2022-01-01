import * as types from '../constants/actionTypes';

const initialState = {
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    lng: -70.9,
    lat: 42.35,
    zoom: 9
}

const mapReducer = (state = initialState, action) => {
    switch (action.type){
        case types.SET_EXPANDED_POST:
          return {
            ...state,
            expandedPost: action.payload
          };
    
        default:
          return state;
      }
}
export default mapReducer;