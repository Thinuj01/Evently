/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import './BudgetOverview.css'
import { useCookies } from "react-cookie";
import axios from "axios";


function BudgetOverview({total}) {
  const [cookies] = useCookies(["event_id"]);
  const [event,setEvent] = useState({});

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setEvent({
      ...event,
      [name]: name === 'event_budget' ? parseFloat(value) : value,
    });
  };

const onClickUpdate = () => {
  console.log(event);
  axios.put(`http://localhost:8000/events/edit/${cookies.event_id}/`,event)
    .then((response) => {
      console.log("Event Updated");
    })
    .catch((error) => {
      console.error(error);
    });
};

  useEffect(() => {
    axios.get(`http://localhost:8000/events/${cookies.event_id}/`)
      .then((response) => {
        console.log(response.data);
        setEvent(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [cookies.event_id]);


  return (
    <div className='BudgetOverview-container'>
        <div className="BudgetOverview-containerItem">
          <p>Estimated Budget <strong>: Rs </strong></p>
          <input type="number" value={event.event_budget} name='event_budget' onChange={handleChanges}></input>
          <strong><p>.00</p></strong>

          <div className="BudgetOverview-submitBtn" onClick={onClickUpdate}>
            Update
          </div>
        </div>
        <div className="BudgetOverview-containerItem">
          <p>Current Expenses : <strong>Rs {total}.00</strong></p>
        </div>
        <div className="BudgetOverview-containerItem">
          <p>Remaining Budget : <strong>Rs {event.event_budget-total}.00</strong></p>
        </div>
    </div>
  )
}

export default BudgetOverview
