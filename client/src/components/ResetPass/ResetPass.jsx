import React, { useState } from 'react'
import { Mail24Regular } from '@fluentui/react-icons'
import loginIllustrate from '../../../images/404NotFound.png'
const Resetpass = () => {
    return (
        <div className="flex fixed h-screen w-full">
            <div className="w-[50%] h-screen flex justify-center items-center bg-frameColor">
                <img src={loginIllustrate} alt="" className="w-full object-cover" />
            </div>
            <div className="flex w-[50%] ">
                <div className=" flex flex-col py-10 px-16  rounded-2xl border-[1px] bg-frameColor mx-20  scale-90 my-[auto] w-full">
                    <h1 className='text-[32px] font-semibold text-white text-center'>Forgot Password</h1>
                    <h1 className='text-[16px] font-medium text-[#ababb5] text-center pt-5'>Please input your email to get Reset link</h1>
                    <form action="" method='post' className='flex flex-col'>
                        <div className='pt-10'>
                            <label className="text-xl my-2 text-white">Email</label>
                            <div className="relative flex items-center">
                                <Mail24Regular className="absolute ml-3" primaryFill="white" />
                                <input type="text" id="EmailInput" className="block p-4 w-full rounded-xl  border-2 text-[16px]  bg-frameColor caret-white placeholder:text-white pl-12 text-white focus:outline-none h-[4rem] font-light" placeholder="Enter Your Email..." pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$" autoComplete="off" required />
                            </div>
                        </div>
                        <input
                            type="submit"
                            value="Submit"
                            className="w-full bg-primary h-[48px] rounded-xl mt-10 text-[16px] text-white cursor-pointer"
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Resetpass