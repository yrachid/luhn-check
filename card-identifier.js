const identifier = (cardData) => {

  const byIdAndLength = (number) => {
    const firstSliceOf =
      (cardNumber) => cardNumber.slices()[0]

    const INITIAL_VALUE = false

    const byId =
      (cardType) =>
        cardType.ids.reduce((hasMatch, anId) => hasMatch || firstSliceOf(number).startsWith(anId), INITIAL_VALUE)

    const byLength =
      (cardType) => cardType.lengths.includes(number.length())

    return (cardType) => byId(cardType) && byLength(cardType)
  }

  const identify =
    (cardNumber) =>
      (cardData
        .types()
        .find(byIdAndLength(cardNumber))
        || cardData.unknown())
      .name

  return {identify}
}

module.exports = identifier
