import React from "react";
import { BrowserRouter, Route, Switch, useLocation } from "react-router-dom";
import ProductDetails from "../components/Content/Products/ProductDetails";
import ProductList from "../components/Content/Products/ProductList";
import Navbar from "../components/Navbar/Navbar";
import AuthContextProvider from "../contexts/AuthContext";
import ProductContextProvider from "../contexts/ProductContext";
import AddProduct from "../pages/Admin/AddProduct";
import EditProduct from "../pages/Admin/EditProduct";
import AuthPage from "../pages/AuthPage";
import Favorites from "../pages/User/Favorites";
import HomePage from "../pages/HomePage";
import PayForm from "../pages/User/PayForm";
import Cart from "../pages/User/Cart";
import ForumPage from "../pages/ForumPage";
import ForgotPass from "../pages/ForgotPass";
import { useTransition, animated } from "react-spring";

const Routes = () => {
  const location = useLocation();
  const transitions = useTransition(location, {
    from: {
      opacity: 0,
      transform: "translateX(100%)",
    },
    enter: {
      opacity: 1,
      transform: "translateX(0%)",
    },
    leave: {
      opacity: 0,
      transform: "translateX(-100%)",
    },
  });
  return transitions((props, item) => (
    <animated.div style={props}>
      <Switch location={item}>
        <div
          style={{
            position: "absolute",
            width: "100%",
          }}
        >
          <Route exact path='/' component={HomePage} />
          <Route exact path='/login' component={AuthPage} />
          <Route exact path='/cart' component={Cart} />
          <Route exact path='/details/:id' component={ProductDetails} />
          <Route exact path='/edit/:id' component={EditProduct} />
          <Route exact path='/addproductpage' component={AddProduct} />
          <Route exact path='/favs' component={Favorites} />
          <Route exact path='/forum' component={ForumPage} />
          <Route exact path='/resetpass' component={ForgotPass} />
          <Route exact path='/payform' component={PayForm} />
        </div>
      </Switch>
    </animated.div>
  ));
};

export default Routes;
