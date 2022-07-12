import React from 'react';
import styles from './Header.module.scss';
interface HeaderProps {
  photo?: string | null;
}

const Header: React.FC<HeaderProps> = ({ photo }) => {
  return (
    <div className={styles.header}>
      <div className={styles.header__wrapper}>
        <div className={styles.header__logo}>
          <div>
            <span>AnimeList</span>
          </div>
        </div>
        <div className={styles.header__right}>
          {photo ? (
            <div className={styles.header__right__ico}>
              <img src={photo} alt="logo" />{' '}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Header;
