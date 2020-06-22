const { atom, selector } = require("recoil");

export const cartState = atom({
  key: "cart",
  default: [],
});

export const handleAddProduct = (cart, product) => {
  let newCart = [...cart];
  // Find in cart
  let foundIndex = cart.findIndex((item) => item.id === product.id);
  if (foundIndex >= 0) {
    // product exist in cart
    newCart[foundIndex] = {
      ...cart[foundIndex],
      quantity: cart[foundIndex].quantity + 1,
    };
    return newCart;
  }
  newCart.push({
    id: product.id,
    product: product,
    quantity: 1,
  });
  return newCart;
};

export const getCartTotal = selector({
  key: "cartTotal",
  get: ({ get }) => {
    const cart = get(cartState);
    return cart.reduce((total, product) => {
      return total + product.product.price * product.quantity;
    }, 0);
  },
});
