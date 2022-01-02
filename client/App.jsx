import React, { Component } from 'react';
import { useState, useEffect } from "react";
import ReactDom from "react-dom";
import Map from './components/Map';
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
      <img id="logo" src="https://cdn-icons-png.flaticon.com/512/1476/1476778.png"/>
      <div id="main-content">
        <div id="map">
          <Map />
        </div>
        <Post />
      </div>
      {props.expandedPost && (<ExpandedPost />)}
    </div>
  );
};

export default connect(mapStateToProps, null)(App);