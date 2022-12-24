import React from 'react';

import classes from "./Items3.module.css";


const Items3 = (props) => {

    const { products } = props;

    return (
        <>
            {products.filter((item) => item.price > 150)
                .map((item) => (
                    <div className={classes.detail} key={item.id}>

                        <div className={classes.image}>
                            <img src={item.image} />
                        </div>

                        <div className={classes.summary}>
                            <p>{item.category}</p>
                            <h4>{item.price}$ - 100.2$</h4>
                        </div>

                    </div>
                ))}
        </>
    )
}

export default Items3