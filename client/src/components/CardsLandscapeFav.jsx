import eventCard from '../AllEvents.json'
import { CalendarLtr20Filled, Location20Filled, TicketHorizontal20Filled } from '@fluentui/react-icons'
import avaxIcon from '../../images/avaxIcon.svg'
import { Link } from "react-router-dom";
const CardsFav = () => {
    return (
        <div className='flex- flex-col justify-center m-10 relative overflow-y-auto overflow-x-hidden h-[672px] w-6/8'>
            {eventCard && eventCard.map(eventCards => {
                return (
                    <div className='w-full h-[16rem] flex flex-row justify-center m-8  relative' key={eventCards.id}>
                        <img src={eventCards.nftPhoto} alt="NFT Photo" className='w-[40%] object-cover rounded-bl-lg rounded-tl-lg bg-frameColor' />
                        <div id="description" className='pl-[43px] w-[50%] rounded-br-lg rounded-tr-lg flex flex-col justify-center bg-frameColor'>
                            <span className='flex flex-row justify-between'>
                                <h1 className='pb-[30px] pt-[30px] text-[20px] font-semibold text-white'>{eventCards.title}</h1>
                                {eventCards.status === false
                                    ?
                                    <span className='flex flex-row pt-[30px]'>
                                        <h2 className='mr-[17px] text-[16px] font-normal text-white'>Event:</h2>
                                        <div className='mr-[34px] bg-error w-[20px] h-[20px] rounded-full'></div>
                                    </span>
                                    :
                                    <span className='flex flex-row pt-[30px]'>
                                        <h2 className='mr-[17px] text-[16px] font-normal text-white'>Event:</h2>
                                        <div className='mr-[34px] bg-success w-[20px] h-[20px] rounded-full'></div>
                                    </span>
                                }
                            </span>
                            <span className='flex flex-row pb-[15px] items-center'>
                                <CalendarLtr20Filled primaryFill='white' />
                                <h1 className='pl-4 font-normal text-[16px] text-white'>{eventCards.time}</h1>
                            </span>
                            <span className='flex flex-row pb-[15px] items-center'>
                                <Location20Filled primaryFill='white' />
                                <h1 className='pl-4 font-normal text-[16px] text-white'>{eventCards.location.Province}, {eventCards.location.City}</h1>
                            </span>

                            {eventCards.isOnline === false
                                ?
                                <span className='flex flex-row items-center mb-[36px]'>
                                    <div className='bg-error w-[20px] h-[20px] rounded-full'></div>
                                    <h1 className='pl-4 text-error text-[16px]'>Offline</h1>
                                </span>
                                :
                                <span className='flex flex-row items-center mb-[36px]'>
                                    <div className='bg-success w-[20px] h-[20px] rounded-full'></div>
                                    <h1 className='pl-4 text-success text-[16px]'>Online</h1>
                                </span>
                            }
                            <div className='relative'>
                                <span className='flex absolute right-[220px] -translate-y-16 items-center text-[16px] font-normal'>
                                    <img src={avaxIcon} alt="" className='w-[20px] h-[20px]' />
                                    <h1 className='pl-4 text-[16px] text-white'>{eventCards.price} {eventCards.token}</h1>
                                </span>
                            </div>
                            <div className='relative'>
                                <span className='flex absolute right-[32px] -translate-y-20 items-center text-[16px] font-normal'>
                                    <Link to={`/events/${eventCards.id}`} className="bg-primary text-white px-7 py-4 rounded-xl">Detail Event</Link>
                                </span>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default CardsFav;