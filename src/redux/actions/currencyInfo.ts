import { SET_COINS, SET_CRYPTO } from "../types";

export const setCoins = (data: any) =>
  ({
    type: SET_COINS,
    payload: data,
  } as const);

export const setCrypto = (data: string) =>
  ({
    type: SET_CRYPTO,
    payload: data,
  } as const);
