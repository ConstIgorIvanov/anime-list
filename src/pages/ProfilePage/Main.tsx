import React from 'react';
import clsx from 'clsx';

import { Anime } from '../../redux/anime/types';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setCurrentPage } from '../../redux/sort/sort';

import AnimeItem from '../../components/AnimeItem';
import Selectors from '../../components/Selectors';
import Pagination from '../../components/Pagination';

import loader from '../../assets/loader.svg';

interface MainProps {
  uid: string;
  items: Anime[];
}

const Main: React.FC<MainProps> = ({ uid, items }) => {
  const dispatch = useAppDispatch();

  const status = useAppSelector((state) => state.anime.status);
  const pages = useAppSelector((state) => state.anime.pages);
  const category = useAppSelector((state) => state.category.category);
  const currentPage = useAppSelector((state) => state.sort.currentPage);

  const [visible, setVisible] = React.useState(false);
  const [value, setValue] = React.useState('alert');

  const CurrentPage = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  return (
    <div className="profile__main">
      <Selectors />
      <div className={clsx('alert', visible && 'alert--active')}>{value}</div>
      <div className="profile__main__list">
        {status ? (
          items.length === 0 ? (
            <div>Добавьте что-нибудь в список</div>
          ) : (
            items.map((item) => (
              <AnimeItem
                setValue={setValue}
                setVisible={setVisible}
                key={item.mal_id}
                {...item}
                uid={uid}
              />
            ))
          )
        ) : (
          <img alt="loader" className="loader--list" src={loader} />
        )}
      </div>
      {category === 'list' ? (
        <Pagination currentPage={currentPage} setCurrentPage={CurrentPage} pageCount={pages} />
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Main;
