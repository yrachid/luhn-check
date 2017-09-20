const {toInt} = require('./common')

const number = (raw) => {
  const allBlankSpaces =
    () => /\s/g

  const blankSpace =
    () => ' '

  const noSpace =
    () => ''

  const digitsOnly =
    (raw) => raw.replace(allBlankSpaces(), noSpace())

  const length =
    (raw) => () => digitsOnly(raw).length

  const slices =
    (raw) => () => raw.split(blankSpace())

  const calculable =
    (raw) => () => Array.from(digitsOnly(raw)).map(toInt())

  return { length: length(raw), calculable: calculable(raw), slices: slices(raw) }
}

module.exports = number
