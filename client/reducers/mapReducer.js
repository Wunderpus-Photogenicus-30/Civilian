import * as types from '../constants/actionTypes';
//useEffect
const initialState = {
 viewport: {
    latitude: 40.7128,
    longitude: -74.0060,
    zoom: 12
}
}

const mapReducer = (state = initialState, action) => {
    switch (action.type){
        case types.SET_MAP:
            const newState = Object.assign(state, action.payload)
          return {
            viewport: {
                ...newState
            }
          };
    
        default:
          return state;
      }
}
export default mapReducer;