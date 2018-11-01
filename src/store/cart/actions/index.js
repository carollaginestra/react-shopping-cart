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

const compare = {
    'lowestprice': (a, b) => {
        if (a.price < b.price)
        return -1;
        if (a.price > b.price)
        return 1;
        return 0;
    },
    'highestprice': (a, b) => {
        if (a.price > b.price)
        return -1;
        if (a.price < b.price)
        return 1;
        return 0;
    }
}

export const fetchProducts = (sortBy) => dispatch => {
    let products = [];

    if(!!sortBy){
        products = products.sort(compare[sortBy]);
    }

    return dispatch({
        type: 'FETCH_PRODUCTS',
        payload: products
    });

}