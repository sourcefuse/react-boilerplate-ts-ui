import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import {memo, ReactNode} from 'react';

const PagePaper = ({title, children}: {title: string; children: ReactNode}) => {
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

export default memo(PagePaper);
