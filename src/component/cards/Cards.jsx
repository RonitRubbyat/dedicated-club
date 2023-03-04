import React from 'react';
import './Cards.css';

const Cards = ({ cards }) => {
    // console.log(cards);
    const { name, age, img, time, about } = cards
    return (
        <div className='card-container'>
            <div className='img-container'>
                <img  className="img" src={img} alt="" />
            </div>
            <div className="card-info">
                <h3>{name}</h3>
                <h5>{about}</h5>
                <h4>For Age: {age}</h4>
                <h4>Time Required: {time}s</h4>
            </div>
            <button className='card-btn'>Add to list</button>
        </div>
    );
};

export default Cards;