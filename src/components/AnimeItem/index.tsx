import React from 'react';
import { Anime } from '../../types/Anime';

const AnimeItem: React.FC<Anime> = ({
  mal_id,
  images,
  title_english,
  title_japanese,
  status,
  rating,
  score,
  synopsis,
  year,
  genres,
}) => {
  return (
    <div className="anime">
      <div className="anime--mask">
        <div className="anime--mask__item">Current</div>
        <div className="anime--mask__item">Planing</div>
        <div className="anime--mask__item">Completed</div>
        <div className="anime--mask__item">Paused</div>
        <div className="anime--mask__item">Dropped</div>
      </div>
      <img alt="anime logo" src={images.jpg.image_url} className="anime__image"></img>
      <div className="anime__info">
        <div className="anime__info__title">
          {title_english} <span>{title_japanese}</span>
        </div>
        <div className="anime__info__year">
          {' '}
          <span>Score:</span> {score || 'not found'}
        </div>
        <div className="anime__info__year">
          {' '}
          <span>Rating:</span> {rating || 'not found'}
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
