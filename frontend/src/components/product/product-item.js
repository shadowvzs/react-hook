import React from 'react';
import './product-item.css';

const productItem = props => {

    const { product } = props;
    console.log( 'render product item' );

    return (
        <div className="product-item">
            <div>{product.id}</div>
            <div>{product.title}</div>
            <div>{product.price}</div>
            <div>
                <button 
                    onClick={ props.addProductToCart.bind(null, product) }
                >
                    Add to cart
                </button>
            </div>
        </div>
    );
};

export default productItem;