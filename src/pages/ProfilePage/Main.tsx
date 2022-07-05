import React from 'react';
import AnimeItem from '../../components/AnimeItem';
import { Anime } from '../../types/Anime';

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
          <div>input</div>
        </div>
        <div>
          <div> Year</div>
          <div>input</div>
        </div>
        <div>
          <div>Rating</div>
          <div>input</div>
        </div>
        <div>
          <div>Sort By</div>
          <div>input</div>
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
