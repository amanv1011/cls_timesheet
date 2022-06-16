import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {setSidebarDeactive, setSidebarActive} from "../../../redux/actions/sidebarCollapsActions"
import DownArrow from '../../../assets/navbarLogoAndIcons/downArrow';
import NavbarLogo from '../../../assets/navbarLogoAndIcons/navbarlogo';
import SidebarToggleIcon from '../../../assets/navbarLogoAndIcons/sidebarToggleIcon';
import './navbar.css'
const Navbar = () => {
    const dispatch = useDispatch()
    const sidebarCollaps = useSelector((state) => state.sidebarCollaps.isSidebarCollaps)
    
    const toggleSidebar = () => {
        
        if(sidebarCollaps === false){
            dispatch(setSidebarActive())
        }else{
            dispatch(setSidebarDeactive())
        }
    }

    return(
        <>
        <div className="navbar-container">
            <div>
                <span style={{cursor: "pointer" }} onClick={toggleSidebar}><SidebarToggleIcon /></span>
                
                <NavbarLogo />
            </div>
            <div className="navbar-user-profile-name-container">
                <div className="navbar-user-profile">

                </div>
                <div className="navbar-user-name">
                    Sahil Sondawale
                </div>
                <div>
                    <DownArrow/>
                </div>
            </div>
        </div>
        </>
    );
}

export default Navbar