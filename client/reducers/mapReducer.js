import * as types from '../constants/actionTypes';
//useEffect

const mockData = []
for(let i = 0; i < 10; i++){
    const lat = .02 - Math.random() * 0.04
    const lng = .02 - Math.random() * 0.04
    mockData.push({latitude: 40.71 + lat, longitude: -74 + lng})
}

const initialState = {
  viewport: {
    latitude: 40.7128,
    longitude: -74.0060,
    zoom: 12
  },
  pinLocations: mockData
  
}

const mapReducer = (state = initialState, action) => {
    switch (action.type){
        case types.SET_MAP:
            const newState = Object.assign(state, action.payload)
          return {
            ...state,
            viewport: {
                ...newState
            }
          };
    
        default:
          return state;
      }
}
export default mapReducer;