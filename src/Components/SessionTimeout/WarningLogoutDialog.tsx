import React, {useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

interface IWarningLogOutDialogProps {
  openDialog: boolean;
  getRemainingTime: () => number;
  broadcastMessage: (data: string | number | object, emitOnSelf?: boolean | undefined) => boolean;
}
const WarningLogOutDialog: React.FC<IWarningLogOutDialogProps> = ({openDialog, getRemainingTime, broadcastMessage}) => {
  const [countdown, setCountdown] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(Math.ceil(getRemainingTime() / 1000));
    }, 500);

    return () => {
      clearInterval(interval);
    };
  });

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
