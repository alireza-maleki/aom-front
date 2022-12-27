import React from 'react';

import classes from "./Energy.module.css";

import EnergyItem from "./EnergyItem";

const Energy = (props) => {

    const { products } = props;

    return (
        <>

            {
                products &&

                products.filter((item) => item.rating.count > 300)
                    .map((item) => (
                        <ul className={classes.gift}>
                            <EnergyItem
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

export default Energy