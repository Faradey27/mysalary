import { Currency } from '../../types';
import cachedCurrencyData from './currencyData.json';

interface CurrencyResponse {
  base: string;
  date: string;
  rates: {
    [key: string]: number;
  };
}

const CurrencyMap = {
  EUR: '€',
  USD: '$',
};

class CurrencyServices {
  private results: CurrencyResponse = cachedCurrencyData;

  public refreshCurrencyData = async () => {
    try {
      const response = await fetch(
        'https://api.exchangeratesapi.io/latest?base=EUR'
      );
      const json = await response.json();
      this.results = json as CurrencyResponse;
    } catch (e) {
      // TODO log it somewhere
    }
  };

  public convert = (
    value: number,
    fromCurrency: Currency,
    toCurrency: Currency
  ) => {
    const fromCurrencyValue = this.results.rates[fromCurrency] || 1;
    const toCurrencyValue = this.results.rates[toCurrency] || 1;

    if (!fromCurrencyValue || !toCurrencyValue) {
      throw new Error('Unsupported currency');
    }

    return (toCurrencyValue * value) / fromCurrencyValue;
  };

  public getSign = (currency: Currency) => {
    return CurrencyMap[currency];
  };
}

export default CurrencyServices;
