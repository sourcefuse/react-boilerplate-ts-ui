import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import {memo, ReactNode} from 'react';

const PagePaper = ({title, children, description}: {title: string; children: ReactNode; description?: string}) => {
  return (
    <Paper sx={{padding: ' 15px 0 0 15px'}}>
      {title && (
        <>
          <Typography sx={{pl: 2, pt: 2, textTransform: 'capitalize', fontWeight: 'bold'}} component="h3" variant="h4">
            {title}
          </Typography>
        </>
      )}
      {description && <Typography sx={{padding: 2, color: '#525252'}}>{description}</Typography>}
      <Box sx={{padding: 2}}>{children}</Box>
    </Paper>
  );
};

export default memo(PagePaper);
