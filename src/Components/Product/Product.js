import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Produt.css';

const Product = (props) => {
    const { handelAddToCart, product } = props;
    const { name, img, seller, price, rating } = product;

    return (
        <div className='product' >
            <img src={img} alt="" />
            <div className='product-information'>
                <p className='product-name'> {name}</p>
                <p>Price: {price}</p>
                <p> <small>Seller: {seller}</small> </p>
                <p> <small>Ratings: {rating} stars</small> </p>
            </div>
            <button onClick={() => handelAddToCart(product)} className='btn-cart'>
                <p className='btn-text'>Add to card</p>
                <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;