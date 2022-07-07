import React from 'react';
import searchSVG from '../../assets/search.svg';
import Selector from './Selector';
const Selectors = () => {
  return (
    <div className="profile__main__top">
      {' '}
      <div>
        <div>Search</div>
        <div className="input--wrapper">
          <input type="text" className="input input--main__top" placeholder="Search" />
          <img className="search" width={'18px'} alt="search" src={searchSVG} />
        </div>
      </div>
      <div>
        <div>Rating</div>
        <Selector id="rating" options={['g', 'pg', 'pg13', 'r17', 'r', 'rx']} />
      </div>
      <div>
        <div>Status</div>
        <Selector id="status" options={['airing', 'complete', 'upcoming']} />
      </div>
      <div>
        <div>Sort By</div>
        <Selector
          id="sort"
          options={['rating [a-z]', 'rating [z-a]', 'year [a-z]', 'year [z-a]']}
        />
      </div>
    </div>
  );
};

export default Selectors;
