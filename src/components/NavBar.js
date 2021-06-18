import React from 'react'
import Logo from '../assest/logo.png'
import classes from './NavBar.module.css'

const NavBar = () => {
    return (<nav className={classes.NavB}>
        <img src={Logo} alt='KMB Logo' />
        <ul className={classes.List}>
            <li>主頁</li>
            <li>九巴網頁連結</li>
            <li>主頁</li>
        </ul>
    </nav>
    )
}

export default NavBar