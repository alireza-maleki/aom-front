import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../redux/action';

import classes from "./Product.module.css";


const Product = () => {

  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.data)

  console.log(data)

  useEffect(() => {
    dispatch(getData())
  }, [])

  return (
    <div className={classes.product}>

    </div>
  )
}



export default Product