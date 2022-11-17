import { Navbar, Footer, Filter } from './'
import axios from 'axios'
// import CardsPotrait from './CardsPotrait'

const Events = () => {
    return (
        <div className=' overflow-hidden'>
            <Navbar />
            <div className='flex'>
                <Filter />
            </div>
            <Footer />
        </div>
    )
}


export default Events;