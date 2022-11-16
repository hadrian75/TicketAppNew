import eventCard from '../AllEvents.json'
import { CalendarAgenda20Filled, Map20Filled, Bookmark24Filled } from '@fluentui/react-icons'
import avaxIcon from '../../images/avaxIcon.svg'
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react'

const EventsCard = () => {
    const [events, setEvents] = useState([])
    const [error, setError] = useState(null)
    const getEventsData = () => {
        setEvents(eventCard)
    }

    useEffect(() => {
        getEventsData()
    })




    return (
        <div className='flex- flex-col justify-center  relative overflow-y-auto overflow-x-hidden h-[672px] w-6/8'>

            {
                eventCard && eventCard.map((eventsCards) => {

                    if (eventCard) {
                        return (
                            <Cards
                                id={eventsCards.id}
                                title={eventsCards.title}
                                image={eventsCards.nftPhoto}
                                time={eventsCards.time}
                                isOnline={eventsCards.isOnline}
                                price={eventsCards.price}
                                description={eventsCards.description}
                                location={[eventsCards.location.Province, eventsCards.location.City]}
                                Province={eventsCards.location.Province}
                                City={eventsCards.location.City}
                            />
                        )

                    }

                    return (error) => {
                        setError(error)
                        console.log(error.message)
                    }
                }
                )
            }
        </div>

    )
}

const Cards = (props) => {
    return (
        <div className='w-[90%] h-[300px] flex flex-row justify-center mx-auto my-10 relative' key={props.id}>
            <img src={props.image} alt="NFT Photo" className='w-[40%] object-cover rounded-bl-lg rounded-tl-lg' />
            <div id="description" className='pl-10 w-[50%]   rounded-br-lg rounded-tr-lg flex flex-col justify-center  bg-frameColor'>
                <span className='flex flex-row justify-between'>
                    <h1 className='pb-10 text-3xl font-semibold text-white'>{props.title}</h1>
                    <Bookmark24Filled className='mr-10' primaryFill='white' />
                </span>
                <span className='flex flex-row py-3 items-center'>
                    <CalendarAgenda20Filled primaryFill='white' />
                    <h1 className='pl-4 font-semibold text-[16px] text-white'>{props.time}</h1>
                </span>
                <span className='flex flex-row py-3 items-center'>
                    <Map20Filled primaryFill='white' />

                    <h1 className='pl-4 font-semibold text-[16px] text-white'>{props.Province}, {props.City}</h1>
                </span>

                {props.isOnline === false
                    ?
                    <span className='flex flex-row py-3 items-center'>
                        <div className='bg-error w-[20px] h-[20px] rounded-full'></div>
                        <h1 className='pl-4 text-error text-[16px]'>Offline Event</h1>
                    </span>
                    :
                    <span className='flex flex-row py-3 items-center'>
                        <div className='bg-success w-[20px] h-[20px] rounded-full'></div>
                        <h1 className='pl-4 text-success text-[16px]'>Online Event</h1>
                    </span>
                }
                <div className='relative'>
                    <span className='flex absolute right-12 -translate-y-10 items-center  text-xl font-semibold'>
                        <img src={avaxIcon} alt="" className='w-11 h-11 mr-5' />
                        <h1 className='mr-10 text-white'>{props.price} AVAX</h1>

                        <Link to={`/events/${props.id}`} className="bg-primaryZ text-white px-6 py-3 rounded-xl">Detail Events</Link>
                    </span>
                </div>
            </div>
        </div>

    )
}



export default EventsCard;