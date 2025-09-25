import React from 'react'
import bag from "../Components/Assets/about-coffee.png";
import leaf1 from "../Components/Assets/leaf-img.png";

function About() {
  return (
    // main
    <div className="lg:h-[100vh] bg-bodycolor mt-14">
      {/* Container */}
      <div className="w-[90%] font-saira  flex flex-col text-center m-auto pt-20 gap-10 lg:flex lg:flex-row lg:text-left max-w-[1100px] lg:pt-52 lg:gap-28">
        {/* details */}
        <div className="flex flex-col gap-5 text-white lg:gap-9">
          <h1 className="text-5xl text-white font-semibold lg:text-7xl">
            LEARN MORE <br />
            ABOUT US
          </h1>
          <p className="lg:w-96 ">
            Welcome to StarCoffee,where coffe is pure passion.From bean to
            cup,we are dedicated to delivering excellence in every sip.Join us
            on a journey of flavor and quality,crafted with love to create the
            ultimate coffe experience.
          </p>
          <button className="bg-firstcoloralt block m-auto p-2 font-medium lg:m-0">
            The Best Coffees
          </button>
        </div>
        {/* image and circle */}
        <div className="w-[330px] lg:w-[480px] lg:h-[480px] h-[330px] m-auto relative mb-16">
          {/* circle */}
          <div className="w-full h-full bg-firstcolor rounded-full "></div>
          {/* images */}
          <div>
            <img src={bag} alt="" className="absolute  top-0 right-0" />
            <img
              src={leaf1}
              alt=""
              className="absolute w-9 top-5 left-10 rotate-[-90deg]"
            />
            <img src={leaf1} alt="" className="absolute w-11 top-32 right-7" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About