import React, { useEffect, useState } from 'react';
import Cards from '../cards/Cards';
import Cart from '../cart/Cart';
import './DisplayCards.css'

const DisplayCards = () => {
    const [cardData, setCardData] = useState([]);

    useEffect(() => {
        fetch(`data.json`)
            .then(res => res.json())
            .then(data => setCardData(data))
    }, []);
    // console.log(cardData);
    return (
        <div className='container'>
            <div className="cards-container">
                {
                    cardData.map(data => <Cards
                        key={data.id}
                        cards={data}
                    ></Cards>)
                }
            </div>
            <div className="cart-container">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default DisplayCards;