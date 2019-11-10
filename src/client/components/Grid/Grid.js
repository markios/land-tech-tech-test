import React from 'react';
import GridCss from './Grid.module.css';

const Grid = ({ columns, rows, children, classNames }) => {
  const styles = [GridCss.Grid, classNames].join(' ');
  return (
    <div className={styles}>
      {children}
    </div>
  )
};

export default Grid;
