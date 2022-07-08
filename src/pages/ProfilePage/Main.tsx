import React from 'react';
import AnimeItem from '../../components/AnimeItem';
import Selectors from '../../components/Selectors';
import { Anime } from '../../redux/anime/types';

import loader from '../../assets/loader.svg';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import Pagination from '../../components/Pagination';
import { setCurrentPage } from '../../redux/sort/sort';

interface MainProps {
  uid: string;
  items: Anime[];
}

const Main: React.FC<MainProps> = ({ uid, items }) => {
  const dispatch = useAppDispatch();
  const status = useAppSelector((state) => state.anime.status);
  const category = useAppSelector((state) => state.category.category);
  const currentPage = useAppSelector((state) => state.sort.currentPage);

  const CurrentPage = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  return (
    <div className="profile__main">
      <Selectors />
      <div className="profile__main__list">
        {status ? (
          items.length === 0 ? (
            <div>Добавьте что-нибудь в список</div>
          ) : (
            items.map((item) => <AnimeItem key={item.mal_id} {...item} uid={uid} />)
          )
        ) : (
          <img alt="loader" className="loader--list" src={loader} />
        )}
      </div>
      {category === 'list' ? (
        <Pagination currentPage={currentPage} setCurrentPage={CurrentPage} />
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Main;
