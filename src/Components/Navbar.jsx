import React,{useState} from 'react'



function Navbar() {
  const [isOpen,setIsOpen]=useState(false)
  const sidebaropen=()=>{
    setIsOpen(!isOpen)
  }
  return (
    // main
    <div className="bg-bodycolor text-white fixed top-0 left-0 w-full z-50">
      {/* Container */}
      <div className="flex justify-between w-[90%] m-auto items-center py-6 max-w-[1100px]">
        {/* logo-text*/}
        <div className="font-saira font-semibold text-xl">STARCOFFEE</div>
        {/* links or menu */}
        <div>
          {/* links */}
          <div className="font-mont hidden lg:block">
            <ul className="flex gap-12 items-center font-medium font-saira">
              <li className="hover:text-firstcolor">
                <a href="#home">HOME</a>
              </li>
              <li className="hover:text-firstcolor">
                <a href="#popular">POPULAR</a>
              </li>
              <li className="hover:text-firstcolor">
                <a href="#aboutus">ABOUT US</a>
              </li>
              <li className="hover:text-firstcolor">
                <a href="#products">PRODUCTS</a>
              </li>
              <li className="hover:text-firstcolor">
                <a href="#contact">CONTACT</a>
              </li>
            </ul>
          </div>
          {/* menu */}
          <div className="lg:hidden">
            <i class="ri-menu-3-line text-3xl" onClick={sidebaropen}></i>
          </div>
          {/* sidebar */}
          <div
            className={`fixed  bg-bodycolor top-0 right-0 w-full h-full flex justify-center pt-14 text-center ${
              isOpen ? "translate-y-0" : "-translate-y-full"
            }  lg:hidden duration-300 z-50`}
          >
            <i
              class="ri-close-large-line absolute top-10 right-10 text-xl"
              onClick={sidebaropen}
            ></i>
            <ul className="flex flex-col gap-14 text-xl font-medium font-saira mt-10">
              <li>HOME</li>
              <li>POPULAR</li>
              <li>ABOUT US</li>
              <li>PRODUCTS</li>
              <li>CONTACT</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar