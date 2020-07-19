import React from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import { ITableAndBlock } from "../CryptoTable/types";
import { ICoinInfo } from "../../App";
import { setCrypto } from "../../redux/actions/currencyInfo";
import { useDispatch } from "react-redux";
import { ICurrenciesChange, TAction, ActionType } from "./types";

const reducer: React.Reducer<ICurrenciesChange, TAction> = (state, action) => {
  switch (action.type) {
    case ActionType.SET_VALUE_TEXTAREA:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
        [action.payload.name === "value1" ? "value2" : "value1"]:
          action.payload.name === "value1"
            ? (
                (Number(action.payload.value) * state.outPrice) /
                state.inPrice
              ).toFixed(2)
            : (
                (Number(action.payload.value) * state.inPrice) /
                state.outPrice
              ).toFixed(2),
      };
    case ActionType.SET_PRICES:
      return {
        ...state,
        outPrice: action.payload.outPrice,
        inPrice: action.payload.inPrice,
      };
  }
};

const CurrencyBlock: React.FC<ITableAndBlock> = ({
  classes,
  coinInfo,
  cryptoName,
}) => {
  const dispatch = useDispatch();
  const [selectedInCurrency, setSelectedInCurrency] = React.useState<string>(
    "BTC"
  );

  const outPrice =
    coinInfo.find((obj: ICoinInfo) => obj.name === cryptoName)?.price || 0;
  const inPrice =
    coinInfo.find((obj: ICoinInfo) => obj.name === selectedInCurrency)?.price ||
    0;

  const [state, localDispatch] = React.useReducer<
    React.Reducer<ICurrenciesChange, TAction>
  >(reducer, {
    value1: "",
    value2: "",
    outPrice: coinInfo.find((obj: ICoinInfo) => obj.name === "BTC")?.price || 0,
    inPrice: coinInfo.find((obj: ICoinInfo) => obj.name === "BTC")?.price || 0,
  });

  const onUpdateField = (name: string, value: string) => {
    localDispatch({
      type: ActionType.SET_VALUE_TEXTAREA,
      payload: {
        name,
        value,
      },
    });
  };

  React.useEffect(() => {
    localDispatch({
      type: ActionType.SET_PRICES,
      payload: {
        inPrice: inPrice,
        outPrice: outPrice,
      },
    });
  }, [inPrice, outPrice]);

  React.useEffect(() => {
    state.value1 = "";
    state.value2 = "";
  }, [state.value1, state.value2, cryptoName, selectedInCurrency]);

  const onUpdateOutSelect = (value: string) => {
    dispatch(setCrypto(value));
  };
  const onUpdateInSelect = (value: string) => {
    setSelectedInCurrency(value);
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
            value={cryptoName}
            onChange={(e: any) => onUpdateOutSelect(e.target.value)}
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
            value={selectedInCurrency}
            onChange={(e: any) => onUpdateInSelect(e.target.value)}
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
    </Paper>
  );
};

export default CurrencyBlock;
