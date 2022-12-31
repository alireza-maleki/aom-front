import React from 'react';

import classes from "./Items4.module.css";

const Items4 = (props) => {

    const { data } = props;

    return (
        <>
            {data
                .map((item) => (
                    <div className={classes.detail} key={item.id}>

                        <div className={classes.image}>
                            <img src={item.image} />
                        </div>

                        <div className={classes.summary}>
                            <p>{item.name}</p>
                            <h4>{item.price}$ - 100.2$</h4>
                        </div>

                    </div>
                ))}
        </>
    )
}

export default Items4;