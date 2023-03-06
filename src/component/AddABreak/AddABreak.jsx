import React from 'react';
import './AddToBreak.css';

const AddABreak = ({breakTime}) => {
    return (
        <div>
            <h2>Add A break</h2>
            <div className='break-btn'>
                <button onClick={()=>breakTime(10)}>10s</button>
                <button onClick={()=>breakTime(20)}>20s</button>
                <button onClick={()=>breakTime(30)}>30s</button>
                <button onClick={()=>breakTime(40)}>40s</button>
                <button onClick={()=>breakTime(50)}>50s</button>
            </div>
        </div>
    );
};

export default AddABreak;