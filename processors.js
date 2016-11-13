const _ = require('lodash');
// processors
const trimProcessor = (text) => { text = _.trim(text); }

module.exports = {
  trimProcessor,
}
