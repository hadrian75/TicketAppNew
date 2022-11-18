import { Navbar, Footer } from '.';
import { Person24Regular, Mail24Regular, Phone24Regular, Camera16Filled } from '@fluentui/react-icons'

const EditAccount = () => {
    return (
        <>
            <Navbar />
            <div className='py-32 w-full'>
                <div className='mx-[auto] bg-frameColor flex flex-col w-[40%] px-6 rounded-lg'>
                    <div className='justify-center flex item-center'>
                        {/* <img src="" alt="" className='w-60 h-60 mb-6 mt-8 mx-[auto] rounded-lg' /> */}
                        <label htmlFor="check-box-1" className='cursor-pointer relative pt-8 pb-8'>
                            <input type="checkbox" name="" id="check-box-1" className='appearance-none h-60 w-60 bg-white border-2 rounded-3xl border-white' />
                            <a href=""><Camera16Filled className="text-7xl h-20 w-20 absolute left-20 top-28 opacity-1 check-1 transition" primaryFill='#787878' /></a>
                        </label>
                    </div>

                    <form action="" method='post' className='flex flex-col pb-8'>
                        <label className='text-[16px] px-16 text-white font-medium pb-2'>User Name</label>
                        <div className='relative px-16 pb-8 flex items-center'>
                            <Person24Regular className="absolute ml-8" primaryFill='white' />
                            <input type="text" name="userName" id="emailForm" placeholder="Your Name" className={`block p-4 w-full rounded-xl  border-2 text-[16px]  bg-frameColor caret-white placeholder:text-white pl-16 text-white focus:outline-none h-[3rem] font-light`} />
                        </div>
                        <label className='text-[16px] px-16 text-white font-medium pb-2'>Email</label>
                        <div className='relative px-16 pb-8 flex items-center'>
                            <Mail24Regular className="flex absolute ml-8" primaryFill='white' />
                            <input type="text" name="userName" id="emailForm" placeholder="Your Email" className={`block p-4 w-full rounded-xl  border-2 text-[16px]  bg-frameColor caret-white placeholder:text-white pl-16 text-white focus:outline-none h-[3rem] font-light`} />
                        </div>
                        <label className='text-[16px] px-16 text-white font-medium pb-2'>Phone Number</label>
                        <div className='relative px-16 pb-8 flex items-center'>
                            <Phone24Regular className="absolute ml-8 " primaryFill='white' />
                            <input type="text" name="userName" id="emailForm" placeholder="Your Phone Number" className={`block p-4 w-full rounded-xl  border-2 text-[16px]  bg-frameColor caret-white placeholder:text-white pl-16 text-white focus:outline-none h-[3rem] font-light`} />
                        </div>
                        <div className='px-16 '>
                            <button className="px-[2rem] py-[0.7rem] bg-primary text-[16px] text-white rounded-lg w-full" type="submit">Save</button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default EditAccount;