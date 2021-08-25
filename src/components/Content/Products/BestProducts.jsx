import React, { useEffect } from "react";
import { ADMIN, JSON_API_PRODUCTS } from "../../../helpers/consts";

import { makeStyles, withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { Box, Container, Grid, IconButton } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { useProducts } from "../../../contexts/ProductContext";
import FavoriteIcon from "@material-ui/icons/Favorite";
import axios from "axios";
import { useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
const BestProducts = () => {
  const {
    user: { email },
  } = useAuth();
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    let arrCount = [];
    const { data } = await axios(`${JSON_API_PRODUCTS}`);
    data.forEach((elem) => {
      if (elem.likes.length > 0) {
        arrCount.push(elem);
      }
    });
    setProducts(arrCount.sort((a, b) => b.likes.length - a.likes.length));
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      {products.slice(0, 3).map((item) => (
        <div className=' text-gray-900 mr-5 '>
          <div>
            <NavLink to={`/details/${item.id}`}>
              <img
                src={item.img}
                className='w-full object-cover object-center rounded-lg shadow-md z-10'
              />
            </NavLink>
            <div className=' -mt-16 '>
              <div className='bg-gradient-to-r from-green-400 to-blue-500 p-6 rounded-lg shadow-lg'>
                <div className='flex items-baseline'>
                  <span className='bg-teal-200 text-teal-800 text-xs inline-block rounded-full  uppercase font-semibold tracking-wide'></span>
                  <div className='text-gray-600 uppercase text-xs font-semibold tracking-wider'></div>
                </div>
                <h4 className='mt-5 text-xl font-semibold uppercase leading-tight truncate'>
                  {item.title}
                </h4>
                <div className='mt-1 text-2xl text-purple-900'>
                  $ {item.price}
                </div>
                <div className='mt-4'>
                  <CardActions>
                    <Container>
                      {email === ADMIN ? (
                        <div className='grid grid-cols-2 gap-5'>
                          <Button
                            //   onClick={() => history.push(`/edit/${item.id}`)}
                            className='bg-green-500 active:bg-green-700 text-sm'
                            variant='outlined'
                          >
                            <EditIcon />
                            Edit
                          </Button>
                          <Button
                            className='bg-green-500 active:bg-green-700 text-sm'
                            //   onClick={() => deleteProduct(item.id)}
                            variant='outlined'
                          >
                            <DeleteIcon />
                            Delete
                          </Button>
                        </div>
                      ) : (
                        <>
                          <IconButton
                          //   color={like ? "secondary" : ""}
                          //   onClick={() => addUserLike(email, item.id)}
                          >
                            <ThumbUpAltIcon />
                            {item.likes.length}
                          </IconButton>
                        </>
                      )}
                    </Container>
                  </CardActions>
                  {/* <span className='text-teal-600 text-md font-semibold'></span>
                <span className='text-sm text-gray-600'></span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default BestProducts;
