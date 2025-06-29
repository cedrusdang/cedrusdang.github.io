import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GalaxyBackground from './components/backGround.js';
import TopAppBar from './components/topBar.js';
import Box from '@mui/material/Box';
import { useState, useMemo } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { GlobalStyles, useTheme } from '@mui/material';

import About from './views/home.js';

function AppGlobalStyles() {
  const theme = useTheme();
  return (
    <GlobalStyles styles={{
      body: {
        background: theme.palette.mode === 'dark'
          ? 'radial-gradient(circle at 70% 50%,rgb(49, 31, 56),rgb(22, 20, 26))'
          : 'radial-gradient(circle at 70% 50%, #e8a738, #e88438)',
        color: theme.palette.text.primary,
        margin: 0,
        fontFamily: theme.typography.fontFamily,
      },
      code: {
        fontFamily: 'source-code-pro, Menlo, Monaco, Consolas, Courier New, monospace'
      }
    }}/>
  );
}

// Routes are for future expansion, currently only About page
// Presentation of applications will be added in the future
function App() {
  const [darkMode, setDarkMode] = useState(true);
  const theme = useMemo(
    () =>
      createTheme({
        palette: {mode: darkMode ? "dark" : "light"},
      }),
    [darkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AppGlobalStyles />
        <GalaxyBackground/>
        <TopAppBar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Box sx={{ 
          p: { xs: 1.5, md: 2}, 
          maxWidth: 'lg', 
          mx: 'auto'
          }}
        >
          <Routes>
            <Route path="/" element={<About />} />
          </Routes>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;


