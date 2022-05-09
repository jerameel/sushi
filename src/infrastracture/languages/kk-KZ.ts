import numbro from 'numbro';

export default {
  languageTag: 'kk-KZ',
  delimiters: {
    thousands: ',',
    decimal: '.',
  },
  abbreviations: {
    thousand: 'k',
    million: 'm',
    billion: 'b',
    trillion: 't',
  },
  ordinal: (number) => {
    let b = number % 10;
    // eslint-disable-next-line no-bitwise
    return ~~((number % 100) / 10) === 1
      ? 'th'
      : b === 1
        ? 'st'
        : b === 2
          ? 'nd'
          : b === 3
            ? 'rd'
            : 'th';
  },
  currency: {
    position: 'postfix',
    symbol: '₸',
    code: 'KZT',
  },
  currencyFormat: {
    thousandSeparated: true,
    totalLength: 4,
    spaceSeparated: true,
    spaceSeparatedCurrency: true,
    average: true,
  },
  formats: {
    fourDigits: {
      totalLength: 4,
      spaceSeparated: true,
      average: true,
    },
    fullWithTwoDecimals: {
      thousandSeparated: true,
      mantissa: 2,
    },
    fullWithTwoDecimalsNoCurrency: {
      mantissa: 2,
      thousandSeparated: true,
    },
    fullWithNoDecimals: {
      output: 'currency',
      thousandSeparated: true,
      mantissa: 0,
    },
  },
} as numbro.NumbroLanguage;
