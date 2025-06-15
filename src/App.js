import React, { useState, useEffect } from 'react';
import './App.css';
import './index.css';
import GalaxyBackground from './components/BackGround.js';
import ResponsiveAppBar from './components/AppBar.js';

function App() {
  return (
    <>
      <GalaxyBackground />
      <ResponsiveAppBar />
    </>
  );
}

export default App;