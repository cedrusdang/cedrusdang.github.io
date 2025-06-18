import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import IconButton from '@mui/material/IconButton';
import useMediaQuery from '@mui/material/useMediaQuery';
import {LinkedIn, Youtube, Resume, AvatarPic, LogoPic, OwnerName} from '../personal_info.js';
import {TopBarIntro} from '../personal_info.js';

//NOTE: FIX HERE

const pages = [
  { name: 'Home', href: '' },
  { name: 'Portfolios', href: '' },
  { name: 'Resume', href: Resume }
];

function TopLogoIcon() {
  return (
    <Box
      component="img"
      src={LogoPic}
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
        lineHeight: 1,
      }}
    >
      {OwnerName}
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
        fontFamily: '"Font Awesome 5 Free", sans-serif',
        ml: 2,
      }}
    >
      {TopBarIntro}
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
          target="_blank"
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

function UserAvatar({ onClick }) {
  const [isClicked, setClicked] = React.useState(false);

  const handleAvatarClick = (e) => {
    // Click 1st scalex3, 2nd scalex1
    if (!isClicked) {
      setClicked(true);
    } else {
      setClicked(false); 
      if (onClick) onClick(e); 
    }
  };

  return (
    <Box
      sx={{
        width: 52,
        height: 52,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '1px',
      }}
      onClick={handleAvatarClick}
    >
      <Avatar
        alt="User"
        src={AvatarPic}
        sx={{
          width: 36,
          height: 36,
          position: 'relative',
          justifyContent: 'center',
          border: isClicked ? '0.5px solid rgba(64, 255, 0, 0.28)' : '2px solid transparent',
          boxShadow: isClicked
            ? '0 0 12px 2px rgb(64, 220, 255)'
            : '0 0 0 0 rgba(56,180,255,0)',
          transform: isClicked
            ? 'scale(3) translateX(-10px) translateY(10px)'
            : 'none',
          transition: 'transform 1s cubic-bezier(.4,2,.6,1), box-shadow 0.18s, border 0.18s, margin 0.18s',
          cursor: 'pointer',
          zIndex: 10,
          animation: !isClicked ? 'avatar-blink 1s infinite ease-in-out alternate' : 'none',
          '@keyframes avatar-blink': {
            '0%':   { filter: 'drop-shadow(0 0 0px rgb(13, 140, 245))' },
            '100%': { filter: 'drop-shadow(0 0 3px rgb(41, 246, 89))' }
          }
        }}
      />
    </Box>
  );
}

function MobileIcons() {
  return (
      <Box sx={{ display: 'flex', gap: 1,  width: '100%', alignItems: 'center' }} >
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <IconButton
          component="a"
          href={Youtube}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            width: 30, height: 30, p: 0.5,
                        
            border: '2px solid #d32f2f',
            color: '#d32f2f',
            background: '#fff',
            boxShadow: '0 0 4px #ffbaba',
            '&:hover': {
              transform: 'scale(1.16) rotate(-18deg)',
              boxShadow: '0 0 18px #ff5252',
            },
            transition: 'all 0.4s cubic-bezier(.4,2,.6,1)',
          }}
        >
          <YouTubeIcon fontSize="small" />
        </IconButton>
        <Typography sx={{ fontSize: 10, color: '#d32f2f', mt: '2px', fontWeight: 600 }}>YouTube</Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <IconButton
          component="a"
          href={Resume}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            width: 30, height: 30, p: 0.5,
            border: '2px solid #4b59f7',
            color: '#4b59f7',
            background: '#fff',
            boxShadow: '0 0 4px #a3a6f7',
            '&:hover': {
              transform: 'scale(1.16) rotate(16deg)',
              boxShadow: '0 0 18px #4657e1',
            },
            transition: 'all 0.4s cubic-bezier(.4,2,.6,1)',
          }}
        >
          <PictureAsPdfIcon fontSize="small" />
        </IconButton>
        <Typography sx={{ fontSize: 10, color: '#4b59f7', mt: '2px', fontWeight: 600 }}>Resume</Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <IconButton
          component="a"
          href={LinkedIn}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            width: 30, height: 30, p: 0.5,
            border: '2px solid #1976d2',
            color: '#1976d2',
            background: '#fff',
            boxShadow: '0 0 4px #bbd8fd',
            '&:hover': {
              transform: 'scale(1.16) rotate(12deg)',
              boxShadow: '0 0 18px #2196f3',
            },
            transition: 'all 0.4s cubic-bezier(.4,2,.6,1)',
          }}
        >
          <LinkedInIcon fontSize="small" />
        </IconButton>
        <Typography sx={{ fontSize: 10, color: '#1976d2', mt: '2px', fontWeight: 600 }}>LinkedIn</Typography>
      </Box>
    </Box>
  );
}

// Main function
export default function ResponsiveAppBar() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);
  const handleCloseUserMenu = () => setAnchorElUser(null);
  const isMedium = useMediaQuery('(max-width:995px)');
  const isSmall = useMediaQuery('(max-width:571px)');
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
          <TopNameOwner isMedium={isMedium} isSmall={isSmall} />
          {!isMedium && <TopPortfolioIntro sx={{ alignItems: 'right' }} />}
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {!isSmall && <TopPageButtons pages={pages} />}
          {isSmall && 
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',  
                justifyContent: 'flex-end', 
                alignItems: 'center',    
                height: 56, 
                width: '100%',
                gap: 1
              }}
            >
              <MobileIcons />
            </Box>
          }
          <UserAvatar onClick={handleOpenUserMenu} />
        </Box>
      </Toolbar>
    </AppBar>
  );
}