import React from 'react'
import { imgArr } from '../data/imagesArr';
import CardStyles from "./Card.module.css"

export const Card = ({id, brand, model, year, price, rating}) => {

    
    return (
        <div className={CardStyles.CardContainer}>
            <div className={CardStyles.imgDiv}>
                <img src={imgArr[(id % 9)]} alt="carImage" />
            </div>
            <div className={CardStyles.detailsDiv}>
                <div className={CardStyles.brand}>{brand}</div>
                <div className={CardStyles.modal}>{model}</div>
                <div className={CardStyles.year}>{year}</div>
            </div>
            <div className={CardStyles.costDiv}>
                <div className={CardStyles.rating}>{rating} ⭐ </div>
                <div className={CardStyles.price}>₹ {price}</div>
            </div>
        </div>
    )
}


// id == 1, 0
// id == 10, 9
// id == 11, 0