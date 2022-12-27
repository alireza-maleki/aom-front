import React from 'react';
import Items1 from './Items1';


import classes from "./Product1.module.css";


const Product1 = (props) => {

  console.log(props.products)

  return (

    <div className={classes.product} >
      <div className={classes.layout} >

        <div className={classes.link}>
          <div>
            <h4>لاین سرد</h4>
            <p>Get well reviwed itemsfrom the past 180 days</p>
            <button>اطلاعات بیشتر</button>
          </div>
        </div>


        <div className={classes.data}>
          <Items1 products={props.products} />
        </div>

      </div>
    </div>
  )
}



export default Product1

