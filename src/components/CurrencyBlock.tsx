import React from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import { ITableAndBlock } from "./CryptoTable";
import { ICoinInfo } from "../App";

interface ICurrenciesChange {
  value1: string,
  value2: string
}

function CurrencyBlock({ classes, coinInfo }: ITableAndBlock) {
  

  const [firstCurrency, setFirstCurrency] = React.useState<string>("BTC");
  const [secondCurrency, setSecondCurrency] = React.useState<string>("USD");
  const [firstInput, setFirstInput] = React.useState<string>("");
  const [secondInput, setSecondInput] = React.useState<string>("");

  const onHandleFirstChange = (e: any) => {
    setFirstCurrency(e.target.value);
  };
  const onHandleSecondChange = (e: any) => {
    setSecondCurrency(e.target.value);
  };
  const onHandleFirstInput = (e: any) => {
    setFirstInput(e.target.value);
  };
  const onHandleSecondInput = (e: any) => {
    setSecondInput(e.target.value);
  };
  return (
    <Paper className={classes.paper}>
      <div className={classes.cryptoInputBox}>
        <FormControl className={classes.currencyInput}>
          <TextField
            type="number"
            label="Сумма"
            value={firstInput}
            onChange={onHandleFirstInput}
          />
        </FormControl>
        <FormControl className={classes.currencyType}>
          <InputLabel shrink id="demo-simple-select-placeholder-label-label">
            Валюта
          </InputLabel>
          <Select value={firstCurrency} onChange={onHandleFirstChange}>
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
            value={secondInput}
            onChange={onHandleSecondInput}
          />
        </FormControl>
        <FormControl className={classes.currencyType}>
          <InputLabel shrink id="demo-simple-select-placeholder-label-label">
            Валюта
          </InputLabel>
          <Select value={secondCurrency} onChange={onHandleSecondChange}>
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
}

export default CurrencyBlock;
