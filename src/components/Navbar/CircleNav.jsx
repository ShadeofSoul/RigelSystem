import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { ADMIN } from "../../helpers/consts";
import "./Navbar.css";

const CircleNav = () => {
  const {
    user: { email },
  } = useAuth();
  return (
    <div className='navbar-back'>
      <div className='navbar-circle '>
        Menu
        <ul className='menu1'>
          <li>
            <Link className='fa fa-home' to='/'></Link>
          </li>
          <li>
            <a href='' className='fa fa-user'></a>
          </li>
          <li>
            <Link className='fa fa-bug' to='/animals'></Link>
          </li>
          <li>
            {email === ADMIN ? (
              <a href='' className='fa fa-cog'></a>
            ) : (
              <Link to='/favs' className='fa fa-heart'></Link>
            )}
          </li>
          <li>
            <Link to='/forum' className='fa fa-envelope'></Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CircleNav;
