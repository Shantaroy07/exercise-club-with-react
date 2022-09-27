import React from 'react';
import './Product.css'

const Product = (props) => {
    const { product, handleAddCart } = props
    const { name, img, price, seller, ratings } = product;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p>{name}</p>
                <p>Price:{price}</p>

                <p><small>Seller: {seller}</small></p>
                <p><small>Ratings: {ratings}</small></p>

            </div>
            <button onClick={() => handleAddCart(product)} className='btn-cart'>
                <p>Add to Cart</p>
            </button>


        </div>
    );
};

export default Product;