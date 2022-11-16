import { useState } from 'react'
import './App.css'
import { Ticket, Homepage, Favourite, History, Login, Register, Events, Verification, EventsDetail, Resetpass } from './components'
import UndefinedPath from './components/UndefinedPath'
import { Routes, Route, Link, Router } from "react-router-dom";
import ProfileScreen from './components/ProfileScreen';
// import { useUserContext } from '../backend/userContext';
import { Suspense } from 'react';

const App = () => {
  // const { loading, error, user } = useUserContext()
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route path='/' element={<Homepage />} />1
        <Route path='/ticket' element={<Ticket />} />
        <Route path='/history' element={<History />} />
        <Route path='/favourite' element={<Favourite />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/resetpass' element={<Resetpass />} />
        <Route path='/events' element={<Events />} />
        <Route path='/profile' element={<ProfileScreen />} />
        <Route path='/verification' element={<Verification />} />
        <Route path='/events/:eventsId' element={<EventsDetail />} />
        <Route path='/history/:historyId' element={<EventsDetail />} />
        <Route path='*' element={<UndefinedPath />} />
      </Routes>
    </Suspense>
  )
}

export default App
