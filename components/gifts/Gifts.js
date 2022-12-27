
import React, { Fragment } from 'react';
import GiftsItem from './GiftsItem';

import classes from "./Gifts.module.css";

const Gifts = (props) => {

    const { products } = props;

    console.log(products)

    return (
        <>

            {
                products &&

                products.filter((item) => item.id < 6)
                .map((item) => (
                    <ul className={classes.gift}>
                        <GiftsItem
                            key={item.id}
                            title={item.title}
                            desc={item.description}
                            image={item.image}
                            price={item.price}
                            category={item.category}
                        />
                    </ul>
                ))

            }

        </>
    )

}


export default Gifts;
