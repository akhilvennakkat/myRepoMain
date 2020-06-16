import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const PRICE_LIST = ({
    bacon: 1,
    salad: 2,
    meat: 3,
    cheese: 4
});
class BurgerBuilder extends Component {

    state = {
        ingredients: {
            cheese: 0,
            meat: 0,
            bacon: 0,
            salad: 0
        },
        price: 4
    }
    addIngredientHandler = (type) => {

        let currentCount = this.state.ingredients[type];
        const updatedCount = currentCount + 1;
        let updatedIngredients = { ...this.state.ingredients };
        updatedIngredients[type] = updatedCount;
        const updatedPrice = this.state.price + PRICE_LIST[type];

        this.setState({
            ingredients: updatedIngredients,
            price: updatedPrice
        })
    };

    removeIngredientHandler = (type) =>{

        let currentCount = this.state.ingredients[type];
        let updatedCount = 0;
        if(currentCount>0){
            updatedCount = currentCount - 1;
        }
        
        let updatedIngredients = { ...this.state.ingredients };
        updatedIngredients[type] = updatedCount;
        const updatedPrice = this.state.price - PRICE_LIST[type];
        this.setState({
            ingredients: updatedIngredients,
            price: updatedPrice
        })
    };
    render() {
        const disabledInfo ={
            cheese: false,
            meat: false,
            bacon: false,
            salad: false
        }

        for (let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key]<=0;
        }
        return (<Auxiliary>
            <Burger ingredients={this.state.ingredients}></Burger>
            <BuildControls price ={this.state.price} disabledInfo ={disabledInfo} addIngredient={this.addIngredientHandler} removeIngredient ={this.removeIngredientHandler}></BuildControls>
        </Auxiliary>)
    }
}

export default BurgerBuilder;