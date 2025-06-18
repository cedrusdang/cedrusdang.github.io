import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';

function PortfolioImg(){
    return(
        <div className='PortfolioImg'>
            sdsd
        </div>
    );
};

function SmallBox() {
  return (
    <Box className = 'SmallBox'>
        <PortfolioImg/>
    </Box>
  );
};
  
export default function GridBoxes() {
  return (
    <Box className = 'GridBoxes'>
        <SmallBox/>
        <SmallBox/>
        <SmallBox/>
        <SmallBox/>
    </Box>
  );
};
  