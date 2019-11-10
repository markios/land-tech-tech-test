import React from 'react';
import GridCss from './Grid.module.css';

const GridItem = ({x, y, children}) => { 
  return (<div className={GridCss.Grid__item} style={({gridArea: `${x} / ${y}`})}>{children}</div>);
}

export default GridItem;