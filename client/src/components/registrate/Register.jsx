import React, { useState, useRef, useEffect } from 'react'
import { Mail24Regular, LockClosed24Regular, Dismiss20Filled, Checkmark20Filled, Phone24Regular, Check24Regular, ErrorCircle24Filled, Person24Regular, Eye24Regular, EyeOff24Regular, PasswordRegular } from '@fluentui/react-icons'
import '../../bgAndResponsive.css'
import loginIllustrate from '../../../images/404NotFound.png'
import { Link } from 'react-router-dom'
import { onAuthStateChanged, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../../Firebase'
const Register = () => {

    // REF

    const emailRef = useRef()
    const usernameRef = useRef()
    const passwordRef = useRef()
    const phoneRef = useRef()

    // SET DATA

    // const [name, setName] = useState("")
    // const [email, setEmail] = useState("")
    // const [phone, setPhone] = useState("")
    // const [password, setPassword] = useState("")
    // const [confirmPassword, setConfirmPassword] = useState("")
    const [toggleHide, setToggleHide] = useState(false)
    const toggleEye = () => {
        setToggleHide(!toggleHide)
    }

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState();
    const [error, setError] = useState("");

    useEffect(() => {
        setLoading(true)
        const unsubscribe = onAuthStateChanged(auth, response => {
            response ? setUser(response) : setUser(null);
            setError("");
            setLoading(false)
        });
        return unsubscribe
    }, [])

    const userRegist = (username, email, password, number) => {
        setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                updateProfile(auth.currentUser, {
                    displayName: username,
                    displayEmail: email,
                    displayNumber: number
                });
            })
            .then((response) => console.log(response))
            .catch((error) => setError(error.message))
            .finally(() => setLoading(false))
    }


    const onSubmit = (e) => {
        e.preventDefault();
        const userEmail = emailRef.current.value;
        const username = usernameRef.current.value;
        const number = phoneRef.current.value;
        const pass = passwordRef.current.value;
        if (userEmail && username && pass && number) {
            userRegist(username, userEmail, number, pass)
        }

    }
    //  LOGIN AND REGISTER





    const [toggleAlert, setToggleAlert] = useState(true)


    return (
        <div className="flex fixed h-screen w-full ">
            <div className="w-[50%] flex justify-center items-center bg-frameColor ">
                <img src={loginIllustrate} alt="" className=" object-cover w-full" />
            </div>
            <div className='flex w-[50%]  items-center justify-center'>
                <div className='w-full'>
                    <div className="flex flex-col px-16 rounded-[3%]  bg-frameColor mx-20 scale-90 py-10">
                        <div className=''>
                            <h1 className='text-[32px] font-semibold text-white text-center'>Register</h1>
                            <h1 className='text-[16px] font-medium text-[#ababb5] text-center pt-5'>Please enter your personal data</h1>
                        </div>
                        <form action="" method='post' onSubmit={onSubmit} className='flex flex-col mt-[50px]'>
                            <label className='text-[16px] text-white font-medium pb-2'>Username</label>
                            <div className='relative pb-[10px] flex items-center'>
                                <Person24Regular className="absolute ml-4" primaryFill='white' />
                                <input type="text" name="userName" ref={usernameRef} id="nameForm" placeholder="Enter Your Name " autoComplete='off' className={`block p-4 w-full rounded-xl  border-2 text-[16px]  bg-frameColor caret-white placeholder:text-white pl-12 text-white focus:outline-none h-[48px] font-light`} />
                            </div>

                            <label htmlFor='emailForm' className='text-[16px] text-white font-medium pb-2'>Email</label>
                            <div className='relative pb-[10px] flex items-center'>
                                <Mail24Regular className="flex absolute ml-4" primaryFill='white' />
                                <input type="text" name="userName" ref={emailRef} id="emailForm" placeholder="Enter Your Name " autoComplete='off' className={`block p-4 w-full rounded-xl  border-2 text-[16px]  bg-frameColor caret-white placeholder:text-white pl-12 text-white focus:outline-none h-[48px] font-light`} />
                            </div>

                            <label htmlFor='phoneNumber' className='text-[16px] text-white font-medium pb-2'>Phone Number</label>
                            <div className='relative pb-[10px] flex items-center'>
                                <Phone24Regular className="absolute ml-4 " primaryFill='white' />
                                <input type="text" name="userName" id="phoneNumber" ref={phoneRef} placeholder="Enter Your Name " autoComplete='off' className={`block p-4 w-full rounded-xl  border-2 text-[16px]  bg-frameColor caret-white placeholder:text-white pl-12 text-white focus:outline-none h-[48px] font-light`} />
                            </div>

                            <label htmlFor='createPassForm' className='text-[16px] text-white font-medium pb-2' >Password</label>
                            <div className=' relative pb-[10px] flex items-center'>
                                <LockClosed24Regular className=" absolute ml-4 " primaryFill='white' />
                                <span className='flex w-[4rem] h-[48px] absolute justify-center items-center right-0'>
                                    {
                                        toggleHide == false
                                            ?
                                            <button type='button' className='absolute ' onClick={() => toggleEye()} >
                                                <EyeOff24Regular className="" primaryFill='white' />
                                            </button>
                                            :
                                            <button type='button' className='absolute' onClick={() => toggleEye()} >
                                                <Eye24Regular className="" primaryFill='white' />
                                            </button>

                                    }
                                </span>
                                <input type={`${toggleHide == false ? "password" : "text"}`} id='createPass' ref={passwordRef} name="password" placeholder="Enter Your Password " autoComplete='off' className={`block p-4 w-full rounded-xl  border-2 text-[16px]  bg-frameColor caret-white placeholder:text-white pl-12 text-white focus:outline-none h-[48px] font-light  ${toggleHide ? "" : "font-['verdana'] tracking-wide placeholder:font-light placeholder:font-Urbanist placeholder:tracking-normal"}`} c="true" minLength={8} maxLength={16} required />
                            </div>

                            <div className='flex pb-[10px]'>
                                {
                                    toggleAlert === false ?
                                        <span className='flex items-center gap-3'>
                                            <Dismiss20Filled className='rounded-full bg-error text-frameColor  px-1' />
                                            <h1 className='text-error text-[14px]'>At Least 8 Characters</h1>
                                        </span>
                                        :
                                        <span className='flex items-center gap-3'>
                                            <Checkmark20Filled className='rounded-full bg-success text-frameColor  px-1' />
                                            <h1 className='text-success text-[14px]'>At Least 8 Characters</h1>
                                        </span>

                                }
                            </div>

                            <label htmlFor='confirmPass' className='text-[16px] text-white font-medium pb-2'>Confirm Password</label>
                            <div className='relative w-full flex items-center'>

                                <LockClosed24Regular className=" absolute ml-4 " primaryFill='white' />

                                <input type={`${toggleHide == false ? "password" : "text"}`} id='confirmPass' ref={passwordRef} className={`block p-4 w-full rounded-xl  border-2 text-[16px]  bg-frameColor caret-white placeholder:text-white pl-12 text-white focus:outline-none h-[48px] font-light  ${toggleHide ? "" : "font-['verdana'] tracking-wide placeholder:font-light placeholder:font-Urbanist placeholder:tracking-normal"}`} placeholder="Confirm Your Password" />
                            </div>
                            <div className='flex  pt-2'>
                                <span className={`flex items-center gap-3`}>
                                    <ErrorCircle24Filled className=' rounded-full scale-110' filled={true} primaryFill="rgb(226 92 92)" />
                                    <h1 className='text-error text-[14px]'>Password Miss Match</h1>
                                </span>


                            </div>
                            <div>

                                <button type={`submit`} className="w-full bg-primary h-[48px] rounded-xl mt-5 text-[16px] text-white cursor-pointer" >Submit</button>
                            </div>
                            <div className='flex flex-row mt-[10px]'>
                                <h1 className='text-[16px] font-normal text-white'> Do You Have an Account? <Link to={`/login`} className="text-primary font-medium">Login</Link></h1>
                            </div>
                        </form>
                    </div>

                </div>
            </div >
        </div >
    )

}

export default Register;