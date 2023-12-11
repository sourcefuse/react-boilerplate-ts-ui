import FullscreenIcon from '@mui/icons-material/Fullscreen';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import {memo} from 'react';

const FullScreen = () => {
  const toggleFullscreen = () => {
    // Get the root element of the document
    const element = document.documentElement;

    // if document is not in fullscreen mode
    if (!document.fullscreenElement) {
      const requestFullscreen = element.requestFullscreen;

      /* Vender Prefix methods for requesting fullscreen
       * for firefox <= 64 and webkit based browser safari
       * || element.mozRequestFullScreen
       * || element.webkitRequestFullscreen;
       */
      if (requestFullscreen) {
        requestFullscreen.call(element);
      }
    } else {
      //
      // if document is already in fullscreen mode
      const exitFullscreen = document.exitFullscreen;

      /* Vender Prefix methods for exiting fullscreen
       * for firefox <= 64 and webkit based browser safari
       * || element.mozRequestFullScreen
       * || element.webkitRequestFullscreen;
       */
      if (exitFullscreen) {
        exitFullscreen.call(document);
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
