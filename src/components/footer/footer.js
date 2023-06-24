import React from 'react';
import {FiInstagram} from "react-icons/fi";
import {BsWhatsapp} from "react-icons/bs";

const Footer = () => {
    return (
        <div id="footer">
            <div className='container'>
                <div className='footer'>
                    <div className='footer--block'>
                        <h1>Sign up for our newsletter</h1>
                        <p>Be the first to know about our special offers, news, and updates.</p>
                        <div className="input-group mb-3">
                            <input type="email" className="form-control" placeholder="Email address"
                                   aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                            <div className="input-group-append">
                                <button className="btn btn-outline-secondary" type="button">Sign Up</button>
                            </div>
                        </div>
                    </div>

                    <div className='lorems'>
                        <div className='footer--title'>
                            <h4>Our location and contacts</h4>
                            <div>
                                <p>Bishkek, Kalyk Akiev / Toktogul str., <br/> "Vesna" shopping Mall </p>
                                <p>Phone +996777848510</p>
                            </div>

                        </div>
                        <div className='footer--title'>
                            <h4>Follow us</h4>
                            <div>
                                <a href="https://www.instagram.com/danek_books/"><FiInstagram/>  Instagram</a>
                                <a href="https://api.whatsapp.com/send/?phone=996777858410&text&type=phone_number&app_absent=0"><BsWhatsapp/>  WhatApp</a>
                            </div>

                        </div>

                    </div>

                </div>



            </div>
        </div>

    );
};

export default Footer;