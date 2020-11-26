import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import * as AiIcons from "react-icons/ai";
import './Navbar.css';
import {IconContext} from 'react-icons'

function Navbar() {
    return (
        <>
        <IconContext.Provider value={{color: "#fff"}}>
            <div className="navbar">
                <Link to="/" className='menu-bars'>
                    <AiIcons.AiFillHome /> 
                </Link>
            </div>
            </IconContext.Provider>
        </>
    )
}

export default Navbar


/* TODO: If I ever want a navbar again
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bars">
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return(
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>  
                        )})
                    }
                </ul>
            </nav>
*/