import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Loader from './loader/loader';
import { Home } from 'pages/home/home';
import { Login } from 'pages/login/login';
import { Layout } from 'components/layout/layout';
import { Contacts } from 'pages/contacts/contacts';
import { Register } from 'pages/register/register';
import { currentUser } from 'redux/auth/operations';
import { NotFound } from 'pages/not-found/not-found';
import { selectIsRefreshing } from 'redux/auth/selectors';
import { PrivateRoute } from './private-route/private-route';
import { ProtectedRoute } from './protected-route/protected-route';

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  if (isRefreshing) return <Loader />;

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/register"
            element={
              <ProtectedRoute element={<Register />} redirect="/contacts" />
            }
          />
          <Route
            path="/login"
            element={
              <ProtectedRoute element={<Login />} redirect="/contacts" />
            }
          />
          <Route
            path="/contacts"
            element={<PrivateRoute element={<Contacts />} redirect="/login" />}
          />
        </Route>
        <Route path="*" element={<NotFound />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};
