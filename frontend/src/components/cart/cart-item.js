import React from 'react';
import './cart-item.css';

const cartItem = props => {

    const { product } = props;
    console.log( 'render cart item' );

    return (
        <div className="product-item">
            <div>{product.title}</div>
            <div>{product.quantity || 0}</div>
            <div>{product.price}</div>
            <div>
                <button 
                    onClick={ props.removeProductFromCart.bind(null, product.id) }
                >
                    Remove from cart
                </button>
            </div>            
        </div>
    );
};

export default cartItem;