import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setRating, setStatus, setSort } from '../../redux/sort/sort';
interface SelectorProps {
  id: string;
  options: string[];
  query?: string[];
}

const Selector: React.FC<SelectorProps> = ({ id, options, query }) => {
  const dispatch = useAppDispatch();
  const rating = useAppSelector((state) => state.sort.rating);
  const order = useAppSelector((state) => state.sort.sort.order);
  const queryI = useAppSelector((state) => state.sort.sort.query);
  const status = useAppSelector((state) => state.sort.status);

  const where = () => {
    switch (id) {
      case 'rating':
        return rating;
      case 'status':
        return status;
      case 'sort':
        return order + ' ' + queryI;
    }
  };
  const select = (id: string, item: string, index: number) => {
    switch (id) {
      case 'rating':
        dispatch(setRating(item));
        break;
      case 'status':
        dispatch(setStatus(item));
        break;
      case 'sort':
        dispatch(
          setSort({
            order: item.trim().replace(/[ ]+/g, ' ').split(' ')[0],
            query: query![index] || 'desc',
          }),
        );
    }
  };
  return (
    <div className="select">
      <input type="checkbox" id={id}></input>
      <div className="select__container">
        <label htmlFor={id}></label>
        <div className="select__wrapper">
          <p className="select__text">{where()}</p>
          <label className="select__button" htmlFor={id}></label>
        </div>
        <div className="select__options">
          {options.map((item, index) => (
            <div key={index} className="select__option">
              <label htmlFor={id} onClick={() => select(id, item, index)}></label>
              <div className="select__title">{item}</div>
            </div>
          ))}
        </div>
      </div>
      <label htmlFor={id} className="select__active-modal"></label>
    </div>
  );
};

export default Selector;
