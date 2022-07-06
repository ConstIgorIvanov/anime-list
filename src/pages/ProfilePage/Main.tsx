import React from 'react';
import AnimeItem from '../../components/AnimeItem';
import { Anime } from '../../types/Anime';

import searchSVG from '../../assets/search.svg';

const Main = () => {
  const [anime, setAnime] = React.useState<Anime[] | null>(null);
  React.useEffect(() => {
    fetch('https://api.jikan.moe/v4/anime')
      .then((data) => data.json())
      .then((res) => setAnime(res.data));
  }, []);
  return (
    <div className="profile__main">
      <div className="profile__main__top">
        <div>
          <div>Search</div>
          <div className="input--wrapper">
            <input type="text" className="input input--main__top" placeholder="Search" />
            <img className="search" width={'18px'} alt="search" src={searchSVG} />
          </div>
        </div>
        <div>
          <div>Status</div>
          <div className="select">
            <input type="checkbox" id="season"></input>
            <div className="select__container">
              <label htmlFor="season"></label>
              <div className="select__wrapper">
                <p className="select__text">{'SELECTED VALUE'}</p>
                <label className="select__button" htmlFor="season"></label>
              </div>

              <div className="select__options">
                <div className="select__option">
                  <label htmlFor="season" onClick={() => console.log('click')}></label>
                  <div className="select__title">airing</div>
                </div>
                <div className="select__option">
                  <label htmlFor="season" onClick={() => console.log('click')}></label>
                  <div className="select__title">complete</div>
                </div>
                <div className="select__option">
                  <label htmlFor="season" onClick={() => console.log('click')}></label>
                  <div className="select__title">upcoming</div>
                </div>
              </div>
            </div>
            <label htmlFor="season" className="select__active-modal"></label>
          </div>
        </div>
        <div>
          <div>Sort By</div>
          <div className="select">
            <input type="checkbox" id="sort"></input>
            <div className="select__container">
              <label htmlFor="sort"></label>
              <div className="select__wrapper">
                <p className="select__text">{'SELECTED VALUE'}</p>
                <label className="select__button" htmlFor="sort"></label>
              </div>
              <div className="select__options">
                <div className="select__option">
                  <label htmlFor="sort" onClick={() => console.log('click')}></label>
                  <div className="select__title">Score [a-z]</div>
                </div>
                <div className="select__option">
                  <label htmlFor="sort" onClick={() => console.log('click')}></label>
                  <div className="select__title">Score [z-a]</div>
                </div>
                <div className="select__option">
                  <label htmlFor="sort" onClick={() => console.log('click')}></label>
                  <div className="select__title">Year [a-z]</div>
                </div>
                <div className="select__option">
                  <label htmlFor="sort" onClick={() => console.log('click')}></label>
                  <div className="select__title">Year [z-a]</div>
                </div>
              </div>
            </div>
            <label htmlFor="sort" className="select__active-modal"></label>
          </div>
        </div>
      </div>
      <div className="profile__main__list">
        {anime ? (
          anime.map((item) => <AnimeItem key={item.mal_id} {...item} />)
        ) : (
          <div>Loading</div>
        )}
      </div>
    </div>
  );
};

export default Main;
