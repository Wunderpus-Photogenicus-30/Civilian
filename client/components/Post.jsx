import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import { bindActionCreators } from 'redux';

console.log('in Post.jsx');

// we are destructuring the state to get the title, loc, details, time from
// the redux state and placing them into the props object
// The Post component "subscribes to" the changes seen in the state
const mapStateToProps = ({posts: { title, location, details, time, imgUrl }}) => ({
  title,
  location,
  details,
  time,
  imgUrl
})

// allows us to use the actions in actions.js without having to wrap them so that we can invoke those functions
// directly even though they were not created in this page
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const Post = (props) => {
  console.log(props);
  return (
    <div className='post'>
      <div className='post-header'>
        <p className='post-title'> {props.title} </p>
        <p className='post-location'> {props.location} </p>
        <p className='post-details'> {props.details} </p>
        <p className='post-time'> {props.time} </p>
      </div> 
      <div className='post-image'>
        <img src={props.imgUrl} alt="willsentance" onClick={() => props.setExpandedPost(true)}/>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);