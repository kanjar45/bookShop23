import React from 'react';
import {NavLink,Link} from "react-router-dom";

import {BiSearch} from "react-icons/bi";
import {HiOutlineShoppingBag} from "react-icons/hi";
const Header = () => {
    return (
        <div id="header">
            <div className="container">

                    <div className="header">
                        <ul  >
                            <li>
                                <NavLink to={"/"} className="header--title " >Bookshop</NavLink>
                            </li>
                            <li >
                                <NavLink to={"/books"}   className="header--title" >Categories</NavLink>
                            </li>
                            <li >
                                <NavLink to={"/recent"}   className="header--title" >Recent</NavLink>
                            </li>
                            <li >
                                <NavLink to={"/hello"}   className="header--title" >Books</NavLink>
                            </li>
                            <li >
                                <NavLink to={"/about"}   className="header--title" >About Us</NavLink>
                            </li>


                        </ul>
                        <div className="header--icons" >
                            <BiSearch className="header--icons__search "/>
                            <Link to={'/cart'}>
                                <HiOutlineShoppingBag  className="header--icons__basket"/>
                            </Link>
                        </div>
                    </div>


            </div>
        </div>
    );
};
export default Header;