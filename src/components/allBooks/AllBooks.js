import React from 'react';

const AllBooks = () => {
    const Data = [
        {
            id: 1,
            title: "MongoDB in Action, 2nd Edition",
            subtitle: "Covers MongoDB version 3.0",
            price: 20,
            image: "https://itbook.store/img/books/9781617291609.png"
        },
        {
            id: 2,
            title: "MongoDB and Python",
            subtitle: "Patterns and processes for the popular document-oriented database",
            price: 7,
            image: "https://itbook.store/img/books/9781449310370.png",
        },
        {
            id: 3,
            title: "Building Node Applications with MongoDB and Backbone",
            subtitle: "Rapid Prototyping and Scalable Deployment",
            price: 5,
            image: "https://itbook.store/img/books/9781449337391.png",
            url: "https://itbook.store/books/9781449337391"
        },
        {
            id: 4,
            title: "Practical MongoDB",
            subtitle: "Architecting, Developing, and Administering MongoDB",
            price: 41,
            image: "https://itbook.store/img/books/9781484206485.png",
        },
        {
            id: 5,
            title: "The Definitive Guide to MongoDB, 3rd Edition",
            subtitle: "A complete guide to dealing with Big Data using MongoDB",
            price: 50,
            image: "https://itbook.store/img/books/9781484211830.png",
        },
        {
            id: 6,
            title: "MongoDB Performance Tuning",
            subtitle: "Optimizing MongoDB Databases and their Applications",
            price: 34,
            image: "https://itbook.store/img/books/9781484268780.png",
        },
        {
            id: 7,
            title: "Pentaho Analytics for MongoDB",
            subtitle: "Combine Pentaho Analytics and MongoDB to create powerful analysis and reporting solutions",
            price: 17,
            image: "https://itbook.store/img/books/9781782168355.png",
        },
        {
            id: 8,
            title: "Pentaho Analytics for MongoDB Cookbook",
            subtitle: "Over 50 recipes to learn how to use Pentaho Analytics and MongoDB to create powerful analysis and reporting solutions",
            price: 44,
            image: "https://itbook.store/img/books/9781783553273.png",
        },
        {
            id: 9,
            title: "Web Development with MongoDB and NodeJS, 2nd Edition",
            subtitle: "Build an interactive and full-featured web application from scratch using Node.js and MongoDB",
            price: 39,
            image: "https://itbook.store/img/books/9781785287527.png",
        },
        {
            id: 10,
            title: "MongoDB Cookbook, 2nd Edition",
            subtitle: "Harness the latest features of MongoDB 3 with this collection of 80 recipes - from managing cloud platforms to app development, this book is a vital resource",
            price: 44.99,
            image: "https://itbook.store/img/books/9781785289989.png",
        }
    ]
    return (
        <div id="books">
            <div className="container">
                <div className="books">
                    <div className="books--title">
                        <h1>All Books</h1>
                        <p>Here you can find all the books you need</p>
                    </div>
                    <div className="books--center">
                        <div>
                            <h2>Filters</h2>
                            <a href="#">Clear filters</a>
                        </div>

                        <select className="books--center__option">
                            <option value="value1">popular</option>
                            <option value="value2">popular</option>
                            <option value="value3">new</option>

                        </select>


                    </div>
                    <div className="books--bottom">
                        <div className="books--bottom__left">
                            <h5>Genres</h5>
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
                            {Data.map((el) => {
                                return (
                                    <div key={el.id} className="books--bottom__right--card">
                                        <img style={{
                                            width: "285px",
                                            height: "310px",

                                        }} src={el.image} alt=""/>
                                        <div>
                                            <h5>{el.title}</h5>
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