import { getUnemploymentInsuranceValue } from '../insuarences';

describe('German unemployment insuarence (annually)', () => {
  it('returns correct value for salary lower than limit', () => {
    expect(getUnemploymentInsuranceValue(0)).toEqual({
      employee: 0,
      employer: 0,
    });
    expect(getUnemploymentInsuranceValue(1000)).toEqual({
      employee: 12,
      employer: 12,
    });
    expect(getUnemploymentInsuranceValue(9408)).toEqual({
      employee: 112.896,
      employer: 112.896,
    });
    expect(getUnemploymentInsuranceValue(12000)).toEqual({
      employee: 144,
      employer: 144,
    });
    expect(getUnemploymentInsuranceValue(35000)).toEqual({
      employee: 420,
      employer: 420,
    });
    expect(getUnemploymentInsuranceValue(55000)).toEqual({
      employee: 660,
      employer: 660,
    });
    expect(getUnemploymentInsuranceValue(81000)).toEqual({
      employee: 972,
      employer: 972,
    });
    expect(getUnemploymentInsuranceValue(82000)).toEqual({
      employee: 984,
      employer: 984,
    });
    expect(getUnemploymentInsuranceValue(82800)).toEqual({
      employee: 993.6,
      employer: 993.6,
    });
  });

  it('returns correct value for salary higher than limit', () => {
    expect(getUnemploymentInsuranceValue(83000)).toEqual({
      employee: 993.6,
      employer: 993.6,
    });
    expect(getUnemploymentInsuranceValue(94000)).toEqual({
      employee: 993.6,
      employer: 993.6,
    });
    expect(getUnemploymentInsuranceValue(160000)).toEqual({
      employee: 993.6,
      employer: 993.6,
    });
    expect(getUnemploymentInsuranceValue(290000)).toEqual({
      employee: 993.6,
      employer: 993.6,
    });
  });
});
