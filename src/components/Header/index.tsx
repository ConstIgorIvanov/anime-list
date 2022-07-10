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
          {photo ? (
            <div className="header__right__ico">
              <img src={photo} alt="logo" />{' '}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Header;
