import React from 'react';
import TooltipCss from './Tooltip.module.css';
import FontCss from '../../common/style/fonts.module.css';

const Tooltip = ({content = '', children}) => {
  const styles = [TooltipCss.Tooltip, FontCss.fontSizeXS].join(' ');
  return (<div data-content={content} className={styles}>{children}</div>);
};

export default Tooltip;