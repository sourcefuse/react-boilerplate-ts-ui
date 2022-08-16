import Slide from '@mui/material/Slide';
import {SnackbarProvider} from 'notistack';
import PropTypes from 'prop-types';
import React from 'react';

const NotificationProvider = ({children}) => {
  return (
    <SnackbarProvider
      TransitionComponent={Slide}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      autoHideDuration={2000}
    >
      {children}
    </SnackbarProvider>
  );
};

NotificationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NotificationProvider;
