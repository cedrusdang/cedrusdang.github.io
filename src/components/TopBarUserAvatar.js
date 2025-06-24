import {AvatarPic} from '../personalInfo.js';
import Avatar from '@mui/material/Avatar';
import React from "react";
import Box from '@mui/material/Box';

function UserAvatar({ onClick }) {
  const [isClicked, setClicked] = React.useState(false);

  const handleAvatarClick = (e) => {
    // Click 1st scalex3, 2nd scalex1
    if (!isClicked) {
      setClicked(true);
    } else {
      setClicked(false); 
      if (onClick) onClick(e); 
    }
  };

  return (
    <Box
      sx={{
        width: 52,
        height: 52,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '1px',
      }}
      onClick={handleAvatarClick}
    >
      <Avatar
        alt="User"
        src={AvatarPic}
        sx={{
          width: 36,
          height: 36,
          position: 'relative',
          justifyContent: 'center',
          border: isClicked ? '0.5px solid rgba(64, 255, 0, 0.28)' : '2px solid transparent',
          boxShadow: isClicked
            ? '0 0 12px 2px rgb(64, 220, 255)'
            : '0 0 0 0 rgba(56,180,255,0)',
          transform: isClicked
            ? 'scale(3) translateX(-10px) translateY(10px)'
            : 'none',
          transition: 'transform 1s cubic-bezier(.4,2,.6,1), box-shadow 0.18s, border 0.18s, margin 0.18s',
          cursor: 'pointer',
          zIndex: 10,
          animation: !isClicked ? 'avatar-blink 1s infinite ease-in-out alternate' : 'none',
          '@keyframes avatar-blink': {
            '0%':   { filter: 'drop-shadow(0 0 0px rgb(13, 140, 245))' },
            '100%': { filter: 'drop-shadow(0 0 3px rgb(41, 246, 89))' }
          }
        }}
      />
      
    </Box>
  );
}

export default UserAvatar;