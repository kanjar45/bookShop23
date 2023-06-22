import React from 'react';
import img from '../../assets/img/Container.png'
const AboutUs = () => {
    return (
        <div className='container'>
            <div className="content">
                <h1>About Us</h1>
                <div className="about-content">
                    <div className="image">
                        <img src={img} alt="img"/>
                    </div>
                    <div className="p">
                        <p>We believe that books have the power to change lives, and we're dedicated to helping our customers find the perfect book for them. Whether you're looking for an escape from reality, an educational read, or a book to inspire you, we've got you covered.
                            Thank you for choosing to shop with us. We look forward to helping you discover your next favorite book!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;