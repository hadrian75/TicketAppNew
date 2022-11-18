import { Navbar, Footer, Filter } from './'
import axios from 'axios'
// import CardsPotrait from './CardsPotrait'
import { Link, Navigate } from 'react-router-dom'
import avaxIcon from '../../images/avaxIcon.svg'
import { useState } from 'react'
import { useEffect } from 'react'
import { CalendarDataBar24Filled, Location24Filled } from '@fluentui/react-icons'
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
                <div className='grid grid-cols-3 w-[75%] gap-32 p-10 h-[500px] overflow-y-auto overflow-x-hidden  mx-10'>
                    {
                        events.map((event) => (
                            <div key={event.id}>
                                <div className='flex flex-col bg-frameColor h-[300px]  cursor-pointer ' onClick={() => navigate(`/events/${event.id}`)}>
                                    <img src={event.url} alt="" className='w-auto h-[150px] object-cover rounded-t-lg' />
                                    <div className='pl-5 gap-5'>
                                        <h1 className='text-[24px] text-white font-bold'>{event.name}</h1>
                                        <div className='space-y-5'>
                                            <span className='flex items-center gap-2 text-[14px] text-white'><CalendarDataBar24Filled primaryFill='white' />{event.createdAt}</span>
                                            <span className='flex items-center gap-2 text-[14px] text-white'><Location24Filled primaryFill='white' />{event.location}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='h-[50px] bg-primary rounded-b-lg flex items-center'>
                                    <span className='flex pl-5 gap-2'>
                                        <img src={avaxIcon} alt="" className='w-[24px]' />
                                        <h1 className='text-[14px] text-white font-bold'>{event.price} AVAX</h1>

                                    </span>
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