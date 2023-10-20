import BackdropLoader from 'Components/BackdropLoader/BackdropLoader';
import useAuth from 'Hooks/useAuth';
import {useState} from 'react';
import {useIdleTimer} from 'react-idle-timer';
import WarningLogOutDialog from './WarningLogoutDialog';

const SECONDS_PER_MINUTE = 60;
const MILLISECONDS_PER_SECOND = 1000;
const MINUTE_TO_MS = SECONDS_PER_MINUTE * MILLISECONDS_PER_SECOND;
const EXPIRY_TIME_IN_MIN = 15;
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
  expiryTimeInMinute = EXPIRY_TIME_IN_MIN,
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
