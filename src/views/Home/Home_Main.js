import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import { Typography } from '@mui/material';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

import { homeIntro, userIntro} from '../../texts/Intro.js';
import {AvatarPic, ownerName, GitHubURL, LinkedInURL, YouTubeURL} from '../../personalInfo.js';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

function ViewResumePDF({ url, sx }) {
  return (
    <Button
      component="a"
      target="_blank"
      href={url}
      rel="noopener noreferrer"
      variant="contained"
      startIcon={<FileOpenIcon />}
      sx= {{marginLeft: '0.5vw', marginRight: '0.5vw'}}
    >
      Resume
    </Button>
  );
}

function IconRework({ url, type }) {
  // Mapping từ type sang icon và màu
  const iconConfig = {
    github: {
      icon: GitHubIcon,
      color: '#181717',
    },
    linkedin: {
      icon: LinkedInIcon,
      color: '#0A66C2',
    },
    youtube: {
      icon: YouTubeIcon,
      color: '#FF0000',
    },
  };

  const { icon: IconComponent, color } = iconConfig[type] || iconConfig.github;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        marginLeft: '0.5vw',
        marginRight: '0.5vw',
        transition: 'transform 0.1s',
        outline: 'none',
        cursor: 'pointer',
        height: 40, // căn đều với button
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

function AvatarBox(){
  return(
    
      <Item> 
        <Item>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Avatar src={AvatarPic} alt="Avatar" sx={{ 
                  margin: '1vh 1vw 0 1vw', 
                  width: '20vh', 
                  height: '20vh', 
                  border: '4px solid rgba(17, 62, 241, 0.47)', 
                  boxShadow: '0 0 0 2px rgba(9, 17, 246, 0.76)', 
                  }} 
              />
          </Box>   
          <h2>{ownerName}</h2>

          <Box sx={{ textAlign: 'center'}}>
            <Typography>
              {userIntro}
            </Typography>
            
          </Box>

          <Box sx={{
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            flexWrap: 'wrap',
            margin:'0vh 0 0.5vh 0'}}>
            <Box sx={{margin:'1vh 1vw 0 1vw'}}>
              <ViewResumePDF url='/Resume.pdf' />
            </Box>
            <Box sx={{margin:'1vh 1vw 0 1vw'}}>
              <IconRework url={GitHubURL} type="github" />
              <IconRework url={LinkedInURL} type="linkedin" />
              <IconRework url={YouTubeURL} type="youtube" />
            </Box>

          </Box>

      </Item>
    </Item>
  );
}

function HomeBoxes() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>

        <Grid size={{ xs: 12, sm: 4 }}> 
          <AvatarBox/>
        </Grid>

        <Grid size={{ xs: 12, sm: 8 }}>
          <Item>
              <Item sx={{ textAlign: 'justify'}}>
                {homeIntro}
              </Item>
              
          </Item>
        </Grid>

      </Grid>
    </Box>
  );
}

export default function Home() {
    return (
        <HomeBoxes/>
    );
}