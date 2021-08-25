import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Paper, TextField } from "@material-ui/core";
import { useState } from "react";
import SaveAltIcon from "@material-ui/icons/SaveAlt";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";
import { useProducts } from "../../contexts/ProductContext";

const AddProduct = () => {
  const { addProduct, history } = useProducts();

  const handleClick = async (product) => {
    const data = await addProduct(product);
    history.push("/animals");
  };

  const [product, setProduct] = useState({
    title: "",
    type: "",
    img: "",
    price: 0,
    description: "",
    likes: [],
    comments: [],
  });

  const handleInp = (e) => {
    console.log(product);
    console.log(e.target.name);
    if (e.target.name == "price") {
      let obj = {
        ...product,
        [e.target.name]: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  };

  return (
    <div className='bg-gray-400'>
      {/* Container */}
      <div className='container mx-auto'>
        <div className='flex justify-center px-6 my-12'>
          {/* Row */}
          <div className='w-full xl:w-3/4 lg:w-11/12 flex'>
            {/* Col */}
            <div
              className='w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg'
              style={{
                backgroundImage:
                  'url("https://source.unsplash.com/Mv9hjnEUHR4/600x800")',
              }}
            />
            {/* Col */}
            <div className='w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none'>
              <h3 className='pt-4 text-2xl text-center'>Add new animal!</h3>
              <form className='px-8 pt-6 pb-8 mb-4 bg-white rounded'>
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
                      onChange={handleInp}
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
                      type='text'
                      onChange={handleInp}
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
                    onChange={handleInp}
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
                      onChange={handleInp}
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
                      onChange={handleInp}
                      placeholder=' description'
                    />
                  </div>
                </div>
                <div className='mb-6 text-center'>
                  <Container>
                    <Button onClick={() => handleClick(product)}>
                      <SaveAltIcon />
                    </Button>

                    <Button onClick={() => history.push("/animals")}>
                      <CloseIcon />
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
  );
};

export default AddProduct;
