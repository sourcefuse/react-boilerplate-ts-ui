import {useState} from 'react';
import {useIdleTimer} from 'react-idle-timer';
import useAuth from 'Hooks/useAuth';
import WarningLogOutDialog from './WarningLogoutDialog';
import BackdropLoader from 'Components/BackdropLoader/BackdropLoader';

const MINUTE_TO_MS = 60 * 1000;

/**
 *
 * @param {number} expiryTimeInMinute - The duration of inactivity (in minutes) after which the user will be logged out.
 * @param {number} promptTimeBeforeIdleInMinute - The duration (in minutes) before the user becomes idle, when the warning dialog will be shown.
 */
export interface SessionTimeoutProps {
  expiryTimeInMinute: number;
  promptTimeBeforeIdleInMinute: number;
}

/**
 * This component manages the session timeout functionality.
 * It displays a warning dialog before logging out the user due to inactivity.
 *
 * @component
 *
 */
const SessionTimeout: React.FC<SessionTimeoutProps> = ({
  expiryTimeInMinute = 15,
  promptTimeBeforeIdleInMinute = 1,
}: SessionTimeoutProps) => {
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

  const onAction = () => {
    if (!isPrompted()) {
      setShowPopup(false);
    }
  };

  const {getRemainingTime, reset, message, isPrompted} = useIdleTimer({
    onIdle,
    onPrompt,
    promptBeforeIdle: promptTimeBeforeIdleInMinute * MINUTE_TO_MS,
    timeout: expiryTimeInMinute * MINUTE_TO_MS,
    throttle: 500,
    crossTab: true,
    leaderElection: true,
    syncTimers: 200,
    onMessage,
    onAction,
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
