import React from 'react';
import './style.scss.css'
import {IoIosArrowForward} from "react-icons/io";
const Cart = () => {
    return (
        <div className='cart'>
            <div className="yourCart">
                <div className="zagalovok">
                    <h1>Your cart</h1>
                    <p>Not ready to checkout? <a href="http://localhost:3000/">Continue Shopping </a></p>
                    <div></div>
                </div>
            </div>
            <div className="cart_content">
                <h1>Order Summary</h1>
                <div className="order">
                    <div className="shipping">
                        <h5>Shipping</h5>
                        <h5>Select Method <IoIosArrowForward/></h5>
                    </div>
                    <div className="Payment">
                        <h5>Payment</h5>
                        <h5>Select Method <IoIosArrowForward/></h5>
                    </div>
                    <div className='linear'></div>
                    <div className="total">
                        <h5>Total</h5>
                        <p>$</p>
                    </div>
                </div>
                <button>Continue to checkout</button>
            </div>
        </div>
    );
};

export default Cart;
