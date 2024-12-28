/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import "./GuestManage.css"
import { FaSearch } from 'react-icons/fa';
import { IoIosMailOpen } from "react-icons/io";
import { FaPersonCirclePlus } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import Model from '../../components/Model/Model';
import InviteForm from '../../components/InviteForm/InviteForm';
import AddGuestForm from '../../components/AddGuestForm/AddGuestForm';
import SendMailForm from '../../components/SendMailForm/SendMailForm';
import EditGuestForm from '../../components/EditGuestForm/EditGuestForm';

function GuestManage() {
    const[isInviteModelOpen, setIsInviteModelOpen] = useState(false);
    const[isAddGuestModelOpen, setIsAddGuestModelOpen] = useState(false);
    const[isSendMailModelOpen, setIsSendMailModelOpen] = useState(false);
    const[isEditGuestModelOpen, setIsEditGuestModelOpen] = useState(false);
  return (
    <div className='guestManage-container'>
        <div className="guestManage-firstRow">
            <div className="gestManage-seachBar-sector">
                <FaSearch />
                <input type='text' placeholder='Search for a Guest'/>
            </div>
            <div className="guestManage-firstRow-buttons">
                <div className="firstRow-button firstRow-inviteBtn" onClick={()=>setIsInviteModelOpen(true)}>
                    <IoIosMailOpen/>
                    <p>invite</p>
                </div>
                <div className="firstRow-button firstRow-addBtn" onClick={()=>setIsAddGuestModelOpen(true)}>
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
                    <td><a href="#"  onClick={()=>setIsEditGuestModelOpen(true)}>Edit</a> <a href='#'>Delete</a></td>
                </tr>
                <tr>
                    <td>Tiran Hettiarachchi</td>
                    <td>Jonee Cresent,Beralaliya</td>
                    <td>tiran@gmail.com</td>
                    <td>0712427978</td>
                    <td>comming</td>
                    <td><a href="#"  onClick={()=>setIsEditGuestModelOpen(true)}>Edit</a> <a href='#'>Delete</a></td>
                </tr>
            </table>
        </div>
        <div className="guestManage-lastRow">
            <div className="lastRow-button" onClick={()=>setIsSendMailModelOpen(true)}>
                <IoIosSend/>
                <p>Send a Mail</p>
            </div>
        </div>

        <Model isOpen={isInviteModelOpen} onClose={()=> setIsInviteModelOpen(false)} >
            <div className="inviteForm-container">
                <InviteForm/>           
            </div>
        </Model>
        <Model isOpen={isAddGuestModelOpen} onClose={()=> setIsAddGuestModelOpen(false)} >
            <div className="inviteForm-container">
                <AddGuestForm/>          
            </div>
        </Model>
        <Model isOpen={isSendMailModelOpen} onClose={()=> setIsSendMailModelOpen(false)} >
            <div className="inviteForm-container">
                <SendMailForm/>     
            </div>
        </Model>
        <Model isOpen={isEditGuestModelOpen} onClose={()=> setIsEditGuestModelOpen(false)} >
            <div className="inviteForm-container">
                <EditGuestForm/>  
            </div>
        </Model>
    </div>
  )
}

export default GuestManage
