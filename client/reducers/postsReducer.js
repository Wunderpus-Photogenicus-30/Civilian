import * as types from '../constants/actionTypes';

const initialState = {
  title: 'Noise Disturbance',
  location: 'Codesmith HQ',
  details: 'Reports of excessive hollering and clapping noise',
  time: '6:30pm',
  imgUrl: 'https://static.frontendmasters.com/assets/teachers/sentance/thumb@2x.jpg',
  videoUrl: 'https://www.youtube.com/embed/sqAwvpw_FKc?&autoplay=1&rel=0&modestbranding=1&autohide=1&showinfo=0&controls=0',
  expandedPost: false
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