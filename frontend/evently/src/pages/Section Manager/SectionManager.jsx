/* eslint-disable no-unused-vars */
import React,{useState} from 'react'
import "./SectionManager.css"
import SectionNavbar from '../../components/SectionNavbar/SectionNavbar'
import GuestManage from '../Guest Management/GuestManage';
import TaskManage from '../Task Management/TaskManage';
import UserEvents from '../User Events/UserEvents';
import BudgetManage from '../Budget Management/BudgetManage';

function SectionManager() {
    const[activeItem,setActiveItem] = useState("User Events");
    const[activeEvent, setActiveEvent] = useState("");

    const handleChangeActiveItem = (ItemName) =>{
      setActiveItem(ItemName);
    }

    const renderSector = ()=>{
      switch(activeItem)  {
        case "Guest Management":
          return <GuestManage handleChangeActiveItem={handleChangeActiveItem}/>;
        case "Task Management":
          return <TaskManage />;
        case "Budget Management":
          return <BudgetManage/>;
        case "User Events":
          return <UserEvents handleChangeActiveItem={handleChangeActiveItem}/>;
          
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
