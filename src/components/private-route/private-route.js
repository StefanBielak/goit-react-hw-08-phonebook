import PropTypes from 'prop-types';
import { useAuth } from 'hook/useAuth';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ element, redirect }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? element : <Navigate to={redirect} />;
};

PrivateRoute.propTypes = {
  isLoggedIn: PropTypes.bool,
};
