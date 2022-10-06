import useAuth from 'Hooks/useAuth';
import {Navigate, Outlet, useLocation} from 'react-router-dom';
const RequireAuth = () => {
  const {loggedIn} = useAuth();
  const location = useLocation();
  return loggedIn ? <Outlet /> : <Navigate to="/login" state={{from: location}} replace />;
};

export default RequireAuth;
