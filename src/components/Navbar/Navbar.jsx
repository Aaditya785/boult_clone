import React from "react";
import './Navbar.css'
import { RiHome6Line } from "react-icons/ri";
import { LuBadgePercent } from "react-icons/lu";
import { FiSearch } from "react-icons/fi";
import { HiTemplate } from "react-icons/hi";
import { VscAccount } from "react-icons/vsc";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="home">
                  <RiHome6Line />
                  <span>Home</span>
        </div>
        <div className="deals">
                  <LuBadgePercent />
                  <span>Deals</span>
        </div>
        <div className="search">
                  <FiSearch />
                  <span>Search</span>
        </div>
        <div className="products">
                  <HiTemplate />
                  <span>Products</span>
        </div>
        <div className="account">
                  <VscAccount />
                  <span>Account</span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
