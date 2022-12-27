import React from 'react';

import classes from "./CategoryItem.module.css";

const CategoryItem = (props) => {

    const { key, title, image, desc, price, category } = props;

    return (
        <li className={classes.giftitem}>

            <div className={classes.title}>
                <p>{title}</p>
            </div>

            <div className={classes.summary}>
                <div className={classes.image}>
                    <img src={image} />
                </div>
                <div className={classes.items}>
                    <div className={classes.control}>
                        <p> <span>{category}</span>    : category</p>
                        <p> <span>{category}</span>     : category</p>
                        <p> <span>{category}</span>     : category</p>
                    </div>
                    <div className={classes.control}>
                        <p> <span>{category}</span>     : category</p>
                        <p> <span>{category}</span>     : category</p>
                        <p> <span>{category}</span>     : category</p>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default CategoryItem