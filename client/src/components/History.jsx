import { Navbar, Footer } from './'
import { useEffect } from 'react'
import { collection, onSnapshot } from 'firebase/firestore'
import { useState } from 'react'
const History = () => {

    return (
        <>
            <Navbar />


            <Footer />
        </>
    )
}
export default History;