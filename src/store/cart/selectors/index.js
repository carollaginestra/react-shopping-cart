export const selectCartProducts = store => store.cart.products;

export const selectCartSortedProducts = store => {
    const products = selectCartProducts(store);
    const sort = store.cart.sort;
    const compare = {
        asc: (a, b) => a.price - b.price,
        desc: (a, b) => b.price - a.price,
    };

    return products.sort(compare[sort]);
};

export const selectCartSort = store => store.cart.sort;

export const selectCartTotal = store => {
    const { products = [] } = store.cart;

    return products.reduce((price, product) => price + product.price, 0);
};
