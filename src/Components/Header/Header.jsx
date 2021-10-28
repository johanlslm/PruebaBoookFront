import React from "react";
import './Header.scss'

const Header = () => {
    return (
        <header className="header">
            <div className="title">
                <h1>My Lorem</h1>
            </div>
            <nav className="menu">
                <a href="." className="active">Welcome</a>
                <a href=".">Dropdown</a>
                <a href=".">Left Sidebar</a>
                <a href=".">Right Sidebar</a>
                <a href=".">No Sidebar</a>
            </nav>
        </header>
    )
}

export default Header;