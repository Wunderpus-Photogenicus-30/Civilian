import React, { Component } from 'react';
import { useState, useEffect } from "react"
import Post from './components/Post';
import ExpandedPost from './components/ExpandedPost';
import { connect } from 'react-redux';
import './stylesheets/styles.css';
import {CSSTransition} from 'react-transition-group';


const mapStateToProps = ({posts: { expandedPost }}) => ({
  expandedPost
})

const App = (props) => {
  console.log('in app.jsx');
  return (
    <div id="app">
      <img id="logo" src="https://cdn-icons-png.flaticon.com/512/1476/1476778.png"/>
      <div id="main-content">
        <div id="map">MAP HERE</div>
        <Post />
      </div>
      {props.expandedPost && (
      <CSSTransition in={props.expandedPost} timeout={500} classNames="expanded-transition" unmountOnExit appear>
        <ExpandedPost key={1000}/>
    </CSSTransition>)}
    </div>
  );
};

export default connect(mapStateToProps, null)(App);