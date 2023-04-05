//create a component to show product's name, picture, description and link
import React from "react";
import { faMotorcycle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SpecialCard = ({ umbrella }) => {
  return (
    <div className={umbrella.hidden?"hidden md:block":""}>
    <div className='w-full max-w-sm flex flex-col rounded-t-md border shadow-md bg-secondary3 justify-center items-center'>
      <div>
        <img
          className='w-full rounded-t-md'
          src={umbrella.image}
          alt={umbrella.name}
        />
      </div>
      <div className='mt-5 mx-5 h-40'>
        <div class='flex flex-row justify-between'>
          <h1 className='text-2xl font-bold font-headLines'>{umbrella.name}</h1>
          <span className='text-red-500 font-parragrap'>{umbrella.price}</span>
        </div>
        <div className='text-sm font-parragrap text-secondary4 mt-5 h-24 '>
          <p className="lines">{umbrella.description}</p>
        </div>
      </div>
      <div className='w-full text-xl ml-5 text-black font-parragrap my-5'>
        <a href={umbrella.link}>
          {" "}
          <span className='mr-10'>Order a delivery </span>{" "}
          <FontAwesomeIcon icon={faMotorcycle} />
        </a>
      </div>
    </div>
    </div>
  );
};

export default SpecialCard;
