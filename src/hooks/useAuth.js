import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
} from '../redux/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  console.log('useAuth.js - isLoggedIn', isLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  console.log('useAuth.js - isRefreshing', isRefreshing);
  const user = useSelector(selectUser);


  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};