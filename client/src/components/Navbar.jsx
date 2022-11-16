import { useState } from "react";
import { HiMenu, HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { RiAncientGateFill } from "react-icons/ri";
import logo from '../../Icon/logo.svg'
import { Person24Regular, Alert24Regular, Wallet24Regular } from "@fluentui/react-icons";
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
    <nav className="w-full flex bg-frameColor py-8 justify-between">
      <div className="md:flex  flex-initial justify-center cursor-pointer pr-10 basis-1/4">
        <a href="/" className="text-2xl text-white font-semibold">
          <span className="flex items-center justify-center gap-2 ">
            <img src={logo} alt="" className="w-16 -translate-y-1" />
            <h1 className="text-white text-[16px]">Token Ticket</h1>
          </span>
        </a>
      </div>
      <ul className="md:flex  justify-end  hidden list-none flex-row  items-center flex-initial basis-3/4 text-white font-normal pr-20">
        {[
          <a href="/ticket" className="mx-10 text-[16px]">My Ticket</a>,
          <a href="/favourite" className="mx-10 text-[16px]">Favourite</a>,
          <a href="/history" className=" mx-10 text-[16px]">History Transaction</a>,
          <a href="/events" className="mx-8 text-[16px]">Events</a>,
          <div className="flex justify-center ml-7 ">
            <a href="/profile" className="text-white text-3xl px-7 "><Person24Regular /></a>
            <a href="" className="text-white text-3xl px-7" ><Alert24Regular /></a>
            <a href="" className="text-white text-3xl px-7" >< Wallet24Regular /></a>
          </div>,
        ].map((items, index) => (
          <NavbarItem key={items + index} title={items} />
        ))}
      </ul>
      <div className="flex relative ">
        {toggleMenu
          ? <AiOutlineClose fontSize={28} className="md:hidden text-white cursor-pointer mr-10" onClick={() => setToggleMenu(false)} />
          : <HiMenuAlt4 fontSize={28} className="md:hidden cursor-pointer text-white mr-10" onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <ul className="z-10 fixed top-0 right-0 p-3 w-[40vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end blue-glassmorphism animate-slide-in  ">
            <li className="text-xl text-black w-full my-2">
              <AiOutlineClose onClick={() => setToggleMenu(false)} className=" text-white cursor-pointer" fontSize={20} />
            </li>
            {[
              <div className="flex justify-center">
                <a href="" className="text-white text-3xl px-6" ><Alert24Regular /></a>
                <a href="" className="text-white text-3xl px-6" >< Wallet24Regular /></a>
                <a href="" className="text-white text-3xl pl-6"><Person24Regular /></a>
              </div>,
              <a href="/ticket" className="font-light  text-white">My Ticket</a>,
              <a href="/favourite" className="font-light  text-white">Favourite</a>,
              <a href="/history" className="font-light  text-white">History Transaction</a>,
              <a href="/events" className="font-light  text-white">Events</a>,
            ].map((item, index) => (<NavbarItem key={item + index} title={item} classProps="my-8 pt-2 text-xl" classHidden={'pointer-event-none'} />
            ))}
          </ul>
        )}
      </div>

    </nav>
  );
}

export default Navbar;

