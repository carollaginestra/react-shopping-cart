export const selectCartProducts = store => store.cart.products;
export const sortProducts = store => store.cart.item;

export const selectCartTotal = store => {
    const { products = [] } = store.cart;

    return products.reduce((price, product) => price + product.price, 0);
};
