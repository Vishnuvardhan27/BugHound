import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as  Router,Routes,Route } from 'react-router-dom';
import CreateBug from './CreateBug';
import Register from './Register';
import Login from './Login';
import UpdateBug from './UpdateBug';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
          <Route path="/createBug" element={<CreateBug/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/" element={<App/>} />
          <Route path="/updateBug/:id" element={<UpdateBug/>}/>
    </Routes>
  <React.StrictMode>
    {/* <App /> */}
  </React.StrictMode>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
