import { Country, CountryInterface } from '../../../types';
import Deu from './deu';
import Est from './est';

const countries = new Map<Country, CountryInterface>();

countries.set(Country.EST, new Est());
countries.set(Country.DEU, new Deu());

export default countries;
