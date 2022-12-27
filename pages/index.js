import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import store from '../components/redux/store';


import Header from '../components/header/Header';
import HomePage from '../components/home/HomePAge';
import Product from '../components/product1/Product1';
import Search from '../components/search/Search';
import TopScroll from '../components/topscroll/TopScroll';

import { loadProducts } from '../components/getalldata/GetAllData';
import NavbarFixed from '../components/navbar fixed/NavbarFixed';



const index = (props) => {
  return (
    <>
      <Header />
      <Search />
      <TopScroll />
      <HomePage products={props.products} />
      <NavbarFixed />
    </>
  )
}



export async function getStaticProps(context) {

  const products = await loadProducts();

  return {
    props: {
      products
    }, // will be passed to the page component as props
  }
}

export default index;