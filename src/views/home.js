import 'boxicons/css/boxicons.min.css'

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import PortfolioBoxes from '../components/portfolioBoxes.js';
import AvatarBox from '../components/avatarBox.js';
import SkillsBox from '../components/skillsBox.js';
import IntroBox from '../components/introBox.js';
import MottoBox from '../components/mottoBox.js';
import MyEmail from '../components/myEmail.js';
import LiveProject from '../components/liveProject.js';

function LeftBox(){
  return (
    <>
      <Box>
        <AvatarBox/>
      </Box>
      <Box sx={{marginTop: '0.5rem'}}>
        <SkillsBox/>
      </Box>
      <MyEmail/>
      <Box sx={{marginTop: '1rem'}}>
        <LiveProject/>
      </Box>
    </>
  );
}

function RightBox(){
  return (
    <>
      <MottoBox/>
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

