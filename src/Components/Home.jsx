import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import girl from "../Components/Assets/contact-delivery.png";
import glassCoffee from "../Components/Assets/home-coffee.png";
import splash from "../Components/Assets/home-splash.png";
import sticker from "../Components/Assets/home-sticker.svg";
import leaf from "../Components/Assets/leaf-img.png";
import ice1 from "../Components/Assets/ice-img.png";
import ice2 from "../Components/Assets/ice-img.png";
import bean from "../Components/Assets/bean-img.png";
function Home() {
   const sectionRef = useRef(null);
    const bgcircleRef = useRef(null);
    const splashRef = useRef(null);
    const glassRef = useRef(null);
    const beanRef = useRef(null);
    const ice1Ref = useRef(null);
    const ice2Ref = useRef(null);
    const headRef = useRef(null);
    const leafRef = useRef(null);
    const leftRef = useRef(null);
    const rightRef = useRef(null);




     useEffect(() => {
       const ctx = gsap.context(() => {

        // bgcircle

         gsap.fromTo(
           bgcircleRef.current,
           { y: 20, autoAlpha: 0 }, // start
           {
             y: 0,
             autoAlpha: 1, // end
             duration: 1,
             scrollTrigger: {
               trigger: sectionRef.current,
               start: "top 80%",
             },
           }
         );

        //  glass 

          gsap.fromTo(
            glassRef.current,
            { y: -40, autoAlpha: 0 }, // start
            {
              y: 0,
              autoAlpha: 1, // end
              delay:1,
              duration: 1,
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
              },
            }
          );

          // splash

           gsap.fromTo(
             splashRef.current,
             { y: 0,autoAlpha: 0 }, // start
             {
               y: 0,
               autoAlpha: 1, // end
               delay: 2,
               duration: 1,
               scrollTrigger: {
                 trigger: sectionRef.current,
                 start: "top 80%",
               },
             }
           );

          //  bean

          gsap.fromTo(
            beanRef.current,
            { y: 0, autoAlpha: 0 }, // start
            {
              y: 0,
              autoAlpha: 1, // end
              delay: 3,
              duration: 1,
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
              },
            }
          );

          // ice1

          gsap.fromTo(
            ice1Ref.current,
            { y: 0, autoAlpha: 0 }, // start
            {
              y: 0,
              autoAlpha: 1, // end
              delay: 3,
              duration: 1,
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
              },
            }
          );

          // ice2

          gsap.fromTo(
            ice2Ref.current,
            { y: 0, autoAlpha: 0 }, // start
            {
              y: 0,
              autoAlpha: 1, // end
              delay: 3,
              duration: 1,
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
              },
            }
          );

          // leaf

          gsap.fromTo(
            leafRef.current,
            { y: 0, autoAlpha: 0 }, // start
            {
              y: 0,
              autoAlpha: 1, // end
              delay: 3,
              duration: 1,
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
              },
            }
          );

// heading

 gsap.fromTo(
   headRef.current,
   { y: -30, autoAlpha: 0 }, // start
   {
     y: 0,
     autoAlpha: 1, // end
     delay: 3.5,
     duration: 1,
     scrollTrigger: {
       trigger: sectionRef.current,
       start: "top 80%",
     },
   }
 );

//  left-side

gsap.fromTo(
  leftRef.current,
  { y: -30, autoAlpha: 0 }, // start
  {
    y: 0,
    autoAlpha: 1, // end
    delay: 4.5,
    duration: 1,
    scrollTrigger: {
      trigger: sectionRef.current,
      start: "top 80%",
    },
  }
);

// right-side

gsap.fromTo(
  rightRef.current,
  { y: -30, autoAlpha: 0 }, // start
  {
    y: 0,
    autoAlpha: 1, // end
    delay: 4.5,
    duration: 1,
    scrollTrigger: {
      trigger: sectionRef.current,
      start: "top 80%",
    },
  }
);


       }, sectionRef);
     }, []);
  return (
    // main
    <div className="bg-bodycolor pt-40 font-saira lg:h-[100vh] overflow-x-hidden">
      {/* container */}
      <div className="text-center relative w-[90%] m-auto ">
        <h1 ref={headRef} className="text-5xl  font-semibold text-white lg:text-9xl lg:text-center ">
          COLD <br className="lg:hidden" />
          COFFEE
        </h1>
        {/* data */}
        <div className="lg:flex lg:flex-row-reverse  lg:justify-end lg:gap-36 lg:mt-20 lg:ml-60">
          {/* half circle and images */}
          <div className="relative w-[350px]">
            {/* images */}
            <div className="">
              <img
                src={glassCoffee}
                alt=""
                ref={glassRef}
                className="absolute bottom-[-20px] right-[120px] lg:right-[60px]  z-20 w-[120px] rotate-[13deg] lg:w-[230px] lg:"
              />
              <img
                src={splash}
                alt=""
                ref={splashRef}
                className="absolute z-10 bottom-0 w-64 right-14 lg:w-full lg:right-5 lg:bottom-10"
              />
              <img
                src={sticker}
                ref={rightRef}
                alt=""
                className="absolute bottom-[0px] right-[0px] w-16 lg:w-40 lg:bottom-5 lg:right-[-300px]"
              />
              <img
                src={leaf}
                ref={leafRef}
                alt=""
                className="absolute top-[200px] right-[140px] w-10 rotate-[-15deg] z-20 lg:top-[290px] lg:right-32 lg:w-16"
              />
              <img
                src={ice1}
                ref={ice1Ref}
                alt=""
                className="absolute w-8 top-[160px] left-20 z-20 lg:left-0 lg:w-16"
              />
              <img
                src={ice2}
                ref={ice2Ref}
                alt=""
                className="absolute w-8 right-[84px] top-14 rotate-[70deg] lg:w-14 lg:rotate-[60deg] lg:top-0 lg:right-0"
              />
              <img
                src={bean}
                ref={beanRef}
                alt=""
                className="absolute w-10 left-[70px] top-5 lg:top-0 lg:left-5 lg:w-16"
              />
            </div>
            {/* half circle */}
            <div
              ref={bgcircleRef}
              className="w-52 h-52 bg-firstcolor m-auto rounded-full [clip-path:inset(50%_0_0_0)] z-0  lg:w-full lg:h-full"
            ></div>
          </div>

          {/* para and button */}
          <div ref={leftRef} className="mt-10 lg:w-56 lg:text-left ">
            <p className="text-white font-thin  mt-6 lg:text-lg">
              Find delicious hot and cold coffes with the best varieties,calm
              the pleasure and enjoy a good coffe <br />
              order now
            </p>
            <button className="mt-5 text-white text-lg bg-firstcolor p-2 mb-10">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
