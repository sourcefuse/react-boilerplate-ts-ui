import {useOidcUser} from '@axa-fr/react-oidc';
import React, {memo} from 'react';

function WhoAmI() {
  const {oidcUser} = useOidcUser();

  /* eslint-disable */
  const PrettyPrintJson = memo(({data}: any) => (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  ));
  /* eslint-enable */

  return (
    <div>
      <PrettyPrintJson data={oidcUser}></PrettyPrintJson>
    </div>
  );
}

export default WhoAmI;
