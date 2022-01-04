import axios from 'axios';
import * as types from '../constants/actionTypes';

// have all the functions that trigger the reducers here

export const setMap = (newViewport) => ({
  type: types.SET_MAP,
  payload: newViewport,
})

export const setExpandedPost = (visibility) => ({

  type: types.SET_EXPANDED_POST,
  payload: visibility,

});

export const getUsername = (username, password) => (dispatch) => {

  console.log('in getusername axios req');
  axios.post(`/login`, {
      username: user,
      password: password
    })
    .then(({data}) => {
      console.log('data', data);
      dispatch({
        type: types.GET_USERNAME,
        payload: data,
      });
    })
    .catch(console.error);
};


export const changeActivePost = (incident_id) => (dispatch, getState) =>{
  
  const allIncidents = getState().map.allIncidents;
  dispatch({ type: types.CHANGE_ACTIVE_POST, payload: incident_id, allIncidents: allIncidents });
  
};

export const getCoordinates = () => (dispatch) => {
  axios.get(`api/incidents/`)
  .then(({data}) => {
      // console.log('data', data);
      const addresses = [];

      for(let incident of data){
          addresses.push({address: incident.street_name, id: incident.incident_id})
      }
      //convert queryString to the correct format
      const coordinates = [];
      for(let location of addresses){
        const query = location.address.replace(' ', '%20');
        axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?access_token=pk.eyJ1IjoiY2hsb2VsdTI5IiwiYSI6ImNreHZld3N0aTZ4czIydHFoeG1lbXptOGYifQ.vZ7brhHmInbKGS3AtbdMCQ`)
          .then(({data}) => {
              // console.log('location data', data)
              // console.log(data.features[0].center[1])
              // console.log(data.features[0].place_name)
              coordinates.push(
                  {"latitude": data.features[0].center[1], "longitude": data.features[0].center[0], "address": data.features[0].place_name, "id" : location.id}
                  )
              // console.log('coordinates', coordinates)
          })
        
      }
      
      dispatch({type: types.GET_COORDINATES, payload: coordinates})
    })
}

// //convert coordinates to address action 
// export const getAddress = () => (dispatch) => {
//   //convert coordinates to address 
//   axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/-73.989,40.733.json?access_token=pk.eyJ1IjoiY2hsb2VsdTI5IiwiYSI6ImNreHZld3N0aTZ4czIydHFoeG1lbXptOGYifQ.vZ7brhHmInbKGS3AtbdMCQ`)
//   .then(({data}) => {
//     let address = data.features[0].place_name
//   })

//   //send post request to database
//   axios.post(`api/postevent`)
 
// }



