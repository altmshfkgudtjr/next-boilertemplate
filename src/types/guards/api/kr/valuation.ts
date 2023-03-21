// types
import type * as types from 'types/api/kr/valuation';

export const isTypeNavThree = (value: any): value is types.NavThree => {
  return value?.fiscalQuarter !== undefined;
};

export const isTypeNavYear = (value: any): value is types.NavYear => {
  return value?.fiscalQuarter === undefined;
};
