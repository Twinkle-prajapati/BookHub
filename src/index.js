import React from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';
import Slider from './Components/Slider';
import Maincard from './Components/Maincard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUsPage from './Components/AboutUsPage';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>


    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Slider/>}></Route>
      <Route path='/details/:id' element={<Maincard/>}></Route>
      <Route path='/about' element={<AboutUsPage/>}></Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
