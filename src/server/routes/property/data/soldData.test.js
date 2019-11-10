const soldData = require('./soldData');
const { readFileSync } = require('fs');

jest.mock('fs', () => ({
  readFileSync: jest.fn().mockReturnValue(`0 0 1000
1 1 200000`)
}));

describe('sold data formatting', () => {
  it('Correctly reads local file data', () => {
    soldData();

    expect(readFileSync).toHaveBeenCalledWith(expect.stringMatching(/sold-price-data.txt/), 'utf8');
  });

  it('Correctly formats output', () => {
    const data = soldData();
    const expectedData = [
      { x: '0', y: '0', price: 1000 },
      { x: '1', y: '1', price: 200000 },
    ];

    expect(data).toEqual(expectedData);
  });
});