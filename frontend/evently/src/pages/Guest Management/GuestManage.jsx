/* eslint-disable no-unused-vars */
import React from 'react'
import "./GuestManage.css"
import { FaSearch } from 'react-icons/fa';
import { IoIosMailOpen } from "react-icons/io";
import { FaPersonCirclePlus } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";

function GuestManage() {
  return (
    <div className='guestManage-container'>
        <div className="guestManage-firstRow">
            <div className="gestManage-seachBar-sector">
                <FaSearch />
                <input type='text' placeholder='Search for a Guest'/>
            </div>
            <div className="guestManage-firstRow-buttons">
                <div className="firstRow-button firstRow-inviteBtn">
                    <IoIosMailOpen/>
                    <p>invite</p>
                </div>
                <div className="firstRow-button firstRow-addBtn">
                    <FaPersonCirclePlus/>
                    <p>Add a guest</p>
                </div>
            </div>
        </div>
        <div className="guestManage-table-container">
            <table >
                <tr>
                    <th>Full Name</th>
                    <th>Address</th>
                    <th>Email</th>
                    <th>Contact Number</th>
                    <th>RSVP status</th>
                    <th>Actions</th>
                </tr>
                <tr>
                    <td>Thinuja Hettiarachchi</td>
                    <td>Jonee Cresent,Beralaliya</td>
                    <td>thinujahettiarachchi@gmail.com</td>
                    <td>0713126607</td>
                    <td>comming</td>
                    <td><a href='#'>Edit</a> <a href='#'>Delete</a></td>
                </tr>
                <tr>
                    <td>Tiran Hettiarachchi</td>
                    <td>Jonee Cresent,Beralaliya</td>
                    <td>tiran@gmail.com</td>
                    <td>0712427978</td>
                    <td>comming</td>
                    <td><a href='#'>Edit</a> <a href='#'>Delete</a></td>
                </tr>
            </table>
        </div>
        <div className="guestManage-lastRow">
            <div className="lastRow-button">
                <IoIosSend/>
                <p>Send a Mail</p>
            </div>
        </div>
    </div>
  )
}

export default GuestManage
