import { mapPropertiesForGroup, formatToLocalCurrency } from './selectors';
import constants from './constants';


describe('Selectors', () => {

  it('exists', () => {
    expect(mapPropertiesForGroup).not.toBeUndefined();
  });


  describe('formatToLocalCurrency', () => {
    const TEST_SCENARIOS = [
      [100, '£100'],
      [1000, '£1,000'],
      [10000, '£10,000'],
      [100000, '£100,000'],
      [1000000, '£1,000,000'],
    ];

    it.each(TEST_SCENARIOS)('Correctly converts int %i to %s', (integer, expected) => {
      expect(formatToLocalCurrency(integer)).toEqual(expected);
    });
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
      expect(mapPropertiesForGroup).not.toBeUndefined();
    });

    it('correctly maps an empty list', () => {
      const state = {
        records: [],
      };

      // act
      const result = mapPropertiesForGroup(state);
      
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

      // act
      const results = mapPropertiesForGroup(state);

      // assert
      expect(results.find(({group}) => group === expectedGroup)).not.toBeUndefined();
    });
  });
});