import {
  SET_COINS,
  SET_CRYPTO,
  ISetCoinsAction,
  ISetCryptoAction,
} from "../types";

export function setCoins(data: any): ISetCoinsAction {
  return {
    type: SET_COINS,
    payload: data,
  };
}

export function setCrypto(data: string): ISetCryptoAction {
  return {
    type: SET_CRYPTO,
    payload: data,
  };
}
