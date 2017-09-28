const test = require('ava')
const {accumulators} = require('common')

test('Sums all elements of an array of integers', $ =>
  $.is(accumulators().int(Array.of(2, 2, 2)), 6))
