import { getNurseCareInsuranceValue } from '../insuarences';

describe('German nurse care insuarence (annually)', () => {
  it('returns correct value for salary lower than limit', () => {
    expect(getNurseCareInsuranceValue(0)).toEqual({ employee: 0, employer: 0 });
    expect(getNurseCareInsuranceValue(1000)).toEqual({
      employee: 17.75,
      employer: 15.25,
    });
    expect(getNurseCareInsuranceValue(9408)).toEqual({
      employee: 166.992,
      employer: 143.472,
    });
    expect(getNurseCareInsuranceValue(12000)).toEqual({
      employee: 212.999,
      employer: 183,
    });
    expect(getNurseCareInsuranceValue(35000)).toEqual({
      employee: 621.25,
      employer: 533.75,
    });
    expect(getNurseCareInsuranceValue(55000)).toEqual({
      employee: 976.249,
      employer: 838.75,
    });
    expect(getNurseCareInsuranceValue(56250)).toEqual({
      employee: 998.437,
      employer: 857.812,
    });
  });

  it('returns correct value for salary higher than limit', () => {
    expect(getNurseCareInsuranceValue(57250)).toEqual({
      employee: 998.437,
      employer: 857.812,
    });
    expect(getNurseCareInsuranceValue(83000)).toEqual({
      employee: 998.437,
      employer: 857.812,
    });
    expect(getNurseCareInsuranceValue(94000)).toEqual({
      employee: 998.437,
      employer: 857.812,
    });
    expect(getNurseCareInsuranceValue(160000)).toEqual({
      employee: 998.437,
      employer: 857.812,
    });
    expect(getNurseCareInsuranceValue(290000)).toEqual({
      employee: 998.437,
      employer: 857.812,
    });
  });
});
