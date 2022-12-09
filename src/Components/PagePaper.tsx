import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import {memo, ReactNode} from 'react';

const PagePaper = ({title, children, description}: {title: string; children: ReactNode; description?: string}) => {
  return (
    <Paper>
      {title && (
        <>
          <Typography sx={{padding: 2, textTransform: 'capitalize'}} component="h1" variant="h4">
            {title}
          </Typography>
        </>
      )}
      {description && <Typography sx={{padding: 2}}>{description}</Typography>}
      <Box sx={{padding: 2}}>{children}</Box>
    </Paper>
  );
};

export default memo(PagePaper);
