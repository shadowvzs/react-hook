import React, { useContext } from 'react';
import ProductItem from '../components/product/product-item';

import ShopContext from '../context/shop-context';

const productsPage = props => {
    
    const context = useContext(ShopContext);

    return (
        <>
            <main className="products-container">
                { context.products.map( product => (
                    <ProductItem 
                        key={product.id}
                        product={product}
                        addProductToCart={context.addProductToCart}
                    />
                )) }
            </main>
        </>
    );
};

export default productsPage;