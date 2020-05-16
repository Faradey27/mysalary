import { getAnnualNetIncome } from '../engine';

describe('German total taxes (annually)', () => {
  it.only('returns correct net income value', () => {
    // expect(getAnnualNetIncome(40000)).toEqual(50998.61);
    // expect(getAnnualNetIncome(55000)).toEqual(50998.61);
    // expect(getAnnualNetIncome(60000)).toEqual(50998.61);
    // expect(getAnnualNetIncome(70000)).toEqual(50998.61);
    // expect(getAnnualNetIncome(75000)).toEqual(50998.61);
    // expect(getAnnualNetIncome(80000)).toEqual(50998.61);
    // expect(getAnnualNetIncome(85000)).toEqual(48214.11);
    expect(getAnnualNetIncome(90000)).toEqual(50998.61);
    expect(getAnnualNetIncome(100000)).toEqual(56567.61);
    expect(getAnnualNetIncome(120000)).toEqual(67705.61);
    expect(getAnnualNetIncome(140000)).toEqual(78843.61);
    expect(getAnnualNetIncome(180000)).toEqual(101119.61);
    expect(getAnnualNetIncome(200000)).toEqual(112257.61);
    expect(getAnnualNetIncome(250000)).toEqual(140102.61);
    expect(getAnnualNetIncome(295000)).toEqual(164780.6);
    expect(getAnnualNetIncome(395000)).toEqual(217305.6);
    expect(getAnnualNetIncome(595000)).toEqual(322355.6);
    expect(getAnnualNetIncome(1000000)).toEqual(535081.85);
  });
});
