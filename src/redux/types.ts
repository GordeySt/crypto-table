import * as actions from "./actions/currencyInfo";

export interface IState {
  coins: ICoinInfo[];
  currencyName: string;
}

export const SET_COINS = "SET_COINS";
export const SET_CRYPTO = "SET_CRYPTO";

export interface ICoinInfo {
  name: string;
  fullName: string;
  imageUrl: string;
  price: number;
  volume24hour: number;
}

type inferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;

export type TActionTypes = ReturnType<inferValueTypes<typeof actions>>;
