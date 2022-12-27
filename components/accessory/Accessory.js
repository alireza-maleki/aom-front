import React from 'react';

import classes from "./Accessory.module.css";

import AccessoryItem from "./AccessoryItem";

const Accessory = (props) => {

    const { products } = props;

    return (
        <>

            {
                products &&

                products.filter((item) => item.rating.count < 160)
                    .map((item) => (
                        <ul key={item.id} className={classes.gift}>
                            <AccessoryItem
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

export default Accessory