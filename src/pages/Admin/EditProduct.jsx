import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useProducts } from "../../contexts/ProductContext";
import { handleInp } from "../../helpers/functions";
import {
  Button,
  Container,
  Paper,
  TextField,
  makeStyles,
} from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import CancelIcon from "@material-ui/icons/Cancel";

const useStyles = makeStyles((theme) => ({
  addProductParalax: {
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    paddingTop: "10rem",
  },
}));

const EditProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({
    title: "",
    type: "",
    image: "",
    description: "",
    price: 0,
    likes: [],
    comments: [],
  });
  const classes = useStyles();
  const { getProductDetails, productDetails, history, saveEditedProduct } =
    useProducts();

  useEffect(() => {
    getProductDetails(id);
  }, []);

  useEffect(() => {
    setProduct(productDetails);
  }, [productDetails]);

  return (
    <div className={classes.addProductParalax}>
      <div className=''>
        {/* Container */}
        <div className='container mx-auto'>
          <div className='flex justify-center px-6'>
            {/* Row */}
            <div className='w-full xl:w-3/4 lg:w-11/12 flex'>
              {/* Col */}
              <div
                className='w-full h-auto hidden lg:block lg:w-5/12 bg-cover mr-5 rounded-l-lg'
                style={{
                  backgroundImage: `url(${product.img})`,
                }}
              />
              {/* Col */}
              <div className='w-full lg:w-7/12 bg-blue-400 bg-opacity-50  p-5 rounded-lg lg:rounded-l-none'>
                <h3 className='pt-4 text-2xl text-center'>Add new animal!</h3>
                <form className='px-8 pt-6 pb-8 mb-4 bg-blue-400 bg-opacity-50 rounded'>
                  <div className='mb-4 md:flex md:justify-between'>
                    <div className='mb-4 md:mr-2 md:mb-0'>
                      <label
                        className='block mb-2 text-sm font-bold text-gray-700'
                        htmlFor='firstName'
                      >
                        Title
                      </label>
                      <input
                        className='w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                        name='title'
                        value={product.title}
                        onChange={(e) => handleInp(e, product, setProduct)}
                        type='text'
                        placeholder='First Name'
                      />
                    </div>
                    <div className='md:ml-2'>
                      <label
                        className='block mb-2 text-sm font-bold text-gray-700'
                        htmlFor='lastName'
                      >
                        Type
                      </label>
                      <input
                        className='w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                        name='type'
                        value={product.type}
                        type='text'
                        onChange={(e) => handleInp(e, product, setProduct)}
                        placeholder='Type'
                      />
                    </div>
                  </div>
                  <div className='mb-4'>
                    <label className='block mb-2 text-sm font-bold text-gray-700'>
                      Image
                    </label>
                    <input
                      className='w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                      name='img'
                      value={product.img}
                      onChange={(e) => handleInp(e, product, setProduct)}
                      placeholder='Image'
                    />
                  </div>
                  <div className='mb-4 md:flex md:justify-between'>
                    <div className='mb-4 md:mr-2 md:mb-0'>
                      <label className='block mb-2 text-sm font-bold text-gray-700'>
                        Price
                      </label>
                      <input
                        className='w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                        name='price'
                        value={product.price}
                        onChange={(e) => handleInp(e, product, setProduct)}
                        type='text'
                        placeholder='$'
                      />
                    </div>
                    <div className='md:ml-2'>
                      <label className='block mb-2 text-sm font-bold text-gray-700'>
                        Description
                      </label>
                      <input
                        className='w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                        type='text'
                        name='description'
                        value={product.description}
                        onChange={(e) => handleInp(e, product, setProduct)}
                        placeholder=' description'
                      />
                    </div>
                  </div>
                  <div className='mb-6 text-center'>
                    {/* <button
                  className='w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline'
                  type='button'
                >
                  Add new animal
                </button> */}
                    <Container>
                      <Button
                        onClick={() => saveEditedProduct(product.id, product)}
                      >
                        <SaveIcon />
                      </Button>
                      <Button onClick={() => history.push("/catalogue")}>
                        <CancelIcon />
                      </Button>
                    </Container>
                  </div>
                  <hr className='mb-6 border-t' />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
