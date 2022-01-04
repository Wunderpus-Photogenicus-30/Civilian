import { combineReducers } from 'redux';
import mapReducer from './mapReducer';
import postsReducer from './postsReducer';
import userReducer from './userReducer';

export default combineReducers({
  posts: postsReducer,
  map: mapReducer,
  user: userReducer
});
