import { Box, Typography, Paper } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import PsychologyIcon from '@mui/icons-material/Psychology';
import TerminalIcon from '@mui/icons-material/Terminal';
import PublicIcon from '@mui/icons-material/Public';
import ComputerIcon from '@mui/icons-material/Computer';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonalIcons from './personalIcons.js';

const gradients = {
  dark: {
    left:  'linear-gradient(90deg, rgba(36,42,54,0.9) 0%, rgba(82,89,102,0.7) 40%, rgba(153,164,185,0.25) 100%)',
    right: 'linear-gradient(90deg, rgba(153,164,185,0.25) 0%, rgba(82,89,102,0.7) 60%, rgba(36,42,54,0.9) 100%)',
  },
  light: {
    left:  'linear-gradient(90deg, rgba(245,247,250,0.93) 0%, rgba(206,212,219,0.78) 40%, rgba(180,190,200,0.34) 100%)',
    right: 'linear-gradient(90deg, rgba(180,190,200,0.34) 0%, rgba(206,212,219,0.78) 60%, rgba(245,247,250,0.93) 100%)',
  },
};

function MetallicPaper({ icon, iconPosition = 'left', children, sx = {}, ...props }) {
  const theme = useTheme();
  const mode = theme.palette.mode;
  const gradient = gradients[mode][iconPosition];

  return (
    <Paper
      elevation={5}
      sx={{
        p: '0.5rem',
        display: 'flex',
        alignItems: 'center',
        my: '1rem',
        background: gradient,
        width: { xs: '80vw', sm: '35.5rem', md: '34.5rem', lg: '36rem' },
        ...sx,
      }}
      {...props}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flex: 1,
          justifyContent: iconPosition === 'left' ? 'flex-start' : 'flex-end',
          width: '100%',
        }}
      >
        {iconPosition === 'left' && icon}
        <Typography
          variant="body1"
          sx={{
            mx: iconPosition === 'left' ? '0.5rem' : 0,
            mr: iconPosition === 'right' ? '0.5rem' : 0,
            textAlign: iconPosition,
            flex: 1,
          }}
        >
          {children}
        </Typography>
        {iconPosition === 'right' && icon}
      </Box>
    </Paper>
  );
}

const storyItems = [
  {
    icon: <PsychologyIcon sx={{ transform: 'scale(2)', m: '0.5rem 1rem' }} />,
    iconPosition: 'left',
    text: 'I love Science, Technology, and Complex Problem Solving.',
  },
  {
    icon: <ComputerIcon sx={{ transform: 'scale(2)', m: '0.5rem 1rem' }} />,
    iconPosition: 'right',
    text: 'Learning, Analyzing, and Coding are my Daily Passions.',
  },
  {
    icon: <PublicIcon sx={{ transform: 'scale(2)', m: '0.5rem 1rem' }} />,
    iconPosition: 'left',
    text: 'Technology, to me, could make the World Better.',
  },
  {
    icon: <TerminalIcon sx={{ transform: 'scale(2)', m: '0.5rem 1rem' }} />,
    iconPosition: 'right',
    text: 'My skills: Data Science, AI, Business Analytics, and Software Development.',
  },
  {
    icon: <FavoriteBorderIcon sx={{ transform: 'scale(2)', m: '0.5rem 1rem' }} />,
    iconPosition: 'left',
    text: 'At Heart, I am a Data Scientist.',
  }
];

export default function StoryBox() {
  return (
    <>
      <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <PersonalIcons/>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {storyItems.map(({ icon, iconPosition, text }, idx) => (
          <MetallicPaper key={idx} icon={icon} iconPosition={iconPosition}>
            {text}
          </MetallicPaper>
        ))}
      </Box>
    </>
  );
}
