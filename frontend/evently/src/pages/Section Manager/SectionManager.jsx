/* eslint-disable no-unused-vars */
import React,{useState} from 'react'
import "./SectionManager.css"
import SectionNavbar from '../../components/SectionNavbar/SectionNavbar'
import GuestManage from '../Guest Management/GuestManage';

function SectionManager() {
    const[activeItem,setActiveItem] = useState("Guest Management");

    const handleChangeActiveItem = (ItemName) =>{
      setActiveItem(ItemName);
    }

    const renderSector = ()=>{
      switch(activeItem)  {
        case "Guest Management":
          return <GuestManage/>;
          
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
