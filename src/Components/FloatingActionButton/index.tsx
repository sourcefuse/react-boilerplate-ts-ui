import Fab, {FabProps} from '@mui/material/Fab';
import * as React from 'react';

const FloatingActionButton: React.FC<FabProps> = ({children, ...props}) => {
  return <Fab {...props}>{children}</Fab>;
};

export default React.memo(FloatingActionButton);
