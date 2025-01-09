/* eslint-disable no-unused-vars */
import React from 'react'
import './UserEvents.css'
import { IoIosAddCircle } from "react-icons/io";

function UserEvents() {
  return (
    <div className='UserEvent-container'>
      <div className="UserEvent-Topic">
        <h2>My Events</h2>
      </div>
      <div className="UserEvent-AddEventBtn-container">
        <div className="UserEvent-AddEventBtn">
            <IoIosAddCircle />
            <p>Add A Event</p>
        </div>
      </div>
      <div className="UserEvent-table">
        <table>
            <tr>
                <td>Event 01</td>
            </tr>
            <tr>
                <td>Event 02</td>
            </tr>
            <tr>
                <td>Event 03</td>
            </tr>
        </table>
      </div>
    </div>
  )
}

export default UserEvents
