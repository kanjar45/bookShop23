import React, {useEffect, useState} from 'react';
import Data from "../data";
import {NavLink} from "react-router-dom";
import {RiEqualizerLine} from "react-icons/ri";
import BooksGenres from "./booksGenres/booksGenres";
import {CgClose} from "react-icons/cg";

const AllBooks = () => {
    const [books, setBooks] = useState([])
    const [burgerMenu, setBurgerMenu] = useState(false)
    useEffect(() => {
        setBooks(Data)
    }, [])
    const burgerClose = () => {
        setBurgerMenu(!burgerMenu)
    }
    return (
        <div id="books">
            <div className="container">
                <div className="books">
                    <div className="books--top">
                        <div className="books--top__title" >
                            <h1>All Books</h1>
                            <p>Here you can find all the books you need</p>
                        </div>

                        <div className="books--top__filter">
                            <div className="books--top__filter--title" style={{
                              right:burgerMenu ? "" : "-70% "
                            }}>
                                <h2>Filters</h2>
                                <a href="#">Clear filters</a>

                            </div>

                            <div className="books--top__filter--button">
                                <div className="books--top__filter--button__select">
                                    <p>Sort by</p>
                                    <select className="books--top__filter--button__select--option">
                                        <option value="value1">popular</option>
                                        <option value="value2">popular</option>
                                        <option value="value3">new</option>

                                    </select>

                                </div>
                                <button className="books--top__filter--button__burger"
                                        onClick={burgerClose}>
                                    <RiEqualizerLine/>
                                </button>

                            </div>
                        </div>
                    </div>
                    <div className="books--bottom">
                        <h2 style={{
                            right:burgerMenu ? "" : "-60% "
                        }}>Genres</h2>
                        <div className="books--bottom__genres">
                            <div className="books--bottom__genres--left" style={{
                                right: burgerMenu ? "0" : ""
                            }}>
                                <div className="books--bottom__genres--left__cross" onClick={burgerClose}/>

                                {
                                    <BooksGenres close={burgerClose}/>
                                }
                            </div>
                            <div className="books--bottom__genres--right ">
                                {
                                    books.map((el) => {
                                        return (
                                            <div key={el.id} className="books--bottom__genres--right__card">
                                                <div className="books--bottom__genres--right__card--img">
                                                    <NavLink key={el.id} to={`/books/${el.id}`}>
                                                        <img src={el.image} alt=""/>
                                                    </NavLink>
                                                </div>


                                                <div className="books--bottom__genres--right__card--title">
                                                    <h5>{el.title}</h5>
                                                    <p>by {el.author}</p>
                                                </div>


                                            </div>
                                        )
                                    })}
                            </div>

                        </div>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default AllBooks;