import verSuc from '../../images/VerifiedSuc.svg'

const VerificationSuccess = () => {
    return (
        <div className='flex flex-row'>
            <div className='w-[50%] h-screen flex justify-center items-center bg-frameColor'>
                <img src={verSuc} alt="" className='w-[Hug (500px)] h-[Hug (500px)] object-cover' />
            </div>

            <div className='flex w-[50%] justify-center items-center'>
                <div className='flex flex-col py-[73px] px-[60px] rounded-2xl border-[1px] bg-frameColor'>
                    <div className='w-[440px] flex flex-col justify-center items-center'>
                        <div className='pb-[30px] w-[373px]'>
                            <h1 className='font-medium text-white text-center text-[24px]'>Congratulations, your account has been successfully verified</h1>
                        </div>

                        <button className='py-[16px] bg-primary text-[16px] text-white rounded-lg w-[440px]'>Back to Home</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default VerificationSuccess;