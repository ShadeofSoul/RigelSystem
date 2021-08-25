import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { LoginBtn, LogoutBtn, SigninBtn } from "../Buttons/LoginBtn";
import CircleNav from "./CircleNav";
import "./Navbar.css";

const Navbar = () => {
  const {
    handleLogout,
    user: { email },
  } = useAuth();
  return (
    <div className='navbar1'>
      <CircleNav />
      <div className='button-back'>
        <h1>
          RIGEL <span className='system'>SYSTEM</span>
        </h1>
        {email ? (
          <Link to='/login'>
            <LogoutBtn />
          </Link>
        ) : (
          <>
            <Link to='/login'>
              <LoginBtn />
            </Link>
            <Link to='/login'>
              <SigninBtn />
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
