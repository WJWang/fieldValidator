const _ = require('lodash');
// checkers
const textFieldChecker = (text, processors, validators) => {
  processors.forEach(processor => processor(text));
  // functions => [{ result: BOOL, word: String},... ] => { result: BOOL, word: String}
  return validators
    .map(validator => validator(text))
    .reduce((pre, cur) => ({
      result: pre.result && cur.result,
      words: _.isEmpty(cur.word) ? pre.words : pre.words.concat([cur.word]),
    }), { result: true, words: [] });
};

module.exports = {
  textFieldChecker,
};
