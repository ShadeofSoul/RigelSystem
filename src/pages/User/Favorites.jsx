import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect } from "react";
import { Button } from "@material-ui/core";
import { useState } from "react";
import { useProducts } from "../../contexts/ProductContext";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles({
  tableMain: {
    width: "100vw",
    height: "100%",
    backgroundImage: `url(${"https://gamebomb.ru/files/galleries/001/2/27/220888.jpg"})`,
    display: "flex",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "10rem",
  },
  textStyle: {
    width: "200px",
    margin: "0 auto",
    fontSize: "25px",
    fontFamily: '"Merienda"',
    color: "white",
  },
  tableResponsive: {
    overflowX: "auto",
  },
  table: {
    maxWidth: "100%",
    borderRadius: "20px",
    backgroundColor: "rgba(0, 0, 0, .5)",
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

export default function Favorites() {
  const classes = useStyles();
  const [count, setCount] = useState([]);
  const { favs, getFavs, changeFavsCount, deleteFavsProducts } = useProducts();

  useEffect(() => {
    getFavs();
  }, [favs]);

  useEffect(() => {
    setCount();
    console.log(favs);
  }, [favs]);

  const handleFavsChange = (count, id) => {
    if (count <= 0) {
      count = 1;
      changeFavsCount(count, id);
    } else {
      changeFavsCount(count, id);
    }
  };

  return (
    <>
      <div className={classes.tableMain}>
        <div className={classes.tableResponsive}>
          <div
            style={{
              display: "flex",
            }}
          >
            <th
              style={{
                color: "#eebb4f",
                fontSize: "3vw",

                fontFamily: '"Merienda"',
                margin: "0 auto",
              }}
            >
              Favorite creatures
            </th>
          </div>
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
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              {favs?.products?.length > 0 &&
                favs.products.map((product) => (
                  <tr key={product.item.id}>
                    <td>
                      <img
                        className={classes.tableCellImg}
                        src={product.item.img}
                        alt={product.item.title}
                      />
                    </td>

                    <td className={classes.textStyle}>{product.item.title}</td>

                    <td>
                      <Button
                        onClick={() => deleteFavsProducts(product.item.id)}
                      >
                        <DeleteIcon />
                      </Button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
