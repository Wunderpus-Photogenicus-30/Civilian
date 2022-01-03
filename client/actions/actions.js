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


export const changeActivePost = (lat, long) => (dispatch, getState) =>{

  console.log(lat, long);
  const allIncidents = getState().map.allIncidents;
  dispatch({ type: types.CHANGE_ACTIVE_POST, payload: [lat, long], allIncidents: allIncidents });

};
