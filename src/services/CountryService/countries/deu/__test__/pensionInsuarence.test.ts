import { getPensionInsuranceValue } from '../insuarences';

describe('German pension insuarence (annually)', () => {
  it('returns correct value for salary lower than limit', () => {
    expect(getPensionInsuranceValue(0)).toEqual({ employee: 0, employer: 0 });
    expect(getPensionInsuranceValue(1000)).toEqual({
      employee: 93,
      employer: 93,
    });
    expect(getPensionInsuranceValue(9408)).toEqual({
      employee: 874.944,
      employer: 874.944,
    });
    expect(getPensionInsuranceValue(12000)).toEqual({
      employee: 1116,
      employer: 1116,
    });
    expect(getPensionInsuranceValue(35000)).toEqual({
      employee: 3255,
      employer: 3255,
    });
    expect(getPensionInsuranceValue(55000)).toEqual({
      employee: 5115,
      employer: 5115,
    });
    expect(getPensionInsuranceValue(81000)).toEqual({
      employee: 7533,
      employer: 7533,
    });
    expect(getPensionInsuranceValue(82000)).toEqual({
      employee: 7626,
      employer: 7626,
    });
    expect(getPensionInsuranceValue(82800)).toEqual({
      employee: 7700.4,
      employer: 7700.4,
    });
  });

  it('returns correct value for salary higher than limit', () => {
    expect(getPensionInsuranceValue(83000)).toEqual({
      employee: 7700.4,
      employer: 7700.4,
    });
    expect(getPensionInsuranceValue(94000)).toEqual({
      employee: 7700.4,
      employer: 7700.4,
    });
    expect(getPensionInsuranceValue(160000)).toEqual({
      employee: 7700.4,
      employer: 7700.4,
    });
    expect(getPensionInsuranceValue(290000)).toEqual({
      employee: 7700.4,
      employer: 7700.4,
    });
  });
});
