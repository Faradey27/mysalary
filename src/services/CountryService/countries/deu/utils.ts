export interface PaymentValue {
  employee: number;
  employer: number;
}

export const withAccurencyFormating = (value: number) =>
  Math.floor(value * 1000) / 1000;
