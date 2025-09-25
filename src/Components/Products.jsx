import React from "react";
import glassCoffee1 from "../Components/Assets/products-coffee-1.png";
import glassCoffee2 from "../Components/Assets/products-coffee-2.png";
import glassCoffee3 from "../Components/Assets/products-coffee-3.png";
import glassCoffee4 from "../Components/Assets/products-coffee-4.png";
import glassCoffee5 from "../Components/Assets/products-coffee-5.png";
import glassCoffee6 from "../Components/Assets/products-coffee-6.png";
import ice1 from "../Components/Assets/ice-img.png";
import ice2 from "../Components/Assets/ice-img.png";

function Products() {
  return (
    // main
    <div className=" bg-firstcoloralt ">
      {/* container */}
      <div className="font-saira m-auto w-[90%] text-center py-20 ">
        <h1 className="text-4xl font-semibold text-darkcolor lg:text-6xl">
          THE MOST <br />
          REQUESTED
        </h1>
        {/* card- container */}
        <div className=" flex justify-center gap-6 mt-6 lg:flex-col lg:items-center lg:gap-10">
          {/* card-main-1 */}
          <div className="flex flex-col gap-6 lg:flex-row lg:gap-16">
            {/* card-1 */}
            <div className="w-[160px] h-[220px] bg-darkcolor relative lg:w-[230px] lg:h-[300px]">
              {/* img */}
              <img
                src={glassCoffee1}
                alt=""
                className="lg:w-32 w-20 right-[42px] absolute z-10 top-2 lg:right-[50px]"
              />
              <img
                src={ice1}
                alt=""
                className="w-10 absolute z-10 top-24 left-6 lg:top-36 lg:left-9"
              />

              <img
                src={ice2}
                alt=""
                className="w-7 absolute z-10 top-10 right-8"
              />

              {/* bg */}
              <div className="w-28 h-28 bg-firstcolor m-auto rounded-full [clip-path:inset(50%_0_0_0)] z-0 absolute  right-6 top-3 lg:w-40 lg:h-40 lg:left-[28px] lg:top-10"></div>
              {/* details */}
              <div className="absolute bottom-0 mb-3 ml-2 text-left">
                <h4 className="font-medium text-white">
                  ICED COFFEE <br />
                  MOCHA
                </h4>
                <p className="text-firstcolor">$15.90</p>
              </div>
            </div>
            {/* card-2 */}
            <div className="w-[160px] h-[220px] bg-darkcolor relative lg:w-[230px] lg:h-[300px]">
              {/* img */}
              <img
                src={glassCoffee2}
                alt=""
                className="lg:w-32 w-20 right-[42px] absolute z-10 top-2 lg:right-[50px]"
              />
              <img
                src={ice1}
                alt=""
                className="w-10 absolute z-10 top-24 left-6 lg:top-36 lg:left-9"
              />

              <img
                src={ice2}
                alt=""
                className="w-7 absolute z-10 top-10 right-8"
              />

              {/* bg */}
              <div className="w-28 h-28 bg-firstcolor m-auto rounded-full [clip-path:inset(50%_0_0_0)] z-0 absolute  right-6 top-3 lg:w-40 lg:h-40 lg:left-[28px] lg:top-10"></div>
              {/* details */}
              <div className="absolute bottom-0 mb-3 ml-2 text-left">
                <h4 className="font-medium text-white">
                  ICED COFFEE <br />
                  MOCHA
                </h4>
                <p className="text-firstcolor">$15.90</p>
              </div>
            </div>
            {/* card-3 */}
            <div className="w-[160px] h-[220px] bg-darkcolor relative lg:w-[230px] lg:h-[300px]">
              {/* img */}
              <img
                src={glassCoffee3}
                alt=""
                className="lg:w-32 w-20 right-[42px] absolute z-10 top-2 lg:right-[50px]"
              />
              <img
                src={ice1}
                alt=""
                className="w-10 absolute z-10 top-24 left-6 lg:top-36 lg:left-9"
              />

              <img
                src={ice2}
                alt=""
                className="w-7 absolute z-10 top-10 right-8"
              />

              {/* bg */}
              <div className="w-28 h-28 bg-firstcolor m-auto rounded-full [clip-path:inset(50%_0_0_0)] z-0 absolute  right-6 top-3 lg:w-40 lg:h-40 lg:left-[28px] lg:top-10"></div>
              {/* details */}
              <div className="absolute bottom-0 mb-3 ml-2 text-left">
                <h4 className="font-medium text-white">
                  ICED COFFEE <br />
                  MOCHA
                </h4>
                <p className="text-firstcolor">$15.90</p>
              </div>
            </div>
          </div>
          {/* card-main-2 */}
          <div className="flex flex-col gap-6 lg:flex-row lg:gap-16">
            {/* card-1 */}
            <div className="w-[160px] h-[220px] bg-darkcolor relative lg:w-[230px] lg:h-[300px]">
              {/* img */}
              <img
                src={glassCoffee4}
                alt=""
                className="lg:w-32 w-20 right-[42px] absolute z-10 top-2 lg:right-[50px]"
              />
              <img
                src={ice1}
                alt=""
                className="w-10 absolute z-10 top-24 left-6 lg:top-36 lg:left-9"
              />

              <img
                src={ice2}
                alt=""
                className="w-7 absolute z-10 top-10 right-8"
              />

              {/* bg */}
              <div className="w-28 h-28 bg-firstcolor m-auto rounded-full [clip-path:inset(50%_0_0_0)] z-0 absolute  right-6 top-3 lg:w-40 lg:h-40 lg:left-[28px] lg:top-10"></div>
              {/* details */}
              <div className="absolute bottom-0 mb-3 ml-2 text-left">
                <h4 className="font-medium text-white">
                  ICED COFFEE <br />
                  MOCHA
                </h4>
                <p className="text-firstcolor">$15.90</p>
              </div>
            </div>
            {/* card-2 */}
            <div className="w-[160px] h-[220px] bg-darkcolor relative lg:w-[230px] lg:h-[300px]">
              {/* img */}
              <img
                src={glassCoffee5}
                alt=""
                className="lg:w-32 w-20 right-[42px] absolute z-10 top-2 lg:right-[50px]"
              />
              <img
                src={ice1}
                alt=""
                className="w-10 absolute z-10 top-24 left-6 lg:top-36 lg:left-9"
              />

              <img
                src={ice2}
                alt=""
                className="w-7 absolute z-10 top-10 right-8"
              />

              {/* bg */}
              <div className="w-28 h-28 bg-firstcolor m-auto rounded-full [clip-path:inset(50%_0_0_0)] z-0 absolute  right-6 top-3 lg:w-40 lg:h-40 lg:left-[28px] lg:top-10"></div>
              {/* details */}
              <div className="absolute bottom-0 mb-3 ml-2 text-left">
                <h4 className="font-medium text-white">
                  ICED COFFEE <br />
                  MOCHA
                </h4>
                <p className="text-firstcolor">$15.90</p>
              </div>
            </div>
            {/* card-3 */}
            <div className="w-[160px] h-[220px] bg-darkcolor relative lg:w-[230px] lg:h-[300px]">
              {/* img */}
              <img
                src={glassCoffee6}
                alt=""
                className="lg:w-32 w-20 right-[42px] absolute z-10 top-2 lg:right-[50px]"
              />
              <img
                src={ice1}
                alt=""
                className="w-10 absolute z-10 top-24 left-6 lg:top-36 lg:left-9"
              />

              <img
                src={ice2}
                alt=""
                className="w-7 absolute z-10 top-10 right-8"
              />

              {/* bg */}
              <div className="w-28 h-28 bg-firstcolor m-auto rounded-full [clip-path:inset(50%_0_0_0)] z-0 absolute  right-6 top-3 lg:w-40 lg:h-40 lg:left-[28px] lg:top-10"></div>
              {/* details */}
              <div className="absolute bottom-0 mb-3 ml-2 text-left">
                <h4 className="font-medium text-white">
                  ICED COFFEE <br />
                  MOCHA
                </h4>
                <p className="text-firstcolor">$15.90</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;

