import React from 'react';

interface HeaderProps {
  photo?: string | null;
}

const Header: React.FC<HeaderProps> = ({ photo }) => {
  return (
    <div className="header">
      <div className="header--wrapper">
        <div className="header__logo">
          <span>AnimeList</span>
        </div>
        <div className="header__right">
          <div className="header__right__ico">{photo ? <img src={photo} /> : null}</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
