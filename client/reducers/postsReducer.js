import * as types from '../constants/actionTypes';

const initialState = {
  title: 'Noise Disturbance',
  location: 'Codesmith HQ',
  details: 'Reports of excessive hollering and clapping noise',
  time: '6:30pm',
  imgUrl: 'https://static.frontendmasters.com/assets/teachers/sentance/thumb@2x.jpg',
  videoUrl: 'https://www.youtube.com/embed/sqAwvpw_FKc',
  expandedPost: false,
  
};

const postsReducer = (state=initialState, action) => {

  switch (action.type){
    case types.SET_EXPANDED_POST:
      return {
        ...state,
        expandedPost: action.payload
      };

    case types.CHANGE_ACTIVE_POST:
      console.log("incident", action.allIncidents)
      for (const incident of action.allIncidents){
        if (incident.location[0] === action.payload[0] && incident.location[1] === action.payload[1]){
          console.log('found incident', incident);
          return {
            ...state,
            ...incident
          };
        }
        else{
          return {
            ...state,
          };
        }
      }
      

    default:
      return state;
  }

  
}


export default postsReducer;