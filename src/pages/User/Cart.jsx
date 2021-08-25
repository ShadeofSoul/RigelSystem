import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import { useEffect } from "react";
import { Button, IconButton } from "@material-ui/core";
import { useState } from "react";
import { useProducts } from "../../contexts/ProductContext";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles({
  tableMain: {
    width: "100vw",
    height: "100%",
    backgroundImage: `url(${"https://getwallpapers.com/wallpaper/full/3/d/0/96704.jpg"})`,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "15rem",
  },
  textStyle: {
    width: "200px",
    margin: "0 auto",
    fontSize: "26px",
    fontFamily: '"Merienda"',
    color: "white",
  },
  tableResponsive: {
    width: "85vw",
    position: "relative",
    overflowX: "auto",
  },
  table: {
    maxWidth: "100%",
    borderRadius: "20px",
    backgroundColor: "rgba(0, 0, 0, .4)",
  },
  tableCellImg: {
    width: "14vw",
  },
  number: {
    width: "100px",
    height: "50px",
    backgroundColor: "rgba(255, 255, 255, .4)",
    borderRadius: "10px",
    textAlign: "center",
    fontFamily: '"Merienda"',
  },
  button: {
    fontSize: "20px",
    cursor: "pointer",
    color: "white",
    width: "70vw",
    borderRadius: "8px",
    border: "3px solid white",
    margin: "50px",
  },
});

export default function Cart() {
  const classes = useStyles();
  const [count, setCount] = useState([]);
  const { cart, getCart, changeProductCount, deleteCartProducts } =
    useProducts();

  // const [his, setHis] = useState([]);

  useEffect(() => {
    getCart();
  }, []);

  useEffect(() => {
    setCount();
  }, [cart]);

  const handleCountChange = (count, id) => {
    if (count <= 0 || count >= 1000) {
      count = 1;
      changeProductCount(count, id);
    } else {
      changeProductCount(count, id);
    }
  };
  const deleteBtn = () => {
    localStorage.setItem("cart", JSON.stringify(0));
  };

  let boughtProducts = JSON.parse(localStorage.getItem("cart")).products?.map(
    (e) => e.item
  );
  let buy = {
    products: boughtProducts,
  };
  localStorage.setItem("historyOfBuy", JSON.stringify(buy));
  const orderAction = () => {
    deleteBtn();
  };

  return (
    <div className={classes.tableMain}>
      <div className={classes.tableResponsive}>
        <table className={classes.table}>
          <thead>
            <tr>
              <th style={{ color: "black" }} className={classes.textStyle}>
                Image
              </th>
              <th style={{ color: "black" }} className={classes.textStyle}>
                Title
              </th>
              <th style={{ color: "black" }} className={classes.textStyle}>
                Price
              </th>
              <th style={{ color: "black" }} className={classes.textStyle}>
                Count
              </th>
              <th style={{ color: "black" }} className={classes.textStyle}>
                SubPrice
              </th>
              <th style={{ color: "black" }} className={classes.textStyle}>
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {cart?.products?.length > 0 &&
              cart.products.map((product) => (
                <tr key={product.item.id}>
                  <td>
                    <img
                      className={classes.tableCellImg}
                      src={product.item.img}
                      alt={product.item.title}
                    />
                  </td>

                  <td className={classes.textStyle}>{product.item.title}</td>
                  <td className={classes.textStyle}>{+product.item.price} $</td>
                  <td className={classes.textStyle}>
                    <input
                      className={classes.number}
                      type='number'
                      value={product.count}
                      onChange={(e) =>
                        handleCountChange(e.target.value, product.item.id)
                      }
                    />
                  </td>
                  <td className={classes.textStyle}>{+product.subPrice} $</td>
                  <td>
                    <IconButton
                      aria-label='delete in cart'
                      onClick={() => deleteCartProducts(product.item.id)}
                    >
                      <DeleteIcon style={{ color: "black" }} />
                    </IconButton>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <h2
        style={{
          backgroundColor: "white",
          borderRadius: "20px",
          color: "black",
          textAlign: "center",
        }}
        className={classes.textStyle}
        variant='h5'
      >
        Total: {cart.totalPrice}$
      </h2>
      <Link to='/payform'>
        <Button onClick={orderAction} className={classes.button}>
          <MonetizationOnIcon style={{ marginRight: "20px" }} />
          BUY NOW
        </Button>
      </Link>
    </div>
  );
}
