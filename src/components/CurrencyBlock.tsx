import React from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import { ITableAndBlock } from "./CryptoTable";
import { ICoinInfo } from "../App";

enum ActionType {
  SET_VALUE_TEXTAREA = "SET_VALUE_TEXTAREA",
  SET_VALUE_SELECT = "SET_VALUE_SELECT",
}

interface ICurrenciesChange {
  value1: string;
  value2: string;
  selectedOutCurrency: string;
  selectedInCurrency: string;
}

interface IAction {
  type: ActionType;
  payload: {
    value: string;
    nameToChange?: string;
    name: string;
  };
}

const initialState: ICurrenciesChange = {
  value1: "",
  value2: "",
  selectedOutCurrency: "BTC",
  selectedInCurrency: "USD",
};

const reducer: React.Reducer<ICurrenciesChange, IAction> = (state, action) => {
  switch (action.type) {
    case ActionType.SET_VALUE_TEXTAREA:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
        [action.payload.name === "value1" ? "value2" : "value1"]: action.payload
          .value,
      };
    case ActionType.SET_VALUE_SELECT:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
  }
};

const CurrencyBlock: React.FC<ITableAndBlock> = ({ classes, coinInfo }) => {
  const [state, dispatch] = React.useReducer<
    React.Reducer<ICurrenciesChange, IAction>
  >(reducer, initialState);
  console.log(state);

  const onUpdateField = (name: string, value: string) => {
    dispatch({
      type: ActionType.SET_VALUE_TEXTAREA,
      payload: {
        name,
        value,
      },
    });
  };

  const onUpdateSelect = (name: string, value: string) => {
    dispatch({
      type: ActionType.SET_VALUE_SELECT,
      payload: {
        name,
        value,
      },
    });
  };
  return (
    <Paper className={classes.paper}>
      <div className={classes.cryptoInputBox}>
        <FormControl className={classes.currencyInput}>
          <TextField
            type="number"
            label="Сумма"
            value={state.value1}
            onChange={(e: any) => onUpdateField("value1", e.target.value)}
          />
        </FormControl>
        <FormControl className={classes.currencyType}>
          <InputLabel shrink id="demo-simple-select-placeholder-label-label">
            Валюта
          </InputLabel>
          <Select
            value={state.selectedOutCurrency}
            onChange={(e: any) =>
              onUpdateSelect("selectedOutCurrency", e.target.value)
            }
          >
            {coinInfo &&
              coinInfo.map((coin: ICoinInfo) => (
                <MenuItem key={coin.price} value={coin.name}>
                  {coin.name}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </div>
      <div className={classes.cryptoInputBox}>
        <FormControl className={classes.currencyInput}>
          <TextField
            type="number"
            label="Сумма"
            value={state.value2}
            onChange={(e: any) => onUpdateField("value2", e.target.value)}
          />
        </FormControl>
        <FormControl className={classes.currencyType}>
          <InputLabel shrink id="demo-simple-select-placeholder-label-label">
            Валюта
          </InputLabel>
          <Select
            value={state.selectedInCurrency}
            onChange={(e: any) =>
              onUpdateSelect("selectedInCurrency", e.target.value)
            }
          >
            <MenuItem value="USD">USD</MenuItem>
            {coinInfo &&
              coinInfo.map((coin: ICoinInfo) => (
                <MenuItem key={coin.price} value={coin.name}>
                  {coin.name}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </div>
    </Paper>
  );
};

export default CurrencyBlock;
