import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import eventCard from "../AllEvents.json"
import { Navbar, Footer } from './'
import { Bookmark24Filled, CalendarAgenda20Filled, Map20Filled } from "@fluentui/react-icons"
import avaxIcon from '../../images/avaxIcon.svg'
import { useState } from "react"
import axios from "axios"


const EventsDetail = () => {
    const { id } = useParams()
    const [title, setTitle] = useState("")
    const [url, setUrl] = useState("")
    useEffect(() => {
        getProductById()
        console.log(typeof Number(id))
    })

    const getProductById = async (req, res) => {
        const response = await axios.get(`http://localhost:5000/products/${id}`)
        setTitle(response.data.name)
        setUrl(response.data.url)
    }

    return (
        <>
            <Navbar />
            <div className="flex">
                <img src={url} alt="" />
                <h1>{title}</h1>
            </div>
            <Footer />
        </>

    )
}
export default EventsDetail;