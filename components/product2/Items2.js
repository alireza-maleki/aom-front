import React from 'react';

import classes from "./Items2.module.css";


const Items2 = (props) => {

    const { products } = props;

    return (
        <>
            {products.filter((item) => item.id > 16)
                .map((item) => (
                    <div className={classes.detail} key={item.id}>

                        <div className={classes.image}>
                            <img src={item.image} />
                        </div>

                        <div className={classes.summary}>
                            <p>{item.category}</p>
                            <h4>{item.price}$ - 10.5$</h4>
                        </div>

                    </div>
                ))}
        </>
    )
}

export default Items2