import React from "react";
import CryptoTable from "./CryptoTable";

import { ITableAndBlock } from "./types";

interface IResult {
  name: string;
  class: string;
}

class CryptoTableClass extends React.Component<ITableAndBlock> {
  constructor(props: ITableAndBlock) {
    super(props);
  }

  componentDidUpdate(prevProps: ITableAndBlock, prevState: any) {
    const oldPrice = prevProps.coinInfo;
    const newPrice = this.props.coinInfo;

    const result: IResult[] = oldPrice.map((obj, index) => {
      if (obj.price > newPrice[index].price)
        return {
          name: obj.name,
          class: "green",
        };
      else if (obj.price < newPrice[index].price)
        return {
          name: obj.name,
          class: "red",
        };
      else
        return {
          name: obj.name,
          class: "",
        };
    });
  }
  render() {
    return (
      <CryptoTable
        classes={this.props.classes}
        coinInfo={this.props.coinInfo}
      />
    );
  }
}

export default CryptoTableClass;
