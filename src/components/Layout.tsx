import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../service/firebase';
import Header from './Header';
import loader from '../assets/loader.svg';
import { Outlet } from 'react-router-dom';
const Layout = () => {
  const [user, loading] = useAuthState(auth);
  if (loading) return <img alt="loader" className="loader--all" src={loader} />;
  return (
    <>
      <Header photo={user?.photoURL} />
      <Outlet />
    </>
  );
};

export default Layout;
