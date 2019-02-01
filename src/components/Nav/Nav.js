import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
            <Link to='/' ><p>Page One</p></Link>
            <Link to='/pagetwo/5' ><p>Page Two</p></Link>
            <Link to='/pagethree' ><p>Page Three</p></Link>
        </nav>
    )
}
export default Nav