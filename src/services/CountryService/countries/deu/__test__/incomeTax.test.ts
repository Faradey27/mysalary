import { getIncomeTaxValue } from '../taxes';

describe('German income tax (annually)', () => {
  it('returns correct value for low income group', () => {
    expect(getIncomeTaxValue(0)).toEqual({ employee: 0, employer: 0 });
    expect(getIncomeTaxValue(1000)).toEqual({ employee: 0, employer: 0 });
    expect(getIncomeTaxValue(9400)).toEqual({ employee: 0, employer: 0 });
    expect(getIncomeTaxValue(9408)).toEqual({ employee: 0, employer: 0 });
  });

  it('returns correct value for income from group 1', () => {
    expect(getIncomeTaxValue(9409)).toEqual({
      employee: 0.14,
      employer: 0,
    });
    expect(getIncomeTaxValue(10000)).toEqual({
      employee: 86.289,
      employer: 0,
    });
    expect(getIncomeTaxValue(12000)).toEqual({
      employee: 428.241,
      employer: 0,
    });
    expect(getIncomeTaxValue(14532)).toEqual({
      employee: 972.79,
      employer: 0,
    });
  });

  it('returns correct value for income from group 2', () => {
    expect(getIncomeTaxValue(14533)).toEqual({
      employee: 973.029,
      employer: 0,
    });
    expect(getIncomeTaxValue(22000)).toEqual({
      employee: 2881.115,
      employer: 0,
    });
    expect(getIncomeTaxValue(28000)).toEqual({
      employee: 4585.646,
      employer: 0,
    });
    expect(getIncomeTaxValue(35000)).toEqual({
      employee: 6767.204,
      employer: 0,
    });
    expect(getIncomeTaxValue(52000)).toEqual({
      employee: 12930.314,
      employer: 0,
    });
    expect(getIncomeTaxValue(57051)).toEqual({
      employee: 14997.63,
      employer: 0,
    });
  });

  it('returns correct value for income from group 3', () => {
    expect(getIncomeTaxValue(57052)).toEqual({
      employee: 14998.1,
      employer: 0,
    });
    expect(getIncomeTaxValue(75000)).toEqual({
      employee: 22536.26,
      employer: 0,
    });
    expect(getIncomeTaxValue(85000)).toEqual({
      employee: 26736.26,
      employer: 0,
    });
    expect(getIncomeTaxValue(95000)).toEqual({
      employee: 30936.26,
      employer: 0,
    });
    expect(getIncomeTaxValue(100000)).toEqual({
      employee: 33036.26,
      employer: 0,
    });
    expect(getIncomeTaxValue(150000)).toEqual({
      employee: 54036.26,
      employer: 0,
    });
    expect(getIncomeTaxValue(230000)).toEqual({
      employee: 87636.26,
      employer: 0,
    });
    expect(getIncomeTaxValue(270500)).toEqual({
      employee: 104646.26,
      employer: 0,
    });
  });

  it('returns correct value for income from group 3', () => {
    expect(getIncomeTaxValue(57052)).toEqual({
      employee: 14998.1,
      employer: 0,
    });
    expect(getIncomeTaxValue(75000)).toEqual({
      employee: 22536.26,
      employer: 0,
    });
    expect(getIncomeTaxValue(85000)).toEqual({
      employee: 26736.26,
      employer: 0,
    });
    expect(getIncomeTaxValue(95000)).toEqual({
      employee: 30936.26,
      employer: 0,
    });
    expect(getIncomeTaxValue(100000)).toEqual({
      employee: 33036.26,
      employer: 0,
    });
    expect(getIncomeTaxValue(150000)).toEqual({
      employee: 54036.26,
      employer: 0,
    });
    expect(getIncomeTaxValue(230000)).toEqual({
      employee: 87636.26,
      employer: 0,
    });
    expect(getIncomeTaxValue(270500)).toEqual({
      employee: 104646.26,
      employer: 0,
    });
  });

  it('returns correct value for high income group', () => {
    expect(getIncomeTaxValue(270501)).toEqual({
      employee: 104646.709,
      employer: 0,
    });
    expect(getIncomeTaxValue(400000)).toEqual({
      employee: 162921.26,
      employer: 0,
    });
    expect(getIncomeTaxValue(1000000)).toEqual({
      employee: 432921.26,
      employer: 0,
    });
    expect(getIncomeTaxValue(999999999)).toEqual({
      employee: 449982920.81,
      employer: 0,
    });
  });
});
