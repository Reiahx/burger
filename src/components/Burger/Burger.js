import React from 'react';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';
import classes from './Burger.css';

const burger = props => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            // console.log(props.ingredients);
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredients key={igKey + i} type={igKey} />;
            });
        })
        .reduce((array, element) => {
            return array.concat(element);
        }, []);

        if(transformedIngredients.length === 0){
            transformedIngredients = <p>Please start adding ingredients!</p>;
        }

    console.log(transformedIngredients);
    return(
        <div className={classes.Burger}>
            <BurgerIngredients type="bread-top" />
            {transformedIngredients}
            <BurgerIngredients type="bread-bottom" />
        </div>
    );
};

export default burger;