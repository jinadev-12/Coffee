import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import girl from "../Components/Assets/contact-delivery.png";

function Contact() {
  const section4Ref = useRef(null);
  const leftRef = useRef(null);
    const rightRef = useRef(null);
    const circleRef = useRef(null);



 

    useEffect(() => {
      const ctx = gsap.context(() => {

        // left


        gsap.fromTo(
          leftRef.current,
          { y: 0, autoAlpha: 0 }, // start
          {
            y: 0,
            autoAlpha: 1, // end
            duration: 1,
            delay:0.5,
            scrollTrigger: {
              trigger: section4Ref.current,
              start: "top 80%",
            },
          }
        );

        // right

gsap.fromTo(
  rightRef.current,
  { y: 0, autoAlpha: 0 }, // start
  {
    y: 0,
    autoAlpha: 1, // end
    duration: 1,
    delay: 0.5,

    scrollTrigger: {
      trigger: section4Ref.current,
      start: "top 80%",
    },
  }
);

// circle 

 gsap.fromTo(
   circleRef.current,
   { autoAlpha: 0, scale: 0, transformOrigin: "50% 50%" }, // start
   {
     scale: 1,

     autoAlpha: 1, // end
     duration: 1.5,
     delay: 1,
     scrollTrigger: {
       trigger: section4Ref.current,
       start: "top 80%",
     },
   }
 );


      }, section4Ref);
    }, []);
  return (
    // main
    <div ref={section4Ref} className="lg:h-[100vh] bg-bodycolor">
      {/* Container */}
      <div className="w-[90%] m-auto pt-20 text-center font-saira text-white pb-12">
        <h1 className="text-4xl font-semibold lg:text-7xl">CONTACT US</h1>
        {/* Main-Section */}
        <div className="flex flex-col gap-5 mt-5 text-xl lg:flex-row lg:justify-center lg:items-center lg:mt-14 lg:gap-28">
          {/* first */}
          <div ref={leftRef} className="flex flex-col gap-5 lg:gap-24 ">
            {/* Write us */}
            <div>
              <p className="lg:text-2xl font-medium">Write Us</p>
              <div className="text-firstcolor flex justify-center gap-3 lg:text-2xl">
                <i class="ri-whatsapp-line"></i>
                <i class="ri-messenger-line"></i>
                <i class="ri-telegram-2-line"></i>
              </div>
            </div>
            {/* location */}
            <div>
              <h1 className="lg:text-2xl font-medium">Location</h1>
              <p className="font-light text-sm ">
                Lima-Sun-City-peru <br />
                Av.Moon.346654
              </p>
              <p className="text-firstcoloralt">
                <i class="ri-map-pin-line"></i>
                View On Map
              </p>
            </div>
          </div>
          {/* second */}
          <div ref={rightRef} className="flex flex-col gap-5 lg:flex-row-reverse lg:items-center  lg:gap-28">
            {/* delivery */}
            <div className="lg:flex lg:flex-col lg:gap-24">
              <div>
                <h1 className="lg:text-2xl font-medium">Delivery</h1>
                <p className="font-light text-sm">
                  +00-987-654-321 <br />
                  +11-0123456
                </p>
              </div>
              {/* attention */}
              <div>
                <h1 className="lg:text-2xl font-medium">Attention</h1>
                <p className="font-light text-sm">
                  Monday-Sunday <br />
                  9AM-10PM
                </p>
              </div>
            </div>

            {/* images and circle*/}
            <div className="relative w-[350px] h-[350px] mt-8">
              {/* img */}
              <img
                src={girl}
                alt=""
                className="absolute z-10 bottom-0 right-7 w-[80%]"
                style={{
                  WebkitMaskImage:
                    "linear-gradient(to bottom, hsl(166,80%,40%) 80%, transparent 100%)",
                  WebkitMaskRepeat: "no-repeat",
                  WebkitMaskSize: "cover",
                  maskImage:
                    "linear-gradient(to bottom, hsl(166,80%,40%) 80%, transparent 100%)",
                  maskRepeat: "no-repeat",
                  maskSize: "cover",
                }}
              />
              {/* circle */}
              <div ref={circleRef} className="w-full h-full bg-firstcolor rounded-full absolute"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
