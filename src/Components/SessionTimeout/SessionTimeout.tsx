import {useState} from 'react';
import {useIdleTimer} from 'react-idle-timer';
import useAuth from 'Hooks/useAuth';
import useConfig from 'Hooks/useConfig';
import WarningLogOutDialog from './WarningLogoutDialog';
import BackdropLoader from 'Components/BackdropLoader/BackdropLoader';

const MINUTE_TO_MS = 60 * 1000;

const SessionTimeout = () => {
  const {
    config: {expiryTimeInMinute, warningAlertTimeoutInMinute},
  } = useConfig();
  const {logout, logoutLoading} = useAuth();
  const [showPopup, setShowPopup] = useState(false);

  const onIdle = () => {
    setShowPopup(false);
    logout();
  };

  const onPrompt = () => {
    setShowPopup(true);
  };

  const onMessage = (data: {action: string}) => {
    switch (data.action) {
      case 'SIGN_OUT':
        signOut();
        break;
      case 'STAY':
        stayLoggedIn();
        break;
    }
  };

  const {getRemainingTime, reset, message} = useIdleTimer({
    onIdle,
    onPrompt,
    promptBeforeIdle: warningAlertTimeoutInMinute * MINUTE_TO_MS,
    timeout: expiryTimeInMinute * MINUTE_TO_MS,
    throttle: 500,
    crossTab: true,
    leaderElection: true,
    syncTimers: 200,
    onMessage,
  });

  const signOut = async () => {
    setShowPopup(false);
    await logout();
  };

  const stayLoggedIn = () => {
    setShowPopup(false);
    reset();
  };

  return (
    <>
      {logoutLoading && <BackdropLoader />}
      {showPopup ? (
        <WarningLogOutDialog openDialog={showPopup} getRemainingTime={getRemainingTime} broadcastMessage={message} />
      ) : null}
    </>
  );
};

export default SessionTimeout;
