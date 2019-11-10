import React from 'react';
import ListCss from './List.module.css';

const HorizontalList = ({children, classNames = ''}) => {
  const styles = [ListCss.List, ListCss['List--horizontal'], classNames].join(' ');
  return (
    <ul className={styles}>
      {React.Children.map(children, (child, i) => (<li>{child}</li>))}
    </ul>
  )
}

export default HorizontalList;