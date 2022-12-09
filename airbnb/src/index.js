import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Card from './components/card';
import airbnbData from './data';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const airbnbElements = airbnbData.map(item => {
  return ( 
  <Card 
      img={item.img}
      rating={item.rating}
      reviewCount={item.reviewCount}
      country={item.country}
      title={item.title}
      price={item.price}
  />
  )
})

root.render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <div className='Cards--list'>
    {airbnbElements}
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
