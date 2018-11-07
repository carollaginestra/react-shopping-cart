export const addProduct = (product = {}) => ({
    type: 'CART_ADD_PRODUCT',
    payload: {
        product: {
            ...product,
            id: new Set(),
        },
    },
});

export const removeProduct = id => ({
    type: 'CART_REMOVE_PRODUCT',
    payload: { id },
});

export const removeAllProducts = () => ({
    type: 'CART_REMOVE_ALL_PRODUCTS'
});

export const updateSort = (sort) => dispatch => {
    dispatch({
        type: 'UPDATE_SORT',
        payload: sort,
    });
}
