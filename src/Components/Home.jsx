import React from "react";
import glassCoffee from "../Components/Assets/home-coffee.png";
import splash from "../Components/Assets/home-splash.png";
import sticker from "../Components/Assets/home-sticker.svg";
import leaf from "../Components/Assets/leaf-img.png";
import ice1 from "../Components/Assets/ice-img.png";
import ice2 from "../Components/Assets/ice-img.png";
import bean from "../Components/Assets/bean-img.png";
function Home() {
  return (
    // main
    <div className="bg-bodycolor pt-10 font-saira">
      {/* container */}
      <div className="text-center relative w-[90%] m-auto">
        <h1 className="text-5xl  font-semibold text-white">
          COLD <br />
          COFFEE
        </h1>
        {/* data */}
        <div className="">
         
          {/* half circle and images */}
          <div className="relative w-[350px]   m-auto">
            {/* images */}
            <div className="">
              <img
                src={glassCoffee}
                alt=""
                className="absolute bottom-[-20px] right-[120px]  z-20 w-[120px] rotate-[13deg] "
              />
              <img src={splash} alt="" className="absolute z-10 bottom-0 w-64 right-14" />
              <img
                src={sticker}
                alt=""
                className="absolute bottom-[0px] right-[0px] w-16"
              />
              <img
                src={leaf}
                alt=""
                className="absolute top-[200px] right-[140px] w-10 rotate-[-15deg] z-20"
              />
              <img src={ice1} alt="" className="absolute w-8 top-[160px] left-20 z-20" />
              <img src={ice2} alt="" className="absolute w-8 right-[84px] top-14 rotate-[70deg]"/>
              <img src={bean} alt="" className="absolute w-10 left-[70px] top-5" />
            </div>
            {/* half circle */}
            <div className="w-52 h-52 bg-firstcolor m-auto rounded-full [clip-path:inset(50%_0_0_0)] z-0"></div>
          </div>

          {/* para and button */}
          <div className="">
            <p className="text-white font-thin  mt-6">
              Find delicious hot and cold coffes with the best varieties,calm
              the pleasure and enjoy a good coffe <br />
              order now
            </p>
            <button className="mt-5 text-white text-lg bg-firstcolor p-2">
              Learn More
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Home;
