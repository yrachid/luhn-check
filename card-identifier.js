const {accumulators, firstOf} = require('./common')

const identifier = (cardData) => {

  const byIdAndLengthOf = (number) => {
    const firstSliceOf =
      (cardNumber) => firstOf(cardNumber.slices()) || ''

    const byId =
      (cardType) =>
        accumulators().boolean(cardType.ids, (id) => firstSliceOf(number).startsWith(id))

    const byLength =
      (cardType) => cardType.lengths.includes(number.length())

    return (cardType) => byId(cardType) && byLength(cardType)
  }

  const identify =
    (cardNumber) =>
      (cardData
        .types()
        .find(byIdAndLengthOf(cardNumber))
        || cardData.unknown())
      .name

  return {identify}
}

module.exports = identifier
