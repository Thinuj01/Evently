/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React,{useEffect, useState} from 'react'
import './UserEvents.css'
import { IoIosAddCircle } from "react-icons/io";
import { useCookies } from 'react-cookie';
import axios from 'axios';
import Model from '../../components/Model/Model';
import EventEditForm from '../../components/EventEditForm/EventEditForm';
import EventAddForm from '../../components/EventAddForm/EventAddForm';
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";


function UserEvents({handleChangeActiveItem}) {
  const [cookies,setCookie] = useCookies(['user_id','event_id','event_name']);
  const [events, setEvents] = useState([]);
  const [editEvent,setEditEvent] = useState({});
  const [isEditEventModelOpen, setIsEditEventModelOpen] = useState(false);
  const [isAddEventModelOpen, setIsAddEventModelOpen] = useState(false);
  const [useEffectRunner,setUseEffectRunner] = useState(false);

  useEffect(() => { 
    axios.get(`http://localhost:8000/events/user/${cookies.user_id}/`)
    .then((response) => {
      setEvents(response.data);
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }, [useEffectRunner]);

  const handleEventClick = (event_id) => {
    axios.get(`http://localhost:8000/events/${event_id}/`)
      .then((response)=>{
        console.log(response.data);
        setCookie('event_id',response.data.event_id);
        setCookie('event_name',response.data.event_name);
        handleChangeActiveItem('Guest Management');
      }).catch((error)=>{
        console.error(error);
      })
  };
  const handleEventDeleteClick = (event_id) => {
    if (window.confirm("Are you sure you want to delete this Event?")) {
      axios.delete(`http://localhost:8000/events/delete/${event_id}/`)
        .then((response) => {
          console.log("Event deleted");
          setUseEffectRunner(!useEffectRunner);
        })
        .catch((error) => {
          console.log(error);
        });
    }

  };
  const handleEventEditClick = (event_id) => {
    axios.get(`http://localhost:8000/events/${event_id}/`)
    .then((response) => {
        console.log(response.data);
        setEditEvent(response.data);
        setIsEditEventModelOpen(true);
    })
    .catch((error) => {
        console.log(error);
    });
  };
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
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event) => (
                <tr key={event.event_id}>
                  <td><a href='#' onClick={()=>handleEventClick(event.event_id)}>{event.event_name}</a></td>
                  <td>{event.event_venue}</td>
                  <td>{event.event_date}</td>
                  <td>{event.event_client_name}</td>
                  <td><a href="#"  onClick={()=>handleEventEditClick(event.event_id)} className='guestManageEdit'><FaRegEdit/></a> <a href='#' className='guestManageDelete' onClick={()=>handleEventDeleteClick(event.event_id)}><MdDeleteOutline/></a></td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <Model isOpen={isEditEventModelOpen} onClose={()=> setIsEditEventModelOpen(false)} >
            <div className="addEvent-container">
                <EventEditForm onClose={()=> setIsEditEventModelOpen(false)} event={editEvent}/>         
            </div>
      </Model>
      <Model isOpen={isAddEventModelOpen} onClose={()=> setIsAddEventModelOpen(false)} >
            <div className="addEvent-container">
                <EventAddForm onClose={()=> setIsAddEventModelOpen(false)} />         
            </div>
      </Model>
    </div>
  )
}

export default UserEvents
