import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Card from './components/card';
import './card.png'
import './card2.png'
import './card3.png'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <Card
      img = "./card.png"
      rating1 = "5.0"
      rating2 = "(6)"
      rating3 = "USA"
      cardDesc = "Life lessons with Katie Zaferes"
      cardCost = "From $136"
    />
    <Card
       img= "./card2.png"
       rating1 = "5.0"
       rating2 = "(30)"
       cardDesc = "Learn Wedding Photography"
       cardCost = "From $125"
    />
    <Card 
       img = "./card3.png"
       rating1 = "4.8"
       rating2 = "(2)"
       cardDesc = "Group Mountain Bikin"
       cardCost = "From $50"
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
