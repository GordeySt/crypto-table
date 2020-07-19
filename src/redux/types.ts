import { ICoinInfo } from "../App";

export interface IState {
  coins: ICoinInfo[];
  currencyName: string;
}

export const SET_COINS = "SET_COINS";
export const SET_CRYPTO = "SET_CRYPTO";

export interface ISetCryptoAction {
  type: typeof SET_CRYPTO;
  payload: string;
}

export interface ISetCoinsAction {
  type: typeof SET_COINS;
  payload: ICoinInfo;
}

export type TSetsAction = ISetCryptoAction | ISetCoinsAction;
