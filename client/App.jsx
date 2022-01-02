import React, { Component } from 'react';
import { useState, useEffect } from "react";
import ReactDom from "react-dom";
import Map from './components/Map';


import { connect } from 'react-redux';
import './stylesheets/styles.css';
import logo from '../assets/danger-pin.png'
import { BsPersonCircle } from 'react-icons/bs'
import { IconContext } from 'react-icons';

import Post from './components/Post';
import {CSSTransition} from 'react-transition-group';
import ExpandedPost from './components/ExpandedPost';


const mapStateToProps = ({posts: { expandedPost }}) => ({
  expandedPost
})

const App = (props) => {
  console.log('in app.jsx');
  return (
    <div id='app'>
      <IconContext.Provider value={{className: 'login-button', size:'2em'}}>
        <BsPersonCircle />
      </IconContext.Provider>
      <div id="logo-wrapper">
        <img id="logo" src={logo}/>
      </div>
      <div id="main-content">
        <div id="map">
          {/* <img id="map-img" src="https://assets.website-files.com/5e832e12eb7ca02ee9064d42/5f7db426b676b95755fb2844_Group%20805.jpg"/> */}
          <Map />
        </div>
        <Post />
      </div>
      <CSSTransition in={props.expandedPost} timeout={500} classNames="expanded-transition" unmountOnExit appear>
        <ExpandedPost key={1000}/>
      </CSSTransition>
    </div>
  );
};

export default connect(mapStateToProps, null)(App);