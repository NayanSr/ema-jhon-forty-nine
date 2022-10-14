import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    console.log(cart);
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping * product.quantity;
    }
    const tax = parseFloat((total * .1).toFixed(2));
    const grandTotal = total + shipping + tax;

    return (
        <div>
            <h4>Order Summary</h4>
            <p> Selected Item: {quantity}</p>
            <div className='test'>
                <small>Total Price:</small>
                <small className='amount'>$ {total}</small>
            </div>

            <div className='test'>
                <small>Total Shiping:</small>
                <small className='amount'>$ {shipping}</small>
            </div>

            <div className='test'>
                <small>Tax: </small>
                <small className='amount'>$ {tax.toFixed(2)}</small>
            </div>

            <div className='test'>
                <small>Grand Total: </small>
                <small className='amount'>$ {grandTotal.toFixed(2)}</small>
            </div>

        </div>
    );
};

export default Cart;