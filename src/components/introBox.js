import StyledPaper from '../components/styledPaper.js';
import { Box, Typography } from '@mui/material';
import RotatingMottos from './typeMotto.js';

export default function IntroBox(){
  return (
    <StyledPaper>
      <StyledPaper sx={{ textAlign: 'justify' }}>
        <Typography 
          variant="h6" 
          style={{ 
            textAlign: 'center', 
            fontWeight: 'bold', 
            margin: '0.5rem 0 0.25rem 0'
            }}
        >
          About me
          
        </Typography>
        <Box sx={{ height: '3rem' }}>
            <RotatingMottos />
        </Box>
      </StyledPaper>
    </StyledPaper>
  );
}

