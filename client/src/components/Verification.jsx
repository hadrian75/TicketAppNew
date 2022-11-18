import { Location24Regular, Person24Regular, Phone24Regular } from '@fluentui/react-icons';
import VerifiedS from '../../images/Verified.svg'

const Verification = () => {

    return (
        <div className='flex fixed flex-row w-full h-screen'>
            <div className='w-[50%] h-screen flex justify-center items-center bg-frameColor'>
                <img src={VerifiedS} alt="" className='w-[500px] h-[500px] object-cover' />
            </div>

            <div className='flex w-[50%] justify-center items-center'>
                <div className='flex w-[560px] flex-col pt-[30px] pb-[42px] px-[60px] rounded-2xl border-[1px] bg-frameColor'>
                    <div>
                        <h1 className='text-[32px] font-semibold text-white text-center'>Verification</h1>
                        <h1 className='text-[16px] text-base-60 pt-[20px] text-center'>Verify your account to get features in the token ticket</h1>
                    </div>

                    <form action="" method='post' className='flex flex-col mt-[50px]'>
                        <label htmlFor="" className='text-[16px] text-white font-medium pb-[10px]'>No KTP</label>
                        <div className='relative pb-[24px] flex items-center'>
                            <Person24Regular className='absolute ml-[28px]' primaryFill='white' />
                            <input type="text" name='userName' placeholder='Your KTP Number ' className={`block py-[18px] w-[440px] rounded-xl border-2 text-[16px] bg-frameColor caret-white placeholder:text-white pl-[58px] focus:outline-none h-[Hug (56px)] font-light`} />
                        </div>

                        <label htmlFor="" className='text-[16px] text-white font-medium pb-[10px]'>Name</label>
                        <div className='relative pb-[24px] flex items-center'>
                            <Person24Regular className='absolute ml-[28px]' primaryFill='white' />
                            <input type="text" name='userName' placeholder='Your Name ' className={`block py-[18px] w-[440px] rounded-xl border-2 text-[16px] bg-frameColor caret-white placeholder:text-white pl-[58px] focus:outline-none h-[Hug (56px)] font-light`} />
                        </div>

                        <label htmlFor="" className='text-[16px] text-white font-medium pb-[10px]'>Phone Number</label>
                        <div className='relative pb-[24px] flex items-center'>
                            <Phone24Regular className='absolute ml-[28px]' primaryFill='white' />
                            <input type="text" name='userName' placeholder='Your Phone Number ' className={`block py-[18px] w-[440px] rounded-xl border-2 text-[16px] bg-frameColor caret-white placeholder:text-white pl-[58px] focus:outline-none h-[Hug (56px)] font-light`} />
                        </div>

                        <label htmlFor="" className='text-[16px] text-white font-medium pb-[10px]'>Address</label>
                        <div className='relative pb-[24px] flex items-center'>
                            <Location24Regular className='absolute ml-[28px]' primaryFill='white' />
                            <input type="text" name='userName' placeholder='Your Address ' className={`block py-[18px] w-[440px] rounded-xl border-2 text-[16px] bg-frameColor caret-white placeholder:text-white pl-[58px] focus:outline-none h-[Hug (56px)] font-light`} />
                        </div>

                        <label htmlFor="" className='text-[16px] text-white font-medium pb-[10px]'>Gender</label>
                        <div className='pb-[50px]'>
                            <select name="" id="Gender" className={`py-[18px] pl-[28px] w-[440px] rounded-xl border-2 text-[16px] bg-frameColor caret-white text-white focus:outline-none h-[Hug (56px)] font-light`} >
                                <option selected>Your Gender</option>
                                <option value="ML">Male</option>
                                <option value="FM">Femail</option>
                            </select>
                        </div>

                        {/* <div className='relative pb-8 '>
                            <select name="" id="Gender" className='pt-4 pb-4 mr-4'>
                                <option selected>Me</option>
                                <option value="Y">You</option>
                            </select>
                        </div> */}
                        <button className="w-[440px] h-[Hug (56px)] py-[16px] bg-primary text-[16px] text-white rounded-lg" type="submit">Log In</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Verification;