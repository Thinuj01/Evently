/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React,{useEffect, useState} from 'react'
import "./EditGuestForm.css"
import axios from 'axios';

function EditGuestForm({editGuest,onClose}) {
  const[guestForm,setGuestForm] = useState(editGuest);
  const [rsvp, setRsvp] = useState(editGuest.guest_rsvp ? "Comming" : "Not Comming");

useEffect(() => {
  setGuestForm({
    ...guestForm,
    guest_rsvp: rsvp, });
},[rsvp]);

  const handleChanges = (e) => {
    setGuestForm({
      ...guestForm,
      [e.target.name]: e.target.value, });
  };

  const onSubmit=()=>{
    console.log(guestForm);
    axios.put(`http://localhost:8000/guests/edit/${guestForm.guest_id}/`,guestForm)
      .then((response)=>{
        console.log("Guest updated");
        onClose();
      }).catch((error)=>{
        console.error(error);
      })
  };
  return (
    <div className="EditGuestForm-sector">
      <div className="EditGuestForm-title">
        <h2>EDIT GUEST</h2>
      </div>
      <div className="EditGuestForm-input">
        <label htmlFor="guest_name">Full Name</label>
        <input name="guest_name" type="text" className="input-name" value={guestForm.guest_name} onChange={handleChanges}></input>
      </div>
      <div className="EditGuestForm-input">
        <label htmlFor="guest_address">Address</label>
        <input
          name="guest_address"
          type="text"
          className="input-address"
          value={guestForm.guest_address}
          onChange={handleChanges}
        ></input>
      </div>
      <div className="EditGuestForm-input">
        <label htmlFor="guest_email">Email</label>
        <input name="guest_email" type="text" className="input-email" value={guestForm.guest_email} onChange={handleChanges}></input>
      </div>
      <div className="EditGuestForm-input">
        <label htmlFor="guest_phone">Contact Number</label>
        <input name="guest_phone" type="text" className="input-phone" value={guestForm.guest_phone} onChange={handleChanges}></input>
        <label htmlFor="guest_gender">Gender</label>
        <select name="guest_gender" id="guest_gender" className="input-gender" value={guestForm.guest_gender} onChange={handleChanges}>
          <option value="" disabled>Not Selected</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>

      <div className="EditGuestForm-input">
        <label htmlFor="guest_rsvp">RSVP status</label>
        <select name="guest_rsvp" id="guest_rsvp" className="input-rsvp" value={guestForm.guest_rsvp} onChange={handleChanges}>
          <option value="" disabled selected>Not Selected</option>
          <option value="Comming">Comming</option>
          <option value="Not Comming">Not Comming</option>
        </select>
      </div>
      <div className="EditGuestForm-updateBtn-container">
        <div className="EditGuestForm-updateBtn" onClick={()=>onSubmit()}>Update Guest</div>
      </div>
    </div>
  )
}

export default EditGuestForm
