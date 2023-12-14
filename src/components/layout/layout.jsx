import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';

import { useAuth } from 'hook/useAuth';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/operations';

import { NavLink } from 'react-router-dom';

import {
  HomeIcon,
  LoginIcon,
  LogoutIcon,
  RegisterIcon,
  PhoneIcon,
  EmailIcon,
} from 'components/icons/icons';

const RoutesByAuthorization = () => {
  const { isLoggedIn, user } = useAuth();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logout());
  };

  return isLoggedIn ? (
    <>
      <button>
        <EmailIcon />
        {user.email}
      </button>
      <button onClick={handleClick}>
        <LogoutIcon />
        Logout
      </button>

      <NavLink to="/contacts">
        <PhoneIcon />
        Contacts
      </NavLink>
    </>
  ) : (
    <>
      <NavLink to="/login">
        <LoginIcon /> Login
      </NavLink>
      <NavLink to="/register">
        <RegisterIcon />
        Register
      </NavLink>
    </>
  );
};

export const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">
            <HomeIcon /> Home
          </NavLink>
          <RoutesByAuthorization />
        </nav>
        <Outlet />
      </header>
    </>
  );
};

RoutesByAuthorization.propTypes = {
  isLoggedIn: PropTypes.bool,
  dispatch: PropTypes.func,
  handleClick: PropTypes.func,
  input: PropTypes.string,
};
