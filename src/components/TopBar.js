import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { FormGroup, FormControlLabel, Switch } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { Link } from 'react-router-dom';

import {ownerName} from '../infomation/Info.js';
import {topbarIntro} from '../infomation/Info.js';

const logoPic = "/images/DSlogo.png"

const pages = [
  { name: 'Resume', href: '/' },
  { name: 'Projects', href: '/Projects' },
];

function DarkLightBtn({ darkMode, setDarkMode }) {
  return (
    <FormGroup
      sx={{
        flexWrap: 'nowrap',
        flexDirection: 'row',
        alignItems: 'center',
        margin: '0px'
      }}
    >
      <FormControlLabel
        control={
          <Switch
            checked={darkMode}
            onChange={e => setDarkMode(e.target.checked)}
          />
        }
        label={darkMode ? <DarkModeOutlinedIcon/> : <DarkModeIcon/>}
        sx={{ margin: '0px' }}
      />
    </FormGroup>
  );
}

function TopLogoIcon() {
  return (
    <Box
      component="img"
      src={logoPic}
      alt="Logo"
      sx={{
        height: 32,
        width: 32,
        borderRadius: '5px',
        mr: '14px',
        transition: 'transform 1.5s cubic-bezier(.4,2,.6,1)',
        transformStyle: 'preserve-3d',
        cursor: 'none',
        '&:hover': { transform: 'rotateY(180deg) rotateX(30deg)' },
      }}
    />
  );
}

function TopNameOwner({ isSmall }) {
  let fontSize = isSmall ? 14 : 22;
  return (
    <Typography
      Wrap
      component={Link}
      to="/"
      sx={theme => ({
        fontWeight: 800,
        color: theme.palette.mode === 'dark' ? '#f3f6fa' : '#222',
        fontSize,
        letterSpacing: 0,
        textDecoration: 'none',
        fontFamily: 'Inter, monospace',
      })}
    >
      {ownerName}
    </Typography>
  );
}

function TopPortfolioIntro() {
  return (
    <Typography
      component="a"
      sx={theme => ({
        fontWeight: 500,
        color: theme.palette.mode === 'dark' ? '#e0e4ea' : '#222',
        fontSize: 22,
        letterSpacing: 0,
        textDecoration: 'none',
        fontFamily: '"Times New Roman", Times, serif',
        ml: 2
      })}
    >
      {topbarIntro}
    </Typography>
  );
}

function TopPageButtons({ pages }) {
  return (
    <>
      {pages.map((page) => {
        const isExternal = page.href.startsWith('http');
        return (
          <Button
            key={page.name}
            component={isExternal ? 'a' : Link}
            {...(
              isExternal
                ? {
                    href: page.href,
                    target: '_blank',
                    rel: 'noopener noreferrer'
                  }
                : { to: page.href }
            )}
            variant="outlined"
            sx={theme => ({
              color: theme.palette.mode === 'dark' ? '#f3f6fa' : '#333',
              borderColor: theme.palette.mode === 'dark' ? '#393a40' : '#dedede',
              background: theme.palette.mode === 'dark' ? '#23242a' : '#fff',
              boxShadow: 'none',
              fontWeight: 500,
              textTransform: 'none',
              fontFamily: 'Inter',
              '&:hover': {
                borderColor: theme.palette.mode === 'dark' ? '#8e8e8e' : '#bdbdbd',
                bgcolor: theme.palette.mode === 'dark' ? '#33354a' : '#f4f4f4'
              }
            })}
          >
            {page.name}
          </Button>
        );
      })}
    </>
  );
}


// Main function
export default function TopAppBar({darkMode, setDarkMode}) {

  const isMedium = useMediaQuery('(max-width:995px)');
  const isSmall = useMediaQuery('(max-width:571px)');
  const isS_Small = useMediaQuery('(max-width:478px)');
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={theme => ({
        bgcolor: theme.palette.mode === 'dark' ? '#23242a' : '#fafbfc',
        borderBottom: '1px solid',
        borderColor: theme.palette.mode === 'dark' ? '#323232' : '#e0e0e0',
        color: theme.palette.mode === 'dark' ? '#f3f6fa' : '#222',
        width: '100vw',
      })}
    >
      <Toolbar
        disableGutters
        sx={{
          width: '100vw',
          height: '3.5rem',
          minHeight: '3.5rem !important',
          px: '5vw'
        }}
      >
        
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, minWidth: 0 }}>
          <TopLogoIcon />
          {!isS_Small && <TopNameOwner isMedium={isMedium} isSmall={isSmall} />}
          {!isMedium && <TopPortfolioIntro sx={{ alignItems: 'center' }} />}
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {!isS_Small && <TopPageButtons pages={pages} />}
          {isS_Small &&
            <Box sx={{ 
              display: 'grid', 
              gridTemplateColumns: '1fr 1fr', 
              gap: 1, 
              height: '1hw',
              transform: 'scale(0.85)',
               }}>
              {isSmall && <TopPageButtons pages={pages} />}
            </Box>
          }
          <DarkLightBtn darkMode={darkMode} setDarkMode={setDarkMode} />
        </Box>
      </Toolbar>
    </AppBar>
  );
}