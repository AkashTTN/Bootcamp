import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {

    let transIngredients = Object.keys(props.ingredients)
        .map(iKey => {
            return [...Array(props.ingredients[iKey])].map((_, i) => {
                return <BurgerIngredient key={iKey + i} type={iKey} />;
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el);
        }, []);

    if(transIngredients.length === 0) {
        transIngredients = <p>Start adding ingredients</p>;
    }
    
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"></BurgerIngredient>
            { transIngredients }
            <BurgerIngredient type="bread-bottom"></BurgerIngredient>
        </div>
    );
}

export default burger;