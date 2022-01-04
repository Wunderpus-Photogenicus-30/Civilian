import * as types from '../constants/actionTypes';
import axios from 'axios';
import { defaultMaxListeners } from 'events';
//useEffect

// const mockData = [
//   {
//       "latitude": 40.71969193804207,
//       "longitude": -74.0178241789764
//   },
//   {
//       "latitude": 40.699710281152406,
//       "longitude": -74.0136419815668
//   },
//   {
//       "latitude": 40.709596459493,
//       "longitude": -74.01122616086177
//   },
//   {
//       "latitude": 40.71967117772734,
//       "longitude": -73.98552650285161
//   },
//   {
//       "latitude": 40.71844379826087,
//       "longitude": -73.99028368554048
//   },
//   {
//       "latitude": 40.69511441783267,
//       "longitude": -73.9864920697938
//   },
//   {
//       "latitude": 40.71437931259741,
//       "longitude": -73.9970015056195
//   },
//   {
//       "latitude": 40.72721470298444,
//       "longitude": -73.99053028223052
//   },
//   {
//       "latitude": 40.700742469252425,
//       "longitude": -73.98173913455527
//   },
//   {
//       "latitude": 40.70169141759729,
//       "longitude": -74.00083169570887
//   }
// ];

//grab address data from database




// .catch(console.error)

// const allIncidents = [
//   {
//     title: 'newtitle',
//     location: [40.69511441783267, -73.9864920697938],
//     details: 'newdetails',
//     time: 'newtime',
//     imgUrl: ''
//   }
// ];
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
    width: '100%',
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