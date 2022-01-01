import * as types from '../constants/actionTypes';
//useEffect
const initialState = {
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    lng: 40.9,
    lat: 74.35,
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