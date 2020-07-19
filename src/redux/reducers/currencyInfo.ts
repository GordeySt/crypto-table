import { IState, TSetsAction, SET_COINS, SET_CRYPTO } from "../types";

const initialState: any = {
  coins: [],
  currencyName: "",
};

export function currencyInfoReducer(
  state = initialState,
  action: TSetsAction
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
