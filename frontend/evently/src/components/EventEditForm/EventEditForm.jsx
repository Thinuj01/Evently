/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect , useState} from 'react'
import './EventEditForm.css'
import axios from 'axios'
import { useCookies } from 'react-cookie'

function EventEditForm({onClose, event}) {
    const [cookies] = useCookies(['user_id']);
    const [eventDetails, setEventDetails] = useState(event);
  
    const handleChange = (e) => {
      setEventDetails({
        ...eventDetails,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleSubmit = () => {
      console.log(eventDetails);
      axios.put(`http://localhost:8000/events/edit/${eventDetails.event_id}/`, eventDetails)
      .then((response) => {
        console.log("User added", eventDetails);
        onClose();
        window.location.href = "/sections";
      })
      .catch((error) => {
        console.error(error);
      });
    }
    return (
      <div className='EventAddForm-container'>
        <div className="EventAddForm-title">
          <h2>EDIT EVENT</h2>
        </div>
        <div className="EventAddForm-input">
          <label htmlFor="event_name">Name</label>
          <input name="event_name" type="text" className="inputEvent-name" onChange={handleChange} value={eventDetails.event_name}></input>
        </div>
        <div className="EventAddForm-input">
          <label htmlFor="event_venue">Venue</label>
          <input name="event_venue" type="text" className="inputEvent-venue" onChange={handleChange} value={eventDetails.event_venue}></input>
        </div>
        <div className="EventAddForm-input">
          <label htmlFor="event_date">Date</label>
          <input name="event_date" type="date" className="inputEvent-date" onChange={handleChange} value={eventDetails.event_date}></input>
        </div>
        <div className="EventAddForm-input">
          <label htmlFor="event_client_name">Client Name</label>
          <input name="event_client_name" type="text" className="inputEvent-clientName" onChange={handleChange} value={eventDetails.event_client_name}></input>
        </div>
        <div className="EventAddForm-input">
          <label htmlFor="event_client_phone">Client Phone No.</label>
          <input name="event_client_phone" type="text" className="inputEvent-clientPhone" onChange={handleChange} value={eventDetails.event_client_phone}></input>
        </div>
        <div className="EventAddForm-input">
          <label htmlFor="event_client_address">Client Address</label>
          <textarea name='event_client_address' className='inputEvent-clientAdd' onChange={handleChange} value={eventDetails.event_client_address}></textarea>
        </div>
        <div className="EventAddForm-addBtn-container">
          <div className="EventAddForm-addBtn" onClick={handleSubmit}>Update Event</div>
        </div>
      </div>
    )
}

export default EventEditForm
