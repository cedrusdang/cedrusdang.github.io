import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import {LinkedIn, Portfolio, Resume, AvatarPic, LogoPic, OwnerName} from '../personal_info.js';
import {TopBarIntro} from '../personal_info.js';

export function TopLogoIcon() {
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

export function TopNameOwner() {
  return (
    <Typography
      variant="h6"
      noWrap
      component="a"
      href="/"
      sx={{
        fontWeight: 800,
        color: '#222',
        fontSize: 22,
        letterSpacing: 0,
        textDecoration: 'none',
        fontFamily: 'Inter, monospace',
      }}
    >
      {OwnerName}
    </Typography>
  );
}

export function TopPortfolioIntro() {
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

export function LeftTopBarSection() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, minWidth: 0 }}>
      <TopLogoIcon />
      <TopNameOwner/>
      <TopPortfolioIntro sx={{ alignItems: 'right' }} />
    </Box>
  );
}

export function TopPageButtons({ pages }) {
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

export function UserAvatar({ onClick }) {
  const [isHover, setHover] = React.useState(false);

  return (
    <Box
      sx={{
        width: 52,
        height: 52,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
    >
      <Avatar
        alt="User"
        src={AvatarPic}
        sx={{
          width: 36,
          height: 36,
          position: 'absolute',
          left: 0,
          top: 0,
          bgcolor: '#eee',
          color: '#222',
          fontWeight: 700,
          margin: '3px',
          border: isHover ? '0.5px solid rgba(64, 255, 0, 0.28)' : '2px solid transparent',
          boxShadow: isHover
            ? '0 0 3px 1px rgb(64, 220, 255)'
            : '0 0 0 0 rgba(56,180,255,0)',
          transform: isHover
            ? 'scale(3) translateX(-3px) translateY(15px)'
            : 'none',
          transition: 'transform 0.5s cubic-bezier(.4,2,.6,1), box-shadow 0.18s, border 0.18s, margin 0.18s',
          cursor: 'none',
          zIndex: 10,
          animation: !isHover ? 'avatar-blink 1s infinite ease-in-out alternate' : 'none',
          '@keyframes avatar-blink': {
            '0%':   { filter: 'drop-shadow(0 0 0px rgb(13, 140, 245))' },
            '100%': { filter: 'drop-shadow(0 0 3px rgb(41, 246, 89))' }
          }
        }}
      />
    </Box>
  );
}

export function UserMenu({ anchorEl, open, onClose }) {
  return (
    <Menu
      sx={{
        mt: '45px',
        '& .MuiPaper-root': { bgcolor: '#fff', boxShadow: '0 2px 8px #eee' }
      }}
      id="menu-appbar"
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={open}
      onClose={onClose}
    >
    </Menu>
  );
}

const pages = [
  { name: 'Portfolio', href: Portfolio },
  { name: 'Resume', href: Resume },
  { name: 'LinkedIn', href: LinkedIn }
];


// Main function

export default function ResponsiveAppBar() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);
  const handleCloseUserMenu = () => setAnchorElUser(null);

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
        <LeftTopBarSection />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <TopPageButtons pages={pages} />
          <UserAvatar onClick={handleOpenUserMenu} />
          <UserMenu
            anchorEl={anchorElUser}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
}