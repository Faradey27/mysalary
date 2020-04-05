import Est from './est';
import Deu from './deu';
import { Country, CountryInterface } from '../../../types';

const countries = new Map<Country, CountryInterface>();

countries.set(Country.EST, new Est());
countries.set(Country.DEU, new Deu());

export default countries;
