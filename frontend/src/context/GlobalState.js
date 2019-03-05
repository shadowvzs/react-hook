import React, { useState, useReducer } from 'react';

import ShopContext from './shop-context';
import { 
    cartReducer, 
    CART_ADD_PRODUCT, 
    CART_REMOVE_PRODUCT 
} from './cart-reducer';

const GlobalState = props => {

    const [ products, setProducts ] = useState([
            { id: 'p1', title: 'Gaming Mouse', price: 29.99 },
            { id: 'p2', title: 'Harry Potter 3', price: 9.99 },
            { id: 'p3', title: 'Used plastic bottle', price: 0.99 },
            { id: 'p4', title: 'Half-dried plant', price: 2.99 }
    ]);

    // useReducer take reduced function and default value like params
    const [cart, cartDispatch] = useReducer(cartReducer, []);    

    const addProductToCart = product => {
        setTimeout( () => {
            cartDispatch( { type: CART_ADD_PRODUCT, payload: product } )
        }, 700);
    };
    
    const removeProductFromCart = productId => {
        setTimeout( () => {
            cartDispatch( { type: CART_REMOVE_PRODUCT, payload: productId } )
        }, 700);
    };

    return (
    <ShopContext.Provider
        value={{
            products: products,
            cart: cart,
            addProductToCart: addProductToCart,
            removeProductFromCart: removeProductFromCart
        }}
    >
        {props.children}
    </ShopContext.Provider>
    );

}

export default GlobalState;

