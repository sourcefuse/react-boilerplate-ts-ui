import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useAuth from 'Hooks/useAuth';
import useConfig from 'Hooks/useConfig';
import React, {useCallback, useEffect, useRef, useState} from 'react';

const events = [
  // 'mousemove',
  // 'mousedown',
  'click',
  'keypress',
  'scroll',
];
const MINUTE_TO_MILISEC = 60 * 1000;

interface IWarningLogOutDialogProps {
  openDialog: boolean;
  closeDialog: () => void;
  cancelLogOut: () => void;
  logout: () => void;
  timer: number;
}
const WarningLogOutDialog: React.FC<IWarningLogOutDialogProps> = ({
  openDialog,
  closeDialog,
  cancelLogOut,
  logout,
  timer,
}) => {
  const [open, setOpen] = useState<boolean>(openDialog);
  const [countdown, setCountdown] = useState<number>(timer);
  const stayLoggedIn = () => {
    cancelLogOut();
    handleClose();
  };
  const doSignOut = () => {
    logout();
    handleClose();
  };
  const handleClose = () => {
    setOpen(false);
    closeDialog();
  };
  useEffect(() => {
    const decreaseTimer = setInterval(() => {
      setCountdown((c) => c - 1);
    }, 1000);
    return () => {
      clearInterval(decreaseTimer);
    };
  }, []);

  return (
    <Dialog open={open} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
      <DialogTitle id="alert-dialog-title">{'Are you still there?'}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {`If not, we'll close this session in ${countdown} sec`}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={doSignOut}>Sign out</Button>
        <Button onClick={stayLoggedIn}>{"I'm here"}</Button>
      </DialogActions>
    </Dialog>
  );
};

type SessionTimeoutProps = {
  enableWarningPopup?: boolean;
  warningPopupTime?: number;
};
const SessionTimeout = (props: SessionTimeoutProps) => {
  const {
    config: {storageSessionTimeKey, expiryTimeInMinute, warningAlertTimeoutInMinute},
  } = useConfig();
  const intervalFunc = useRef<NodeJS.Timer | null>(null);
  const warningTimerIntervalTime = useRef<number | null>(null);
  const {isLoggedIn, logout} = useAuth();

  const [showPopup, setShowPopup] = useState(false);
  const eventHandler = useCallback(() => {
    if (isLoggedIn) {
      sessionStorage.setItem(storageSessionTimeKey!, (Date.now() + expiryTimeInMinute * MINUTE_TO_MILISEC).toString());
    } else {
      sessionStorage.removeItem(storageSessionTimeKey!);
    }
  }, [isLoggedIn]);
  const attachEventListeners = useCallback(() => {
    eventHandler();
    events.forEach((event) => {
      window.addEventListener(event, eventHandler);
    });
  }, [eventHandler]);
  const removeEventListeners = useCallback(() => {
    events.forEach((event) => {
      window.removeEventListener(event, eventHandler);
    });
  }, [eventHandler]);
  const doCleanup = useCallback(() => {
    if (isLoggedIn) {
      logout();
    }
    warningTimerIntervalTime.current = null;
    removeEventListeners();
  }, [removeEventListeners, isLoggedIn]);
  const cancelLogOut = () => {
    attachEventListeners();
    warningTimerIntervalTime.current = null;
  };
  const resetTimer = () => {
    intervalFunc.current = setInterval(() => {
      const expiryTime = +sessionStorage.getItem(storageSessionTimeKey!)! || 0;
      const now = Date.now();
      const deltaTime = expiryTime - now;
      if (deltaTime < 0) {
        setShowPopup(false);
        doCleanup();
      } else if (deltaTime <= warningAlertTimeoutInMinute * MINUTE_TO_MILISEC) {
        if (!showPopup && !warningTimerIntervalTime.current) {
          removeEventListeners();
          setShowPopup(true);
          warningTimerIntervalTime.current = parseInt(`${deltaTime / 1000}`);
        }
      } else {
        if (showPopup) {
          setShowPopup(false);
        }
      }
    }, 1000);
  };
  useEffect(() => {
    if (isLoggedIn) {
      clearInterval(intervalFunc.current!);
      attachEventListeners();
      resetTimer();
    }
    return () => {
      clearInterval(intervalFunc.current!);
      removeEventListeners();
    };
  }, [isLoggedIn]);

  return (
    <>
      {showPopup && (
        <WarningLogOutDialog
          openDialog={showPopup}
          closeDialog={() => {
            setShowPopup(false);
          }}
          cancelLogOut={cancelLogOut}
          logout={doCleanup}
          timer={warningTimerIntervalTime.current!}
        />
      )}
    </>
  );
};

export default SessionTimeout;
