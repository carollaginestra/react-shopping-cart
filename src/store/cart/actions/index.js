
let nextId = 0;
export const addProduct = (product = {}) => ({
    type: 'CART_ADD_PRODUCT',
    payload: { product },
    id: nextId++,
});

export const removeProduct = (id, product = {}) => ({
    type: 'CART_REMOVE_PRODUCT',
    payload: { product },
    id: id
});