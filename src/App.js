import { useEffect, useState } from 'react';
import './App.css';
import { useFilteredProductsData } from './common/context/FilteredProductsContext';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header'
import MainContent from './components/MainContent/MainContent';
import ProductList from './components/ProductList/ProductLIst'
import SingleProduct from './components/SingleProduct/SingleProduct';

function App() {

  const { selectedId, singlePage, setSinglePage, singleProduct } = useFilteredProductsData();



  return (
    <div className="App">
      <Header />
      {
        singlePage ? <SingleProduct singleProduct={singleProduct} /> : <MainContent />
      }
      {/* <MainContent /> */}
      <SingleProduct />
      <Footer />
    </div>
  );
}

export default App;
