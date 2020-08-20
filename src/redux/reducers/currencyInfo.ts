import { IState, TActionTypes, SET_COINS, SET_CRYPTO } from "../types";

const initialState: any = {
  coins: [],
  currencyName: "BTC",
};

export function currencyInfoReducer(
  state = initialState,
  action: TActionTypes
): IState {
  switch (action.type) {
    case SET_COINS:
      return {
        ...state,
        coins: action.payload,
      };
    case SET_CRYPTO:
      return {
        ...state,
        currencyName: action.payload,
      };
    default:
      return state;
  }
}
