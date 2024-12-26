/* eslint-disable no-unused-vars */
import React from 'react'
import "./SendMailForm.css"
import { IoIosSend } from "react-icons/io";

function SendMailForm() {
  return (
    <div className="sendMailForm-sector">
      <div className="sendMailForm-title">
        <h2>SEND MAIL</h2>
      </div>
      <div className="sendMailForm-input">
        <label htmlFor="input-To">To</label>
        <input name="input-To" type="text" className="input-To"></input>
      </div>
      <div className="sendMailForm-input">
        <label htmlFor="input-subject">Subject</label>
        <input
          name="input-subject"
          type="text"
          className="input-subject"
        ></input>
      </div>
      <div className="sendMailForm-input">
        <label htmlFor="input-message">Message</label>
        <input
          name="input-message"
          type="text"
          className="input-message"
        ></input>
      </div>
      <div className="sendMailForm-sendBtn-container">
        <div className="sendMailForm-sendBtn">
          <IoIosSend />
          Send
        </div>
      </div>
    </div>
  )
}

export default SendMailForm
