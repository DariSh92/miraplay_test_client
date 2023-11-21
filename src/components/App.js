import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import { refreshUser } from '../redux/auth/operations';
import { useAuth } from '../hooks/useAuth';
import { Loader } from './Loader/Loader';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';

const HomePage = lazy(() => import('../pages/Home/HomePage'));
const RegisterPage = lazy(() => import('../pages/Registration'));
const LoginPage = lazy(() => import('../pages/Login'));
const GamesPage = lazy(() => import('../pages/Games/Games'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing, isLoggedIn } = useAuth();
  console.log('isLoggedIn', isLoggedIn);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) {
    return <Loader />;
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            isLoggedIn ? <Navigate to="/games" /> : <RegisterPage />
          }
        />
        <Route
          path="/login"
          element={
            isLoggedIn ? <Navigate to="/games" /> : <LoginPage />
          }
        />
        <Route
          path="/games"
          element={
            <PrivateRoute redirectTo="/login" component={<GamesPage />} />
          }
        />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
