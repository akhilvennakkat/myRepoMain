import React from 'react';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import classes from './Layout.css';
const layout =(props)=>{

    return (
        <Auxiliary>
        <div>
            Tool bars, side drawer, logo
        </div>
        <main className={classes.Content}>{props.children}</main>
        </Auxiliary>
    );
}

export default  layout;