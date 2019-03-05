import React, { useContext, useEffect } from 'react';
import ShopContext from '../context/shop-context';
import CartItem from '../components/cart/cart-item';

const cartPage = props => {

    const context = useContext(ShopContext);

    useEffect( () => {
        console.log('the context', context);
    }, []);

    return (
        <div className="cart-container">
            {context.cart.map(product => (
                <CartItem 
                    key={product.id} 
                    product={product} 
                    removeProductFromCart={context.removeProductFromCart}
                />
            ))}
        </div>
    );
};

export default cartPage;