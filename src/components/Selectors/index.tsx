import React from 'react';
import searchSVG from '../../assets/search.svg';
import Selector from './Selector';

import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import { setSearchValue } from '../../redux/sort/sort';

const Selectors = () => {
  const [queryValue, setQueryValue] = React.useState('');

  const dispatch = useAppDispatch();

  const category = useAppSelector((state) => state.category.category);

  const SearchValue = (e: string) => {
    if (e === 'Enter') {
      if (queryValue !== '') {
        dispatch(setSearchValue(queryValue));
        setQueryValue('');
      }
    }
  };

  const clickSearch = () => {
    if (queryValue !== '') {
      dispatch(setSearchValue(queryValue));
    }
  };

  if (category !== 'list') return <div></div>;
  return (
    <div className="profile__main__top">
      <div>
        <div>Search</div>
        <div className="input--wrapper">
          <input
            value={queryValue}
            onChange={(e) => setQueryValue(e.target.value)}
            onKeyDown={(e) => SearchValue(e.code)}
            type="text"
            className="input input--main__top"
            placeholder="Search"
          />
          <img
            onClick={() => clickSearch()}
            className="search"
            width={'18px'}
            alt="search"
            src={searchSVG}
          />
          <div className="input__substring">Нажмите Enter или на значок поиска </div>
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
          query={['desc', 'asc', 'desc', 'asc']}
          options={['score [a-z]', 'score [z-a]', 'start_date [a-z]', 'start_date [z-a]']}
        />
      </div>
    </div>
  );
};

export default Selectors;
