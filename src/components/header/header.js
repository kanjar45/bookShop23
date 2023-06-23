import React from 'react';

import "./style.scss"

import {Link, NavLink} from "react-router-dom";
import {NavLink} from "react-router-dom";
import {BiSearch} from "react-icons/bi";
import {HiOutlineShoppingBag} from "react-icons/hi";

const Header = () => {
    return (
        <div id="header">
            <nav className="navbar  navbar-expand-lg navbar-light ">
                <div className="container">
                    <div className="collapse d-flex justify-content-between  navbar-collapse"
                         id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active ">
                                <NavLink to={"/"} className="nav-link" href="#">Bookshop</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/books"} className="nav-link" href="#">Categories</NavLink>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="#">Recent</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="#">Books</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="#">About Us</a>
                            </li>
                        </ul>
                        <div className="navbar--icon my-2 my-lg-0">
                            <BiSearch className="navbar--icon__search"/>
                            <Link to={'/cart'}>
                                <HiOutlineShoppingBag className="navbar--icon__basket"/>
                            </Link>
                        </div>
                    </div>
                </div>


            </nav>
        </div>
    );
};

export default Header;