const identifier = (cardData) => {

  const matching = (slice, numberLength) => (cardData) => {

    const id = (ids) => {
      const sliceMatches = (id) => slice.startsWith(id)

      const containsSlice = (found, anId) => found || sliceMatches(anId)

      return ids.reduce(containsSlice, false)
    }

    const length = (typeLength) => typeLength.includes(numberLength)

    return id(cardData.type.id) && length(cardData.type.length)
  }

  const identify = (cardNumber) => {
    const toName =
      (data) => data.name

    const keepingName =
      (kept, name) => name || kept

    const firstSlice =
      (cardNumber) => cardNumber.slices()[0]

    return cardData
      .types()
      .filter(matching(firstSlice(cardNumber), cardNumber.length()))
      .map(toName)
      .reduce(keepingName, cardData.unknown())
  }

  return {identify}
}

module.exports = identifier
