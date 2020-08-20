import React from "react";
import CurrencyBlock from "./components/CurrencyBlock/CurrencyBlock";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { useDispatch, useSelector } from "react-redux";
import { setCryptoAsync } from "./redux/actions/asyncAction";
import { IState } from "./redux/types";

import useStyles from "./styles";
import CryptoTableClass from "./components/CryptoTable/CryptoTableClass";

function App() {
  const { coinInfo, cryptoName } = useSelector((state: IState) => ({
    coinInfo: state.coins,
    cryptoName: state.currencyName,
  }));
  const classes: any = useStyles();
  const dispatch = useDispatch();
  React.useEffect(() => {
    setInterval(() => {
      dispatch(setCryptoAsync());
    }, 2000);
  }, [dispatch]);
  return (
    <Container className={classes.root} maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <CryptoTableClass classes={classes} coinInfo={coinInfo} />
        </Grid>
        <Grid item xs={4}>
          <CurrencyBlock
            classes={classes}
            coinInfo={coinInfo}
            cryptoName={cryptoName}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
