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
import Practice from './Practice';
import Problem3 from './Problem3';
import Problem5 from './Problem5';
import Problem7 from './Problem7';
import Problem9 from './Problem9';


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
  {
    path: "Practice",
    element: <Practice/>
  },
  {
    path: "Problem3",
    element: <Problem3/>
  },
  {
    path: "Problem5",
    element: <Problem5/>
  },
  {
    path: "Problem7",
    element: <Problem7/>
  },
  {
    path: "Problem9",
    element: <Problem9/>
  },
  {
    path: "App",
    element: <App/>
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
