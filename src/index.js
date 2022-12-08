import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, RouterProvider, Navigate } from 'react-router-dom';
import './css/index.css';
import App from './App';
import Root from './routes/navbar'
import ErrorPage from './error';
import Contact from './routes/contact';

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element: <Root/>,
//     errorElement: <ErrorPage/>,
//     children:[
//       //Put new routes here otherwise Navbar wont render
//       // {
//       //   path: "Path",
//       //   element: <Element/>
//       // }
//       {
//         path: "contact",
//         element: <Contact/>
//       }
//     ]
//   }
// ])x

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router><App/></Router>
  </React.StrictMode>
);
