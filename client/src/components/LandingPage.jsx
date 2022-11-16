import Navbar from "./Navbar"
import illustrate from '../../images/loginilust.svg'
const LandingPage = () => {
    return (
        <>
            <Navbar />
            <div className="flex">
                <div className="flex items-center justfify-center w-[40%]">
                    <img src={illustrate} alt="" className="object-cover w-full h-auto" />
                </div>
                <div className="flex flex-col">
                    <h1 className="text-[44px] font-semibold"></h1>
                    <h1 className="text-[24px] font-normal">Est vitae tristique in consequat hac ut imperdiet ut
                        viverra. Massa quam id pharetra nunc, a aenean a
                        tempor. Id urna, venenatis, ultrices purus tellus
                        dignissim cras posuere in. Lectus turpis elit, sed felis
                    </h1>
                </div>
                <div className="flex flex-row">
                    <a href="" className="w-50%"><button className="w-full py-5 bg-primary text-white">Register</button></a>
                    <a href="" className="w-50%"><button className="w-full py-5 border-2 border-primary text-primary">Login</button></a>
                </div>
            </div>
        </>
    )
}