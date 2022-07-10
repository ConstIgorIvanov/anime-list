import React from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { getAnimeFB } from '../../redux/anime/slice';
import { Anime } from '../../redux/anime/types';
import { addItem } from '../../service/firebase';

interface AnimeItemProps extends Anime {
  uid: string;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const AnimeItem: React.FC<AnimeItemProps> = ({
  uid,
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
  setVisible,
  setValue,
}) => {
  const category = useAppSelector((state) => state.category.category);

  const dispatch = useAppDispatch();

  const Add = (base: string) => {
    addItem(
      uid,
      base,
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
    );
    if (category === 'list') {
      setVisible(true);
      setValue(`${title_english || title_japanese} добавлен в ${base}`);
      setTimeout(() => {
        setVisible(false);
      }, 2000);
    }
    if (category !== 'list') {
      dispatch(getAnimeFB({ uid, category }));
    }
  };
  return (
    <div className="anime">
      <div className="anime--mask">
        <div className="anime--mask__item" onClick={() => Add('current')}>
          Current
        </div>
        <div className="anime--mask__item" onClick={() => Add('planing')}>
          Planing
        </div>
        <div className="anime--mask__item" onClick={() => Add('completed')}>
          Completed
        </div>
        <div className="anime--mask__item" onClick={() => Add('paused')}>
          Paused
        </div>
        <div className="anime--mask__item" onClick={() => Add('dropped')}>
          Dropped
        </div>
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
        {/* <div className="anime__info__more">Подробнее</div> */}
      </div>
    </div>
  );
};

export default AnimeItem;
