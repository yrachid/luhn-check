const data = require('./card-data')
const identifier = require('./card-identifier')
const luhnCheck = require('./luhn-check')
const cardNumber = require('./card-number')

const visa =
  () => cardNumber('4111 1111 1111 1111')

const masterCard =
  () => cardNumber('5500 0000 0000 0004')

const invalidCard =
  () => cardNumber('5809 0000 0006 0010')

const americanExpress =
  () => cardNumber('3400 0000 0000 009')

const rubyQuizSampleCard =
  () => cardNumber('4408 0412 3456 7893')

const print = (card) => {
  console.log(`Card: ${identifier(data()).identify(card())}`)
  console.log(`   Valid: ${luhnCheck().validate(card())}`)
  console.log('')
}

Array
  .of(visa, masterCard, invalidCard, americanExpress, rubyQuizSampleCard)
  .forEach(print)
