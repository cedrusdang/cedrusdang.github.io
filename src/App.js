import './App.css';
import './index.css';
import GalaxyBackground from './components/BackGround.js';
import ResponsiveAppBar from './components/TopBar.js';
import GridBoxes from './components/PortfolioBoxes.js';
import AboutMeSection from './components/AboutMe.js';


function App() {
  return(
  <>
    <GalaxyBackground />
    <ResponsiveAppBar />
    <div>
      <GridBoxes/>
    </div>
  </>
  );
};

export default App;