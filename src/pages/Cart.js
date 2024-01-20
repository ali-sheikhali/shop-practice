import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { products } from "../components/Products";
import { Link } from "react-router-dom";
import { removeToCart } from "../store/cartSlice";

function Cart() {
  const dispatch = useDispatch()
  const handleClick = (item)=>{
    dispatch(removeToCart(item))
  }
  const productsIds = useSelector((state) => state.cart);
  const productsData = productsIds.map((i) => products.find((p) => p.id === i));
  return (
    <div className="grid grid-cols-4 justify-around gap-5 w-9/12 mx-auto my-10 rounded-md">
      {productsData.map((item) => {
        return (
          <div key={item.id} className="flex flex-col shadow-md">
            <figure className="relative ">
              <img
                className="h-42 w-full rounded-md hover:blur-sm"
                src={item.img}
                alt=""
              />
            </figure>
            <div className="py-3 px-5 text-left">
              <p>{item.title}</p>
              <p>${item.price}</p>
            </div>
            <Link to={`/item/${item.id}`}>
              {" "}
              <p className="text-center bg-gray-200 py-1">View Detail</p>
            </Link>

            <Link className="w-full">
              <div
                className=" flex justify-center space-x-2 bg-red-500 rounded-b-md text-white py-2"
                onClick={() => handleClick(item.id)}
              >
                <button>Remove to Cart</button>
                <span className=" text-2xl">
                  
                </span>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Cart;
