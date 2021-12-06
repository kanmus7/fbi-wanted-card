import React from 'react'
import '../../styles/header/Header.css'
import fbiLogo from '../../resources/fbi-logo.png'

const Header = () => {
    return (
        <div className="header">
            <div className="header-fbi-container">
            <img src={fbiLogo} alt="fbi logo" className='fbi-logo'/>
            <a href="https://www.fbi.gov/" rel="noopener noreferrer" className="FBI-title" target="_blank">
                <span className="initials">FBI</span>
                <span className="fullname">Federal Bureau of Investigation</span>
            </a>
            </div>
        </div>
    )
}

export default Header
