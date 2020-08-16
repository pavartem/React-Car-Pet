import React from 'react';

const NavBar = ({theme}) => {
    return (
        <nav className={`navbar navbar-${theme} bg-${theme}`}>
            <div className="navbar-brand">
                Redux Hooks
            </div>
        </nav>
    );
};

export default NavBar;
