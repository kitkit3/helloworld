import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HKCalebMall from './HKCalebMall';
import Apps from './component/Apps';

//function tick() {
  
  ReactDOM.render(
    //<React.StrictMode>
    //  <App />
    //</React.StrictMode>,
    //<Calculate />,
   //<HKCalebMall />,
   <div>
   <Apps />
   </div>,
    document.getElementById('root')
    
  );
//}
//setInterval(tick, 1000);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
