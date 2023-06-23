import React from 'react';
import './style.scss.css'
const Cart = () => {
    return (
        <div className='container'>
            <div className="caption">
                <h1>Your cart</h1>
                <h4>Not ready to checkout? <span style={{color:'skyblue'}}>Continue Shopping</span> </h4>
            </div>
            <div className="cart-content">
                <div className='image'></div>
                <div className="res">
                    <h1>Order Summary</h1>
                    <div className="content">
                        <div className="shipping">
                            <p>Shipping</p>
                        <p>Payment</p>
                        <p>total</p>
                        </div>
                        <div className="select">
                            <h5>Select Method</h5>
                            <h5>Select Method</h5>
                        </div>
                        <div className='linia'></div> 
                    </div>
                    <button>Continue to checkout</button>
                </div>
            </div>

        </div>
    );
};

export default Cart;