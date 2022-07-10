import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { logout } from '../../service/firebase';
import { getAnime, getAnimeFB } from '../../redux/anime/slice';
import { setCategory } from '../../redux/category/category';
import { setUser } from '../../redux/user/user';
import clsx from 'clsx';

interface SidebarProps {
  uid: string | null;
  email: string | null;
  photoURL: string | null;
  displayName: string | null;
}

const categoryName = ['current', 'planing', 'completed', 'paused', 'dropped'];

const Sidebar: React.FC<SidebarProps> = ({ uid, email, photoURL, displayName }) => {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector((state) => state.sort.currentPage);
  const category = useAppSelector((state) => state.category.category);
  const selectAnime = (category: string) => {
    dispatch(setCategory(category));
    dispatch(getAnimeFB({ uid, category }));
  };

  const onLogoutClick = () => {
    logout();
    dispatch(setUser(null));
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
          {categoryName.map((categoryN) => (
            <div
              className={clsx(
                'profile__controller__item',
                categoryN === category && 'profile__controller__item--active',
              )}
              onClick={() => selectAnime(categoryN)}>
              {categoryN}
            </div>
          ))}
        </div>
      </div>
      <div className="profile__logout" onClick={() => onLogoutClick()}>
        Log out
      </div>
    </div>
  );
};

export default Sidebar;
