import React from 'react';
import Scrollable from "../slider/slider";
import About from "../aboutUs/about";
import Hero from "../hero/hero";

import New from "../new/new";

import Genres from "../genres/genres";


const Pages = () => {
  const data = [
        {
            id: 1, title: "MongoDB in Action, 2nd Edition",
            subtitle: "Covers MongoDB version 3.0", price: 20,
            image: "https://itbook.store/img/books/9781617291609.png"
        }, {
            id: 2,
            title: "MongoDB and Python", subtitle: "Patterns and processes for the popular document-oriented database",
            price: 7, image: "https://itbook.store/img/books/9781449310370.png",
        }, {
            id: 3,
            title: "Building Node Applications with MongoDB and Backbone",
            subtitle: "Rapid Prototyping and Scalable Deployment",
            price: "$4.85",
            image: "https://itbook.store/img/books/9781449337391.png",
            url: "https://itbook.store/books/9781449337391"
        }, {
            id: 4,
            title: "Practical MongoDB", subtitle: "Architecting, Developing, and Administering MongoDB",
            price: 41, image: "https://itbook.store/img/books/9781484206485.png",
        }, {
            id: 5,
            title: "The Definitive Guide to MongoDB, 3rd Edition",
            subtitle: "A complete guide to dealing with Big Data using MongoDB",
            price: 50,
            image: "https://itbook.store/img/books/9781484211830.png",
        }, {
            id: 6,
            title: "MongoDB Performance Tuning", subtitle: "Optimizing MongoDB Databases and their Applications",
            price: 34, image: "https://itbook.store/img/books/9781484268780.png",
        }, {
            id: 7,
            title: "Pentaho Analytics for MongoDB",
            subtitle: "Combine Pentaho Analytics and MongoDB to create powerful analysis and reporting solutions",
            price: 17,
            image: "https://itbook.store/img/books/9781782168355.png",
        }, {
            id: 8,
            title: "Pentaho Analytics for MongoDB Cookbook",
            subtitle: "Over 50 recipes to learn how to use Pentaho Analytics and MongoDB to create powerful analysis and reporting solutions",
            price: 44,
            image: "https://itbook.store/img/books/9781783553273.png",
        }, {
            id: 9,
            title: "Web Development with MongoDB and NodeJS, 2nd Edition",
            subtitle: "Build an interactive and full-featured web application from scratch using Node.js and MongoDB",
            price: 39,
            image: "https://itbook.store/img/books/9781785287527.png",
        }, {
            id: 10,
            title: "MongoDB Cookbook, 2nd Edition",
            subtitle: "Harness the latest features of MongoDB 3 with this collection of 80 recipes - from managing cloud platforms to app development, this book is a vital resource",
            price: 44.99,
            image: "https://itbook.store/img/books/9781785289989.png",
        }
    ]
    return (
        <div>
            <Hero/>
            <Genres/>
            <New/>


            <div className='containerScroll'>
                <Scrollable _class='data'>
                    {
                        data.map((el) => {
                            return <div key={el.id} style={{
                                borderRadius: '10px',
                                minWidth: '220px !important',
                                marginLeft: '20px',
                            }}>
                                <img style={{
                                    width: '350px',
                                    borderRadius: '40px'
                                }} src={el.image} alt="img"/>
                                <h3 style={{
                                    fontFamily: 'Public Sans',
                                    fontSize: '18px',
                                    fontWeight: '700'
                                }}>{el.title}</h3>
                                <p style={{
                                    fontFamily: 'Puplic Snas',
                                    fontWeight: '400',
                                    fontSize: '16px'
                                }}>{el.subtitle}</p>
                                <p>{el.price}</p>
                            </div>
                        })
                    }
                </Scrollable>
                </div>
                <About/>


        </div>
    );
};

export default Pages;