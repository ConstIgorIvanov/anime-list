import React from 'react';
import { logout } from '../../service/firebase';
const Sidebar = () => {
  return (
    <div className="profile__sidebar">
      <div className="profile__sidebar__container">
        <div className="profile__info">
          <div className="profile__info__img"></div>
          <div className="profile__info__name">name</div>
          <div className="profile__info__email">email@gmail.com</div>
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
