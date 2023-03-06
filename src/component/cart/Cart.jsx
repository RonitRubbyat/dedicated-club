import React, { useState } from 'react';
import './Cart.css';
import AddABreak from '../AddABreak/AddABreak';
import Exercise from '../Exercise/Exercise';
import UserInfo from '../user-info/UserInfo';

const Cart = ({ exTime }) => {
    const [breakT, setBreakT] = useState(0);

    const breakTime = brTime => {
        setBreakT(brTime);
    }
    return (
        <div className='cart-container'>
            <UserInfo></UserInfo>
            <AddABreak
                breakTime={breakTime}
            ></AddABreak>
            <Exercise
                exTime={exTime}
                brTime={breakT}
            ></Exercise>
        </div>
    );
};

export default Cart;