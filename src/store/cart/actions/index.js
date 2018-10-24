
export const addProduct = (product = {}) => ({
    type: 'CART_ADD_PRODUCT',
    payload: { product },
});

export const removeProduct = (product = {}) => ({
    type: 'CART_REMOVE_PRODUCT',
    payload: { product },
});
