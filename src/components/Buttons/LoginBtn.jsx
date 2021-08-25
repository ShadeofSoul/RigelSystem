import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import "./Buttons.css";

const style = {
  authBtn: {
    width: "7.4rem",
    border: "none",
    marginRight: "30px",
    height: "3rem",
    position: "absolute",
    right: "10px",
    fontFamily: "Abril Fatface",
    fontWeight: 600,
    fontSize: "15px",
    top: "30px",
    background: "#00FFFF",
    boxShadow: "0 0 40px #00FFFF",
    cursor: "pointer",
    borderRadius: "30px",
  },
};

export const LoginBtn = () => {
  return (
    <div>
      <button style={style.authBtn}>LOGIN</button>
    </div>
  );
};

export const SigninBtn = () => {
  return (
    <div>
      <button style={style.authBtn}>SIGN IN</button>
    </div>
  );
};

export const AddProductBtn = () => {
  return (
    <>
      <div className='container1'>
        <a href='#'>
          <span>Add Product</span>
        </a>
      </div>
    </>
  );
};

export const LogoutBtn = () => {
  const { handleLogout } = useAuth();
  return (
    <button style={style.authBtn} onClick={handleLogout}>
      LOG OUT
    </button>
  );
};
