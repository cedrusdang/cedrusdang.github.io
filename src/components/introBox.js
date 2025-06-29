import StyledPaper from '../components/styledPaper.js';
import { Box, Typography } from '@mui/material';

import StoryBox from './storyBox.js';

export default function IntroBox(){
  return (
    <StyledPaper>
      <StyledPaper sx={{ textAlign: 'justify' }}>
        <Typography 
          variant="h6" 
          style={{ 
            textAlign: 'center', 
            fontWeight: 'bold', 
            margin: '0'
            }}
        >
          About me
        </Typography>
        <Box sx={{justifySelf: 'center', boxSizing: 'border-box'}}>
          <StoryBox/>
        </Box>
      </StyledPaper>
    </StyledPaper>
  );
}

