import React from "react";
import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Routes from "../routes/Routes";
import HomePage from "./HomePage";
import Login from "./Login";

const AuthPage = () => {
  const { user } = useAuth();

  return (
    <div className='Auth'>
      {user ? (
        <BrowserRouter>
          <HomePage />
        </BrowserRouter>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default AuthPage;
