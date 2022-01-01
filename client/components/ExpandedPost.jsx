import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import { bindActionCreators } from 'redux';

console.log('in ExpandedPost.jsx');

// we are destructuring the state to get the title, loc, details, time from
// the redux state and placing them into the props object
// The Post component "subscribes to" the changes seen in the state
const mapStateToProps = ({posts:{ title, location, details, time, videoUrl }}) => ({
  title,
  location,
  details,
  time,
  videoUrl
})

// allows us to use the actions in actions.js without having to wrap them so that we can invoke those functions
// directly even though they were not created in this page
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const ExpandedPost = (props) => {
  return (
    <div className='expanded-post'>
      <svg id='minimize-expanded' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-right" viewBox="0 0 16 16" onClick={() => props.setExpandedPost(false)}>
        <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
        <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
      </svg>
      <div id='expanded-header' className='post-header'>
        <p className='post-title'> {props.title} </p>
        <p className='post-location'> {props.location} </p>
        <p className='post-details'> {props.details} </p>
        <p className='post-time'> {props.time} </p>
      </div> 
      <div className='post-video'>
        <iframe id="yt-vid" src={props.videoUrl} frameborder="0" allowfullscreen>
        </iframe>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpandedPost);