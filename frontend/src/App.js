import React from 'react';
//import Greetings from './components/test';
import Header from './components/header/header';
import ProductsPage from './pages/Products';
import CartPage from './pages/Cart';
import GlobalState from './context/GlobalState';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export default function App(props) {
    console.log('app render');
    return (
        <GlobalState>
            <BrowserRouter>
                <>
                    <Header />

                    <Switch>
                        <Route exact path="/" component={ ProductsPage } />
                        <Route exact path="/cart" component={ CartPage } />
                    </Switch>
                </>
            </BrowserRouter>
        </GlobalState>
    );
}