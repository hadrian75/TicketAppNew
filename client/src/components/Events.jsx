import { Navbar, Footer, Filter } from './'
import axios from 'axios'
// import CardsPotrait from './CardsPotrait'
import { Link, Navigate } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const Events = () => {
    const [events, setEvents] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getProducts()
    }, [])

    const getProducts = async () => {
        const response = await axios.get(`http://localhost:5000/products`)
        setEvents(response.data)
    }
    return (
        <div className=' overflow-hidden'>
            <Navbar />
            <div className='flex'>
                <Filter />
                <div className='grid grid-cols-3 w-[75%] gap-28 p-10 h-[500px] overflow-y-auto overflow-x-hidden  mx-10'>
                    {
                        events.map((event) => (
                            <div className='flex flex-col bg-frameColor h-[300px] rounded-lg cursor-pointer' key={event.id} onClick={() => navigate(`/events/${event.id}`)}>
                                <img src={event.url} alt="" className='w-auto h-36 object-cover rounded-t-lg' />
                                <div className='pl-2'>
                                    <h1 className='text-[16px] text-white font-bold'>{event.name}</h1>
                                </div>
                            </div>

                        ))
                    }

                </div>
            </div>
            <Footer />
        </div >
    )
}


export default Events;