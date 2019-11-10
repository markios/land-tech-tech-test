const { get } = require('lodash');

const responseEnvelope = ({ data, countPath }) => ({
  records: data,
  metadata: {
    totalCount: get(data, countPath, data).length,
  },
});

module.exports = responseEnvelope;
