import React from 'react';

import classes from "./Product3.module.css";

import Items3 from './Items3';

const Product3 = (props) => {
  return (
    <div className={classes.product}>
      <div className={classes.layout}>

        <div className={classes.link}>
          <div>
            <h4>Exclusive discounts</h4>
            <p>Exclusive for new customers to the store</p>
            <button>Source Now</button>
          </div>
        </div>


        <div className={classes.data}>
          <Items3 products={props.products} />
        </div>

      </div>
    </div>
  )
}

export default Product3