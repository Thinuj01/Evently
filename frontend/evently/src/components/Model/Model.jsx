/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import "./Model.css"
import { IoMdCloseCircle } from "react-icons/io";

function Model({isOpen,onClose,children}) {
    if(!isOpen) return null;
  return (
    <div className='modal-overlay'>
      <div className="modal-content">
        <button className='modal-close' onClick={onClose}>
            <IoMdCloseCircle/>
            Close
        </button>
        <div className="">
            {children}
        </div>
      </div>
    </div>
  )
}

export default Model
