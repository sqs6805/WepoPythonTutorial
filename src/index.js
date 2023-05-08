import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Input from './Input';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Conditionals from './Conditionals';
import Lists from './Lists';
import Loops from './Loops';
import Functions from './Functions';
import Debugging from './Debugging';


const router = createBrowserRouter([
  {
  path: "/",
  element: <App/>
  },
  {
    path: "/Input",
    element: <Input/>
  },
  {
    path: "/Conditionals",
    element: <Conditionals/>
  },
  {
    path: "/Lists",
    element: <Lists/>
  },
  {
    path: "/Loops",
    element: <Loops/>
  },
  {
    path: "/Functions",
    element: <Functions/>
  },
  {
    path: "Debugging",
    element: <Debugging/>
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
