import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Card from './components/card';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <Card
      img = "card.png"
      rating = "5.0"
      reviewCount = {6}
      country = "USA"
      title = "Life lessons with Katie Zaferes"
      price = {136}
    />
    <Card
       img= "card2.png"
       rating = "5.0"
       reviewCount = {30}
       country = "Norway"
       title = "Learn Wedding Photography"
       price = {125}
    />
    <Card 
       img = "card3.png"
       rating = "4.8"
       reviewCount = {2}
       country = "Germany"
       title = "Group Mountain Bikin"
       price = {50}
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
