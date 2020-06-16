import React from 'react';
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'
const controls = [
    { label: 'Meat', type: 'meat' },
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' }

]

const buildControls = (props) => (

    <div className={classes.BuildControls}>
        <p><strong> Total price for selection: {props.price}</strong></p>
        {controls.map(control=>(
            <BuildControl 
            key ={control.label}
            add ={()=>props.addIngredient(control.type)} 
            remove ={()=>props.removeIngredient(control.type)} 
            disabledInfo ={props.disabledInfo[control.type]}
            label ={control.label}/>
        ))}
    </div>
);

export default buildControls;