import React from "react";
import { useSelector } from "react-redux";
import { products } from "../components/Products";

function Cart() {
  const productsIds = useSelector((state) => state.cart);
  const productsData = productsIds.map((i) => products.find((p) => p.id === i));
  return (
    <div>
      {productsData.map((i) => {
        return (
          <div>
            <div key={i.id}>{i.title}</div>
            <div key={i.id}>{i.price}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Cart;
