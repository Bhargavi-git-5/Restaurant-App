import React from "react";
import { MenuList } from "../data/data";
import Layout from "./../components/Layout/Layout";
import {
    Box,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
    Button,
} from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useCart } from "react-use-cart";

const CartTable = () => {
    // const {item} = useCart();
    const {
        id,
        cartTotal,
        isEmpty,
        items,
        totalItems,
        totalUniqueItems,
        emptyCart,
        removeItem,
        updateItemQuantity,
        } = useCart();
        if(!isEmpty) return <h1> Your Cart is Empty.</h1>
    return (
    <>
    <div>{console.warn(items)}</div>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items && (
            <TableRow
              key={id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {items.name}
              </TableCell>
              {/* <TableCell align="right">{menu.description}</TableCell> */}
              {/* <TableCell align="right">{menu.name}</TableCell> */}
              <TableCell align="right">{items.price}</TableCell>
              <TableCell align="right"> <CardMedia
                                sx={{ minHeight: "50px",minWidth: "50px" }}
                                component={"img"}
                                src={items.image}
                                alt={items.name}
                            /></TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>

        </>
    );
};

export default CartTable;
