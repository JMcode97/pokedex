import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MainComponent from './resources/components/MainComponent';
import NewProduct from './resources/pages/Products/NewProduct';
import ProductsList from './resources/pages/Products/ProductsList';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <MainComponent>
    <Routes>
      <Route path='/' element={<ProductsList />}></Route>
      <Route path='/new-product' element={<NewProduct />}></Route>
    </Routes>
    </MainComponent>    
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
