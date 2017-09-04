import React from 'react';
import './Header.scss';

const Header = ({user, signOut}) => {
    return (
        <div className="site-header">
            <div className="user-info">
                Hello, <strong>{user}</strong>
            </div>
            <div className="controls">
                <a href="#" onClick={signOut}>Signout</a>
            </div>
        </div>
    )
};

export default Header;