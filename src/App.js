import { useState, useMemo } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { GlobalStyles, useTheme } from '@mui/material';

import GalaxyBackground from './components/backGround.js';
import TopAppBar from './components/topBar.js';
import About from './views/home.js';
import BottomBar from './components/bottomBar.js';

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

function App() {
  // Dark mode state and theme creation
  const [darkMode, setDarkMode] = useState(true);
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
          ...(darkMode && {
            background: {
              default: "#23242a",
              paper: "#1A2027"
            }
          })
        }
      }),
    [darkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router basename={process.env.PUBLIC_URL}>
        <AppGlobalStyles />
        <GalaxyBackground/>
        <>
          <header>
            <TopAppBar darkMode={darkMode} setDarkMode={setDarkMode} />
          </header>

          <Box component="main" sx={{
            p: { xs: 1.5, md: 2},
            maxWidth: 'lg',
            mx: 'auto'
          }}>
            <Routes>
              <Route path="/" element={<About />} />
            </Routes>
          </Box>

          <footer>
            <BottomBar />
          </footer>
        </>
      </Router>
    </ThemeProvider>
  );
}

export default App;
