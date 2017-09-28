const test = require('ava')
const cardData = require('card-data')
const cardNumber = require('card-number')
const identifier = require('card-identifier')(cardData())

test('Identifies a MasterCard number', $ =>
  $.deepEqual(identifier.identify(cardNumber('5500 0000 0000 0004')), 'MASTER_CARD'))

test('Identifies a Visa number', $ =>
  $.deepEqual(identifier.identify(cardNumber('4111 1111 1111 1111')), 'VISA'))

test('Identifies an American Express number', $ =>
  $.deepEqual(identifier.identify(cardNumber('3400 0000 0000 009')), 'AMERICAN_EXPRESS'))

test('Identifies an Ruby Quiz example as Visa', $ =>
  $.deepEqual(identifier.identify(cardNumber('4408 0412 3456 7893')), 'VISA'))

test('Identifies invalid number as UNKNOWN', $ =>
  $.deepEqual(identifier.identify(cardNumber('5809 0000 0006 0010')), 'UNKNOWN'))
