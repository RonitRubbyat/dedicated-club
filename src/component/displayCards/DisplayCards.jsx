import React, { useEffect, useState } from 'react';
import Cards from '../cards/Cards';
import Cart from '../cart/Cart';
import './DisplayCards.css';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DisplayCards = () => {
    const [cardData, setCardData] = useState([]);

    useEffect(() => {
        fetch(`data.json`)
            .then(res => res.json())
            .then(data => setCardData(data))
    }, []);
    // console.log(cardData);
    // let times = 0;
    const [times, setTimes] = useState(0);
    const exerciseTime = time => {
        setTimes(times + time);
        console.log(times, time);
    }

    return (
        <div className='container'>
            <div className="cards-container">
                <div className='header'>
                    <h1><FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon> Dedicated-Club</h1>
                    <h2>Select today's exercise</h2>
                </div>
                {
                    cardData.map(data => <Cards
                        key={data.id}
                        cards={data}
                        exerciseTime={exerciseTime}
                    ></Cards>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    exTime={times}
                ></Cart>
            </div>
        </div>
    );
};

export default DisplayCards;