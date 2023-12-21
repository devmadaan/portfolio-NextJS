import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center bg-[#1d1836] gap-10 sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto'>
      {technologies.map((technology) => (
        <div className=' text-center' key={technology.name}>
          {/* <BallCanvas icon={technology.icon} /> */}
          <img className="w-28 h-28" src={technology.icon}></img>
          {/* <p className="text-white-100">{technology.name}</p> */}
        </div>
      ))}
    </div>
  );
};

export default Tech;