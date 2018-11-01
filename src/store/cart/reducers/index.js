const initialState = {
    products: [],
    sort: localStorage.getItem('SORT') || 'asc',
    items: [],
};

export default (state = initialState, action) => {
    const { payload, type } = action;

    switch (type) {
        case 'CART_ADD_PRODUCT': {
            return {
                ...state,
                products: [...state.products, payload.product],
            };
        }
        case 'CART_REMOVE_PRODUCT': {
            return {
                ...state,
                products: state.products.filter(({ id }) => id !== payload.id),
            };
        }
        case 'CART_REMOVE_ALL_PRODUCTS': {
            return {
                ...state,
                products: [],
            };
        }
        case 'UPDATE_SORT': {
            localStorage.setItem('SORT', action.payload);

            return {
                ...state,
                sort: action.payload,
            };
        }
        default:
            return state;
    }
};
