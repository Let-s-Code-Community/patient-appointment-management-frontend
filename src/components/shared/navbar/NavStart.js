import React from 'react';
import { Link } from 'react-router-dom';

const NavStart = () => {
    return (
        <div className="navbar-start">
            <Link to='/' className="btn btn-ghost normal-case text-xl">Logo</Link>
        </div>
    );
};

export default NavStart;