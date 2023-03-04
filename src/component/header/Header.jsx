import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <h1><FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon> Dedicated-Club</h1>
            <h2>Select today's exercise</h2>
        </div>
    );
};

export default Header;