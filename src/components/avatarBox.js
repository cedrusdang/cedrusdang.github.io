import { useTheme  } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import { Typography } from '@mui/material';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Box from '@mui/material/Box';

import StyledPaper from './styledPaper.js';
import {ownerName, GitHubURL, LinkedInURL} from '../data/info.js';
import { LeftBoxIntro } from '../data/intro.js';

const AvatarPic = "/images/avatar.jpg"

function ViewResumePDF({ url, sx }) {
  return (
    <Button
      component="a"
      target="_blank"
      href={url}
      rel="noopener noreferrer"
      variant="contained"
      startIcon={<FileOpenIcon />}
      sx= {{marginLeft: '0.5rem', marginRight: '0.5rem'}}
    >
      Resume
    </Button>
  );
}

function SocialIconRework({ url, type, newTab = false }) {
    // For light mode
  const iconConfigLight = { 
    github: {
      icon: GitHubIcon,
      color: '#222'
    },        
    linkedin: {
      icon: LinkedInIcon,
      color: '#0A66C2'
    },
  };
  // For dark mode
  const iconConfigDark = { 
    github: {
      icon: GitHubIcon,
      color: '#f3f6fa'
    },        
    linkedin: {
      icon: LinkedInIcon,
      color: '#59a7f5'
    },
  };
  
  const theme = useTheme();
  const iconConfig = theme.palette.mode === 'dark' ? iconConfigDark : iconConfigLight;
  const { icon: IconComponent, color } = iconConfig[type] || iconConfig.github;

  return (
    <a
      href={url}
      target={newTab ? "_blank" : "_self"}
      rel={newTab ? "noopener noreferrer" : undefined}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        marginLeft: '0.5rem',
        marginRight: '0.5rem',
        transition: 'transform 0.1s',
        outline: 'none',
        cursor: 'pointer',
        height: 40,
      }}
      tabIndex={0}
      onMouseDown={e => e.currentTarget.style.transform = 'scale(0.90)'}
      onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'}
      onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
      onKeyDown={e => {
        if (e.key === ' ' || e.key === 'Enter') e.currentTarget.style.transform = 'scale(0.90)';
      }}
      onKeyUp={e => e.currentTarget.style.transform = 'scale(1)'}
    >
      <IconComponent
        sx={{
          fontSize: 36,
          color,
          transition: 'transform 0.1s, filter 0.2s',
          '&:hover': {
            animation: 'github-shake 1s',
            filter: 'brightness(1.2)',
          },
          '&:active': {
            filter: 'brightness(0.7)',
          }
        }}
      />
      <style>
        {`
          @keyframes github-shake {
            10% { transform: rotate(-8deg) scale(1.1); }
            20% { transform: rotate(8deg) scale(1.1); }
            30% { transform: rotate(-5deg) scale(1.08); }
            40% { transform: rotate(5deg) scale(1.08); }
            50% { transform: rotate(-2deg); }
            60% { transform: rotate(2deg); }
            70% { transform: rotate(0deg); }
          }
        `}
      </style>
    </a>
  );
}

export default function AvatarBox(){
  return(
      <StyledPaper> 
        <StyledPaper>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Avatar 
                src={AvatarPic} 
                alt="Avatar" 
                sx={{ 
                  margin: '0.5rem 0.5rem 0 0.5rem', 
                  width: { xs: '50vw', sm: '50vw', md: '30vw', lg: '30vw', xl: '30vw' },
                  height: 'auto',
                  maxWidth: '180px',
                  maxHeight: '180px',
                  border: '0.2rem solid rgba(17, 62, 241, 0.47)', 
                  boxShadow: '0 0 0 2px rgba(9, 17, 246, 0.76)', 
                }} 
              />
          </Box>   
          <h2>{ownerName}</h2>                
          <Box sx={{ textAlign: 'center'}}>
            <Typography>
              {LeftBoxIntro}
            </Typography>
            
          </Box>

          <Box sx={{
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            flexDirection: 'column',
            margin:'0vh 0 0 0'}}>
            <Box sx={{margin:'1rem 0 0 0'}}>
              <ViewResumePDF url='/Resume.pdf' />
            </Box>
            <Box sx={{margin:'1rem 0 0 0'}}>
              <SocialIconRework url={GitHubURL} type="github" />
              <SocialIconRework url={LinkedInURL} type="linkedin" />
            </Box>
          </Box>
      </StyledPaper>
    </StyledPaper>
  );
}
