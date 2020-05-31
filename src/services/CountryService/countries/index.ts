import { Country, CountryInterface } from '../../../types';
import Est from './est';

const countries = new Map<Country, CountryInterface>();

countries.set(Country.EST, new Est());

export default countries;
