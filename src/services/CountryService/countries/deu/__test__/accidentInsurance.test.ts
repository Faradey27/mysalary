import { getAccidentInsuranceValue } from '../insuarences';

describe('German accident insuarence (annually)', () => {
  it('returns correct value for salary lower than limit', () => {
    expect(getAccidentInsuranceValue(0)).toEqual({ employee: 0, employer: 0 });
    expect(getAccidentInsuranceValue(1000)).toEqual({
      employee: 0,
      employer: 11,
    });
    expect(getAccidentInsuranceValue(9408)).toEqual({
      employee: 0,
      employer: 103.488,
    });
    expect(getAccidentInsuranceValue(12000)).toEqual({
      employee: 0,
      employer: 132,
    });
    expect(getAccidentInsuranceValue(35000)).toEqual({
      employee: 0,
      employer: 385,
    });
    expect(getAccidentInsuranceValue(55000)).toEqual({
      employee: 0,
      employer: 605,
    });
    expect(getAccidentInsuranceValue(56250)).toEqual({
      employee: 0,
      employer: 618.75,
    });
  });

  it('returns correct value for salary higher than limit', () => {
    expect(getAccidentInsuranceValue(57250)).toEqual({
      employee: 0,
      employer: 618.75,
    });
    expect(getAccidentInsuranceValue(83000)).toEqual({
      employee: 0,
      employer: 618.75,
    });
    expect(getAccidentInsuranceValue(94000)).toEqual({
      employee: 0,
      employer: 618.75,
    });
    expect(getAccidentInsuranceValue(160000)).toEqual({
      employee: 0,
      employer: 618.75,
    });
    expect(getAccidentInsuranceValue(290000)).toEqual({
      employee: 0,
      employer: 618.75,
    });
  });
});
