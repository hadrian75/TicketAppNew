import verError from '../../images/VerifiedError.svg'

const VerificationTime = () => {
    return (
        <div className='flex flex-row'>
            <div className='w-[50%] h-screen flex justify-center items-center bg-frameColor'>
                <img src={verError} alt="" className='w-[500px] h-[333px] object-cover' />
            </div>

            <div className='flex w-[50%] justify-center h-screen object-ccover items-center'>
                <div className='flex flex-col pt-[25px] pb-[26px] px-[60px] rounded-2xl border-[1px] bg-frameColor w-[Hug (560px)]'>
                    <div className='flex flex-col justify-center items-center w-[460px] '>
                        <div className=' w-[414px] flex flex-col'>
                            <h1 className='text-[24px] font-medium text-white text-center'>Verification Failed</h1>
                            <h1 className='text-[16px] text-base-60 pt-[10px] pb-[15px] text-center'>Your data does not pass the verification process. Make sure you have entered the data correctly</h1>
                        </div>

                        <div className='w-[440px] flex flex-col'>
                            <span className='h-[1px] mb-[20px] bg-base-40'></span>
                        </div>

                        <div className='items-center justify-center gap-[10px] flex flex-col'>
                            <button className='w-[440px] py-[16px] text-[16px] bg-primary text-white rounded-lg'>Re-verify</button>
                            <button className="w-[440px] font-Urbanist rounded-lg py-[15px] text-primary ring-2 ring-primary font-bold text-[16px] font-medium">Back to Profile</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default VerificationTime;