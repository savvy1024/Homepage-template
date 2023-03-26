//create a component to show product's name, picture, description and link
import React from "react";
import { Link } from "react-router-dom";

const SpecialCard = ({ umbrella }) => {
  return (
    <div className='w-full flex flex-col rounded-t-md border bg-secondary3 justify-center items-center'>
      <div>
        <img
          className='w-full  rounded-t-md'
          src={umbrella.image}
          alt={umbrella.name}
        />
      </div>
      <div className="mt-5 mx-5 h-60 bg-blue-200">
        <div class='flex flex-row justify-between'>
          <h1 className='text-2xl font-bold font-headLines'>{umbrella.name}</h1>
          <span className='text-red-500 font-parragrap'>{umbrella.price}</span>
        </div>
        <div className='text-sm font-parragrap text-secondary4 mt-5 h-24 '>
          <p>{umbrella.description}</p>
        </div>
        <dir className='text-lg'>
          <a href={umbrella.link}>Order a delivery (svg 图标)</a>
        </dir>
      </div>
    </div>
  );
};

export default SpecialCard;

