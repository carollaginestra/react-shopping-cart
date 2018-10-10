export const addProduct = (product = {}) => ({
    type: 'CART_ADD_PRODOUCT',
    payload: { product },
});
