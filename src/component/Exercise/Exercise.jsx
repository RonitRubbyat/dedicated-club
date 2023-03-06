// import React, { useState } from 'react';
import './Exercise.css'

const Exercise = ({exTime, brTime}) => {
    // const [data, setData] = useState(0);

    return (
        <div>
            <h2>Exercise Details</h2>
            <div className='time'>
                <h3>Exercise time</h3>
                <h3>{exTime} sec</h3>
            </div>
            <div className='time'>
                <h3>Break time</h3>
                <h3>{brTime} sec</h3>
            </div>
            <button className='complete-btn'>Activity Completed</button>
        </div>
    );
};

export default Exercise;