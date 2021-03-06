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

export const getUsername = (name, password) => (dispatch) => {

  console.log('username password', name, password)
  console.log('in getusername axios req');
  axios.post('/api/incidents/user', {
      name: name,
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

export const signUp = (username, password) => (dispatch) => {

  console.log('in signUpAndGetUsername axios req');
  axios.post(`/api/signup`, {
      name: username,
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


export const postEvent = (title, details, image_url, video_url) => (dispatch, getState) =>{

  console.log('in postEvent axios req');
  const lngLat = getState().user.lngLat;
  console.log('lnglat in postevent', lngLat);

  const [lng, lat] = lngLat;
  axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}`)
  .then(({data}) => {
    let street_name = data.features[0].place_name
    axios.post(`/api/postevent`, {
      title: title,
      street_name: street_name,
      video_url: video_url,
      image_url: image_url,
      details: details
    })
    .then(({data}) => {
      console.log('data', data);
      dispatch({
        type: types.POST_EVENT,
        payload: data
        // payload: [data, {
        //   "latitude": lat, 
        //   "longitude": lng, 
        //   "address": street_name, 
        // },
      });
      console.log('got here')
      //getCoordinates();
    })
    .catch(console.error);
  })
  .catch(console.error);
  
};


export const changeActivePost = (incident_id) => (dispatch, getState) =>{
  
  const allIncidents = getState().map.allIncidents;
  dispatch({ type: types.CHANGE_ACTIVE_POST, payload: incident_id, allIncidents: allIncidents });
  
};

export const getCoordinates = () => (dispatch) => {
  console.log('in getCoordinates')
  axios.get(`api/incidents/`)
  .then(({data}) => {
      // console.log('data', data);
      const addresses = [];

      for(let incident of data){
        addresses.push({address: incident.street_name, id: incident.incident_id})
      }
      //convert queryString to the correct format
      const promises = [];
      const coordinates = [];
      for(let location of addresses){
        const query = location.address.replace(' ', '%20');
        coordinates.push({id: location.id});
        promises.push(axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?access_token=${process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}`))
      }
      Promise.all(promises)
      .then(responses => {
        //console.log(responses)

        for (const index in responses){
          //console.log('resp', index,coordinates[index])
          Object.assign(coordinates[index], (
            {"latitude": responses[index].data.features[0].center[1], 
            "longitude": responses[index].data.features[0].center[0], 
            "address": responses[index].data.features[0].place_name, 
            }
          ))
        }
        console.log('here', coordinates)
        dispatch({type: types.GET_COORDINATES, payload: coordinates});
      }); 
    })
    .catch(console.error);
}

export const saveUserCoords = (lngLat) => ({
  // console.log('in saveusercoords', lnglat);
  type: types.SAVE_USER_COORDS,
  payload: lngLat,
});

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



