import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Login from './components/login and register/login';
import Dashboard from './components/dashboard/dashboard.js';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Register from './components/login and register/register.js';
import Chatbot from './components/chatbot/chatbot.js';
import Kommunicate from "@kommunicate/kommunicate-chatbot-plugin";

Kommunicate.init("APP_ID", {
  automaticChatOpenOnNavigation: true,
  popupWidget: true
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path:"register",
    element: <Register/>
  },
  {
    path: "dashboard",
    element: <Dashboard />,
  },
  {
    path:"test",
    element: <Chatbot/>
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
