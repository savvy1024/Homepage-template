// creat a Bestselling component import the Specialcard component using the Map method to list all the products in an array
import React from "react";
import { Link } from "react-router-dom";
import SpecialCard from "./SpecialCard";
import StickUmbrella from "../asset/products/3039/3039-1-1000.jpg";
import TransparentUmbrella from "../asset/products/3084/3084-1-1000.jpg";
import GolfUmbrella from "../asset/products/1891/1891-5-1000.jpg";

const Bestselling = () => {
  const umbrella = [
    {
      name: "Stick Umbrella",
      image: StickUmbrella,
      price: "$19.99",
      description:
        "Convenient automatic function for quick opening, windproof with fiberglass ribs, Sturdy steel shaft, with all parts match colors. ",
    },
    {
      name: "Transparent Umbrella",
      image: TransparentUmbrella,
      price: "$15.99",
      description:
        "The Canopy Umbrella has a see-through dome of waterproof POE fabric and black handle and trim for good protection in wet weather.",
    },
    {
      name: "Transparent Umbrella",
      image: GolfUmbrella,
      price: "$15.99",
      description:
        "Golf umbrella with strong windproof system, and big size up to 130cm diameter under umbrella..",
    },
  ];

  return (
    <div className="container mx-auto my-20 max-w-1280 ">
      <div className='flex flex-row justify-between '>
        <h1 className="text-3xl font-headLines font-bold mb-5">Best selling</h1>
        <a href=''>
          <button className="bg-primaryYellow hover:bg-secondaryPink text-black font-bold py-2 px-4 rounded">more Products</button>
        </a>
      </div>
      <div className='flex flex-col justify-around items-center space-x-6 flex-nowrap md:flex-row '>
        {umbrella.map((umbrella) => {
          return <SpecialCard umbrella={umbrella} key={umbrella.name} />;
        })}
      </div>
    </div>
  );
};

export default Bestselling;
