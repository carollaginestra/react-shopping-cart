let nextId = 0;

export const addProduct = (product = {}) => ({
    type: 'CART_ADD_PRODUCT',
    id: nextId++,
    payload: { product },
});

export const removeProduct = id => ({
    type: 'CART_REMOVE_PRODUCT',
    id: id
});
