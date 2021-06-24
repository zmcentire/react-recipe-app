import React from 'react';
import './Recipe.css'

const Recipe = ({title, image, dietLabel, calories, ingredients}) => {
    let i=0;
    return(
        <div className="recipe">
            <h1>{title}</h1>
            <h3>{dietLabel}</h3>
            <p>{Math.round(calories)} cal</p>
            <img src={image} alt="" />

            <ol>
                {ingredients.map(ingredient =>(
                    <li key={i++}>
                        {ingredient.text}
                    </li>
                ))}
            </ol>
        </div>
    )
}

export default Recipe