import React from 'react';
import LoadingCss from './Loading.module.css';
import FontsCss from '../../common/style/fonts.module.css';
import ColoursCss from '../../common/style/colours.module.css';

const Loading = () =>  {
  const styles = [LoadingCss.Loading, FontsCss.mainFont, ColoursCss.colourSecondary, FontsCss.fontSizeL].join(' ');
  return (<div className={styles}>Loading</div>);
}

export default Loading;