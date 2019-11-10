const { readFileSync } = require('fs');
const { resolve } = require('path');

const getSoldData = () => {
  const soldData = readFileSync(resolve(__dirname, './sold-price-data.txt'), 'utf8');
  const formatted = soldData.split('\n').map((line) => {
    const [x, y, price] = line.split(' ');
    return {
      x, y, price: Number(price)
    }
  });

  return () => formatted;
}

module.exports = getSoldData();