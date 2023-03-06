import React, { useEffect, useState } from 'react';
import './Cart.css';
import AddABreak from '../AddABreak/AddABreak';
import Exercise from '../Exercise/Exercise';
import UserInfo from '../user-info/UserInfo';
import { addToStorage, getFromStorage } from '../../utilities/fakebd';

const Cart = ({ exTime }) => {
    const [breakT, setBreakT] = useState(0);

    const [newBr , setNewBr] = useState(0);
    useEffect(()=>{
        const getBrTime = getFromStorage();
        setNewBr(getBrTime.break);
    },[breakT])
    console.log(newBr);

    const breakTime = brTime => {
        setBreakT(brTime);
        addToStorage(brTime);
    }
    return (
        <div className='cart-container'>
            <UserInfo></UserInfo>
            <AddABreak
                breakTime={breakTime}
            ></AddABreak>
            <Exercise
                exTime={exTime}
                brTime={newBr}
            ></Exercise>
        </div>
    );
};

export default Cart;