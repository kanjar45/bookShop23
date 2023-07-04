import React, {useState} from 'react';
import {NavLink, Link} from "react-router-dom";

import {BiSearch} from "react-icons/bi";
import {HiOutlineShoppingBag} from "react-icons/hi";
import {IoIosClose} from "react-icons/io";


const Header = () => {
    const [search, setSearch] = useState(false)

    return (
        <div id="header">
            <div className="container">
                <div className="header  ">
                    <ul className="header--ul" onClick={() => {
                        setBurger(false)
                    }}>
                        <li className="header--ul__li">
                            <NavLink to={"/"} className="header--ul__li--title active">Bookshop</NavLink>
                        </li>
                        <div className="header--ul__burger" style={{
                            right: burger ? "0" : "-340px"
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
                        <div className={`header--icons__search ${search ? "" : "active"}`}>
                            <BiSearch className="header--icons__search--icon "
                                      onClick={(e) => {
                                          setSearch(!search)
                                      }}
                            />
                            <div className="header--icons__search--input">
                                <input type="text" placeholder={`${search ? "Search" : ""}`} style={{
                                    display: search ? "block" : "none",
                                }}/>
                            </div>
                            <IoIosClose className="header--icons__search--clear"/>
                        </div>
                        <Link to={'/cart'}>
                            <HiOutlineShoppingBag className="header--icons__basket"/>

                        </Link>
                        <div className="header--icons__burger">
                            <button className="header--icons__burger--btn" onClick={() => {
                                setBurger(!burger)
                            }}>
                                   <span style={{
                                       transform: burger ? "translateY(0) rotate(45deg)" : "",
                                       transition: ".3s"
                                   }}></span>
                                <span style={{
                                    display: burger ? "none" : "",
                                    transition: "1s"
                                }}></span>
                                <span style={{
                                    transform: burger ? "translateY(0) rotate(-45deg)" : "",
                                    transition: ".3s"
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