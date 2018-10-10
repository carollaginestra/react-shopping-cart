const initialState = {
    products: [],
    quantity: 0,
};

export default (state = initialState, action) => {
    const { type, payload } = action;

    if (type === 'CART_ADD_PRODOUCT') {
        return {
            ...state,
            products: [...state.products, payload.product],
        };
    }

    return state;
};
