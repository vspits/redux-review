import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'

const Nav = () => {
    return (
        <nav>
            <Link to="/">Page One</Link>
            <Link to="/pagetwo">Page Two</Link>
            <Link to="/pagethree">Page Three</Link>
        </nav>
    )
}
export default Nav