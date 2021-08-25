import { Grid, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useProducts } from "../../../contexts/ProductContext";
import ProductCard from "./ProductCard";
import { Pagination } from "@material-ui/lab";
import { getCurrentPage } from "../../../helpers/functions";
import { useHistory } from "react-router";
import Zoom from "react-reveal/Zoom";
import SearchBar from "../SearchBar";
const useStyles = makeStyles((theme) => ({
  catalogueParalax: {
    backgroundImage: `url(${"https://www.hollywoodreporter.com/wp-content/uploads/2017/03/pandora.jpg"})`,
    minHeight: "500px",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    paddingTop: "10rem",
  },
  catalogueContent: {
    fontSize: "40px",
    maxWidth: "90%",
    display: "flex",
    flexWrap: "wrap",
    borderRadius: "60px",
    margin: "0 auto",
    justifyContent: "center",
  },

  pagination: {
    padding: "5px",
    textAlign: "center",
    borderRadius: "30px",
    width: "80vw",
    height: "80px",
    display: "block",
    margin: "40px 5vw 0 5vw ",
    "@global": {
      li: {
        margin: "0 auto",
      },
    },
  },
}));

const ProductList = () => {
  const classes = useStyles();
  const { productsData, getProductsData, pages } = useProducts();
  const [page, setPage] = useState(getCurrentPage());
  const history = useHistory();

  useEffect(() => {
    getProductsData();
  }, []);

  useEffect(() => {
    // console.log(page);
  }, [page]);

  const handlePage = (e, page) => {
    const search = new URLSearchParams(window.location.search);
    search.set("_page", page);
    history.push(`${history.location.pathname}?${search.toString()}`);
    getProductsData();
    setPage(page);
  };

  useEffect(() => {
    // console.log(productsData);
  }, [productsData]);

  return (
    <>
      <div className={classes.catalogueParalax}>
        <div>
          <SearchBar />
        </div>
        <Zoom>
          <div className={classes.catalogueContent}>
            {productsData && productsData ? (
              productsData?.map((item) => (
                <ProductCard item={item} key={item.id} />
              ))
            ) : (
              <></>
            )}
            <Pagination
              className={`${classes.pagination} bg-indigo-900 opacity-75`}
              variant='outlined'
              color='white'
              count={pages}
              page={+page}
              onChange={handlePage}
              size='large'
            />
          </div>
        </Zoom>
      </div>
    </>
  );
};

export default ProductList;
