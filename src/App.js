import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import './index.css';
import GalaxyBackground from './components/BackGround.js';
import TopAppBar from './components/TopBar.js';
import Box from '@mui/material/Box';

import Home from './views/Home/Home_Main.js';
import About from './views/About/About_Main.js';
import Projects from './views/Projects/Projects_Main.js';


function App() {
  return (
    <Router>
      <GalaxyBackground />
      <TopAppBar />
      <Box sx={{ padding: '2vh 2vw 0 2vw', maxWidth: 'lg', mx: 'auto'}}>
        <Routes sx={{margin:'2px'}}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;