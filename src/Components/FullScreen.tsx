import FullscreenIcon from '@mui/icons-material/Fullscreen';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import React, {memo} from 'react';

const FullScreen = () => {
  const toggleFullscreen = () => {
    if (
      !document.fullscreenElement
      // /* alternative standard method */ !document.mozFullScreenElement &&
      // !document.webkitFullscreenElement
    ) {
      // current working methods
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
        // } else if (document.documentElement.mozRequestFullScreen) {
        //   document.documentElement.mozRequestFullScreen();
        // } else if (document.documentElement.webkitRequestFullscreen) {
        //   // document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        // } else if (document.mozCancelFullScreen) {
        //   document.mozCancelFullScreen();
        // } else if (document.webkitCancelFullScreen) {
        //   document.webkitCancelFullScreen();
      }
    }
  };

  return (
    <Tooltip title={'FullScreen'}>
      <IconButton onClick={toggleFullscreen}>
        <FullscreenIcon />
      </IconButton>
    </Tooltip>
  );
};

export default memo(FullScreen);
