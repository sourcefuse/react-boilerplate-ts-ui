import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import React, {memo} from 'react';

const PagePaper = ({title, children}) => {
  return (
    <Paper>
      {title && (
        <>
          <Typography sx={{padding: 2, textTransform: 'capitalize'}} component="h1" variant="h4">
            {title}
          </Typography>
          <Divider sx={{marginBottom: 2}} />
        </>
      )}
      <Box sx={{padding: 2}}>{children}</Box>
    </Paper>
  );
};

PagePaper.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default memo(PagePaper);
