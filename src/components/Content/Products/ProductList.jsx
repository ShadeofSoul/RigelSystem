import { Grid, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useProducts } from "../../../contexts/ProductContext";
import ProductCard from "./ProductCard";
import { Pagination } from "@material-ui/lab";
import { getCurrentPage } from "../../../helpers/functions";
import { useHistory } from "react-router";
import SearchBar from "../SearchBar";
const useStyles = makeStyles((theme) => ({
  catalogueParalax: {
    backgroundImage: `url(${"https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700634480.jpg"})`,
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
    padding: "10px",
    textAlign: "center",
    borderRadius: "30px",
    backgroundColor: "#00ffff",
    width: "24%",
    height: "80px",
    display: "block",
    margin: "40px 36% 0 36% ",
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
        <div className={classes.catalogueContent}>
          {productsData && productsData ? (
            productsData?.map((item) => (
              <ProductCard item={item} key={item.id} />
            ))
          ) : (
            <></>
          )}
          <Pagination
            className={classes.pagination}
            variant='outlined'
            color='white'
            count={pages}
            page={+page}
            onChange={handlePage}
            size='large'
          />
        </div>
      </div>
    </>
  );
};

export default ProductList;
