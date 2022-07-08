import React from 'react';
import searchSVG from '../../assets/search.svg';
import Selector from './Selector';

import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import { setSearchValue } from '../../redux/sort/sort';

const Selectors = () => {
  const dispatch = useAppDispatch();
  const searchValue = useAppSelector((state) => state.sort.searchValue);
  const category = useAppSelector((state) => state.category.category);

  const SearchValue = (value: string) => {
    dispatch(setSearchValue(value));
  };

  if (category !== 'list') return <div></div>;
  return (
    <div className="profile__main__top">
      {' '}
      <div>
        <div>Search</div>

        <div className="input--wrapper">
          <input
            value={searchValue}
            onChange={(e) => SearchValue(e.target.value)}
            type="text"
            className="input input--main__top"
            placeholder="Search"
          />
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
