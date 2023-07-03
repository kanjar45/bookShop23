import React from 'react';

import {IoIosArrowForward} from "react-icons/io";
const Cart = ({props}) => {
    return (
        <>
            <div className="yourCart">
                <div className="zagalovok">
                    <h1>Your cart</h1>
                    <p>Not ready to checkout? <a href="http://localhost:3000/">Continue Shopping </a></p>
                    <div>
                        {
                            props.map((el)=>(
                                console.log(el)
                                // <div>
                                //      <h1>{el.title}</h1>
                                // </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className="cart_content">
                <h1>Order Summary</h1>
                <div className="order">
                    <div className="shipping">
                        <h5>Shipping</h5>
                        <h5 className='select1'>Select Method <IoIosArrowForward/></h5>
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
        </>
    );
};

export default Cart;
