/* eslint-disable no-unused-vars */
import React from "react";
import "./InviteForm.css";
import { IoIosSend } from "react-icons/io";

function InviteForm() {
  return (
    <div className="inviteForm-sector">
      <div className="inputForm-title">
        <h2>INVITATION</h2>
      </div>
      <div className="inviteForm-input">
        <label htmlFor="input-To">To</label>
        <input name="input-To" type="text" className="input-To"></input>
      </div>
      <div className="inviteForm-input">
        <label htmlFor="input-subject">Subject</label>
        <input
          name="input-subject"
          type="text"
          className="input-subject"
        ></input>
      </div>
      <div className="inviteForm-input">
        <label htmlFor="input-message">Message</label>
        <input
          name="input-message"
          type="text"
          className="input-message"
        ></input>
      </div>
      <div className="inputForm-sendBtn-container">
        <div className="inputForm-sendBtn">
          <IoIosSend />
          Send
        </div>
      </div>
    </div>
  );
}

export default InviteForm;
