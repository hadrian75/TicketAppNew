import VerifiedS from '../../images/VerifiedCard.svg'

const VerificationSub = () => {

    return (
        <div className='flex fixed w-full h-screen'>
            <div className='w-full h-screen flex justify-center items-center flex-col'>
                <img src={VerifiedS} alt="" className='w-[Hug (560px)] h-[Hug (320px)] object-cover' />

                <div className='flex w-[560px]'>
                    <div className='flex flex-col w-[Hug (492px)] h-[Hug (146px)] pt-[25px]'>
                        <div>
                            <h1 className='text-[32px] font-Urbanist font-semibold text-black text-left'>Are you sure you want to use this file?</h1>
                        </div>

                        <div class="inline-flex justify-center items-center w-[Hug (561px)] pt-[22px]">
                            <hr className="w-[561px] h-px border-0 dark:bg-base-40" />
                            <span className="absolute left-1/2 mb-1 px-[16px] font-black text-base-40 bg-white -translate-x-1/2 dark:text-base-40 dark:bg-white">.</span>
                        </div>

                        <div className='w-[Hug (561px)] flex flex-col mt-[50px]'>
                            <div className='justify-center flex flex-row gap-[40px]'>
                                <a href="" className='w-[260px]'><button className="font-Urbanist rounded-lg py-[16px] bg-primary text-white font-medium text-[16px] w-[260px]">Submit File</button></a>
                                <a href="/verificationPhoto" className='w-[260px]'><button className="font-Urbanist rounded-lg py-[15px] text-primary ring-2 ring-primary font-bold text-[16px] w-[260px] font-medium">Pick File Again</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default VerificationSub;