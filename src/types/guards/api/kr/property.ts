// types
import type * as types from 'types/api/kr/property';

export const isTypeProperty = (value: any): value is types.Property => {
  return value.lat !== undefined;
};

export const isTypePropertyGroup = (value: any): value is types.PropertyGroup => {
  return value.lat === undefined;
};
