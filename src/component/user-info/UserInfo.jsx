import { faLocation, faMapLocation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './UserInfo.css'

const UserInfo = () => {
    return (
        <div>
            <div className="userProfile">
                <img src="" alt="" />
                <div>
                    <h1>Ronit Rubbyat</h1>
                    <h3 className='gray-color'><FontAwesomeIcon icon={faMapLocation}></FontAwesomeIcon> Dhaka, Bangladesh</h3>
                </div>
                <div className="userHealth">
                    <div>
                        <h2>51<sub className='gray-color'>kg</sub></h2>
                        <h3 className='gray-color'>Weight</h3>
                    </div>
                    <div>
                        <h2>6.5<sub className='gray-color'></sub></h2>
                        <h3 className='gray-color'>Height</h3>
                    </div>
                    <div>
                        <h2>25<sub className='gray-color'>yrs</sub></h2>
                        <h3 className="gray-color">Age</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserInfo;