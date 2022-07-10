import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../service/firebase';
import Header from './Header';
import loader from '../assets/loader.svg';
import { Outlet } from 'react-router-dom';
import { useAppDispatch } from '../hooks/hooks';
import { setUser } from '../redux/user/user';

const Layout = () => {
  const [user, loading] = useAuthState(auth);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (!loading) {
      user && dispatch(setUser(user));
    }
  }, [user]);

  if (loading) return <img alt="loader" className="loader--all" src={loader} />;
  return (
    <>
      <Header photo={user?.photoURL} />
      <Outlet />
    </>
  );
};

export default Layout;
