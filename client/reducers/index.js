import { combineReducers } from 'redux';
import mapReducer from './mapReducer';
import postsReducer from './postsReducer';

export default combineReducers({
  posts: postsReducer,
  map: mapReducer
});
