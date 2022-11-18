import Navbar from './NAVs/Navbar'
import Footer from './Footer'
import CardsLanscape from './CardsLandscape';

const Ticket = () => {

    return (
        <>
            <Navbar />
            <div id='CardWrapper' className='flex flex-col w-full'>
                <CardsLanscape />
            </div>
            <Footer />
        </>

    )
}
export default Ticket;