/* eslint-disable no-unused-vars */
import React,{useEffect, useState} from 'react'
import './UserEvents.css'
import { IoIosAddCircle } from "react-icons/io";
import { useCookies } from 'react-cookie';
import axios from 'axios';
import Model from '../../components/Model/Model';
import EventAddForm from '../../components/EventAddForm/EventAddForm';

function UserEvents() {
  const [cookies] = useCookies(['user_id']);
  const [events, setEvents] = useState([]);
  const [isAddEventModelOpen, setIsAddEventModelOpen] = useState(false);

  useEffect(() => { 
    axios.get(`http://localhost:8000/events/user/${cookies.user_id}/`)
    .then((response) => {
      setEvents(response.data);
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);
  return (
    <div className='UserEvent-container'>
      <div className="UserEvent-Topic">
        <h2>My Events</h2>
      </div>
      <div className="UserEvent-AddEventBtn-container">
        <div className="UserEvent-AddEventBtn" onClick={()=> setIsAddEventModelOpen(true)}> 
            <IoIosAddCircle />
            <p>Add A Event</p>
        </div>
      </div>
      <div className="UserEvent-table">
      {events.length === 0 ? (
          <table>
            <thead>
              <tr>
                <td>No events found.</td>
              </tr>
            </thead>
          </table>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Event Name</th>
                <th>Venue</th>
                <th>Date</th>
                <th>Client Name</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event) => (
                <tr key={event.event_id}>
                  <td>{event.event_name}</td>
                  <td>{event.event_venue}</td>
                  <td>{event.event_date}</td>
                  <td>{event.event_client_name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <Model isOpen={isAddEventModelOpen} onClose={()=> setIsAddEventModelOpen(false)} >
            <div className="addEvent-container">
                <EventAddForm onClose={()=> setIsAddEventModelOpen(false)}/>         
            </div>
      </Model>
    </div>
  )
}

export default UserEvents
