import React from "react";
import logo from "../Components/Assets/favicon.png";
import card1 from "../Components/Assets/footer-card-1.png";

import card2 from "../Components/Assets/footer-card-2.png";

import card3 from "../Components/Assets/footer-card-3.png";

import card4 from "../Components/Assets/footer-card-4.png";

function Footer() {
  return (
    // container
    <div className=" text-center overflow-hidden bg-firstcolor py-10 flex flex-col gap-10">
      {/* logo */}
      <div className="flex justify-center">
        <img src={logo} alt="" className="w-10" />
        <p className="font-medium">
          fried <br />
          Chicken
        </p>
      </div>
      {/* social */}
      <div className="">
        <h3 className="font-medium text-xl mb-1">Social</h3>
        <span className="flex gap-3 lg:gap-8 justify-center">
          <i class="ri-whatsapp-fill lg:text-3xl"></i>
          <i class="ri-messenger-fill lg:text-3xl"></i>
          <i class="ri-telegram-2-fill lg:text-3xl"></i>
        </span>
      </div>
      {/* payment */}
      <div className="">
        <h3 className="font-medium text-xl mb-1">Payment methods</h3>
        <span className="flex gap-3 justify-center">
          <img src={card1} alt="" className="w-10 lg:w-20" />
          <img src={card2} alt="" className="w-10 lg:w-20" />
          <img src={card3} alt="" className="w-10 lg:w-20" />
          <img src={card4} alt="" className="w-10 lg:w-20" />
        </span>
      </div>
      {/* subscribe */}
      <div className="m-auto lg:relative">
        <h3 className="font-medium text-xl mb-3">Subscribe For Offers</h3>
        <div className="  flex px-2  rounded-lg w-[250px] lg:w-[400px] bg-bodycolor">
          <input
            type="email"
            placeholder="Email"
            className="rounded-lg  w-[250px] lg:h-10 bg-bodycolor font-semibold"
          />
          <button className="lg:absolute lg:right-0 lg:bottom-0 bg-black text-white font-medium rounded-lg p-2">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
