import React from 'react';
import {NavLink,Link} from "react-router-dom";

import {BiSearch} from "react-icons/bi";
import {HiOutlineShoppingBag} from "react-icons/hi";
const Header = () => {
    return (
        <div id="header">
            <div className="container">
                    <div className="header">
                        <ul className="header--ul" >
                            <li className="header--ul__li">
                                <NavLink to={"/"} className="header--ul__li--title " >Bookshop</NavLink>
                            </li>
                            <li className="header--ul__li">
                                <NavLink to={"/books"}   className="header--ul__li--title" >Categories</NavLink>
                            </li>
                            <li className="header--ul__li">
                                <NavLink to={"/recent"}   className="header--ul__li--title" >Recent</NavLink>
                            </li>
                            <li className="header--ul__li">
                                <NavLink to={"/hello"}   className="header--ul__li--title" >Books</NavLink>
                            </li>
                            <li className="header--ul__li">
                                <NavLink to={"/about"}   className="header--ul__li--title" >About Us</NavLink>
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