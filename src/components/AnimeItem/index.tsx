import React from 'react';
import { Anime } from '../../types/Anime';

const AnimeItem: React.FC<Anime> = ({
  mal_id,
  images,
  title,
  title_english,
  title_japanese,
  type,
  episodes,
  status,
  rating,
  score,
  synopsis,
  season,
  year,
  genres,
}) => {
  return (
    <div className="anime">
      <img alt="anime logo" src={images.jpg.image_url} className="anime__image"></img>
      <div className="anime__info">
        <div className="anime__info__title">
          {title_english} <span>{title_japanese}</span>
        </div>
        <div className="anime__info__year">{year}</div>
        <div className="anime__info__season">{season}</div>
        <div className="anime__info__genre">{genres.map((genre) => genre.name).join(', ')}</div>
        <div className="anime__info__synopsis">{synopsis}</div>
      </div>
    </div>
  );
};

export default AnimeItem;