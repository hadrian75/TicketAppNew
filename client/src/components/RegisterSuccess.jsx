import '../bgAndResponsive.css'
import regSuc from '../../images/Register Success.svg'

const RegisterSuccess = () => {

    return (
        <div className='flex flex-row'>
            <div className='w-[50%] h-screen flex justify-center items-center bg-frameColor'>
                <img src={regSuc} alt="" className='w-[Hug (500px)] h-[Hug (500px)] object-cover' />
            </div>

            <div className='flex w-[50%] justify-center items-center'>
                <div className='flex flex-col py-[73px] px-[60px] rounded-2xl border-[1px] bg-frameColor'>
                    <div className='w-[440px]'>
                        <div className='pb-[30px]'>
                            <h1 className='text-[24px] font-medium text-white text-center'>Congratulations you have successfully created an account</h1>
                        </div>

                        <button className="w-[440px] py-[16px] bg-primary text-[16px] text-white rounded-lg" type="submit">Continue</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default RegisterSuccess;