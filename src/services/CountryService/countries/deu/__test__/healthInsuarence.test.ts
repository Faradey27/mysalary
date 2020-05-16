import { getHealthInsuranceValue } from '../insuarences';

describe('German health insuarence (annually)', () => {
  it('returns correct value for salary lower than limit', () => {
    expect(getHealthInsuranceValue(0)).toEqual({ employee: 0, employer: 0 });
    expect(getHealthInsuranceValue(1000)).toEqual({
      employee: 78,
      employer: 78,
    });
    expect(getHealthInsuranceValue(9408)).toEqual({
      employee: 733.824,
      employer: 733.824,
    });
    expect(getHealthInsuranceValue(12000)).toEqual({
      employee: 936,
      employer: 936,
    });
    expect(getHealthInsuranceValue(35000)).toEqual({
      employee: 2730,
      employer: 2730,
    });
    expect(getHealthInsuranceValue(55000)).toEqual({
      employee: 4290,
      employer: 4290,
    });
    expect(getHealthInsuranceValue(56250)).toEqual({
      employee: 4387.5,
      employer: 4387.5,
    });
  });

  it('returns correct value for salary higher than limit', () => {
    expect(getHealthInsuranceValue(57250)).toEqual({
      employee: 4387.5,
      employer: 4387.5,
    });
    expect(getHealthInsuranceValue(83000)).toEqual({
      employee: 4387.5,
      employer: 4387.5,
    });
    expect(getHealthInsuranceValue(94000)).toEqual({
      employee: 4387.5,
      employer: 4387.5,
    });
    expect(getHealthInsuranceValue(160000)).toEqual({
      employee: 4387.5,
      employer: 4387.5,
    });
    expect(getHealthInsuranceValue(290000)).toEqual({
      employee: 4387.5,
      employer: 4387.5,
    });
  });
});
