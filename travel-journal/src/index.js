import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './navbar';
import MainContent from './mainContent';
import travelJournalData from './data';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const travelJournalElements = travelJournalData.map(item => {
  return ( 
  <MainContent
      key={item.id}
      {...item}
  />
  )
})
root.render(
  <React.StrictMode>
    <Navbar />
    {travelJournalElements}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
