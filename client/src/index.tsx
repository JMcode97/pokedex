import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import reportWebVitals from './reportWebVitals';
import MainComponent from './resources/components/MainComponent';
import ProductForm from './resources/pages/Products/ProductForm';
import ProductsList from './resources/pages/Products/ProductsList';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <MainComponent>
    <ToastContainer />
    <Routes>
      <Route path='/' element={<ProductsList />}></Route>
      <Route path='/new-product' element={<ProductForm />}></Route>
      <Route path='/update-product/:id' element={<ProductForm />}></Route>
    </Routes>
    </MainComponent>    
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
