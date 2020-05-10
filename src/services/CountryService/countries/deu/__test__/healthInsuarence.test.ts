import { getHealthInsuranceValue } from '../insuarences';

describe('German health insuarence (annually)', () => {
  it('returns correct value for salary lower than limit', () => {
    expect(getHealthInsuranceValue(0)).toEqual({ employee: 0, employer: 0 });
    expect(getHealthInsuranceValue(1000)).toEqual({
      employee: 77.5,
      employer: 77.5,
    });
    expect(getHealthInsuranceValue(9408)).toEqual({
      employee: 729.12,
      employer: 729.12,
    });
    expect(getHealthInsuranceValue(12000)).toEqual({
      employee: 930,
      employer: 930,
    });
    expect(getHealthInsuranceValue(35000)).toEqual({
      employee: 2712.5,
      employer: 2712.5,
    });
    expect(getHealthInsuranceValue(55000)).toEqual({
      employee: 4262.5,
      employer: 4262.5,
    });
    expect(getHealthInsuranceValue(56250)).toEqual({
      employee: 4359.375,
      employer: 4359.375,
    });
  });

  it('returns correct value for salary higher than limit', () => {
    expect(getHealthInsuranceValue(57250)).toEqual({
      employee: 4359.375,
      employer: 4359.375,
    });
    expect(getHealthInsuranceValue(83000)).toEqual({
      employee: 4359.375,
      employer: 4359.375,
    });
    expect(getHealthInsuranceValue(94000)).toEqual({
      employee: 4359.375,
      employer: 4359.375,
    });
    expect(getHealthInsuranceValue(160000)).toEqual({
      employee: 4359.375,
      employer: 4359.375,
    });
    expect(getHealthInsuranceValue(290000)).toEqual({
      employee: 4359.375,
      employer: 4359.375,
    });
  });
});
