import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PageNotFound.module.scss';

const PageNotFound = () => {
  return (
    <div className={styles.errorContainer}>
      <h2 className={styles.errorHeading}>Error 404</h2>
      <p className={styles.errorMessage}>Сторінку не знайдено. Неправильно набрано адресу або такої сторінки на сайті більше не існує.</p>
      <Link to='/' className={styles.homeLink}>Перейти на головну сторінку</Link>
    </div>
  );
}

export default PageNotFound;
