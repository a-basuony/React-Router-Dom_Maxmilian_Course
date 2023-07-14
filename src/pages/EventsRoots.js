import React from 'react'
import { Outlet } from 'react-router-dom'
import EventsNavigation from '../components/EventsNavigation'

function EventsRoots() {
  return (
      <>
          <EventsNavigation/>
          <Outlet/>
    </>
  )
}

export default EventsRoots