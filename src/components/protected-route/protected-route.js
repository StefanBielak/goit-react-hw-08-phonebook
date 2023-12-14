import PropTypes from 'prop-types';
import { useAuth } from 'hook/useAuth';
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ element, redirect }) => {
  const { isLoggedIn } = useAuth();
  return !isLoggedIn ? element : <Navigate to={redirect} />;
};

ProtectedRoute.propTypes = {
  isLoggedIn: PropTypes.bool,
};
