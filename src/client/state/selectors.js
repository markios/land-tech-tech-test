import constants from './constants';

const getGroupFor = (percentage) => {
  switch(true) {
    case percentage < .06:
      return constants.ZERO_TO_FIVE;
    case percentage < .26:
      return constants.FIVE_TO_TWENTY_FIVE;
    case percentage < .76:
      return constants.TWENTY_FIVE_TO_SEVENTY_FIVE;
    case percentage < .96:
      return constants.SEVENTY_FIVE_TO_NINETY_FIVE;
    default:
      return constants.NINETY_FIVE_TO_ONE_HUNDRED;
  }
}

const selectors = (state) => ({
  mapPropertiesForGroup: () => {
    const highestValue = state.records.reduce((r, {price}) => price > r ? price : r, -1);
    return state.records.map((property) => {
      const group = getGroupFor(property.price / highestValue)
       return {
        ...property,
        group,
      }
    });
  }
});

export default selectors;
