import React from 'react'
import { Link, useParams } from 'react-router-dom';

const events = [
  {
    id: 'ev1',
    title: 'Event 1',
    description: 'This is event 1',
    date: '2023-07-15',
    location: 'Location 1'
  },
  {
    id: 'ev2',
    title: 'Event 2',
    description: 'This is event 2',
    date: '2023-07-20',
    location: 'Location 2'
  },
  {
    id: 'ev3',
    title: 'Event 3',
    description: 'This is event 3',
    date: '2023-07-25',
    location: 'Location 3'
  }
];

function EventsPage() {
  
  return (
    <>
      <ul>

      {events.map((event) => (
        <li key={event.id}>
          <Link to={event.id} > {event.title}</Link>
        </li>
        ))}
        </ul>
      EventsPage
      <Link to="../">go up</Link>
    </>
  );
}

export default EventsPage
