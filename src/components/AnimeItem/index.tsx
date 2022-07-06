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
        <div className="anime__info__year">
          {' '}
          <span>Year:</span> {year || 'not found'}
        </div>
        <div className="anime__info__year">
          {' '}
          <span>Status:</span> {status}
        </div>
        <div className="anime__info__genre">
          <span>Genres:</span> {genres.map((genre) => genre.name).join(', ')}
        </div>
        <div className="anime__info__synopsis">{synopsis}</div>
      </div>
    </div>
  );
};

export default AnimeItem;
