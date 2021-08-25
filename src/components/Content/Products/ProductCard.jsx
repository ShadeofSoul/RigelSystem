import React from "react";
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
import { useAuth } from "../../../contexts/AuthContext";
import { ADMIN, JSON_API_PRODUCTS } from "../../../helpers/consts";
import axios from "axios";
import { useState } from "react";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";

const useStyles = makeStyles((theme) => ({
  style: {
    width: 250,
    color: "white",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
  },

  root: {
    maxWidth: 300,
    fontFamily: '"Merienda"',
    backgroundImage: `url(${"https://cdn.shopify.com/s/files/1/2930/2308/products/abstract-green-dark-green-texture-photography-backdrop-j-0622_800x.jpg?v=1535714168"})`,
    border: "3px solid white",
    borderRadius: "25px",
    textAlign: "center",
    marginBottom: "20px",
    "& .appear-item": {
      backgroundColor: "black",
      paddingTop: "20px",
      height: "100px",
      width: "100%",

      opacity: 0.6,
      transform: "translateY(-20px)",
      transition: "0.4s",
      top: "30%",
      left: "0",
      fontSize: "20px",
      color: "white",
      position: "absolute",
      visibility: "hidden",
    },
    "&:hover .appear-item": {
      transform: "translateY(0)",
      visibility: "visible",
    },
  },
}));

export default function ProductCard({ item }) {
  const classes = useStyles();
  const [likeCount, setLikeCount] = useState(item?.likes?.length);
  const [like, setLike] = useState(false);
  const {
    user: { email },
  } = useAuth();
  const {
    deleteProduct,
    history,
    addProductToCart,
    cart,
    favs,
    checkProductInCart,
    addProductToFavs,
    checkProductInFavs,
  } = useProducts();

  const addUserLike = async (email, id) => {
    const { data } = await axios(`${JSON_API_PRODUCTS}/${id}`);
    let emailToFind = data.likes.filter((user) => user === email);
    if (emailToFind.length == 0) {
      data.likes.push(email);
    } else {
      data.likes = data.likes.filter((item) => item !== email);
    }
    await axios.patch(`${JSON_API_PRODUCTS}/${id}`, data);
    setLikeCount(data.likes.length);
    checkUserLike(email, id);
  };

  const checkUserLike = async (email, id) => {
    const { data } = await axios(`${JSON_API_PRODUCTS}/${id}`);
    console.log(data);
    let found = data.likes.filter((user) => email === user);
    console.log(found);
    return found.length > 0 ? setLike(true) : setLike(false);
  };

  return (
    <>
      <div className='w-30 text-gray-900 mr-5 '>
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
                          onClick={() => history.push(`/edit/${item.id}`)}
                          className='bg-green-500 active:bg-green-700 text-sm'
                          variant='outlined'
                        >
                          <EditIcon />
                          Edit
                        </Button>
                        <Button
                          className='bg-green-500 active:bg-green-700 text-sm'
                          onClick={() => deleteProduct(item.id)}
                          variant='outlined'
                        >
                          <DeleteIcon />
                          Delete
                        </Button>
                      </div>
                    ) : (
                      <>
                        <IconButton
                          color={checkProductInCart(item.id) ? "secondary" : ""}
                          onClick={() => addProductToCart(item)}
                          aria-label='add to cart'
                        >
                          <AddShoppingCartIcon />
                        </IconButton>

                        <IconButton
                          color={checkProductInFavs(item.id) ? "secondary" : ""}
                          onClick={() => addProductToFavs(item)}
                          aria-label='add to favs'
                        >
                          <FavoriteIcon />
                        </IconButton>
                        <IconButton
                          color={like ? "secondary" : ""}
                          onClick={() => addUserLike(email, item.id)}
                        >
                          <ThumbUpAltIcon />
                          {likeCount}
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
    </>
  );
}
