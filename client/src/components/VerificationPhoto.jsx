import VerifiedS from '../../images/VerifiedCard.svg'

const VerificationPhoto = () => {

    return (
        <div className='flex fixed w-full h-screen'>
            <div className='w-full h-screen flex justify-center items-center flex-col'>
                <img src={VerifiedS} alt="" className='w-[Hug (560px)] h-[Hug (320px)] object-cover' />

                <div className='flex w-[560px]'>
                    <div className='flex flex-col w-[Hug (492px)] h-[Hug (146px)] pt-[38px]'>
                        <div>
                            <h1 className='text-[32px] font-semibold text-black text-left'>Photo of the front of the ID card</h1>
                            <h1 className='text-[24px] py-[20px] text-black text-left'>1.Use the original valid ID card</h1>
                            <h1 className='text-[24px] text-black text-left'>2.Make sure the photo ID looks bright and clear</h1>
                        </div>

                        <form action="" method='post' className='flex flex-col mt-[38px]'>
                            <button className="py-[16px] bg-primary text-[16px] text-white rounded-lg w-[560px]" type="submit">Browse File</button>
                        </form>
                    </div>
                </div>
            </div>


        </div>
    )
}
export default VerificationPhoto;