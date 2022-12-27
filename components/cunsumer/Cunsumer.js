import React from 'react';

import classes from "./Cunsumer.module.css";

import CunsumerItem from "./CunsumerItem";

const Cunsumer = (props) => {

    const { products } = props;

    return (
        <>

            {
                products &&

                products.filter((item) => item.rating.rate > 4)
                    .map((item) => (
                        <ul key={item.id} className={classes.gift}>
                            <CunsumerItem
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

export default Cunsumer