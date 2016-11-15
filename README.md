# Validators

## processors
``[Function]: value => value``

Do some process to the target value and return it back.

```
const trimProcessor = (text) => text.trim();

let testWord = '  test';
trimProcessor(testWord);
// testWord => 'test'
```

## validators
``[Function]: value => [ (args...) ] => { result: [BOOL], word: [String] }``

Validator the input value and return the result object.

```
const passwordValidator = text => re => {
  return (re.test(text)) ? { result: true } : { result: false, word: 'passwdFormatErr' };
};

passwordValidator('testWord')(/^[a-zA-Z0-9]{8,12}$/g)

// { result: false, word: 'passwdFormatErr' }
```

## checkers
``[Function]:(value, processors[Array], validators[Array]) => { result: [BOOL], words: [Array] }``

Execute all the functions defined in processors and validators, and collect all results in one result object.

```
const textEmailInput = checkers.textFieldChecker(
  "",  // input value
  [processors.trimProcessor], // an array of processors
  [validators.requiredValidator, validators.emailValidator]); // an array of validators

// {
//   result: false,  --> total result of all validators
//   words: [
//    'required',   --> specific validator error message
//    'emailFormatErr'
//   ]
// }  
```
