import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import PortfolioBoxes from '../components/portfolioBoxes.js';
import StyledPaper from '../components/styledPaper.js';
import 'boxicons/css/boxicons.min.css'

import {homeIntro} from '../data/intro.js';

import AvatarBox from '../components/avatarBox.js';
import SkillsBox from '../components/skillsBox.js';

function LeftBox(){
  return (
    <>
      <Box>
        <AvatarBox/>
      </Box>
      <Box sx={{marginTop: '0.5rem'}}>
        <SkillsBox/>
      </Box>
    </>
  );
}

function IntroBox(){
  return(
    <StyledPaper>
      <StyledPaper sx={{ textAlign: 'justify'}}>
        <h2 style={{ textAlign: 'center' }}>About me</h2>
        {homeIntro}
      </StyledPaper>
    </StyledPaper>
  )
}

function RightBox(){
  return (
    <>
      <Box>
        <IntroBox/>
      </Box>
      <Box>
        <PortfolioBoxes/>
      </Box>
    </>
  );
}

function HomeBoxes() {
  return (
    <Box sx={{ flexGrow: 1}}>
      <Grid container spacing={2}>

        <Grid size={{ xs: 12, md: 4 }}> 
          <LeftBox/>
        </Grid>

        <Grid size={{ xs: 12, md: 8 }}>
          <RightBox/>
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

