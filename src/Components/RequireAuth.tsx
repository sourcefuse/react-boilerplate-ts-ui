import useAuth from 'Hooks/useAuth';
import {Navigate, Outlet, useLocation} from 'react-router-dom';
const RequireAuth = () => {
  const {isLoggedIn} = useAuth();
  const location = useLocation();
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" state={{from: location}} replace />;
};

export default RequireAuth;
