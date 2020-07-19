import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useDispatch } from "react-redux";
import { setCrypto } from "../../redux/actions/currencyInfo";
import { ICoinInfo } from "../../App";
import { ITableAndBlock } from "../CryptoTable/types";

function CryptoTable({ classes, coinInfo }: ITableAndBlock) {
  const dispatch = useDispatch();
  const onClickHandle = (name: string) => {
    dispatch(setCrypto(name));
  };
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">FullName</TableCell>
            <TableCell align="left">Price</TableCell>
            <TableCell align="left">volume24hour</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {!coinInfo.length
            ? "Загрузка..."
            : coinInfo.map((coin: ICoinInfo) => (
                <TableRow
                  key={coin.price}
                  className={classes.rowCurrency}
                  hover
                  onClick={() => onClickHandle(coin.name)}
                >
                  <TableCell>
                    <img
                      src={coin.imageUrl}
                      className={classes.currencyIcon}
                      alt="Coin icon"
                    />
                  </TableCell>
                  <TableCell align="left">{coin.name}</TableCell>
                  <TableCell align="left">{coin.fullName}</TableCell>
                  <TableCell align="left">{coin.price} $</TableCell>
                  <TableCell align="left">{coin.volume24hour} $</TableCell>
                </TableRow>
              ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CryptoTable;
