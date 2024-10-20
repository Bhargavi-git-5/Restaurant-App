import React, { useState } from "react";
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
  Grid,
  Alert,
  AlertTitle,
} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useCart } from "react-use-cart";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
// import { ToastContainer, toast, cssTransition } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import "animate.css/animate.min.css";
import { ToastContainer, toast, cssTransition } from "react-toastify";
import "../styles/Toast.css";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CartTable = () => {
  const bounce = cssTransition({
    enter: "animate__animated animate__bounceIn",
    exit: "animate__animated animate__bounceOut",
  });

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [open1, setOpen1] = useState(false);

  const handleClickAgree = () => {
    setOpen1(true);
    setTimeout(() => {
      setOpen1(false);
    }, 2000);
  };
  const handleClose1 = () => {
    setOpen1(false);
  };

  const customAnimationToast = () => {
    // toast('Hey 👋, Do you want continue!', {
    //   transition: bounce,
    // });
    toast.success("Hey 👋, Do you want continue!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: bounce,
    });
  };

  const customAnimationToastEmpty = () => {
    toast.warning("Hey 🌒, All Orders are deleted", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: bounce,
    });
  };

  const customAnimationToastAdd = () => {
    toast.info("Hey 🌒, Added 1item to Cart", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: bounce,
    });
  };

  const customAnimationToastRemove = () => {
    toast.warning("Hey 🌒, Removed 1 item to Cart", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: bounce,
    });
  };

  const customAnimationToastCancelled = () => {
    toast.error("Hey 🌒, Selected Cart deleted", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: bounce,
    });
  };

  const { addItem } = useCart();
  const {
    id,
    cartTotal,
    isEmpty,
    items,
    quantity,
    totalItems,
    totalUniqueItems,
    emptyCart,
    removeItem,
    updateItemQuantity,
  } = useCart();
  // if(isEmpty) return <h1> Your Cart is Empty.</h1>
  return (
    <>
      <Layout>
       
        <br></br>
        <Box>
          {/* <Typography sx={{ mx:1,p:1 }}><h5>Cart  ({totalUniqueItems}) total Items:  ({totalItems})</h5>  */}
          <Typography sx={{ mx: 1, p: 1 }}>
            <h4>
              Total-Carts
              <Badge
                badgeContent={totalUniqueItems}
                color="error"
                sx={{ mx: 0.5, p: 0 }}
              >
                <ShoppingCartIcon color="black" />
              </Badge>
              <Badge sx={{ mx: 3 }}>|</Badge>
              Total-Items
              <Badge
                badgeContent={totalItems}
                color="error"
                sx={{ mx: 0.5, p: 0 }}
              >
                <FactCheckIcon color="black" />
              </Badge>
            </h4>
          </Typography>

          {/* </Typography> */}
          <br></br>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow sx={{ backgroundColor: "gray" }}>
                  <TableCell sx={{ fontWeight: "bold", color: "white" }}>
                    Items
                  </TableCell>
                  <TableCell
                    sx={{ fontWeight: "bold", color: "white" }}
                    align="center"
                  >
                    All Actions
                  </TableCell>
                  <TableCell
                    sx={{ fontWeight: "bold", color: "white" }}
                    align="right"
                  >
                    Name
                  </TableCell>
                  <TableCell
                    sx={{ fontWeight: "bold", color: "white" }}
                    align="right"
                  >
                    Price
                  </TableCell>
                  <TableCell
                    sx={{ fontWeight: "bold", color: "white" }}
                    align="right"
                  >
                    Quantity Items
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {items.map((items) => (
                  <TableRow
                    key={id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {" "}
                      <CardMedia
                        sx={{
                          minHeight: "5px",
                          minWidth: "5px",
                          width: "50px",
                        }}
                        component={"img"}
                        src={items.image}
                        alt={items.name}
                      />
                    </TableCell>

                    <TableCell align="center">
                      <RemoveCircleIcon
                        sx={{ my: 1, mx: 2, p: 0 }}
                        align="right"
                        variant="contained"
                        color="warning"
                        onClick={() => {
                          updateItemQuantity(items.id, items.quantity - 1);
                          customAnimationToastRemove();
                        }}
                      ></RemoveCircleIcon>
                      <AddCircleIcon
                        sx={{ my: 1, mx: 2, p: 0 }}
                        align="right"
                        variant="contained"
                        color="info"
                        onClick={() => {
                          updateItemQuantity(items.id, items.quantity + 1);
                          customAnimationToastAdd();
                        }}
                      ></AddCircleIcon>
                      <DeleteForeverRoundedIcon
                        sx={{ my: 1, mx: 2, p: 0 }}
                        align="right"
                        variant="contained"
                        color="error"
                        onClick={() => {
                          removeItem(items.id);
                          customAnimationToastCancelled();
                        }}
                      >
                        <Grid item fontSize="small">
                          {/* <DeleteIcon /> */}
                          <DeleteForeverIcon />
                        </Grid>
                      </DeleteForeverRoundedIcon>
                    </TableCell>

                    <TableCell align="right">{items.name}</TableCell>
                    <TableCell align="right">Rs. {items.price}</TableCell>
                    <TableCell align="right">
                      Quantity ({items.quantity})
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <br></br>
        {/* {totalItems>0 ?
(<Alert severity="success">
  <AlertTitle>Success</AlertTitle>
  This is a success Alert with an encouraging title.
</Alert>
):<Typography sx={{ mx:1,p:1 }}>Please Select the Orders</Typography>} */}
        {/* <br></br> */}
        <Box align="right">
          <Button
            sx={{ my: 1, mx: 1, p: 0.5 }}
            align="right"
            variant="contained"
            color="warning"
          >
            Total Price = $ {cartTotal}
          </Button>
          <Button
            sx={{ my: 1, mx: 1, p: 0.5 }}
            align="right"
            variant="contained"
            color="error"
            disabled={!cartTotal}
            onClick={() => {
              handleClickOpen();
            }}
          >
            Clear Cart
          </Button>
          <Button
            sx={{ my: 1, mx: 1, p: 0.5 }}
            align="right"
            variant="contained"
            color="info"
            onClick={customAnimationToast}
          >
            Buy Now
          </Button>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />

          <br></br>
          {/* )} */}
        </Box>
      </Layout>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle sx={{ backgroundColor: "goldenrod", color: "white" }}>
          {"! Are you sure cancell all your Cart."}
        </DialogTitle>
        <hr></hr>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            You cancelled all items from cart.If you <b>Agree</b> your order
            will cancelled.
            <br></br>
            If you <strong>Disagree</strong> Your order will continue.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button
            onClick={() => {
              handleClose();
              handleClickAgree();
              emptyCart();
            }}
          >
            Agree
          </Button>
        </DialogActions>
      </Dialog>
      {/* Agree dialouge box */}
      <Dialog
        open={open1}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose1}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle sx={{ backgroundColor: "#d32f2f", color: "white" }}>
          <RemoveShoppingCartIcon></RemoveShoppingCartIcon>
          {" Your Cart is Empty."}
        </DialogTitle>
        <hr></hr>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <strong>
              !Oops...you Agree.Your Cart is Empty,All item from Cart Removed.<br></br>
              All item from Cart Removed.
            </strong>
          </DialogContentText>
        </DialogContent>
      </Dialog>
      {/* Agree dialouge box */}
    </>
  );
};

export default CartTable;
