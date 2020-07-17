import React from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";

function currencyBlock({ classes }: any) {
  return (
    <Paper className={classes.paper}>
      <div className={classes.cryptoInputBox}>
        <FormControl className={classes.currencyInput}>
          <TextField type="number" label="Сумма" />
        </FormControl>
        <FormControl className={classes.currencyType}>
          <InputLabel shrink id="demo-simple-select-placeholder-label-label">
            Валюта
          </InputLabel>
          <Select value={10}>
            <MenuItem value={10}>Ten</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className={classes.cryptoInputBox}>
        <FormControl className={classes.currencyInput}>
          <TextField type="number" label="Сумма" />
        </FormControl>
        <FormControl className={classes.currencyType}>
          <InputLabel shrink id="demo-simple-select-placeholder-label-label">
            Валюта
          </InputLabel>
          <Select>
            <MenuItem value="USD">USD</MenuItem>
          </Select>
        </FormControl>
      </div>
    </Paper>
  );
}

export default currencyBlock;
