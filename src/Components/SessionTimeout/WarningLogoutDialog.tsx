import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import React, {useEffect, useState} from 'react';

interface IWarningLogOutDialogProps {
  openDialog: boolean;
  getRemainingTime: () => number;
  broadcastMessage: (data: string | number | object, emitOnSelf?: boolean | undefined) => boolean;
}
const MILLISECONDS_PER_SECOND = 1000;
const HALF_SECOND = 500;
const WarningLogOutDialog: React.FC<IWarningLogOutDialogProps> = ({openDialog, getRemainingTime, broadcastMessage}) => {
  const [countdown, setCountdown] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(Math.ceil(getRemainingTime() / MILLISECONDS_PER_SECOND));
    }, HALF_SECOND);

    return () => {
      clearInterval(interval);
    };
  }, [getRemainingTime]);

  return (
    <Dialog open={openDialog} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
      <DialogTitle id="alert-dialog-title">{'Are you still there?'}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {`If not, we'll close this session in ${countdown} sec`}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => broadcastMessage({action: 'SIGN_OUT'}, true)}>Sign out</Button>
        <Button onClick={() => broadcastMessage({action: 'STAY'}, true)}>{"I'm here"}</Button>
      </DialogActions>
    </Dialog>
  );
};

export default WarningLogOutDialog;
