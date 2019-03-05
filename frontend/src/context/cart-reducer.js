export const CART_ADD_PRODUCT = "[cart] Add product into the cart";
export const CART_REMOVE_PRODUCT = "[cart] Remove product from the cart";

const addProductToCart = (product, cart) => {
    console.log('Adding product', product);
    const updatedCart = [...cart];
    const updatedItemIndex = updatedCart.findIndex(
        item => item.id === product.id
    );

    if (updatedItemIndex < 0) {
        updatedCart.push({ ...product, quantity: 1 });
    } else {
        const updatedItem = {
            ...updatedCart[updatedItemIndex]
        };
        updatedItem.quantity++;
        updatedCart[updatedItemIndex] = updatedItem;
    }
    
    return updatedCart;
};

const removeProductFromCart = (productId, cart) => {
    console.log('Removing product with id: ' + productId);
    const updatedCart = [...cart];
    const updatedItemIndex = updatedCart.findIndex(
        item => item.id === productId
    );

    const updatedItem = {
        ...updatedCart[updatedItemIndex]
    };

    updatedItem.quantity--;
    if (updatedItem.quantity <= 0) {
        updatedCart.splice(updatedItemIndex, 1);
    } else {
        updatedCart[updatedItemIndex] = updatedItem;
    }

    return updatedCart;
};

export const cartReducer = (state, action) => {
    switch(action.type) {
        case CART_ADD_PRODUCT:
            return addProductToCart(action.payload, state);
        case CART_REMOVE_PRODUCT:
            return removeProductFromCart(action.payload, state);
        default:
            return state;
    } 
};