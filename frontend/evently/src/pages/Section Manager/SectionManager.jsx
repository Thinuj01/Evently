/* eslint-disable no-unused-vars */
import React,{useState} from 'react'
import "./SectionManager.css"
import SectionNavbar from '../../components/SectionNavbar/SectionNavbar'
import GuestManage from '../Guest Management/GuestManage';
import TaskManage from '../Task Management/TaskManage';
import UserEvents from '../User Events/UserEvents';

function SectionManager() {
    const[activeItem,setActiveItem] = useState("Task Management");
    const[activeEvent, setActiveEvent] = useState("");

    const handleChangeActiveItem = (ItemName) =>{
      setActiveItem(ItemName);
    }

    const renderSector = ()=>{
      switch(activeItem)  {
        case "Guest Management":
          return <GuestManage />;
        case "Task Management":
          return <TaskManage />;
        case "User Events":
          return <UserEvents/>;
          
      }
    }
  return (
    <div className='sectionManager-container'>
      <div className="section-Navbar-sector">
        <SectionNavbar activeItem={activeItem} handleChangeActiveItem={handleChangeActiveItem}/>
      </div>
      <div className='sectionManager-sectors'>
        {renderSector()}
      </div>
    </div>
  )
}

export default SectionManager
