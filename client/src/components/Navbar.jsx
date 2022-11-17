import { useState } from "react";
import { HiMenu, HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { RiAncientGateFill } from "react-icons/ri";
import logo from '../../Icon/logo.svg'
import { Person24Regular, Alert24Regular, Wallet24Regular, Person20Regular, Alert20Regular, Wallet20Regular } from "@fluentui/react-icons";
import '../bgAndResponsive.css'


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const sts = false;
  const NavbarItem = ({ title, classProps }) => {
    return (
      <li className={`listDesktop cursor-pointer ${classProps} ${sts ? "pointer-events-none" : "pointer-events-auto"} listNavbar`}>
        {title}
      </li>
    )
  }


  return (
    <nav className="w-full flex bg-frameColor py-8  sm:justify-center xsm:justify-between   sm:z-[60] md:relative">
      <div className="sm:flex  flex-initial justify-center cursor-pointer pr-10 ">
        <a href="/" className="text-2xl text-white font-semibold">
          <span className="flex items-center justify-center lg:gap-2 w-[200px]">
            <img src={logo} alt="" className="w-16 -translate-y-1" />
            <h1 className="text-white text-[16px] sm:ml-5">Token Ticket</h1>
          </span>
        </a>
      </div>
      <ul className="xlg:flex  justify-end  hidden list-none flex-row  items-center flex-initial basis-3/4 text-white font-normal pr-20">
        {[
          <a href="/ticket" className="mx-10 text-[16px]">My Ticket</a>,
          <a href="/favourite" className="mx-10 text-[16px]">Favourite</a>,
          <a href="/history" className=" mx-10 text-[16px]">History Transaction</a>,
          <a href="/events" className="mx-8 text-[16px]">Events</a>,
          <div className="flex justify-center ml-7 ">
            <a href="/profile" className="text-white text-[14px] px-7 "><Person24Regular /></a>
            <a href="" className="text-white text-[14px] px-7" ><Alert24Regular /></a>
            <a href="" className="text-white text-[14px] px-7" >< Wallet24Regular /></a>
          </div>,
        ].map((items, index) => (
          <NavbarItem key={items + index} title={items} />
        ))}
      </ul>
      <div className="flex relative items-center">
        <a href="/ticket" className="font-light text-[16px] xlg:hidden mr-5 text-white">Home</a>
        <a href="/events" className="font-light sm:text-[16px] xlg:hidden mr-5 text-white">Events</a>


        <HiMenuAlt4 fontSize={28} className="xlg:hidden cursor-pointer text-white mr-10" onClick={() => setToggleMenu(!toggleMenu)} />

        {toggleMenu && (
          <ul className="z-[60] absolute top-24 right-0  pr-5 sm:w-[160px] h-[350px] shadow-2xl xlg:hidden list-none flex flex-col justify-start items-end bg-frameColor animate-slide-in  ">
            {[

              <a href="/ticket" className="font-light  text-white">My Ticket</a>,
              <a href="/favourite" className="font-light  text-white">Favourite</a>,
              <a href="/history" className="font-light  text-white">History Transaction</a>,
              <div className="flex justify-center">
                <a href="" className="text-white text-[14px] px-6" ><Alert20Regular /></a>
                <a href="" className="text-white text-[14px] px-6" >< Wallet20Regular /></a>
                <a href="" className="text-white text-[14px] pl-6"><Person20Regular /></a>
              </div>,
            ].map((item, index) => (<NavbarItem key={item + index} title={item} classProps="my-8 pt-2 text-xl" classHidden={'pointer-event-none'} />
            ))}
          </ul>
        )}
      </div>

    </nav >
  );
}

export default Navbar;

