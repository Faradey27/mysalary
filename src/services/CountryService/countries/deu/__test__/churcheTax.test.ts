import { getChurcheTaxValue } from '../taxes';

describe('German churche tax (annually)', () => {
  it('returns correct value', () => {
    expect(getChurcheTaxValue(0)).toEqual({ employee: 0, employer: 0 });
    expect(getChurcheTaxValue(1000)).toEqual({ employee: 90, employer: 0 });
    expect(getChurcheTaxValue(9400)).toEqual({ employee: 846, employer: 0 });
    expect(getChurcheTaxValue(55000)).toEqual({
      employee: 4950,
      employer: 0,
    });
    expect(getChurcheTaxValue(155000)).toEqual({
      employee: 13950,
      employer: 0,
    });
    expect(getChurcheTaxValue(355000)).toEqual({
      employee: 31950,
      employer: 0,
    });
  });
});
