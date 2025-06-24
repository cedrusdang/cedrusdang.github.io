import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import {logoPic, ownerName} from '../personalInfo.js';
import {topbarIntro} from '../personalInfo.js';
import UserAvatar from './TopBarUserAvatar.js';

const pages = [
  { name: 'Resume', href: '/' },
  { name: 'Projects', href: '/Projects' },
  { name: 'About', href: '/About' }
];

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
      component="a"
      href="/"
      sx={{
        fontWeight: 800,
        color: '#222',
        fontSize,
        letterSpacing: 0,
        textDecoration: 'none',
        fontFamily: 'Inter, monospace',
      }}
    >
      {ownerName}
    </Typography>
  );
}


function TopPortfolioIntro() {
  return (
    <Typography
      component="a"
      sx={{
        fontWeight: 500,
        color: '#222',
        fontSize: 22,
        letterSpacing: 0,
        textDecoration: 'none',
        fontFamily: '"Times New Roman", Times, serif',
        ml: 2
      }}
    >
      {topbarIntro}
    </Typography>
  );
}

function TopPageButtons({ pages }) {
  return (
    <>
      {pages.map((page) => (
        <Button
          key={page.name}
          href={page.href}
          target={page.href.startsWith('http') ? '_blank' : undefined}
          rel={page.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          variant="outlined"
          sx={{
            color: '#333',
            borderColor: '#dedede',
            background: '#fff',
            boxShadow: 'none',
            fontWeight: 500,
            textTransform: 'none',
            fontFamily: 'Inter',
            '&:hover': {
              borderColor: '#bdbdbd',
              bgcolor: '#f4f4f4'
            }
          }}
        >
          {page.name}
        </Button>
      ))}
    </>
  );
}



// Main function
export default function TopAppBar() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);
  const handleCloseUserMenu = () => setAnchorElUser(null);
  const isMedium = useMediaQuery('(max-width:995px)');
  const isSmall = useMediaQuery('(max-width:571px)');
  const isS_Small = useMediaQuery('(max-width:425px)');
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        bgcolor: '#fafbfc',
        borderBottom: '1px solid #e0e0e0',
        color: '#222',
        width: '100vw',

      }}
    >
      <Toolbar
        disableGutters
        sx={{
          width: '95vw',
          height: '3.5rem',
          minHeight: '3.5rem !important',
          px: '2vw'
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, minWidth: 0 }}>
          <TopLogoIcon />
          {!isS_Small && <TopNameOwner isMedium={isMedium} isSmall={isSmall} />}
          {!isMedium && <TopPortfolioIntro sx={{ alignItems: 'right' }} />}
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {!isS_Small && <TopPageButtons pages={pages} />}
          {isS_Small &&
            <Box sx={{ 
              display: 'grid', 
              gridTemplateColumns: '1fr 1fr 1fr', 
              gap: 1, 
              margin: '3 px', 
              height: '1hw',
              transform: 'scale(0.85)',
               }}>
              {isSmall && <TopPageButtons pages={pages} />}
            </Box>
          }
          <UserAvatar onClick={handleOpenUserMenu} />
        </Box>
      </Toolbar>
    </AppBar>
  );
}