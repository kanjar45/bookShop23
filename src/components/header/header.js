import React, {useState} from 'react';
import {NavLink, Link} from "react-router-dom";

import {BiSearch} from "react-icons/bi";
import {HiOutlineShoppingBag} from "react-icons/hi";
import transitionEndListener from "react-bootstrap/transitionEndListener";

const Header = () => {
    const [burger,setBurger]=useState(false)
    return (
        <div id="header">
            <div className="container">
                <div className={`header ${burger? "open" : ""} `}>
                    <ul className="header--ul">
                        <li className="header--ul__li">
                            <NavLink to={"/"} className="header--ul__li--title ">Bookshop</NavLink>
                        </li>
                      <div className="header--ul__burger " style={{
                          transition: burger ? "margin-left 3s" : " margin-left 3s",
                          display:burger ? "block" : ""

                      }}>
                          <li className="header--ul__burger--li">
                              <NavLink to={"/books"} className="header--ul__burger--li__title">Categories</NavLink>
                          </li>
                          <li className="header--ul__burger--li">
                              <NavLink to={"/recent"} className="header--ul__burger--li__title">Recent</NavLink>
                          </li>
                          <li className="header--ul__burger--li">
                              <NavLink to={"/hello"} className="header--ul__burger--li__title">Books</NavLink>
                          </li>
                          <li className="header--ul__burger--li">
                              <NavLink to={"/about"} className="header--ul__burger--li__title">About Us</NavLink>
                          </li>
                      </div>


                    </ul>
                    <div className="header--icons">
                        <BiSearch className="header--icons__search "/>
                        <Link to={'/cart'}>
                            <HiOutlineShoppingBag className="header--icons__basket"/>
                        </Link>
                        <div className="header--icons__burger">
                            <button className="header--icons__burger--btn" onClick={()=>{
                                setBurger(!burger)
                            }}>
                                   <span style={{
                                       transform : burger ? "translateY(0) rotate(45deg)" : ""
                                   }}></span>
                                   <span style={{
                                       display: burger ? "none" : ""
                                   }}></span>
                                   <span style={{
                                       transform : burger ? "translateY(0) rotate(-45deg)" : ""
                                   }}></span>

                            </button>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    );
};
export default Header;