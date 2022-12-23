import SessionTimeout from 'Components/SessionTimeout';
import useConfig from 'Hooks/useConfig';
import AppRoutes from 'Routes/Routes';

function App() {
  const {config} = useConfig();
  return (
    <>
      <AppRoutes />
      {config?.enableSessionTimeout ? <SessionTimeout /> : null}
    </>
  );
}

export default App;
