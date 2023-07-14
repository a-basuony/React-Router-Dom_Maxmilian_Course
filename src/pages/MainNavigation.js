import React from "react";
import {NavLink} from 'react-router-dom'

function MainNavigation() {
  return (
    <>
      <h1>MainNavigation</h1>
      <ul>
        <li>
          <NavLink activeClassName="active"  to="/">HomePage</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active"  to="/events">EventsPage</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active"  to="/events/:eventsId">EventDetailPage</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active"  to="/events/new">NewEventPage</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active"  to="/events/:editId/edit">EditEventPage</NavLink>
        </li>
      </ul>
    </>
  );
}

export default MainNavigation;
