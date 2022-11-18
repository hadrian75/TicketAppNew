import OTP from '../../images/OTP.svg'
import React, { useEffect, useState } from 'react';
import Otp from './OTP'


const Verification = () => {


    return (

        <div className='flex flex-row font-Urbanist'>
            <div className="w-[50%] flex bg-frameColor h-screen justify-center items-center">
                <img src={OTP} alt="" className="w-[500px] h-[500px] object-cover" />
            </div>

            <div className='flex w-[50%] justify-center items-center'>
                <div className="flex flex-col pt-[18px] pb-[27px] px-[58px] rounded-2xl border-[1px] bg-frameColor w-[Hug (559px)]">
                    <div>
                        <h1 className='text-center text-[32px] text-white font-semibold'>Verification</h1>
                        <h1 className='text-center text-[16px] pt-[20px] pb-[40px] text-base-60 '>Please enter the OTP code thas has been sent to your email</h1>
                        <Otp />
                        <div className="flex px-2 flex-col">
                            <h1 className="mb-[30px] mt-[20px] text-white">Didn't get any otp code? <a className="text-primary" href="" onClick={() => setSend(true)}>Resend It</a></h1>
                            <button type="submit" className="w-[455px] h-[Hug (56px)] py-[16px] bg-primary text-white rounded-xl text-[16px] mt-1">Continue</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Verification