import { useAuth } from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();
  console.log('loggedin in route', isLoggedIn)
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component
};