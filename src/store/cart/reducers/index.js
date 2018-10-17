const initialState = {
    products: [],
    quantity: 0,
    id: id
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
            return state.filter(products =>
                state.id !== payload.id
            );
        }

        default: return state;
    }
}