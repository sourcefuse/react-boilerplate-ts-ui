import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import {JSX} from 'react';

const BackdropLoader = (): JSX.Element => {
  return (
    <Backdrop open sx={{zIndex: 10000}}>
      <CircularProgress data-testid="circularProgress" sx={{color: 'secondary.dark'}} />
    </Backdrop>
  );
};

export default BackdropLoader;
