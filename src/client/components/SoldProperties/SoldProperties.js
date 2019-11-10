import React from 'react';
import { useFetch } from '../../state/useFetch';
import {
  mapPropertiesForGroup,
  formatToLocalCurrency,
} from '../../state/selectors';
import constants from '../../state/constants';
import Grid from '../Grid/Grid';
import Loading from '../Loading/Loading';
import IconHouse from '../Icons/IconsHouse';
import HorizontalList from '../List/HorizontalList';
import GridItem from '../Grid/GridItem';
import Tooltip from '../Tooltip/Tooltip';
import Colours from '../../common/style/colours.module.css';
import SoldCss from './SoldProperties.module.css';
import FontsCss from '../../common/style/fonts.module.css';
import IconStyles from '../Icons/Icons.module.css';

const propertiesCharColours = {
  [constants.ZERO_TO_FIVE]: Colours.fillGroupOne,
  [constants.FIVE_TO_TWENTY_FIVE]: Colours.fillGroupTwo,
  [constants.TWENTY_FIVE_TO_SEVENTY_FIVE]: Colours.fillGroupThree,
  [constants.SEVENTY_FIVE_TO_NINETY_FIVE]: Colours.fillGroupFour,
  [constants.NINETY_FIVE_TO_ONE_HUNDRED]: Colours.fillGroupFive,
};

const propertiesNameSet = {
  [constants.ZERO_TO_FIVE]: '0 - 5%',
  [constants.FIVE_TO_TWENTY_FIVE]: '5% - 25%',
  [constants.TWENTY_FIVE_TO_SEVENTY_FIVE]: '25% - 75%',
  [constants.SEVENTY_FIVE_TO_NINETY_FIVE]: '75% - 95%',
  [constants.NINETY_FIVE_TO_ONE_HUNDRED]: '95% - 100%',
};

const SoldProperties = () => {
  const [data, loading, failed] = useFetch('/api/property/sold');
  const hasLoaded = !loading && !failed;
  const listStyles = [FontsCss.mainFont, FontsCss.fontSizeS, SoldCss.SoldProperties__List].join(' ');
  const errorStyles = [FontsCss.mainFont, FontsCss.fontSizeM, Colours.coloursError].join(' ');
  return (
    <section className={SoldCss.SoldProperties}>
      <div className={listStyles}>
        {hasLoaded &&
          <div role="contentinfo">
            <strong>Total Properties</strong>: {data.metadata.totalCount}
          </div>
        }
        <HorizontalList classNames={SoldCss.SoldProperties__List__Menu}>
          {Object.entries(propertiesCharColours).map(([key, colour]) => {
            return (
              <div key={`house_${key}`} className={SoldCss.SoldProperties__List__Menu__Item}>
                <IconHouse classNames={`${colour} ${IconStyles['Icons__item--lg']}`} />
                <span>{propertiesNameSet[key]}</span>
              </div>
            )
          })}
        </HorizontalList>
      </div>
      {loading && <Loading />}
      {failed && <p className={errorStyles}>Failed to fetch data</p>}
      {hasLoaded &&
        <Grid classNames={SoldCss.SoldProperties__Grid}>
          {mapPropertiesForGroup(data).map(({x, y, price, group}) => (
            <GridItem key={`${x}_${y}`} x={x} y={y}>
              <Tooltip content={formatToLocalCurrency(price)}>
                <IconHouse classNames={propertiesCharColours[group]} />
              </Tooltip>
            </GridItem>
          ))}
        </Grid>
      }
    </section>
  )
};

export default SoldProperties;
