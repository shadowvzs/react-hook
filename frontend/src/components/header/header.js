import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import ShopContext from '../../context/shop-context';

import './header.css';

const header = props => {

    console.log('render header');
    const context = useContext(ShopContext);

    return (
        <header>
            <nav>
                <Link to="/">Home</Link>
            </nav>
            <nav>
                <ul>
                    <Link to="/cart">
                        <li>
                            Cart [{ context.cart.reduce((total, current) => total + current.quantity, 0 ) }]   
                        </li>
                    </Link>
                </ul>
            </nav>
        </header>
    );
};

export default header;