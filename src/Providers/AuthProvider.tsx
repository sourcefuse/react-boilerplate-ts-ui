import {OidcProvider} from '@axa-fr/react-oidc';
import PropTypes from 'prop-types';
import React from 'react';
import {getOidcConfiguration} from '../Configuration/configuration';
// import {useIdleTimer} from 'react-idle-timer';

// @ts-ignore
function AuthProvider({children}) {
  // const Authentication = () => {
  //   return (
  //     <div>
  //       <h1>Authenticating</h1>
  //     </div>
  //   );
  // };
  //
  // const Unauthenticated = () => {
  //   return (
  //     <div>
  //       <h1>Not Authenticated</h1>
  //     </div>
  //   );
  // };
  //
  // const Forbidden = () => {
  //   return (
  //     <div>
  //       <h1>Forbidden</h1>
  //     </div>
  //   );
  // };
  //
  // const SessionLost = () => {
  //   return (
  //     <div>
  //       <h1>SessionLost</h1>
  //     </div>
  //   );
  // };

  return (
    <OidcProvider
      configuration={getOidcConfiguration()}
      // loggerLevel={oidcLog.DEBUG}
      // authenticating={Authentication}
      // notAuthenticated={Unauthenticated}
      // notAuthorized={Forbidden}
      // sessionLostComponent={SessionLost}
    >
      {children}
    </OidcProvider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
