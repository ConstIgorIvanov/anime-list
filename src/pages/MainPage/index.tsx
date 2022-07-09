import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import LoginPage from '../LoginPage';
import ProfilePage from '../ProfilePage';

import { auth } from '../../service/firebase';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { getAnime } from '../../redux/anime/slice';

const MainPage = () => {
  const [user] = useAuthState(auth);
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
  return <div className="wrapper">{user ? <ProfilePage user={user} /> : <LoginPage />}</div>;
};

export default MainPage;
