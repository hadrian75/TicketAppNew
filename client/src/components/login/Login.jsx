
import { IoMdPerson } from "react-icons/io";
import { IoMdNotifications } from "react-icons/io";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import '../../bgAndResponsive.css'
import loginIllustrate from '../../../images/404NotFound.png'
import { VaultRegular, Mail24Regular, LockClosed24Regular, Eye24Regular, EyeOff24Regular, LockOpen24Regular } from "@fluentui/react-icons";
import { signInWithEmailAndPassword, onAuthStateChanged, updateProfile } from "firebase/auth";
import { auth } from "../../Firebase";
const Login = () => {

    //   SET CHANGE
    const [email, setEmail] = useState("")
    const [passowrd, setPassword] = useState("")

    const [user, setUser] = useState(null);



    // Checking Error Handle
    const [submitted, setSubmitted] = useState(false)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState();


    //  Handle Change

    const handleEmail = (e) => {
        setEmail(e.target.value)
        setSubmitted(false)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
        setSubmitted(false)
    }


    const [toggleHide, setToggleHide] = useState(false)
    const toggleEye = () => {
        setToggleHide(!toggleHide)
    }


    useEffect(() => {
        setLoading(true)
        const unsubscribe = onAuthStateChanged(auth, response => {
            response ? setUser(response) : setUser(null);
            setError("");
            setLoading(false)
        });
        return unsubscribe
    }, [])


    const userSign = (email, password) => {
        setLoading(true)
        signInWithEmailAndPassword(email, password)
            .then((response) => console.log(response))
            .catch((error) => setError(error.message))
            .finally(() => setLoading(false))
    }


    const userForgot = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const userEmail = emailRef.current.value;
        const pass = passwordRef.current.value;
        if (userEmail && pass) {
            userRegist(userEmail, pass)
        }

    }



    return (
        <>
            <div className="flex fixed h-screen w-full">
                <div className="w-[50%] h-screen flex justify-center items-center bg-frameColor">
                    <img src={loginIllustrate} alt="" className="w-full object-cover" />
                </div>
                <div className="flex w-[50%] ">
                    <div className=" flex flex-col py-10 px-16  rounded-2xl border-[1px] bg-frameColor mx-20  scale-90 my-[auto] w-full">
                        <h1 className='text-[32px] font-semibold text-white text-center'>Login</h1>
                        <h1 className='text-[16px] font-medium text-[#ababb5] text-center pt-5'>Please Fill this field to Sign In</h1>
                        <form action="" method="post" onSubmit={onSubmit}>
                            <div className='pt-10'>
                                <label className="text-xl my-2 text-white">Email</label>
                                <div className="relative flex items-center">
                                    <Mail24Regular className="absolute ml-3" primaryFill="white" />
                                    <input type="email" id="EmailInput" handleChange={() => handleEmail()} className="block p-4 w-full rounded-xl  border-2 text-[16px]  bg-frameColor caret-white placeholder:text-white pl-12 text-white focus:outline-none h-[4rem] font-light" placeholder="Enter Your Email..." pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$" required />
                                </div>
                            </div>
                            <div className=' w-[100%] pt-12' method="">
                                <label className="text-xl my-2 text-white">Password</label>
                                <div className="relative flex items-center">
                                    <LockClosed24Regular className="absolute ml-3" primaryFill="white" />
                                    <input type={`${toggleHide ? "text" : "password"}`} id="PasswordInput" handleChange={() => handlePassword()} className={`block p-4 w-full rounded-xl  border-2 text-[16px] placeholder:text-[16px]   pl-12 bg-frameColor caret-white placeholder:text-white text-white focus:outline-none font-light  h-[4rem] ${toggleHide ? "" : "font-['verdana'] tracking-wide placeholder:font-light placeholder:font-Urbanist placeholder:tracking-normal"}`} c="true" minLength={4} maxLength={16} placeholder="Enter Your Password..." required />
                                </div>
                            </div>
                            <div className="relative flex items-center">
                                {toggleHide ?
                                    <button type="button" className="absolute right-[5px] bottom-[6px] font-medium rounded-lg px-2 py-2 text-2xl" onClick={() => toggleEye()}>
                                        <Eye24Regular primaryFill="white" />
                                    </button>
                                    :
                                    <button type="button" className="absolute right-[5px] bottom-[6px] font-medium rounded-lg  px-2 py-2 text-2xl" onClick={() => toggleEye()}>
                                        <EyeOff24Regular primaryFill="white" />
                                    </button>
                                }

                            </div>
                            <span className="py-3 text-xl flex font-semibold">
                                <h1 className="pl-2 text-[16px] text-white font-normal">Forgot your Password?<Link to={`/resetpass`} className="text-primary font-medium">  Reset Password</Link></h1>

                            </span>
                            <input
                                type="submit"
                                value="Submit"
                                className="w-full bg-primary h-[48px] rounded-xl mt-5 text-[16px] text-white cursor-pointer"
                            />
                            <h1 className="pl-2 pt-3 text-[16px] text-white font-normal">Don't have an account yet?<Link to={`/register`} className="text-primary font-medium"> Register</Link></h1>
                        </form>
                    </div>
                </div>

            </div>
        </>
    )

}
export default Login;