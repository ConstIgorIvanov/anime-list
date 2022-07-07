import React from 'react';
import { logout } from '../../service/firebase';

interface SidebarProps {
  email: string | null;
  photoURL: string | null;
  displayName: string | null;
}

const Sidebar: React.FC<SidebarProps> = ({ email, photoURL, displayName }) => {
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
          <div className="profile__controller__item">List</div>
          <div className="profile__controller__item">Current</div>
          <div className="profile__controller__item">Planing</div>
          <div className="profile__controller__item">Completed</div>
          <div className="profile__controller__item">Paused</div>
          <div className="profile__controller__item">Dropped</div>
        </div>
      </div>
      <div className="profile__logout" onClick={logout}>
        Log out
      </div>
    </div>
  );
};

export default Sidebar;
