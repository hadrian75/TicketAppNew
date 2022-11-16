import { Person24Regular, Alert24Regular, Wallet24Regular, } from "@fluentui/react-icons";
import { SiFacebook, SiInstagram, SiTwitter } from "react-icons/si";
import avaxIcon from '../../images/avaxIcon.svg'
import BaliolaLogo from '../../images/baliolaLogo.png'
import { useState } from "react";

const Footer = () => {
    const haveLogin = false;
    const NavbarItem = ({ title, classProps }) => {
        return (
            <li className={`listDesktop cursor-pointer ${classProps} ${haveLogin ? "pointer-events-none" : "pointer-events-auto"} listNavbar`}>
                {title}
            </li>
        )
    }

    return (
        <div className="flex flex-row sm:flex-col bg-frameColor justify-start py-10 px-24 ">
            <div className="flex lg:flex-row sm:flex-col w-full mx-[auto]  pt-[20px] gap-16">
                <div className="4xl:w-[60%] sm:w-[100%]">
                    <h1 className="text-[18px] font-bold text-white">About Token Ticket</h1>
                    <h1 className="text-xl font-base text-white text-left pt-5">
                        Urna euismod id ut nisl auctor dignissim integer quis euismod. Iaculis faucibus
                        diam vitae nunc facilisi ut. Integer neque lectus risus, ultrices turpis interdum
                        dui id. Facilisis commodo sodales morbi tortor, tellus, amet dictum leo. A varius
                        blandit proin adipiscing amet, nulla urna.
                    </h1>
                </div>
                <div className="flex flex-row 4xl:w-[30%] sm:w-[100%]">
                    <div className="sm:w-[60%] md:w-[50%]">
                        <h1 className="text-[18px] font-bold text-white">Follow Us</h1>
                        <ul className="flex flex-initial text-3xl text-white gap-9 mt-4">

                            <a href="" className=""><SiFacebook /></a>
                            <a href=""><SiTwitter /></a>
                            <a href="https://instagram.com/santikakumara?igshid=YmMyMTA2M2Y=" target="blank"> <SiInstagram /></a>

                        </ul >
                    </div>
                    <div className="sm:w-[40%] md:w-[50%]">
                        <h1 className="text-[18px] font-bold text-white">Partner</h1>
                        <a href="https://baliola.com"><img src={BaliolaLogo} alt="" className="w-10 h-10 rounded-full mt-3" /></a>
                    </div>
                </div>
            </div>


            <div className="w-full  h-[2px] bg-base-60 mx-[auto] mt-[20px]"></div>
            <ul className=" text-xl sm:invisible lg:visible flex justify-center  list-none flex-row  items-center flex-initial w-full sm:py-2 lg:py-5 xlg:py-10 text-white lg:gap-[80px]  xlg:gap-[100px] font-medium">
                {[
                    <a href="/ticket">My Ticket</a>,
                    <a href="/favourite">Favourite</a>,
                    <a href="/history">History Transaction</a>,
                    <a href="/events">Event</a>,
                    <a href="/profile">Profile</a>,
                    <a href="/profile">Notification</a>,
                    <a href="/notif">Wallet</a>,
                ].map((items, index) => (
                    <NavbarItem key={items + index} title={items} />
                ))}
            </ul>
            <h1 className="text-center text-base-60">All rights reserved. 2022 Token Ticket</h1>

        </div >
    )

}

export default Footer;
