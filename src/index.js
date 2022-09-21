import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ProductsDataContextProvider } from './common/context/ProductsDataContext';
import { FilteredProductsDataProvider } from './common/context/FilteredProductsContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProductsDataContextProvider>
      <FilteredProductsDataProvider>
        <App />
      </FilteredProductsDataProvider>
    </ProductsDataContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
