const cardData = () => {

  const stereotype =
    (id, length) => ({id, length})

  const type =
    (name, id, length) => ({name, type: stereotype(id, length)})

  const unknown =
    () => 'UNKNOWN'

  const types =
    () => [
      type('AMEX', ['34', '37'], [15]),
      type('DISCOVER', ['6011'], [16]),
      type('MASTERCARD', ['51', '52', '53', '54', '55'], [16]),
      type('VISA', ['4'], [13, 16])]

  return {unknown, types}
}

module.exports = cardData
