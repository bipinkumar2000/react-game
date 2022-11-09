import React from 'react';
import Classes from  './Card.module.css';

const Card = (props) => {
//    const classes = 'Classes.card' + props.className;
    return (
        <div className={Classes.card}>
            {props.children}
        </div>
    );
};

export default Card;
