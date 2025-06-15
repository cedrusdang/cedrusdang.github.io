import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { LinkedIn, Portfolio, Resume } from '../personal_info.js';

const pages = [
  { name: 'Portfolio', href: Portfolio },
  { name: 'Resume', href: Resume },
  { name: 'LinkedIn', href: LinkedIn}
];
const settings = ['Profile', 'Logout'];

function ResponsiveAppBar() {
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
        {/* Left: Logo + name */}
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, minWidth: 0 }}>
          <img
            src="/DSlogo.png"
            alt="Logo"
            style={{
              height: 32,
              width: 32,
              borderRadius: '5px',
              marginRight: '14px',
            }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              fontWeight: 700,
              color: '#222',
              fontSize: 22,
              letterSpacing: 1,
              textDecoration: 'none',
              fontFamily: 'Inter, monospace'
            }}
          >
            Cedrus Dang
          </Typography>
        </Box>

        {/* Right: Buttons + Avatar */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
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
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, ml: 2 }}>
              <Avatar
                alt="User"
                src="/static/images/avatar/2.jpg"
                sx={{ width: 36, height: 36, bgcolor: '#eee', color: '#222', fontWeight: 700 }}
              />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{
              mt: '45px',
              '& .MuiPaper-root': { bgcolor: '#fff', boxShadow: '0 2px 8px #eee' }
            }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem
                key={setting}
                onClick={handleCloseUserMenu}
                sx={{
                  color: '#333',
                  '&:hover': { bgcolor: '#f2f2f2' }
                }}
              >
                <Typography sx={{ textAlign: 'center', fontFamily: 'Inter' }}>{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default ResponsiveAppBar;
