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
