import React from 'react';
import Card from '../card/card.component';

import './cards-list.style.css';

const CardList = (props) => {
    const {monsters} = props;

    return (
        <div className="card-list">
            {  
                monsters.map((monster, index) => (
                    <Card key={index} monster={monster}></Card>
                ))
            }
        </div>
    );
};

export default CardList;