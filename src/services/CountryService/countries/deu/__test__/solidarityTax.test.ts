import { getSolidarityTaxValue } from '../taxes';

describe('German solidarity tax (annually)', () => {
  it('returns correct value', () => {
    expect(getSolidarityTaxValue(0)).toEqual({ employee: 0, employer: 0 });
    expect(getSolidarityTaxValue(1000)).toEqual({ employee: 0, employer: 0 });
    expect(getSolidarityTaxValue(9400)).toEqual({ employee: 0, employer: 0 });
    expect(getSolidarityTaxValue(12000)).toEqual({
      employee: 660,
      employer: 0,
    });
    expect(getSolidarityTaxValue(55000)).toEqual({
      employee: 3025,
      employer: 0,
    });
    expect(getSolidarityTaxValue(155000)).toEqual({
      employee: 8525,
      employer: 0,
    });
    expect(getSolidarityTaxValue(355000)).toEqual({
      employee: 19525,
      employer: 0,
    });
  });
});
