const toLuhnNumber = (reversedCardNumber) => {

  const luhnDouble = (value, index) => {

    const double =
      (value) => value * 2

    const luhnLimit =
      (value) => value > 9 ? value - 9 : value

    const odd =
      (index) => index % 2 !== 0

    return odd(index) ? luhnLimit(double(value)) : value
  }

  const summing =
    (acummulated, value) => acummulated + value

  return reversedCardNumber.map(luhnDouble).reduce(summing)
}

const isValid =
  (value) => value % 10 === 0

const validate =
  (creditCardNumber) =>
    isValid(toLuhnNumber(creditCardNumber.calculable().reverse()))

module.exports = () => ({validate})
