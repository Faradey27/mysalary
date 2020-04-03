import cachedCurrencyData from './currencyData.json';

interface CurrencyResponse {
  base: string;
  date: string;
  rates: {
    [key: string]: number;
  }
}

class Currency {
  private results: CurrencyResponse = cachedCurrencyData;

  public refreshCurrencyData = async () => {
    try {
      const response = await fetch('https://api.exchangeratesapi.io/latest?base=EUR');
      const json = await response.json();
      this.results = json as CurrencyResponse;
    } catch (e) {
      // TODO log it somewhere
    }
  }
}

export default Currency;