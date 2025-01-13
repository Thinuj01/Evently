/* eslint-disable no-unused-vars */
import React, { useState,useEffect } from 'react'
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
import { use } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

// eslint-disable-next-line react/prop-types
function GuestManage({handleChangeActiveItem}) {
    const[isInviteModelOpen, setIsInviteModelOpen] = useState(false);
    const [filteredGuests, setFilteredGuests] = useState([]);
    const[isAddGuestModelOpen, setIsAddGuestModelOpen] = useState(false);
    const[isSendMailModelOpen, setIsSendMailModelOpen] = useState(false);
    const[isEditGuestModelOpen, setIsEditGuestModelOpen] = useState(false);
    const[editGuest,setEditGuest] = useState({});
    const[guests,setGuests] = useState([]);
    const[cookies] = useCookies(['event_id']);
    const[useEffectRunner,setUseEffectRunner] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:8000/guests/event/${cookies.event_id}/`)
        .then((response) => {
            setGuests(response.data);
            setFilteredGuests(response.data);
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }, [isAddGuestModelOpen,isEditGuestModelOpen,useEffectRunner]);

    const handleGuestEditClick = (guest_id) => {
        axios.get(`http://localhost:8000/guests/${guest_id}/`)
        .then((response) => {
            console.log(response.data);
            setEditGuest(response.data);
            setIsEditGuestModelOpen(true);
        })
        .catch((error) => {
            console.log(error);
        });
    };

    const handleGuestDeleteClick = (guest_id) => {
        if (window.confirm("Are you sure you want to delete this guest?")) {
          axios.delete(`http://localhost:8000/guests/delete/${guest_id}/`)
            .then((response) => {
              console.log("Guest deleted");
              setUseEffectRunner(!useEffectRunner);
            })
            .catch((error) => {
              console.log(error);
            });
        }
      };

      const handleSearchChange = (e) => {
        const searchValue = e.target.value.toLowerCase();
        const filtered = guests.filter((guest) =>
          guest.guest_name.toLowerCase().includes(searchValue)
        );
        setFilteredGuests(filtered);
      };
  return (
    <div className='guestManage-container'>
        <div className="guestManage-firstRow">
            <div className="gestManage-seachBar-sector">
                <FaSearch />
                <input type='text' placeholder='Search for a Guest' onChange={handleSearchChange}/>
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
        {guests.length === 0 ? (
                      <table>
                      <thead>
                        <tr>
                          <td>No Guests found.</td>
                        </tr>
                      </thead>
                    </table>
        ):(
            <table >

                
            <tr>
                <th>Full Name</th>
                <th>Address</th>
                <th>Email</th>
                <th>Contact Number</th>
                <th>RSVP status</th>
                <th>Actions</th>
            </tr>
            {filteredGuests.map((guest) => (
                        <tr key={guest.guest_id}>
                            <td>{guest.guest_name}</td>
                            <td>{guest.guest_address}</td>
                            <td>{guest.guest_email}</td>
                            <td>{guest.guest_phone}</td>
                            <td>{guest.guest_rsvp === true ? ("Comming"):("Not Comming")}</td>
                            <td><a href="#"  onClick={()=>handleGuestEditClick(guest.guest_id)} className='guestManageEdit'><FaRegEdit/></a> <a href='#' className='guestManageDelete' onClick={()=>handleGuestDeleteClick(guest.guest_id)}><MdDeleteOutline/></a></td>
                        </tr>
            ))}
        </table> 
        )}

        </div>
        <div className="guestManage-lastRow">
            <div className="lastRow-button" onClick={()=>setIsSendMailModelOpen(true)}>
                <IoIosSend/>
                <p>Send a Mail</p>
            </div>
        </div>

        <Model isOpen={isInviteModelOpen} onClose={()=> setIsInviteModelOpen(false)} >
            <div className="inviteForm-container">
                <InviteForm onClose={()=> setIsInviteModelOpen(false)}/>           
            </div>
        </Model>
        <Model isOpen={isAddGuestModelOpen} onClose={()=> setIsAddGuestModelOpen(false)} >
            <div className="inviteForm-container">
                <AddGuestForm onClose={()=> setIsAddGuestModelOpen(false)}/>          
            </div>
        </Model>
        <Model isOpen={isSendMailModelOpen} onClose={()=> setIsSendMailModelOpen(false)} >
            <div className="inviteForm-container">
                <SendMailForm onClose={()=> setIsSendMailModelOpen(false)}/>     
            </div>
        </Model>
        <Model isOpen={isEditGuestModelOpen} onClose={()=> setIsEditGuestModelOpen(false)} >
            <div className="inviteForm-container">
                <EditGuestForm editGuest={editGuest} onClose={()=> setIsEditGuestModelOpen(false)}/>  
            </div>
        </Model>
    </div>
  )
}

export default GuestManage
