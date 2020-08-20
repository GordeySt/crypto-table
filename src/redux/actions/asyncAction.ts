import { ICoinInfo } from "../types";
import { setCoins } from "./currencyInfo";

export const setCryptoAsync = () => {
  return (dispatch: any) => {
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
  };
};
