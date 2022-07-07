import React from 'react';
import AnimeItem from '../../components/AnimeItem';
import Selectors from '../../components/Selectors';
import { Anime } from '../../redux/anime/types';

import loader from '../../assets/loader.svg';

interface MainProps {
  uid: string;
}

const Main: React.FC<MainProps> = ({ uid }) => {
  const [anime, setAnime] = React.useState<Anime[] | null>(null);

  React.useEffect(() => {
    fetch('https://api.jikan.moe/v4/anime')
      .then((data) => data.json())
      .then((res) => setAnime(res.data));
  }, []);

  return (
    <div className="profile__main">
      <Selectors />
      <div className="profile__main__list">
        {anime ? (
          anime.map((item) => <AnimeItem key={item.mal_id} {...item} uid={uid} />)
        ) : (
          <img alt="loader" className="loader--list" src={loader} />
        )}
      </div>
    </div>
  );
};

export default Main;
