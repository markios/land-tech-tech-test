import React from 'react';
import IconsCss from './Icons.module.css';

export default ({classNames}) => {
  const styles = [IconsCss.Icons__item, classNames].join(' ');
  return (
    <svg className={styles}>
      <use xlinkHref="#icon-house"></use>
    </svg>
  );
}