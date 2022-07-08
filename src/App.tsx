import React from 'react';

import { useAuthState } from 'react-firebase-hooks/auth';

import Header from './components/Header';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import { auth } from './service/firebase';

import loader from './assets/loader.svg';

import './scss/app.scss';
import { useAppDispatch, useAppSelector } from './hooks/hooks';
import { getAnime } from './redux/anime/slice';

function App() {
  const [user, loading] = useAuthState(auth);
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector((state) => state.sort.currentPage);
  const searchValue = useAppSelector((state) => state.sort.searchValue);

  const rating = useAppSelector((state) => state.sort.rating);
  const status = useAppSelector((state) => state.sort.status);
  const order = useAppSelector((state) => state.sort.sort.order);
  const sort = useAppSelector((state) => state.sort.sort.query);

  dispatch(
    getAnime({
      page: currentPage,
      letter: searchValue,
      rating,
      status,
      order,
      sort,
    }),
  );

  if (loading) return <img alt="loader" className="loader--all" src={loader} />;
  return (
    <div>
      <Header photo={user?.photoURL} />
      <div className="wrapper">{user ? <ProfilePage user={user} /> : <LoginPage />}</div>
    </div>
  );
}

export default App;
