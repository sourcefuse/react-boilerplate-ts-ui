import React, {ReactNode} from 'react';
import {useTheme, useMediaQuery, Breakpoint} from '@mui/material';

interface DeviceWidthProviderProps {
  breakpoint: Breakpoint;
  children: ReactNode;
}

/*
 * Wrapper for conditional renders for the different breakpoints
 * @param - breakpoint: xs,sm,md,lg,xl
 * @returns - true if device width is greater than
 * or equal to breakpoint
 */
const DeviceWidthProvider: React.FC<DeviceWidthProviderProps> = props => {
  const {breakpoint, children} = props;
  const theme = useTheme();
  const isGreaterThanBreakPoint = useMediaQuery(theme.breakpoints.up(breakpoint));

  return <>{isGreaterThanBreakPoint ? children : null}</>;
};

export default DeviceWidthProvider;
