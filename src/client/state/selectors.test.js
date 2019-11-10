import selectors from './selectors';
import constants from './constants';


describe('Selectors', () => {

  it('exists', () => {
    expect(selectors).not.toBeUndefined();
  });

  describe('mapPropertiesForGroup', () => {
    const HIGH_PRICE = 1000000;
    const TEST_SCENARIOS = [
      [HIGH_PRICE * 0.05, constants.ZERO_TO_FIVE],
      [HIGH_PRICE * 0.25, constants.FIVE_TO_TWENTY_FIVE],
      [HIGH_PRICE * 0.75, constants.TWENTY_FIVE_TO_SEVENTY_FIVE],
      [HIGH_PRICE * 0.95, constants.SEVENTY_FIVE_TO_NINETY_FIVE],
      [HIGH_PRICE, constants.NINETY_FIVE_TO_ONE_HUNDRED],
    ]

    it('provides a mapPropertiesForGroupSelector', () => {
      const state = {
        properties: [],
      };

      const propertySelectors = selectors(state);
      
      expect(propertySelectors.mapPropertiesForGroup).not.toBeUndefined();
    });

    it('correctly maps an empty list', () => {
      const state = {
        records: [],
      };

      const { mapPropertiesForGroup } = selectors(state);

      // act
      const result = mapPropertiesForGroup();
      
      expect(result).toEqual([]);
    });

    it.each(TEST_SCENARIOS)('Correctly maps price of %i to %s', (price, expectedGroup) => {
      const state = {
        records: [{
          price
        }, {
          price: HIGH_PRICE
        }],
      };

      const { mapPropertiesForGroup } = selectors(state);

      // act
      const results = mapPropertiesForGroup();
      expect(results.find(({group}) => group === expectedGroup)).not.toBeUndefined();
    });
  });
});