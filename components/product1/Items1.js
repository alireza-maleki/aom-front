import React from 'react';

import classes from "./Items1.module.css";


const Items1 = (props) => {

    const { products } = props;

    return (
        <>
            {products.filter((item) => item.id < 5)
                .map((item) => (
                    <div className={classes.detail} key={item.id}>

                        <div className={classes.image}>
                            <img src={item.image} />
                        </div>

                        <div className={classes.summary}>
                            <p>{item.category}</p>
                            <h4>{item.price}$ - 12.2$</h4>
                        </div>

                    </div>
                ))}
        </>
    )
}

export default Items1


