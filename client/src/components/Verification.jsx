import verifyilust from '../../images/404NotFound.png'
import React, { useEffect, useState } from 'react';
import Otp from './OTP'



const Verification = () => {


    return (

        <div className='h-screen w-full '>
            <div className="flex flex-row ">
                <div className="w-[50%] h-full flex justify-center items-center bg-frameColor">
                    <img src={verifyilust} alt="" className="w-full object-cover" />
                </div>
                <div className="w-[40%] max-h-[420px] flex flex-col py-2 my-auto mx-auto px-10 pb-24 pt-10 rounded-[5%] gap-y-8 bg-frameColor text-white">
                    <h1 className='text-center text-[34px] font-semibold'>Verification</h1>
                    <h1 className='text-center text-xl text-[#ababb5] '>Please Enter an OTP code that has been sent to your email</h1>
                    <Otp />
                </div>
            </div>
        </div>
    )
}
export default Verification