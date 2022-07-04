import React from 'react';
const Header = () => {
  return (
    <div className="header">
      <div className="header--wrapper">
        <div className="header__logo">
          {/* <img width="24px" alt="logo" src={logoSvg} /> */}
          <span>AnimeList</span>
        </div>
        <div className="header__right">
          <input className="input" placeholder="Search" />
          <div className="header__right__ico">ico</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
