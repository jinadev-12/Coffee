import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import bag from "../Components/Assets/about-coffee.png";
import leaf1 from "../Components/Assets/leaf-img.png";

function About() {
  const section2Ref = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const imgRef = useRef(null);

     useEffect(() => {
       const ctx = gsap.context(() => {
         // left
         gsap.fromTo(
           leftRef.current,
           { x: -60, autoAlpha: 0 }, // start
           {
             x: 0,
             autoAlpha: 1, // end
             duration: 1.5,
             delay: 0.5,
             scrollTrigger: {
               trigger: section2Ref.current,
               start: "top 50%",
             },
           }
         );
         //  right
         gsap.fromTo(
           rightRef.current,
           { x: 60, autoAlpha: 0 }, // start
           {
             x: 0,
             autoAlpha: 1, // end
             duration: 1.5,
             delay: 0.5,
             scrollTrigger: {
               trigger: section2Ref.current,
               start: "top 50%",
             },
           }
         );

        // img

               gsap.fromTo(
                 imgRef.current,
                 { y:0, autoAlpha: 0 }, // start
                 {
                   y:30,
                   autoAlpha: 1, // end
                   duration: 1,
                   delay:1,
                   scrollTrigger: {
                     trigger: section2Ref.current,
                     start: "top 50%",
                   },
                 }
               );
       }, section2Ref);
     }, []);

  return (
    // main
    <div ref={section2Ref} className="lg:h-[100vh] bg-bodycolor mt-14">
      {/* Container */}
      <div className="w-[90%] font-saira  flex flex-col text-center m-auto pt-20 gap-10 lg:flex lg:flex-row lg:text-left max-w-[1100px] lg:pt-52 lg:gap-28">
        {/* details */}
        <div ref={leftRef} className="flex flex-col gap-5 text-white lg:gap-9">
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
        <div
          ref={rightRef}
          className="w-[330px] lg:w-[480px] lg:h-[480px] h-[330px] m-auto relative mb-16"
        >
          {/* circle */}
          <div className="w-full h-full bg-firstcolor rounded-full "></div>
          {/* images */}
          <div>
            <img
              ref={imgRef}
              src={bag}
              alt=""
              className="absolute  top-0 right-0"
            />
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

export default About;

