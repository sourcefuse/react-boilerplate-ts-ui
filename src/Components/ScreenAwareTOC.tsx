import {Breakpoint} from '@mui/material';
import DeviceWidthProvider from 'Providers/DeviceWidthProvider';
import TableOfContent from './TableOfContent/TableOfContent';

const ScreenAwareTOC = ({breakpoint}: {breakpoint?: Breakpoint}) => {
  return (
    <DeviceWidthProvider breakpoint={breakpoint || 'md'}>
      <TableOfContent />
    </DeviceWidthProvider>
  );
};

export default ScreenAwareTOC;
