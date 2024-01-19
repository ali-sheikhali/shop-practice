import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";

function DetailItems() {
  const { itemId } = useParams();
  const products = [
    {
      id: 1,
      title: "Nike V2K Run",
      price: 120,
      img: require("../img/v2k-run-shoes-4CJ5WW.png"),
      desc: "Fast forward. Rewind. Doesn't matter—this shoe takes retro into the future. The V2K remasters everything you love about the Vomero in a look pulled straight from an early '00s running catalogue. Layer up in a mixture of flashy metallics, referential plastic details and a midsole with a perfectly vintage aesthetic. And the chunky heel makes sure wherever you go, it's in comfort. ",
    },
    {
      id: 2,
      title: "Nike Dunk Low Retro",
      price: 119,
      img: require("../img/dunk-low-retro-shoe-VMwkPQ.png"),
      desc: "Fast forward. Rewind. Doesn't matter—this shoe takes retro into the future. The V2K remasters everything you love about the Vomero in a look pulled straight from an early '00s running catalogue. Layer up in a mixture of flashy metallics, referential plastic details and a midsole with a perfectly vintage aesthetic. And the chunky heel makes sure wherever you go, it's in comfort. ",
    },
    {
      id: 3,
      title: "Nike Dunk Low",
      price: 129,
      img: require("../img/dunk-low-shoes-NDWvwq.png"),
      desc: "Fast forward. Rewind. Doesn't matter—this shoe takes retro into the future. The V2K remasters everything you love about the Vomero in a look pulled straight from an early '00s running catalogue. Layer up in a mixture of flashy metallics, referential plastic details and a midsole with a perfectly vintage aesthetic. And the chunky heel makes sure wherever you go, it's in comfort. ",
    },
    {
      id: 4,
      title: "Nike Air Max TW",
      price: 79,
      img: require("../img/air-max-tw-shoes-VMBzzV.jfif"),
      desc: "Fast forward. Rewind. Doesn't matter—this shoe takes retro into the future. The V2K remasters everything you love about the Vomero in a look pulled straight from an early '00s running catalogue. Layer up in a mixture of flashy metallics, referential plastic details and a midsole with a perfectly vintage aesthetic. And the chunky heel makes sure wherever you go, it's in comfort. ",
    },
    {
      id: 5,
      title: "Nike Air Max Plus III",
      price: 189,
      img: require("../img/air-max-plus-iii-shoes-nsxfmc.png"),
      desc: "Fast forward. Rewind. Doesn't matter—this shoe takes retro into the future. The V2K remasters everything you love about the Vomero in a look pulled straight from an early '00s running catalogue. Layer up in a mixture of flashy metallics, referential plastic details and a midsole with a perfectly vintage aesthetic. And the chunky heel makes sure wherever you go, it's in comfort. ",
    },
    {
      id: 6,
      title: "Air Jordan 1 Low SE",
      price: 70,
      img: require("../img/air-jordan-1-low-se-shoes-Z8CHrq.jfif"),
      desc: "Fast forward. Rewind. Doesn't matter—this shoe takes retro into the future. The V2K remasters everything you love about the Vomero in a look pulled straight from an early '00s running catalogue. Layer up in a mixture of flashy metallics, referential plastic details and a midsole with a perfectly vintage aesthetic. And the chunky heel makes sure wherever you go, it's in comfort. ",
    },
    {
      id: 7,
      title: "Nike Air Monarch IV",
      price: 75,
      img: require("../img/air-monarch-iv-workout-shoes-t6VLxN.png"),
      desc: "Fast forward. Rewind. Doesn't matter—this shoe takes retro into the future. The V2K remasters everything you love about the Vomero in a look pulled straight from an early '00s running catalogue. Layer up in a mixture of flashy metallics, referential plastic details and a midsole with a perfectly vintage aesthetic. And the chunky heel makes sure wherever you go, it's in comfort. ",
    },
    {
      id: 8,
      title: "Nike Air Max 90 GORE-TEX",
      price: 183,
      img: require("../img/air-max-90-gore-tex-shoes-fQjC4b.png"),
      desc: "Fast forward. Rewind. Doesn't matter—this shoe takes retro into the future. The V2K remasters everything you love about the Vomero in a look pulled straight from an early '00s running catalogue. Layer up in a mixture of flashy metallics, referential plastic details and a midsole with a perfectly vintage aesthetic. And the chunky heel makes sure wherever you go, it's in comfort. ",
    },
  ];
  const selectItem = products.find(
    (product) => product.id === parseInt(itemId)
  );
  return (
    <div className="w-6/12 mx-auto flex shadow-md my-10">
      <div className="w-1/2">
        <img className="h-full" src={selectItem.img} alt="" />
      </div>
      <div className="w-6/12 p-5 flex flex-col justify-start items-start space-y-3">
        <div>
          <span className="text-xl font-bold">Name:</span> {selectItem.title}
        </div>
        <div>
          <span className="text-xl font-bold">Price: </span>${selectItem.price}
        </div>
        <div className="w-6/12">
          <select
            className="focus:outline-none border border-black  rounded-md px-2 py-1"
            name=""
            id=""
          >
            <option value="" className="focus:outline-none bg-white">
              Choose your Color
            </option>
            <option value="red">red</option>
            <option value="blue">blue</option>
            <option value="black">black</option>
          </select>
        </div>
        <div className="w-6/12">
          <select
            className="focus:outline-none border border-black  rounded-md px-3 py-1"
            name=""
            id=""
          >
            <option value="" className=" focus:outline-none">
              Choose your Size
            </option>
            <option value="36">36</option>
            <option value="37">37</option>
            <option value="38">38</option>
            <option value="39">39</option>
            <option value="40">40</option>
            <option value="41">41</option>
            <option value="42">42</option>
            <option value="43">43</option>
          </select>
        </div>
        <div className="flex flex-col text-justify items-start">
          <span className="text-xl font-bold">Description:</span> <p>{selectItem.desc}</p> 
        </div>
        <Link className="w-full">
              <div className=" flex justify-center space-x-2 bg-blue-500 rounded-md text-white py-2">
                <button>Add to Cart</button>
                <span className=" text-2xl">
                  <IoCartOutline />
                </span>
              </div>
            </Link>
      </div>
    </div>
  );
}

export default DetailItems;
