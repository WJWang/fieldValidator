const _ = require('lodash');

// validators
const requiredValidator = (text) => (
  _.isEmpty(text) ? { result: false, word: 'required' } : { result: true }
);

const passwordValidator = text => re => {
  if (!re) re = /^[a-zA-Z0-9]{8,12}$/g;
  return (re.test(text)) ? { result: true } : { result: false, word: 'passwdFormatErr' };
};

const passwordConfirmValidator = checkField => text => (
  _.isEqual(text, checkField) ? { result: true } : { result: false, word: 'passwdConfirmErr' }
);

const emailValidator = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return (re.test(email)) ? { result: true } : { result: false, word: 'emailFormatErr' };
};

module.exports = {
  requiredValidator,
  passwordValidator,
  passwordConfirmValidator,
  emailValidator,
};
