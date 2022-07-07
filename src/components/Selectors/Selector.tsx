import React from 'react';

interface Selector {
  id: string;
  options: string[];
}

const Selector: React.FC<Selector> = ({ id, options }) => {
  return (
    <div className="select">
      <input type="checkbox" id={id}></input>
      <div className="select__container">
        <label htmlFor={id}></label>
        <div className="select__wrapper">
          <p className="select__text">{'SELECTED VALUE'}</p>
          <label className="select__button" htmlFor={id}></label>
        </div>
        <div className="select__options">
          {options.map((item, index) => (
            <div key={index} className="select__option">
              <label htmlFor={id} onClick={() => console.log('click')}></label>
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
