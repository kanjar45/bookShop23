import React, {useEffect, useState} from 'react';
import Data from "../data";
import {NavLink} from "react-router-dom";

const AllBooks = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        setBooks(Data)
    }, [])
    return (
        <div id="books">
            <div className="container">
                <div className="books">
                    <div className="books--title">
                        <h1>All Books</h1>
                        <p>Here you can find all the books you need</p>
                    </div>
                    <div className="books--center">
                        <div className="books--center__title">
                          <div>
                              <h2>Filters</h2>
                              <a href="#">Clear filters</a>
                          </div>
                            <h5>Genres</h5>
                        </div>

                        <div className="books--center__select">
                            <p>Sort by</p>
                            <select className="books--center__select--option">
                                <option value="value1">popular</option>
                                <option value="value2">popular</option>
                                <option value="value3">new</option>

                            </select>
                        </div>
                    </div>
                    <div className="books--bottom">
                        <div className="books--bottom__left">
                            <div className="books--bottom__left--radio">
                                <input className="radio__input" type="radio"
                                       name="male" id="radio1"/>
                                <label className="radio__label" htmlFor="radio1">Autographed Books</label>
                            </div>
                            <div className="books--bottom__left--radio">
                                <input className="radio__input" type="radio"
                                       name="male" id="radio2"/>
                                <label className="radio__label" htmlFor="radio2">Sci-Fi</label>
                            </div>
                            <div className="books--bottom__left--radio">
                                <input className="radio__input" type="radio"
                                       name="male" id="radio3"/>
                                <label className="radio__label" htmlFor="radio3">For kids</label>
                            </div>
                            <div className="books--bottom__left--radio">
                                <input className="radio__input" type="radio"
                                       name="male" id="radio4"/>
                                <label className="radio__label" htmlFor="radio4">For teenagers</label>
                            </div>
                            <div className="books--bottom__left--radio">
                                <input className="radio__input" type="radio"
                                       name="male" id="radio5"/>
                                <label className="radio__label" htmlFor="radio5">Finance</label>
                            </div>
                            <div className="books--bottom__left--radio">
                                <input className="radio__input" type="radio"
                                       name="male" id="radio6"/>
                                <label className="radio__label" htmlFor="radio6">Detective</label>
                            </div>
                            <div className="books--bottom__left--radio">
                                <input className="radio__input" type="radio"
                                       name="male" id="radio7"/>
                                <label className="radio__label" htmlFor="radio7">Romantic</label>
                            </div>
                            <div className="books--bottom__left--radio">
                                <input className="radio__input" type="radio"
                                       name="male" id="radio8"/>
                                <label className="radio__label" htmlFor="radio8">Psychology</label>
                            </div>
                            <div className="books--bottom__left--radio">
                                <input className="radio__input" type="radio"
                                       name="male" id="radio9"/>
                                <label className="radio__label" htmlFor="radio9">Self-Improvement</label>
                            </div>
                            <div className="books--bottom__left--radio">
                                <input className="radio__input" type="radio"
                                       name="male" id="radio10"/>
                                <label className="radio__label" htmlFor="radio10">Educational</label>
                            </div>
                            <div className="books--bottom__left--radio">
                                <input className="radio__input" type="radio"
                                       name="male" id="radio11"/>
                                <label className="radio__label" htmlFor="radio11">Literature</label>
                            </div>
                            <div className="books--bottom__left--radio">
                                <input className="radio__input" type="radio"
                                       name="male" id="radio12"/>
                                <label className="radio__label" htmlFor="radio12">Literature</label>
                            </div>

                        </div>
                        <div className="books--bottom__right ">
                            {
                                books.map((el) => {
                                    return (
                                        <div key={el.id} className="books--bottom__right--card">
                                            <div className="books--bottom__right--card__img">
                                                <NavLink key={el.id} to={`/books/${el.id}`}>
                                                    <img src={el.image} alt=""/>
                                                </NavLink>
                                            </div>


                                            <div>
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
    );
};

export default AllBooks;