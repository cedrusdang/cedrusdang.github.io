import React, { useState, useEffect } from 'react';
import './App.css';
import './index.css';
import GalaxyBackground from './components/BackGround.js';
import ResponsiveAppBar from './components/AppBar.js';
import PortfolioBox from './components/PortfolioBox.js';
function App() {
  return (
    <>
      <GalaxyBackground />
      <ResponsiveAppBar />
      <PortfolioBox/>
    </>
  );
}

export default App;