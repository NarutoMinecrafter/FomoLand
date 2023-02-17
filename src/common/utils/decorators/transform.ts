import { Transform } from 'class-transformer';
import { isDateString } from 'class-validator';
import { isNumberString } from 'class-validator';
import { getChainHex } from '../functions';

export const ToBolean = () =>
  Transform(({ value }) =>
    value === 'true' ? true : value === 'false' ? false : value,
  );

export const ToDate = () =>
  Transform(({ value }) => (isDateString(value) ? new Date(value) : value));

export const ToNumber = () =>
  Transform(({ value }) => (isNumberString(value) ? Number(value) : value));

export const ToHexString = () =>
  Transform(({ value }) =>
    isNumberString(value) ? `0x${value.toString(16)}` : value,
  );

export const EvmChainToHex = () => Transform(({ value }) => getChainHex(value));
