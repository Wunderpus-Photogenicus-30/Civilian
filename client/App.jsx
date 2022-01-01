import React, { Component } from 'react';
import { useState, useEffect } from "react"
import Post from './components/Post';
import ExpandedPost from './components/ExpandedPost';
import { connect } from 'react-redux';
import './stylesheets/styles.css';


const mapStateToProps = ({posts: { expandedPost }}) => ({
  expandedPost
})

const App = (props) => {
  console.log('in app.jsx');
  console.log('expandedPost', props.expandedPost)
  return (
    <div id="app">
      <Post />
      {props.expandedPost && (<ExpandedPost />)}
    </div>
  );
};

export default connect(mapStateToProps, null)(App);