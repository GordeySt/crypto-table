export enum ActionType {
  SET_VALUE_TEXTAREA = "SET_VALUE_TEXTAREA",
  SET_PRICES = "SET_PRICES",
}

export interface ICurrenciesChange {
  value1: string;
  value2: string;
  outPrice: number;
  inPrice: number;
}

export interface ITextareaAction {
  type: ActionType.SET_VALUE_TEXTAREA;
  payload: {
    value: string;
    name: string;
  };
}

export interface IPricesAction {
  type: ActionType.SET_PRICES;
  payload: {
    inPrice: number;
    outPrice: number;
  };
}

export type TAction = ITextareaAction | IPricesAction;
