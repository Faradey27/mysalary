import { getIncomeTaxValue } from '../engine';

describe('German salary (annually)', () => {
  it('returns correct value for low income group', () => {
    expect(getIncomeTaxValue(0)).toBe(0);
    expect(getIncomeTaxValue(1000)).toBe(0);
    expect(getIncomeTaxValue(9400)).toBe(0);
    expect(getIncomeTaxValue(9408)).toBe(0);
  });

  it('returns correct value for income from group 1', () => {
    expect(getIncomeTaxValue(9409).toFixed(2)).toBe('0.14');
    expect(getIncomeTaxValue(10000).toFixed(2)).toBe('86.29');
    expect(getIncomeTaxValue(12000).toFixed(2)).toBe('428.24');
    expect(getIncomeTaxValue(14532).toFixed(2)).toBe('972.79');
  });

  it('returns correct value for income from group 2', () => {
    expect(getIncomeTaxValue(14533).toFixed(2)).toBe('973.03');
    expect(getIncomeTaxValue(22000).toFixed(2)).toBe('2881.12');
    expect(getIncomeTaxValue(28000).toFixed(2)).toBe('4585.65');
    expect(getIncomeTaxValue(35000).toFixed(2)).toBe('6767.20');
    expect(getIncomeTaxValue(52000).toFixed(2)).toBe('12930.31');
    expect(getIncomeTaxValue(57051).toFixed(2)).toBe('14997.63');
  });

  it('returns correct value for income from group 3', () => {
    expect(getIncomeTaxValue(57052).toFixed(2)).toBe('14998.10');
    expect(getIncomeTaxValue(75000).toFixed(2)).toBe('22536.26');
    expect(getIncomeTaxValue(85000).toFixed(2)).toBe('26736.26');
    expect(getIncomeTaxValue(95000).toFixed(2)).toBe('30936.26');
    expect(getIncomeTaxValue(100000).toFixed(2)).toBe('33036.26');
    expect(getIncomeTaxValue(150000).toFixed(2)).toBe('54036.26');
    expect(getIncomeTaxValue(230000).toFixed(2)).toBe('87636.26');
    expect(getIncomeTaxValue(270500).toFixed(2)).toBe('104646.26');
  });

  it('returns correct value for income from group 3', () => {
    expect(getIncomeTaxValue(57052).toFixed(2)).toBe('14998.10');
    expect(getIncomeTaxValue(75000).toFixed(2)).toBe('22536.26');
    expect(getIncomeTaxValue(85000).toFixed(2)).toBe('26736.26');
    expect(getIncomeTaxValue(95000).toFixed(2)).toBe('30936.26');
    expect(getIncomeTaxValue(100000).toFixed(2)).toBe('33036.26');
    expect(getIncomeTaxValue(150000).toFixed(2)).toBe('54036.26');
    expect(getIncomeTaxValue(230000).toFixed(2)).toBe('87636.26');
    expect(getIncomeTaxValue(270500).toFixed(2)).toBe('104646.26');
  });

  it('returns correct value for high income group', () => {
    expect(getIncomeTaxValue(270501).toFixed(2)).toBe('104646.71');
    expect(getIncomeTaxValue(400000).toFixed(2)).toBe('162921.26');
    expect(getIncomeTaxValue(1000000).toFixed(2)).toBe('432921.26');
    expect(getIncomeTaxValue(999999999).toFixed(2)).toBe('449982920.81');
  });
});
