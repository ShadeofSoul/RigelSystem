import React, { useContext } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import { useProducts } from "../../../contexts/ProductContext";

import ProductComments from "./ProductComments/ProductComments";
import Recommend from "./Recommend";
import Views from "./Views";

const useStyles = makeStyles((theme) => ({
  back: {
    width: "100%",
    height: "100vw",
    paddingTop: "7rem",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundImage: `url(${"https://www.cnet.com/a/img/dD80LTWVXoLa0SQ8FDJo6jaIS9E=/470x264/2020/09/11/034fcbbd-a437-40a4-bd7a-ac5878574678/g-28529-27-winner-and-overall-winner-andromeda-galaxy-at-arm-s-length-c-nicolas-lefaudeux.jpg"})`,
  },
}));

const ProductDetails = () => {
  const { id } = useParams();
  const { getProductDetails, productDetails } = useProducts();
  const classes = useStyles();

  useEffect(() => {
    getProductDetails(id);
  }, [id]);

  return (
    <div className={classes.back}>
      <div className='container mx-auto mt-8 md:mt-0 md:space-x-10 md:grid grid-cols-3 justify-center'>
        <div className='grid justify-center items-center order-1 col-span-1'>
          <img
            className='lg:h-80 md:h-72 sm:h-72 h-40 bg-indigo-400 bg-opacity-25'
            src={productDetails.img}
            alt=''
          />
        </div>
        <div className='mt-8 md:mt-0 lg:justify-end col-span-2 bg-indigo-400 bg-opacity-25'>
          <h1 className='text-4xl text-center font-bold mb-6'>
            {productDetails.title}
          </h1>
          <p className='text-xl text-white text-center md:text-left '>
            {productDetails.description}
          </p>
          <div className='text-center mt-8 mx-auto md:mx-0 text-2xl py-3 px-6 text-blue-700 font-semibold rounded bg-gradient-to-r from-green-400 to-blue-500'>
            {productDetails.price} $
          </div>
        </div>
      </div>

      <Recommend product={productDetails} />
      <ProductComments />
      {/* <Views product={productDetails} /> */}
    </div>
  );
};

export default ProductDetails;
