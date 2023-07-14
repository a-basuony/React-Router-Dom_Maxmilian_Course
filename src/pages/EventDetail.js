import React from 'react'
import { Link, useParams } from 'react-router-dom';
function EventDetailPage() {
  const param = useParams()
  return (
    <div>
      EventDetailPage
      <p>Event ID: {param.eventsId}</p>
      <Link to="../">go up</Link>
    </div>
  );
}

export default EventDetailPage