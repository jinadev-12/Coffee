import React from "react";
import glassCoffee1 from "../Components/Assets/popular-coffee-1.png";
import glassCoffee2 from "../Components/Assets/popular-coffee-2.png";
import glassCoffee3 from "../Components/Assets/popular-coffee-3.png";
import bean from "../Components/Assets/bean-img.png";

function Popular() {
  return (
    // main
    <div className="bg-bodywhitecolor h-[100vh] ">
      {/* Container */}
      <div className="w-[90%] m-auto font-saira pt-16">
        {/* heading */}
        <h1 className="text-bodycolor text-4xl font-medium text-center">
          POPULAR <br />
          CREATIONS
        </h1>
        {/* card-container */}
        <div className="flex overflow-x-scroll gap-20 ml-12">
        {/* card- 1*/}
        <div className="flex flex-col">
          {/* image and bg*/}
          <div className="relative w-60 h-60 m-auto mt-12">
            {/* image */}
            <div>
              <img
                src={glassCoffee1}
                alt=""
                className="w-40 absolute z-20 bottom-[-10px] right-10"
              />
              <img
                src={bean}
                alt=""
                className="absolute z-10 w-8 top-20 left-5"
              />
              <img
                src={bean}
                alt=""
                className="absolute  w-8 bottom-5 right-11 rotate-90 z-10"
              />
            </div>
            {/* bg */}
            <div className="absolute  w-full h-full bg-firstcoloralt m-auto rounded-full [clip-path:inset(50%_0_0_0)] z-0"></div>
          </div>

          {/* data */}
          <div className="bg-blue- text-center flex flex-col gap-2 mt-7">
            {/* Heading */}
            <h1 className="text-titlecolor text-2xl">MOCHA COFFE</h1>
            {/* para */}
            <p className=" px-4">
              Indulge in the simplicity of our delicious cold brew coffee.
            </p>
            {/* button */}
            <button className="bg-darkcolor  block m-auto text-white px-4 py-2">
              Order now:$19.90
            </button>
          </div>
        </div>
        {/* card-2 */}
        <div>
          {/* image and bg*/}
          <div className="relative w-60 h-60 m-auto mt-12">
            {/* image */}
            <div>
              <img
                src={glassCoffee1}
                alt=""
                className="w-40 absolute z-20 bottom-[-10px] right-10"
              />
              <img
                src={bean}
                alt=""
                className="absolute z-10 w-8 top-20 left-5"
              />
              <img
                src={bean}
                alt=""
                className="absolute  w-8 bottom-5 right-11 rotate-90 z-10"
              />
            </div>
            {/* bg */}
            <div className="absolute  w-full h-full bg-firstcoloralt m-auto rounded-full [clip-path:inset(50%_0_0_0)] z-0"></div>
          </div>

          {/* data */}
          <div className="bg-blue- text-center flex flex-col gap-2 mt-7">
            {/* Heading */}
            <h1 className="text-titlecolor text-2xl">MOCHA COFFE</h1>
            {/* para */}
            <p className=" px-4">
              Indulge in the simplicity of our delicious cold brew coffee.
            </p>
            {/* button */}
            <button className="bg-darkcolor  block m-auto text-white px-4 py-2">
              Order now:$19.90
            </button>
          </div>
        </div>
        {/* card-3 */}
        <div>
          {/* image and bg*/}
          <div className="relative w-60 h-60 m-auto mt-12">
            {/* image */}
            <div>
              <img
                src={glassCoffee1}
                alt=""
                className="w-40 absolute z-20 bottom-[-10px] right-10"
              />
              <img
                src={bean}
                alt=""
                className="absolute z-10 w-8 top-20 left-5"
              />
              <img
                src={bean}
                alt=""
                className="absolute  w-8 bottom-5 right-11 rotate-90 z-10"
              />
            </div>
            {/* bg */}
            <div className="absolute  w-full h-full bg-firstcoloralt m-auto rounded-full [clip-path:inset(50%_0_0_0)] z-0"></div>
          </div>

          {/* data */}
          <div className="bg-blue- text-center flex flex-col gap-2 mt-7">
            {/* Heading */}
            <h1 className="text-titlecolor text-2xl">MOCHA COFFE</h1>
            {/* para */}
            <p className=" px-4">
              Indulge in the simplicity of our delicious cold brew coffee.
            </p>
            {/* button */}
            <button className="bg-darkcolor  block m-auto text-white px-4 py-2">
              Order now:$19.90
            </button>
          </div>
        </div>
        {/* card-4 */}
        <div>
          {/* image and bg*/}
          <div className="relative w-60 h-60 m-auto mt-12">
            {/* image */}
            <div>
              <img
                src={glassCoffee1}
                alt=""
                className="w-40 absolute z-20 bottom-[-10px] right-10"
              />
              <img
                src={bean}
                alt=""
                className="absolute z-10 w-8 top-20 left-5"
              />
              <img
                src={bean}
                alt=""
                className="absolute  w-8 bottom-5 right-11 rotate-90 z-10"
              />
            </div>
            {/* bg */}
            <div className="absolute  w-full h-full bg-firstcoloralt m-auto rounded-full [clip-path:inset(50%_0_0_0)] z-0"></div>
          </div>

          {/* data */}
          <div className="bg-blue- text-center flex flex-col gap-2 mt-7">
            {/* Heading */}
            <h1 className="text-titlecolor text-2xl">MOCHA COFFE</h1>
            {/* para */}
            <p className=" px-4">
              Indulge in the simplicity of our delicious cold brew coffee.
            </p>
            {/* button */}
            <button className="bg-darkcolor  block m-auto text-white px-4 py-2">
              Order now:$19.90
            </button>
          </div>
        </div>
        {/* card-5 */}
        <div>
          {/* image and bg*/}
          <div className="relative w-60 h-60 m-auto mt-12">
            {/* image */}
            <div>
              <img
                src={glassCoffee1}
                alt=""
                className="w-40 absolute z-20 bottom-[-10px] right-10"
              />
              <img
                src={bean}
                alt=""
                className="absolute z-10 w-8 top-20 left-5"
              />
              <img
                src={bean}
                alt=""
                className="absolute  w-8 bottom-5 right-11 rotate-90 z-10"
              />
            </div>
            {/* bg */}
            <div className="absolute  w-full h-full bg-firstcoloralt m-auto rounded-full [clip-path:inset(50%_0_0_0)] z-0"></div>
          </div>

          {/* data */}
          <div className="bg-blue- text-center flex flex-col gap-2 mt-7">
            {/* Heading */}
            <h1 className="text-titlecolor text-2xl">MOCHA COFFE</h1>
            {/* para */}
            <p className=" px-4">
              Indulge in the simplicity of our delicious cold brew coffee.
            </p>
            {/* button */}
            <button className="bg-darkcolor  block m-auto text-white px-4 py-2">
              Order now:$19.90
            </button>
          </div>
        </div>
        {/* card-6 */}
        <div>
          {/* image and bg*/}
          <div className="relative w-60 h-60 m-auto mt-12">
            {/* image */}
            <div>
              <img
                src={glassCoffee1}
                alt=""
                className="w-40 absolute z-20 bottom-[-10px] right-10"
              />
              <img
                src={bean}
                alt=""
                className="absolute z-10 w-8 top-20 left-5"
              />
              <img
                src={bean}
                alt=""
                className="absolute  w-8 bottom-5 right-11 rotate-90 z-10"
              />
            </div>
            {/* bg */}
            <div className="absolute  w-full h-full bg-firstcoloralt m-auto rounded-full [clip-path:inset(50%_0_0_0)] z-0"></div>
          </div>

          {/* data */}
          <div className="bg-blue- text-center flex flex-col gap-2 mt-7">
            {/* Heading */}
            <h1 className="text-titlecolor text-2xl">MOCHA COFFE</h1>
            {/* para */}
            <p className=" px-4">
              Indulge in the simplicity of our delicious cold brew coffee.
            </p>
            {/* button */}
            <button className="bg-darkcolor  block m-auto text-white px-4 py-2">
              Order now:$19.90
            </button>
          </div>
        </div>
        {/* card-7 */}
        <div>
          {/* image and bg*/}
          <div className="relative w-60 h-60 m-auto mt-12">
            {/* image */}
            <div>
              <img
                src={glassCoffee1}
                alt=""
                className="w-40 absolute z-20 bottom-[-10px] right-10"
              />
              <img
                src={bean}
                alt=""
                className="absolute z-10 w-8 top-20 left-5"
              />
              <img
                src={bean}
                alt=""
                className="absolute  w-8 bottom-5 right-11 rotate-90 z-10"
              />
            </div>
            {/* bg */}
            <div className="absolute  w-full h-full bg-firstcoloralt m-auto rounded-full [clip-path:inset(50%_0_0_0)] z-0"></div>
          </div>

          {/* data */}
          <div className="bg-blue- text-center flex flex-col gap-2 mt-7">
            {/* Heading */}
            <h1 className="text-titlecolor text-2xl">MOCHA COFFE</h1>
            {/* para */}
            <p className=" px-4">
              Indulge in the simplicity of our delicious cold brew coffee.
            </p>
            {/* button */}
            <button className="bg-darkcolor  block m-auto text-white px-4 py-2">
              Order now:$19.90
            </button>
          </div>
        </div>
        {/* card-8 */}
        <div>
          {/* image and bg*/}
          <div className="relative w-60 h-60 m-auto mt-12">
            {/* image */}
            <div>
              <img
                src={glassCoffee1}
                alt=""
                className="w-40 absolute z-20 bottom-[-10px] right-10"
              />
              <img
                src={bean}
                alt=""
                className="absolute z-10 w-8 top-20 left-5"
              />
              <img
                src={bean}
                alt=""
                className="absolute  w-8 bottom-5 right-11 rotate-90 z-10"
              />
            </div>
            {/* bg */}
            <div className="absolute  w-full h-full bg-firstcoloralt m-auto rounded-full [clip-path:inset(50%_0_0_0)] z-0"></div>
          </div>

          {/* data */}
          <div className="bg-blue- text-center flex flex-col gap-2 mt-7">
            {/* Heading */}
            <h1 className="text-titlecolor text-2xl">MOCHA COFFE</h1>
            {/* para */}
            <p className=" px-4">
              Indulge in the simplicity of our delicious cold brew coffee.
            </p>
            {/* button */}
            <button className="bg-darkcolor  block m-auto text-white px-4 py-2">
              Order now:$19.90
            </button>
          </div>
        </div>
        {/* card-9 */}
        <div>
          {/* image and bg*/}
          <div className="relative w-60 h-60 m-auto mt-12">
            {/* image */}
            <div>
              <img
                src={glassCoffee1}
                alt=""
                className="w-40 absolute z-20 bottom-[-10px] right-10"
              />
              <img
                src={bean}
                alt=""
                className="absolute z-10 w-8 top-20 left-5"
              />
              <img
                src={bean}
                alt=""
                className="absolute  w-8 bottom-5 right-11 rotate-90 z-10"
              />
            </div>
            {/* bg */}
            <div className="absolute  w-full h-full bg-firstcoloralt m-auto rounded-full [clip-path:inset(50%_0_0_0)] z-0"></div>
          </div>

          {/* data */}
          <div className="bg-blue- text-center flex flex-col gap-2 mt-7">
            {/* Heading */}
            <h1 className="text-titlecolor text-2xl">MOCHA COFFE</h1>
            {/* para */}
            <p className=" px-4">
              Indulge in the simplicity of our delicious cold brew coffee.
            </p>
            {/* button */}
            <button className="bg-darkcolor  block m-auto text-white px-4 py-2">
              Order now:$19.90
            </button>
          </div>
        </div>
        </div>

      </div>
    </div>
  );
}

export default Popular;
