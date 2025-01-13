/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React,{useState} from "react";
import "./AddGuestForm.css";
import axios from "axios";
import { useCookies } from "react-cookie";

function AddGuestForm({onClose}) {
  const [cookies] = useCookies(["event_id"]);
  const[guestForm,setGuestForm] = useState({event_id:cookies.event_id});
  

  const handleChanges = (e) => {
    setGuestForm({
      ...guestForm,
      [e.target.name]: e.target.value, });
  };

  const onSubmit=()=>{
    console.log(guestForm);
    axios.post('http://localhost:8000/guests/create/',guestForm)
      .then((response)=>{
        console.log("Guest added");
        onClose();
      }).catch((error)=>{
        console.error(error);
      })
  };
  return (
    <div className="AddGuestForm-sector">
      <div className="AddGuestForm-title">
        <h2>GUEST</h2>
      </div>
      <div className="AddGuestForm-input">
        <label htmlFor="guest_name">Full Name</label>
        <input name="guest_name" type="text" className="input-name" onChange={handleChanges}></input>
      </div>
      <div className="AddGuestForm-input">
        <label htmlFor="guest_address">Address</label>
        <input
          name="guest_address"
          type="text"
          className="input-address"
          onChange={handleChanges}
        ></input>
      </div>
      <div className="AddGuestForm-input">
        <label htmlFor="guest_email">Email</label>
        <input name="guest_email" type="text" className="input-email" onChange={handleChanges}></input>
      </div>
      <div className="AddGuestForm-input">
        <label htmlFor="guest_phone">Contact Number</label>
        <input name="guest_phone" type="text" className="input-phone" onChange={handleChanges}></input>
        <label htmlFor="guest_gender">Gender</label>
        <select name="guest_gender" id="guest_gender" className="input-gender" onChange={handleChanges}>
          <option value="" disabled selected>Not Selected</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <div className="AddGuestForm-input">
        <label htmlFor="guest_rsvp">RSVP status</label>
        <select name="guest_rsvp" id="guest_rsvp" className="input-rsvp" onChange={handleChanges}>
          <option value="" disabled selected>Not Selected</option>
          <option value="Comming">Comming</option>
          <option value="Not Comming">Not Comming</option>
        </select>
      </div>
      <div className="AddGuestForm-addBtn-container">
        <div className="AddGuestForm-addBtn" onClick={onSubmit}>Add Guest</div>
      </div>
    </div>
  );
}

export default AddGuestForm;
