const initialState = {
    products: [],
    quantity: 0,
};

export default (state = initialState, action) => {
    const {payload} = action;
    if(typeof state === 'undefined') {
        return Object.assign({}, initialState)
    }

    switch(action.type) {
        case 'CART_ADD_PRODUCT' : {
            return Object.assign({}, state, {
                products: [...state.products, payload.product],
            });
        }
        case 'CART_REMOVE_PRODUCT': {
            return Object.assign({}, state, {
                products: [
                    ...state.products.slice(0, payload.product),
                    ...state.products.slice(payload.product + 1)
                ],
            });
        }

        default: return state;
    }
}
