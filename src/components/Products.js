import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { IoCartOutline } from "react-icons/io5";
import { addToCart } from "../store/cartSlice";

export const products = [
  {
    id: 1,
    title: "Nike V2K Run",
    price: 120,
    img: require("../img/v2k-run-shoes-4CJ5WW.png"),
  },
  {
    id: 2,
    title: "Nike Dunk Low Retro",
    price: 119,
    img: require("../img/dunk-low-retro-shoe-VMwkPQ.png"),
  },
  {
    id: 3,
    title: "Nike Dunk Low",
    price: 129,
    img: require("../img/dunk-low-shoes-NDWvwq.png"),
  },
  {
    id: 4,
    title: "Nike Air Max TW",
    price: 79,
    img: require("../img/air-max-tw-shoes-VMBzzV.jfif"),
  },
  {
    id: 5,
    title: "Nike Air Max Plus III",
    price: 189,
    img: require("../img/air-max-plus-iii-shoes-nsxfmc.png"),
  },
  {
    id: 6,
    title: "Air Jordan 1 Low SE",
    price: 70,
    img: require("../img/air-jordan-1-low-se-shoes-Z8CHrq.jfif"),
  },
  {
    id: 7,
    title: "Nike Air Monarch IV",
    price: 75,
    img: require("../img/air-monarch-iv-workout-shoes-t6VLxN.png"),
  },
  {
    id: 8,
    title: "Nike Air Max 90 GORE-TEX",
    price: 183,
    img: require("../img/air-max-90-gore-tex-shoes-fQjC4b.png"),
  },
];

function Products() {
  const dispatch = useDispatch();

  const addToCartClick = (id) => {
    dispatch(addToCart(id));
  };
  return (
    <div className="grid grid-cols-4 justify-around gap-5 w-9/12 mx-auto my-10 rounded-md">
      {products.map((item) => {
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
                onClick={() => addToCartClick(item.id)}
                className=" flex justify-center space-x-2 bg-blue-500 rounded-b-md text-white py-2"
              >
                <button>Add to Cart</button>
                <span className=" text-2xl">
                  <IoCartOutline />
                </span>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
