// creat a Bestselling component import the Specialcard component using the Map method to list all the products in an array
import React from "react";
import SpecialCard from "./SpecialCard";
import StickUmbrella from "../asset/products/3039/3039-1-1000.jpg";
import TransparentUmbrella from "../asset/products/3084/3084-1-1000.jpg";
import GolfUmbrella from "../asset/products/1891/1891-5-1000.jpg";
import FoldUmbrellaPolo from "../asset/products/3014/3014-Automatic-umbrella-wood handle-4-1000.jpg";

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
    {
        name: "Polo Claasic Umbrella",
        image: FoldUmbrellaPolo,
        price: "$25.99",
        description:
          "Polo Claasic Umbrella is a big size automatic folding umbrella. White fabric with blue strip around the edges. Classic woldren crook handle.",
      },
      {
        name: "Polo Claasic Umbrella",
        image: FoldUmbrellaPolo,
        price: "$25.99",
        description:
          "Polo Claasic Umbrella is a big size automatic folding umbrella. White fabric with blue strip around the edges. Classic woldren crook handle.",
      },
  ];

  return (
    <div className='container mx-auto my-20 max-w-[1280px]'>
      <div className='flex flex-row justify-between p-10'>
        <h1 className='text-5xl font-headLines font-bold mb-5'>Best selling</h1>
        <a href='#more'>
          <button className='bg-primaryYellow hover:bg-secondaryPink text-black font-bold py-2 px-4 rounded'>
            more Products
          </button>
        </a>
      </div>
      <div className='grid md:grid-cols-3 gap-10 place-items-center '>
        {umbrella.map((umbrella) => {
          return <SpecialCard umbrella={umbrella} key={umbrella.name} />;
        })}
      </div>
    </div>
  );
};

export default Bestselling;
