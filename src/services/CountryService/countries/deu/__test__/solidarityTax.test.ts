import { getSolidarityTaxValue } from '../taxes';

describe('German solidarity tax (annually)', () => {
  it('returns correct value', () => {
    expect(getSolidarityTaxValue(0)).toEqual({ employee: 0, employer: 0 });
    expect(getSolidarityTaxValue(500)).toEqual({ employee: 0, employer: 0 });
    expect(getSolidarityTaxValue(972)).toEqual({ employee: 0, employer: 0 });
    expect(getSolidarityTaxValue(973)).toEqual({ employee: 0.2, employer: 0 });
    expect(getSolidarityTaxValue(978)).toEqual({ employee: 1.2, employer: 0 });
    expect(getSolidarityTaxValue(1023)).toEqual({
      employee: 10.2,
      employer: 0,
    });
    expect(getSolidarityTaxValue(1090)).toEqual({
      employee: 23.6,
      employer: 0,
    });
    expect(getSolidarityTaxValue(1315)).toEqual({
      employee: 68.6,
      employer: 0,
    });
    expect(getSolidarityTaxValue(1340)).toEqual({
      employee: 73.7,
      employer: 0,
    });
    expect(getSolidarityTaxValue(5040)).toEqual({
      employee: 277.2,
      employer: 0,
    });
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
