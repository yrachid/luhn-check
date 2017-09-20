const identity =
  () => (element) => element

const firstOf =
  (array) => array.find(identity())

const toBoolean =
  (callback) => (accumulator, value) => callback(value) || accumulator

const toInt =
  () => (element) => parseInt(element)

const reduceToBoolean =
  (array, callback, initialValue = false) => array.reduce(toBoolean(callback), initialValue)

module.exports = {firstOf, reduceToBoolean, identity, toInt}
