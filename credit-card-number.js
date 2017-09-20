const number = (raw) => {
  const allBlankSpaces =
    () => /\s/g

  const blankSpace =
    () => ' '

  const noSpace =
    () => ''

  const digitsOnly =
    () => raw.replace(allBlankSpaces(), noSpace())

  const toArray =
    () => Array.from(digitsOnly())

  const length =
    () => digitsOnly().length

  const slices =
    () => raw.split(blankSpace())

  const calculable = () => {
    const toInt = (numericString) => parseInt(numericString)

    return toArray().map(toInt)
  }

  return {length, calculable, slices}
}

module.exports = number
