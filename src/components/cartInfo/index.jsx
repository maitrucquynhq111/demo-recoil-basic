import React from "react";
import { useRecoilValue } from "recoil";
import { cartState, getCartTotal } from "../../state";

CartInfo.propTypes = {};

function CartInfo(props) {
  const cart = useRecoilValue(cartState);
  const cartTotal = useRecoilValue(getCartTotal);
  return (
    <div>
      <h2>Cart Info</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.product.title} - {item.quantity}
          </li>
        ))}
      </ul>
      <h3>Total price</h3>
      <p>{cartTotal} VNĐ</p>
    </div>
  );
}

export default CartInfo;
