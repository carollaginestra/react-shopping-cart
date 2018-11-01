const initialState = {
    products: [],
    item: '',
    items: []
};


export default (state = initialState, action) => {
    const { payload, type } = action;

    switch (type) {
        case 'CART_ADD_PRODUCT': {
            return {
                ...state,
                products: [...state.products, payload.product]
            }
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
            return {
                ...state,
                item: action.payload
            };
        }
        case 'FETCH_PRODUCTS': {
            return {
                ...state,
                items: action.payload
            }
        }
        default:
            return state;
    }
}
