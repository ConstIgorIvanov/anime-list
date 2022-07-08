import React from 'react';
import { useAppDispatch } from '../../hooks/hooks';
import { getItemCategories, logout } from '../../service/firebase';
import { getAnime, setAnime } from '../../redux/anime/slice';
interface SidebarProps {
  uid: string | null;
  email: string | null;
  photoURL: string | null;
  displayName: string | null;
}

const Sidebar: React.FC<SidebarProps> = ({ uid, email, photoURL, displayName }) => {
  const dispatch = useAppDispatch();

  const selectAnime = async (category: string) => {
    const items = await getItemCategories(uid, category);
    dispatch(setAnime(items));
    console.log(1);
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
          <div className="profile__controller__item" onClick={() => dispatch(getAnime())}>
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
