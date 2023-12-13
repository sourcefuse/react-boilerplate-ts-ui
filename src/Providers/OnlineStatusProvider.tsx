import React, {createContext, ReactNode, useContext, useEffect, useState} from 'react';

const OnlineStatusContext = createContext(true);

interface Props {
  children?: ReactNode;
}

const PING_RESOURCE = '/ping.txt';
const TIMEOUT_TIME_MS = 3000;
const onlinePollingInterval = 15000;

const timeout = (time: number, promise: Promise<Response>) => {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      reject(new Error('Request timed out.'));
    }, time);
    promise.then(resolve, reject);
  });
};

const checkOnlineStatus = async () => {
  const controller = new AbortController();
  const {signal} = controller;

  // If the browser has no network connection return offline
  if (!navigator.onLine) return navigator.onLine;

  //
  try {
    await timeout(
      TIMEOUT_TIME_MS,
      fetch(PING_RESOURCE, {
        method: 'GET',
        signal,
      }),
    );
    return true;
  } catch (error) {
    // Error Log
    console.error(error); // NOSONAR

    // This can be because of request timed out
    // so we abort the request for any case
    controller.abort();
  }
  return false;
};

export const OnlineStatusProvider: React.FC<Props> = ({children}) => {
  const [onlineStatus, setOnlineStatus] = useState<boolean>(true);

  const checkStatus = async () => {
    const online = await checkOnlineStatus();
    setOnlineStatus(online);
  };

  useEffect(() => {
    window.addEventListener('offline', () => {
      setOnlineStatus(false);
    });

    let id: NodeJS.Timer;
    if (process.env.NODE_ENV !== 'development') {
      // Add polling incase of slow connection
      id = setInterval(() => {
        checkStatus();
      }, onlinePollingInterval);
    }
    return () => {
      window.removeEventListener('offline', () => {
        setOnlineStatus(false);
      });

      clearInterval(id);
    };
  }, []);
  return <OnlineStatusContext.Provider value={onlineStatus}>{children}</OnlineStatusContext.Provider>;
};
export const useOnlineStatus = () => useContext(OnlineStatusContext);

export default useOnlineStatus;
