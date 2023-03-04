import React from 'react';
import AddABreak from '../AddABreak/AddABreak';
import Exercise from '../Exercise/Exercise';
import UserInfo from '../user-info/UserInfo';

const Cart = () => {
    return (
        <div>
            <UserInfo></UserInfo>
            <AddABreak></AddABreak>
            <Exercise></Exercise>
        </div>
    );
};

export default Cart;