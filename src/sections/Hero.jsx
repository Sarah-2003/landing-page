import { useState } from "react";

import { shoes, statistics } from "../constants";
import { Button, ShoeCard } from "../components";
import { bigShoe1 } from "../assets/images";
import { arrowRight } from "../assets/icons";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section
      id='home'
      className='w-full flex xl:flex-row flex-col justify-between items-center min-h-screen gap-10 max-container'
    >
      <div className='flex flex-col justify-center items-start w-full xl:w-2/5 pt-28 max-xl:padding-x'>
        <p className='text-lg font-montserrat text-coral-red dark:text-blue-400'>
          Our Summer collections
        </p>
  
        <h1 className='mt-8 font-palanquin text-6xl max-sm:text-5xl font-bold leading-tight'>
          <span className='text-gray-900 dark:text-gray-100'>The New Arrival</span>
          <br />
          <span className='text-coral-red dark:text-blue-400'>Nike</span> 
          <span className='text-gray-900 dark:text-gray-100'>Shoes</span>
        </h1>
        <p className='font-montserrat text-slate-gray text-base leading-8 mt-6 mb-14 sm:max-w-sm dark:text-gray-300'>
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
  
        <Button label='Shop now' iconURL={arrowRight} />
  
        <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className='text-3xl font-palanquin font-bold text-gray-900 dark:text-gray-100'>{stat.value}</p>
              <p className='leading-7 font-montserrat text-slate-gray text-sm dark:text-gray-300'>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
  
      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        <img
          src={bigShoeImg}
          alt='shoe collection'
          width={610}
          height={502}
          className='object-contain relative z-10'
        />
  
        <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                index={index}
                imgURL={image}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};    

export default Hero;