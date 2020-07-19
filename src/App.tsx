import React from "react";
import CryptoTable from "./components/CryptoTable/CryptoTable";
import CurrencyBlock from "./components/CurrencyBlock/CurrencyBlock";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { useDispatch, useSelector } from "react-redux";
import { setCoins } from "./redux/actions/currencyInfo";
import { IState } from "./redux/types";

import useStyles from "./styles";

export interface ICoinInfo {
  name: string;
  fullName: string;
  imageUrl: string;
  price: number;
  volume24hour: number;
}

function App() {
  const { coinInfo, cryptoName } = useSelector((state: IState) => ({
    coinInfo: state.coins,
    cryptoName: state.currencyName,
  }));
  const classes: any = useStyles();
  const dispatch = useDispatch();
  React.useEffect(() => {
    fetch(
      "https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD"
    )
      .then((response) => response.json())
      .then((data) => {
        const coins: ICoinInfo[] = data.Data.map((coin: any) => {
          const obj: ICoinInfo = {
            name: coin.CoinInfo.Name,
            fullName: coin.CoinInfo.FullName,
            imageUrl: `https://www.cryptocompare.com/${coin.CoinInfo.ImageUrl}`,
            price: coin.RAW.USD.PRICE,
            volume24hour: parseInt(coin.RAW.USD.VOLUME24HOUR),
          };
          return obj;
        });
        dispatch(setCoins(coins));
      });
  }, [dispatch]);
  return (
    <Container className={classes.root} maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <CryptoTable classes={classes} coinInfo={coinInfo} />
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
