import React from 'react';

import { useAuthState } from 'react-firebase-hooks/auth';

import Header from './components/Header';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import { auth } from './service/firebase';

import loader from './assets/loader.svg';

import './scss/app.scss';
import { useAppDispatch } from './hooks/hooks';
import { getAnime } from './redux/anime/slice';

function App() {
  const [user, loading] = useAuthState(auth);
  const dispatch = useAppDispatch();
  dispatch(getAnime());
  if (loading) return <img alt="loader" className="loader--all" src={loader} />;
  return (
    <div>
      <Header />
      <div className="wrapper">{user ? <ProfilePage user={user} /> : <LoginPage />}</div>
    </div>
  );
}

export default App;
