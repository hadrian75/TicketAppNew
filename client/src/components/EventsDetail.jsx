import React from "react"
import { useParams } from "react-router-dom"
import eventCard from "../AllEvents.json"
import { Navbar, Footer } from './'
import { Bookmark24Filled, CalendarAgenda20Filled, Map20Filled } from "@fluentui/react-icons"
import avaxIcon from '../../images/avaxIcon.svg'

const EventsDetail = () => {
    let eventsId = useParams()

    const cardEvents = eventCard.find(events => events.id = eventsId)

    return (
        <>
            <Navbar />
            <h3></h3>
            <Footer />
        </>

    )
}
export default EventsDetail;