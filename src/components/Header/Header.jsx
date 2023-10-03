import React from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import { BsHandbag } from "react-icons/bs";
import { HiOutlineMenu } from "react-icons/hi";

function Header() {
  return (
    <>
      <header>
        <div className="left">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="right">
          <BsHandbag />
          <HiOutlineMenu />
        </div>
      </header>
    </>
  );
}

export default Header;
