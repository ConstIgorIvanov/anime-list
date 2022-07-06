import React from 'react';

import searchSVG from '../../assets/search.svg';

const Header = () => {
  return (
    <div className="header">
      <div className="header--wrapper">
        <div className="header__logo">
          <span>AnimeList</span>
        </div>
        <div className="header__right">
          {/* <div className="input--wrapper">
            <input type="text" className="input input--header" placeholder="Search" />
            <img className="search" width={'18px'} src={searchSVG} />
          </div> */}
          <div className="header__right__ico"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
