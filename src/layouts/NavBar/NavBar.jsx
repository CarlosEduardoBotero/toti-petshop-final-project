import React from "react";
import "./NavBar.css";
import { Outlet, NavLink } from "react-router-dom";
import { AiFillHome, AiFillInfoCircle } from "react-icons/ai";
import {
  FaShoppingCart,
  FaDog,
  FaPaw,
  FaHandHoldingHeart,
} from "react-icons/fa";

import { GoPackage } from "react-icons/go";

const NavBar = () => {
  return (
    <>
      <nav className="nav-bar-container">
        <div className="nav-bar-title-container">
          <h1>TheRoyalPet</h1>
          <FaPaw className="nav-bar-paw-icon" />
        </div>
        <div className="nav-bar-navlink-container">
          <NavLink className="nav-bar-icon-container" to="/" end>
            <AiFillHome className="nav-bar-icon" />
          </NavLink>
          <NavLink className="nav-bar-icon-container" to="/acessorios">
            <FaShoppingCart className="nav-bar-icon" />
          </NavLink>
          <NavLink className="nav-bar-icon-container" to="/adote-me">
            <FaDog className="nav-bar-icon" />
          </NavLink>
          <NavLink className="nav-bar-icon-container" to="/cerca-de">
            <AiFillInfoCircle className="nav-bar-icon" />
          </NavLink>
          <NavLink className="nav-bar-icon-container" to="/confirmacao">
            <FaHandHoldingHeart className="nav-bar-icon" />
          </NavLink>
          <NavLink className="nav-bar-icon-container" to="/cart">
            <GoPackage className="nav-bar-icon" />
          </NavLink>
        </div>
      </nav>
      <div className="app-layout">
        <Outlet />
      </div>
    </>
  );
};

export default NavBar;
