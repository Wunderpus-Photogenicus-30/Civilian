import React, { Component } from 'react';
import { useState, useEffect } from "react";
import ReactDom from "react-dom";
import Map from './components/Map';

import './stylesheets/style.css';

const App = () => {
  console.log('in app.jsx');
  return (
    <div id="app">
      <div id='mapContainer'>
        <Map />
      </div>
    </div>
  );
};

export default App;