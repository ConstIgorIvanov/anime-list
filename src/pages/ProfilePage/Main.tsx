import React from 'react';
import AnimeItem from '../../components/AnimeItem';
import Selectors from '../../components/Selectors';
import { Anime } from '../../redux/anime/types';

import loader from '../../assets/loader.svg';
import { useAppSelector } from '../../hooks/hooks';

interface MainProps {
  uid: string;
  items: Anime[];
}

const Main: React.FC<MainProps> = ({ uid, items }) => {
  const status = useAppSelector((state) => state.anime.status);

  return (
    <div className="profile__main">
      <Selectors />
      <div className="profile__main__list">
        {status ? (
          items.map((item) => <AnimeItem key={item.mal_id} {...item} uid={uid} />)
        ) : (
          <img alt="loader" className="loader--list" src={loader} />
        )}
      </div>
    </div>
  );
};

export default Main;
