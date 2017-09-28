const cardData = () => {

  const unknown =
    () => ({name: 'UNKNOWN'})

  const type =
    (name, ids, lengths) => ({name, ids, lengths})

  const types =
    () => [
      type('AMEX', ['34', '37'], [15]),
      type('DISCOVER', ['6011'], [16]),
      type('MASTERCARD', ['51', '52', '53', '54', '55'], [16]),
      type('VISA', ['4'], [13, 16])]

  return {unknown, types}
}

module.exports = cardData
