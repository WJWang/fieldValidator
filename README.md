# Validators

## processors
[Function]: value => value

Do some process to the target value and return it back.

## validators
[Function]: value => { result: [BOOL], word: [String] }

Validator the input value and return the result object.

## checkers
[Function]:(value, processors[Array], validators[Array]) => { result: [BOOL], words: [Array] }

Do all the processor function defined in processors and validators, return the result of.


```
const textEmailInput = checkers.textFieldChecker(
  "",
  [processors.trimProcessor],
  [validators.requiredValidator, validators.emailValidator]);

// { result: false, words: [ 'required', 'emailFormatErr' ] }  
```
