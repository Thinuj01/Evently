/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React,{useState} from "react";
import "./InviteForm.css";
import { IoIosSend } from "react-icons/io";
import axios from "axios";

function InviteForm({onClose}) {
  const [invitation, setInvitation] = useState({
    guest_email:"",
    guest_subject:"Dear Mr. Enter Guest Name",
    guest_message:"You are invited to the event",	 
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChanges = (e) => {
    setInvitation({
      ...invitation,
      [e.target.name]: e.target.value, });
  };

  const handleOnClick = () => {
    setIsLoading(true);
    console.log(invitation);
    axios.post('http://localhost:8000/guests/invite/',invitation)
    .then((response) => {
      console.log("Invitation sent",response.data);
      setIsLoading(false);
      onClose();
    }).catch((error) => { 
      console.error(error);
    });
  };

  return (
    <div className="inviteForm-sector">
      <div className="inputForm-title">
        <h2>INVITATION</h2>
      </div>
      <div className="inviteForm-input">
        <label htmlFor="guest_email">To</label>
        <input name="guest_email" type="text" className="input-To" onChange={handleChanges} value={invitation.guest_email}></input>
      </div>
      <div className="inviteForm-input">
        <label htmlFor="guest_subject">Subject</label>
        <input
          name="guest_subject"
          type="text"
          className="input-subject"
          onChange={handleChanges}
          value={invitation.guest_subject}
        ></input>
      </div>
      <div className="inviteForm-input">
        <label htmlFor="guest_message">Message</label>
        <input
          name="guest_message"
          type="text"
          className="input-message"
          onChange={handleChanges}
          value={invitation.guest_message}
        ></input>
      </div>
      <div className="inputForm-sendBtn-container">


        {isLoading ? (
        <div className="inputForm-sendBtn" onClick={()=>handleOnClick()}>
        <IoIosSend />
        Sending...
      </div>
        ) : (
          <div className="inputForm-sendBtn" onClick={()=>handleOnClick()}>
          <IoIosSend />
          Send
        </div>
        )}
      </div>
    </div>
  );
}

export default InviteForm;
