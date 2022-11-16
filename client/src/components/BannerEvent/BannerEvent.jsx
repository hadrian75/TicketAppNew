
import React, { Component } from "react";
import vectorLeftOne from "../../../bannerComponent/left/leftOne.svg"
import vectorLeftTwo from "../../../bannerComponent/left/leftTwo.svg"

import vectorCenterOne from "../../../bannerComponent/center/centerOne.svg"
import vectorCenterTwo from "../../../bannerComponent/center/centerTwo.svg"

import vectorRightOne from "../../../bannerComponent/right/rightOne.svg"
import vectorRightTwo from "../../../bannerComponent/right/rightTwo.svg"
import vectorRightTwoTwo from "../../../bannerComponent/right/rightTwoTwo.svg"
import vectorRightThree from "../../../bannerComponent/right/rightThree.svg"

import bannerImg from "../../../bannerComponent/right/bannerImg.svg"

const BannerEvent = () => {
    return (
        <div className="font-Montserrat  w-[1100px]   flex h-[400px] bg-frameColor relative overflow-hidden ">
            <div className="relative left-[45px] z-50 flex w-[40%] items-center">
                <div className=" h-[70%] w-[60%] ">
                    <h1 className="text-white text-[21px] font-semibold font-Montserrat">Limited Time Offer</h1>
                    <div className="-translate-x-3">
                        <h1 className="text-FontDoubleBanner  text-[70px] font-extrabold italic z-0 absolute translate-x-3 -translate-y-2 font-Montserrat">New Event</h1>
                        <h1 className="text-white text-[70px] font-extrabold italic z-20 relative font-Montserrat outlineBanner">New Event</h1>
                    </div>
                    <div className="z-40 h-[100px] w-[500px] whitespace-normal">
                        <h1 className="text-white font-medium break-all ">Don't miss the music concert event, held on December 31, 2022 at Gedung alaya. Come and see the appearance of the guest stars who will bring a trend song this year.</h1>
                        <button className="bg-YellowBanner py-5 px-16 mt-10 text-frameColor font-bold text-2xl ">Shop Now</button>
                    </div>
                </div>
            </div>
            <img src={vectorLeftOne} alt="" className="z-10 absolute " />
            <img src={vectorLeftTwo} alt="" className="z-0 absolute " />
            <img src={vectorCenterTwo} alt="" className="z-0 absolute bottom-0 ml-[200px]" />
            <img src={vectorCenterOne} alt="" className="z-10 absolute bottom-0 ml-[200px]" />
            <img src={vectorRightOne} alt="" className="z-40 absolute right-0" />
            <img src={vectorRightTwoTwo} alt="" className="z-30 absolute right-0 " />
            <img src={vectorRightTwo} alt="" className="z-20 absolute right-0 " />
            <img src={vectorRightThree} alt="" className="z-10 absolute right-0" />
            <div className="flex relative h-full z-40 w-full right-0">
                <img src={bannerImg} alt="" className="z-40 rounded-l-full translate-x-10 right-0 absolute h-[400px]" />
            </div>
            <div className="absolute bg-PinkyBanner z-50 w-[120px] h-[120px] bottom-[36px] right-[385px] rounded-full border-4 border-white flex flex-col items-center justify-center leading-none">
                <h1 className=" text-[32px] font-Montserrat font-bold text-white">25%</h1>
                <h1 className="text-[20px] font-Montserrat  text-white font-normal ">Discount</h1>
            </div>
        </div>
    )
}
export default BannerEvent;