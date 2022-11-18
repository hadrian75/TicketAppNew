import verTime from '../../images/VerifiedTime.svg'

const VerificationTime = () => {
    return (
        <div className='flex flex-row'>
            <div className='w-[50%] h-screen flex justify-center items-center bg-frameColor'>
                <img src={verTime} alt="" className='w-[500px] h-[500px] object-cover' />
            </div>

            <div className='flex w-[50%] justify-center items-center'>
                <div className='flex pt-[38px] pb-[39px] px-[60px] rounded-2xl border-[1px] bg-frameColor w-[560px]'>
                    <div className='flex flex-col justify-center items-center w-[460px]'>
                        <div className=' w-[376px] flex flex-col '>
                            <h1 className='text-[24px] font-medium text-white text-center'>Please Wait...</h1>
                            <h1 className='text-[16px] text-base-60 pt-[10px] pb-[15px] text-center'>Your data is still in the verification process you can see the verification status on the profile page</h1>
                        </div>

                        <div className=' w-[440px] flex flex-col' >
                            <span className='h-[1px] mb-[60px] bg-base-40'></span>
                        </div>

                        <div className='items-center justify-center flex'>
                            <button className='w-[440px] py-[16px] bg-primary text-white rounded-lg'>Back to Profile</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default VerificationTime;