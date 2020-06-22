import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { productListState, cartState, handleAddProduct } from "../../state";

function ProductList(props) {
  const productList = useRecoilValue(productListState);
  const [cart, setCart] = useRecoilState(cartState);

  function handleAddToCart(product) {
    let newCart = handleAddProduct(cart, product);
    setCart(newCart);
  }
  return (
    <div>
      <h2>Product List</h2>
      <ul className="product-list">
        {productList.map((product) => (
          <li key={product.id}>
            {product.title} - {product.price} VNĐ
            <button
              style={{ marginLeft: "16px" }}
              onClick={() => handleAddToCart(product)}
            >
              Add to cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
