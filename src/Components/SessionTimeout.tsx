import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {getAppConfiguration} from 'Configuration';
import useAuth from 'Hooks/useAuth';
import React, {useCallback, useEffect, useRef, useState} from 'react';

const appconfig = getAppConfiguration();

const STORAGE_SESSION_TIME_KEY = appconfig.storage_session_time_key || 'rbp_session_expiration_time';
const EXPIRY_TIME_IN_MINUTE = appconfig.expiry_time_in_minute || 15;
const WARNING_ALERT_TIMEOUT_IN_MINUTE = appconfig.warning_alert_timeout_in_minute || 1;
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
  logOut: () => void;
  timer: number;
}
const WarningLogOutDialog: React.FC<IWarningLogOutDialogProps> = ({
  openDialog,
  closeDialog,
  cancelLogOut,
  logOut,
  timer = WARNING_ALERT_TIMEOUT_IN_MINUTE * 60,
}) => {
  const [open, setOpen] = useState<boolean>(openDialog);
  const [countdown, setCountdown] = useState<number>(timer);
  const stayLoggedIn = () => {
    cancelLogOut();
    handleClose();
  };
  const doSignOut = () => {
    logOut();
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
  const intervalFunc = useRef(null);
  const warningTimerIntervalTime = useRef(null);
  const {loggedIn, logOut} = useAuth();

  const [showPopup, setShowPopup] = useState(false);
  const eventhandler = useCallback(() => {
    // console.log('trigerring eventhandler ');
    if (loggedIn) {
      sessionStorage.setItem(
        STORAGE_SESSION_TIME_KEY,
        (Date.now() + EXPIRY_TIME_IN_MINUTE * MINUTE_TO_MILISEC).toString(),
      );
    } else {
      sessionStorage.removeItem(STORAGE_SESSION_TIME_KEY);
    }
  }, [loggedIn]);
  const attachEventListeners = useCallback(() => {
    // console.log('trigerring attachEventListeners ');
    eventhandler();
    events.forEach((event) => {
      window.addEventListener(event, eventhandler);
    });
  }, [eventhandler]);
  const removeEventListeners = useCallback(() => {
    // console.log('trigerring removeEventListener ');
    events.forEach((event) => {
      window.removeEventListener(event, eventhandler);
    });
  }, [eventhandler]);
  const doCleanup = useCallback(() => {
    // console.log('trigerring doCleanup ');
    if (loggedIn) {
      logOut();
      // console.log('dologout');
    }
    warningTimerIntervalTime.current = null;
    removeEventListeners();
  }, [removeEventListeners, loggedIn]);
  const cancelLogOut = () => {
    // console.log('trigerring cancelLogOut ');
    attachEventListeners();
    warningTimerIntervalTime.current = null;
  };
  const resetTimer = () => {
    intervalFunc.current = setInterval(() => {
      const expiryTime = +sessionStorage.getItem(STORAGE_SESSION_TIME_KEY) || 0;
      const now = Date.now();
      const deltaTime = expiryTime - now;
      // console.log('deltaTime =>', deltaTime);
      if (deltaTime < 0) {
        // console.log('trigger logout');
        setShowPopup(false);
        doCleanup();
      } else if (deltaTime <= WARNING_ALERT_TIMEOUT_IN_MINUTE * MINUTE_TO_MILISEC) {
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
    if (loggedIn) {
      clearInterval(intervalFunc.current);
      attachEventListeners();
      resetTimer();
    }
    return () => {
      clearInterval(intervalFunc.current);
      removeEventListeners();
    };
  }, [loggedIn]);

  return (
    <>
      {showPopup && (
        <WarningLogOutDialog
          openDialog={showPopup}
          closeDialog={() => {
            setShowPopup(false);
          }}
          cancelLogOut={cancelLogOut}
          logOut={doCleanup}
          timer={warningTimerIntervalTime.current}
        />
      )}
    </>
  );
};

export default SessionTimeout;
