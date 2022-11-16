import { Navbar, Footer, Filter } from './'
import axios from 'axios'
// import CardsPotrait from './CardsPotrait'

const Events = () => {
    return (
        <>
            <Navbar />
            <div className='flex'>
                <Filter />
            </div>
            <Footer />
        </>
    )
}


export default Events;