import { Box, Typography } from '@mui/material';
import PsychologyIcon from '@mui/icons-material/Psychology';
import TerminalIcon from '@mui/icons-material/Terminal';
import PublicIcon from '@mui/icons-material/Public';
import Paper from '@mui/material/Paper';
import { useTheme} from '@mui/material/styles'; 

function MetallicPaper({ icon, iconPosition = 'left', children, ...props }) {
  const theme = useTheme();

  // Set gradient stops based on iconPosition
  let gradient;
  if (iconPosition === 'left' && theme.palette.mode === 'dark') {
    gradient = 'linear-gradient(90deg, #6c707a 0%, #a0a4ab 40%, #6c707a 100%)';
  } else if (iconPosition === 'right' && theme.palette.mode === 'dark') {
    gradient = 'linear-gradient(90deg, #a0a4ab 0%, #6c707a 60%, #a0a4ab 100%)';
  } else if (iconPosition === 'right' && theme.palette.mode === 'light') {
    gradient = 'linear-gradient(90deg, #e6e8ec 0%, #bfc1c6 60%, #e6e8ec 100%)';
  } else {
    gradient = 'linear-gradient(90deg, #bfc1c6 0%, #e6e8ec 40%, #bfc1c6 100%)';
  }

  // Arrange content based on iconPosition
  let content;
  if (iconPosition === 'left') {
    content = (
      <Box sx={{ display: 'flex', alignItems: 'center', flex: 1, justifyContent: 'flex-start', width: '100%' }}>
        {icon}
        <Typography
          variant="body1"
          sx={{ marginLeft: '0.5rem', textAlign: 'left', flex: 1 }}
        >
          {children}
        </Typography>
      </Box>
    );
  } else {
    content = (
      <Box sx={{ display: 'flex', alignItems: 'center', flex: 1, justifyContent: 'flex-end', width: '100%' }}>
        <Typography
          variant="body1"
          sx={{ marginRight: '0.5rem', textAlign: 'right', flex: 1 }}
        >
          {children}
        </Typography>
        {icon}
      </Box>
    );
  }

  return (
    <Paper
      elevation={5}
      sx={{
        padding: '0.5rem',
        display: 'flex',
        alignItems: 'center',
        margin: '1rem 0 1rem 0',
        background: gradient,
        width: { xs: '80vw', sm: '35.5rem', md: '34.5rem', lg: '36rem' },
        ...props.sx,
      }}
      {...props}
    >
      {content}
    </Paper>
  );
}

export default function StoryBox() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <MetallicPaper 
        icon={<PsychologyIcon sx={{ transform: 'scale(2)', m: '0.5rem 1rem' }} />}
        iconPosition="left"
      >
        My love are in science, technology, and solving complex problems.
      </MetallicPaper>
      <MetallicPaper
        icon={<TerminalIcon sx={{ transform: 'scale(2)', m: '0.5rem 1rem' }} />}
        iconPosition="right"
      >
        Learning, analysing and coding are my passions.
      </MetallicPaper>
      <MetallicPaper
        icon={<PublicIcon sx={{ transform: 'scale(2)', m: '0.5rem 1rem' }} />}
        iconPosition="left"
      >
        I believe technology is meant to create a better world.
      </MetallicPaper>
    </Box>
  );
}
