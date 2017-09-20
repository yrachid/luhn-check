const identity =
  () => (element) => element

const firstOf =
  (array) => array.find(identity())

const toBoolean =
  (callback) => (accumulator, value) => callback(value) || accumulator

const toInt =
  () => (element) => parseInt(element)

const toSum =
  () => (accumulator, element) => accumulator + element

const accumulators = () => ({
  int: (array) => array.reduce(toSum(), 0),
  boolean: (array, callback, initialValue = false) => array.reduce(toBoolean(callback), initialValue)
})

module.exports = {firstOf, accumulators, identity, toInt}
