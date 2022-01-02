import axios from 'axios';
import * as types from '../constants/actionTypes';

// have all the functions that trigger the reducers here
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