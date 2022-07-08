import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { logout } from '../../service/firebase';
import { getAnime, getAnimeFB } from '../../redux/anime/slice';
import { setCategory } from '../../redux/category/category';

interface SidebarProps {
  uid: string | null;
  email: string | null;
  photoURL: string | null;
  displayName: string | null;
}

const Sidebar: React.FC<SidebarProps> = ({ uid, email, photoURL, displayName }) => {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector((state) => state.sort.currentPage);
  const selectAnime = (category: string) => {
    dispatch(setCategory(category));
    dispatch(getAnimeFB({ uid, category }));
  };

  const listClick = () => {
    dispatch(setCategory('list'));
    dispatch(getAnime({ page: currentPage, letter: '' }));
  };

  return (
    <div className="profile__sidebar">
      <div className="profile__sidebar__container">
        <div className="profile__info">
          <div className="profile__info__img">
            <img alt="profile" src={photoURL || 'src'} />
          </div>
          <div className="profile__info__name">{displayName}</div>
          <div className="profile__info__email">{email}</div>
        </div>
        <div className="profile__controller">
          <div className="profile__controller__item" onClick={() => listClick()}>
            List
          </div>
          <div className="profile__controller__item" onClick={() => selectAnime('current')}>
            Current
          </div>
          <div className="profile__controller__item" onClick={() => selectAnime('planing')}>
            Planing
          </div>
          <div className="profile__controller__item" onClick={() => selectAnime('completed')}>
            Completed
          </div>
          <div className="profile__controller__item" onClick={() => selectAnime('paused')}>
            Paused
          </div>
          <div className="profile__controller__item" onClick={() => selectAnime('dropped')}>
            Dropped
          </div>
        </div>
      </div>
      <div className="profile__logout" onClick={logout}>
        Log out
      </div>
    </div>
  );
};

export default Sidebar;
