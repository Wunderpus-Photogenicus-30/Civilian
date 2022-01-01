import * as types from '../constants/actionTypes';

const initialState = {
  title: 'Noise Disturbance',
  location: 'Codesmith HQ',
  details: 'Reports of excessive hollering and clapping noise',
  time: '24/7',
  imgUrl: 'https://static.frontendmasters.com/assets/teachers/sentance/thumb@2x.jpg',
  videoUrl: 'https://www.youtube.com/watch?v=sqAwvpw_FKc',
  expandedPost: 'hidden'
};

const postsReducer = (state=initialState, action) => {

  switch (action.type){
    case types.SET_EXPANDED_POST:
      return {
        ...state,
        expandedPost: action.payload
      };

    default:
      return state;
  }
}


export default postsReducer;