import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import store from '../components/redux/store';


import Header from '../components/header/Header';
import HomePage from '../components/home/HomePAge';
import Product from '../components/products/product';
import Search from '../components/search/Search';
import TopScroll from '../components/topscroll/TopScroll';

const index = () => {
  return (
    <Provider store={store}>
      <Header />
      <Search />
      <TopScroll />
      <Product />
    </Provider>
  )
}

export default index;