import '../bgAndResponsive.css'
import resetSuc from '../../images/Reset Password Success.svg'

const ResetPassSuc = () => {

    return (
        <div className='flex flex-row'>
            <div className='w-[50%] h-screen flex justify-center items-center bg-frameColor'>
                <img src={resetSuc} alt="" className='w-[Hug (500px)] h-[Hug (500px)] object-cover' />
            </div>

            <div className='flex w-[50%] justify-center items-center'>
                <div className='w-[Hug (560px)] flex flex-col pt-[73px] pb-[83px] px-[60px] rounded-2xl border-[1px] bg-frameColor'>
                    <div className='w-[440px]'>
                        <div className='pb-[20px]'>
                            <h1 className='text-[24px] font-medium text-white text-center'>Congratulations you have successfully created an account</h1>
                        </div>

                        <button className="w-[440px] py-[16px] bg-primary text-[16px] text-white rounded-lg w-full" type="submit">Continue</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ResetPassSuc;