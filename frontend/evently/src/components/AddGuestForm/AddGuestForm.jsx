/* eslint-disable no-unused-vars */
import React from "react";
import "./AddGuestForm.css";

function AddGuestForm() {
  return (
    <div className="AddGuestForm-sector">
      <div className="AddGuestForm-title">
        <h2>GUEST</h2>
      </div>
      <div className="AddGuestForm-input">
        <label htmlFor="input-name">Full Name</label>
        <input name="input-name" type="text" className="input-name"></input>
      </div>
      <div className="AddGuestForm-input">
        <label htmlFor="input-address">Address</label>
        <input
          name="input-address"
          type="text"
          className="input-address"
        ></input>
      </div>
      <div className="AddGuestForm-input">
        <label htmlFor="input-email">Email</label>
        <input name="input-email" type="text" className="input-email"></input>
      </div>
      <div className="AddGuestForm-input">
        <label htmlFor="input-phone">Contact Number</label>
        <input name="input-phone" type="text" className="input-phone"></input>
        <label htmlFor="input-gender">Gender</label>
        <select name="input-gender" id="input-gender" className="input-gender">
          <option value="" disabled selected>Not Selected</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <div className="AddGuestForm-input">
        <label htmlFor="input-rsvp">RSVP status</label>
        <input name="input-rsvp" type="text" className="input-rsvp"></input>
      </div>
      <div className="AddGuestForm-addBtn-container">
        <div className="AddGuestForm-addBtn">Add Guest</div>
      </div>
    </div>
  );
}

export default AddGuestForm;
