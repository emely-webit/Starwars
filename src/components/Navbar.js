import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <div>
                <ul>
                    <li>
                        <NavLink to="/">Films</NavLink>
                    </li>
                    <li>
                        <NavLink to="/people">People</NavLink>
                    </li>
                    <li>
                        <NavLink to="/planets">Planets</NavLink>
                    </li>
                    <li>
                        <NavLink to="/species">Species</NavLink>
                    </li>
                    <li>
                        <NavLink to="/starships">Starships</NavLink>
                    </li>
                    <li>
                        <NavLink to="/vehicles">Vehicles</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
