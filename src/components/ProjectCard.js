import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import GitHubIcon from '@mui/icons-material/GitHub';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
}));
export default function ReviewCard({title, subheader, image, description, techStack, expandDescription, githubURL}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ width: '100%'}}>
      <CardHeader
        sx={{textAlign: 'center'}}
        title={title}
        subheader={techStack}
      />
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#fff', 
        height: '40vh',    
        overflow: 'hidden'
      }}>
      <CardMedia
        component="img"
        image={image}
        alt={image}
        loading='lazy'
        sx={{
          maxHeight: '40vh',
          maxWidth: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '0.5rem',
          objectFit: 'contain',
         }}
      />
      </Box>
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'justify' }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{ padding: '1rem 1rem 1rem 1rem' }}>
        <IconButton
          aria-label="github"
          component="a"
          href={githubURL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
        </IconButton>
        <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
          <Box sx={{flexWrap: 'nowrap', display: 'flex', alignItems: 'center' }}>
            <Typography noWrap sx={{ mr: 1, color: 'text.secondary' }}>Read more</Typography>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
              label="Show More"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </Box>
        </Box>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography sx={{ marginBottom: '0.5rem', color: 'text.secondary', textAlign: 'justify'  }}>
            {subheader} 
          </Typography>
          <Typography sx={{textAlign: 'justify'}} >
            {expandDescription}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}