import React, { Fragment } from 'react';

import Product from '../products/product';
import Product2 from '../product2/Product2';
import Product3 from '../product3/Product3';

import classes from "./HomePage.module.css";
import AutomaticSearch from '../automatic search/AutomaticSearch';

const HomePage = (props) => {
    return (
        <div className={classes.homapage}>
            <Product products={props.products} />
            <Product2 products={props.products} />
            <Product3 products={props.products} />
            <AutomaticSearch  products={props.products}/>
        </div>
    )
}

export default HomePage

