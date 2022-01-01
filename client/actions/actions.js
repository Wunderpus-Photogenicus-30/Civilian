import axios from 'axios';
import * as types from '../constants/actionTypes';

// have all the functions that trigger the reducers here

export const setMap = (visibility) => ({

    type: types.SET_MAP,
    payload: visibility,
})