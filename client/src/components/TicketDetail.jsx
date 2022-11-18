import React from "react"
import { useParams } from "react-router-dom"
import eventCard from "../AllEvents.json"
import { Navbar, Footer } from '.'
import { CalendarLtr20Filled, Location20Filled, TicketHorizontal20Filled } from "@fluentui/react-icons"
import avaxIcon from '../../images/avaxIcon.svg'
import qrcode from '../../images/frame.jpeg'

const TicketDetail = () => {
    const { eventsId } = useParams()
    const thisEvent = eventCard.find(theEvent => theEvent.id == eventsId)
    return (
        <>
            <Navbar />
            <div className="flex flex-col w-[80%] mb-[236px] mt-[100px] mx-[auto] ">
                <div className='w-[Hug (1,160px)] h-[300px] flex flex-row justify-center relative rounded-br-lg rounded-tr-lg bg-frameColor rounded-bl-lg rounded-tl-lg' key={thisEvent.id}>
                    <img src={thisEvent.nftPhoto} alt="NFT Photo" className='w-[500px] h-[300px] object-cover' />
                    <div id="description" className='pl-[30px] pt-[40px] w-[500px] h-[300px] bg-frameColor flex flex-col'>
                        <span className='flex flex-row justify-between'>
                            <h1 className='pb-[25px] text-[20px] font-semibold text-white'>{thisEvent.title}</h1>
                        </span>
                        <span className='flex flex-row pb-[15px] items-center'>
                            <TicketHorizontal20Filled primaryFill='white' />
                            <h1 className='pl-4 text-[16px] text-white'>{thisEvent.type}</h1>
                        </span>
                        <span className='flex flex-row pb-[15px] items-center'>
                            <CalendarLtr20Filled primaryFill='white' />
                            <h1 className='pl-4 text-[16px] text-white'>{thisEvent.time}</h1>
                        </span>
                        <span className='flex flex-row pb-[15px] items-center'>
                            <Location20Filled primaryFill='white' />
                            <h1 className='pl-4 text-[16px] text-white'>{thisEvent.location.Province}, {thisEvent.location.City}</h1>
                        </span>

                        {thisEvent.isOnline === false
                            ?
                            <span className='flex flex-row text-[16px] items-center'>
                                <div className='bg-error w-[20px] h-[20px] rounded-full'></div>
                                <h1 className='pl-4 text-error'>Offline </h1>
                            </span>
                            :
                            <span className='flex flex-row text-[16px] items-center'>
                                <div className='bg-success w-[20px] h-[20px] rounded-full'></div>
                                <h1 className='pl-4 text-success'>Online </h1>
                            </span>
                        }
                    </div>
                    <div className="flex mr-[66px] mt-[35px] mb-[35px] flex-col justify-center items-center">
                        <img src={qrcode} className='w-[200px] h-[170px] rounded-br-md rounded-tr-md rounded-bl-md rounded-tl-md'></img>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    )
}
export default TicketDetail;