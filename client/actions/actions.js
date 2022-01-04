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


export const postEvent = (title, street_name, details, image_url, video_url) => (dispatch) =>{

  console.log('in postEvent axios req');
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
        payload: data,
      });
    })
    .catch(console.error);
};


export const changeActivePost = (lat, long) => (dispatch, getState) =>{

  console.log(lat, long);
  const allIncidents = getState().map.allIncidents;
  dispatch({ type: types.CHANGE_ACTIVE_POST, payload: [lat, long], allIncidents: allIncidents });

};