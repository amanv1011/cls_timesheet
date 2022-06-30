import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { setSidebarDeactive, setSidebarActive } from "../../../redux/actions/sidebarCollapsActions"
import DownArrow from '../../../assets/navbarLogoAndIcons/downArrow';
import NavbarLogo from '../../../assets/navbarLogoAndIcons/navbarlogo';
import SidebarToggleIcon from '../../../assets/navbarLogoAndIcons/sidebarToggleIcon';
import { removeCookie } from '../../../actions/user';
import Userprofile from '../../../assets/navbarLogoAndIcons/UserprofileLogo';
import LogoutIcon from '../../../assets/navbarLogoAndIcons/LogoutIcon';
import { ClickAwayListener, Box } from '@mui/material';

import './navbar.css'


const Navbar = () => {

    const getName = useSelector((state) => state.user.userDetails.name)
    const getImage = useSelector((state) => state.user.userDetails.image)

    const dispatch = useDispatch()
    const sidebarCollaps = useSelector((state) => state.sidebarCollaps.isSidebarCollaps)
    const [openmenu, setOpenMenu] = useState(false);


    const logout = () => {
        removeCookie("token")
        localStorage.clear();
        window.location.reload(true);
    }


    const showmenu = () => {
        setOpenMenu(!openmenu)

    }

    const handleClickAway = () => {
        setOpenMenu(false);
    };


    const toggleSidebar = () => {
        if (sidebarCollaps === false) {
            dispatch(setSidebarActive())
        } else {
            dispatch(setSidebarDeactive())
        }
    }

    return (
        <>
            <div className="navbar-container">
                <div>
                    <span style={{ cursor: "pointer" }} onClick={toggleSidebar}><SidebarToggleIcon /></span>
                    <NavbarLogo />
                </div>
                <div className="navbar-user-profile-name-container">
                    <div>
                        <img className="navbar-user-profile" src={getImage} alt="user-image" />

                    </div>
                    <ClickAwayListener onClickAway={handleClickAway}>
                        <Box>
                            <div onClick={showmenu} className="navbar-user-name"> <span >{getName} <DownArrow /></span>  </div>
                            <div style={openmenu === true ? { display: "block" } : { display: "none" }} className='custom-dropdown'>
                                <div className='menu-profile' > <Userprofile /><span style={{ marginLeft: "4px" }}> {getName} </span>  </div>
                                <div onClick={logout} className='menu-logout' ><LogoutIcon /><span>  Log Out </span> </div>

                            </div>
                        </Box>
                    </ClickAwayListener>
                </div>
            </div>
        </>
    );
}

export default Navbar;