const data = require('./card-data')
const identifier = require('./card-identifier')
const luhnCheck = require('./luhn-check')
const cardNumber = require('./credit-card-number')

const visa =
  () => cardNumber('4111 1111 1111 1111')

const masterCard =
  () => cardNumber('5500 0000 0000 0004')

const invalidCard =
  () => cardNumber('5809 0000 0000 0010')

const americanExpress =
  () => cardNumber('3400 0000 0000 009')

const rubyQuizSampleCard =
  () => cardNumber('4408 0412 3456 7893')

console.log(
  `Card: ${identifier(data()).identify(visa())} IsValid: ${luhnCheck().validate(visa())}`)

console.log(
  `Card: ${identifier(data()).identify(masterCard())} IsValid: ${luhnCheck().validate(masterCard())}`)

console.log(
  `Card: ${identifier(data()).identify(invalidCard())} IsValid: ${luhnCheck().validate(invalidCard())}`)

console.log(
  `Card: ${identifier(data()).identify(americanExpress())} IsValid: ${luhnCheck().validate(americanExpress())}`)

console.log(
  `Card: ${identifier(data()).identify(rubyQuizSampleCard())} IsValid: ${luhnCheck().validate(rubyQuizSampleCard())}`)
