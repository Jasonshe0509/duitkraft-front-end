import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Login from './components/login and register/login';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Register from './components/login and register/register.js';
import Chatbot from './components/chatbot/chatbot.js';
import Kommunicate from "@kommunicate/kommunicate-chatbot-plugin";
import News from './components/news/news.js'
import MarketNews from './components/news/marketNews.js'
import CryptoNews from './components/news/cryptoNews.js'
import CompanyNews from './components/news/companyNews.js'
import FinanceNews from './components/news/financeNews.js';
import EconomyNews from './components/news/economyNews.js';
import Course from './components/course/course.js';
import CourseOverview from './components/course/courseOverview.js';
import CourseDetails1 from './components/course/courseDetails.js';
import CourseDetails2 from './components/course/courseDetails1.js';
import CourseDetails3 from './components/course/courseDetails2.js';
import ProfilePage from './components/profilePage/profilePage.js';
import EduDashboard from './components/dashboard/dashboard.js';
import BudgetDashboard from './components/dashboard/dashboard2.js';

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
    path: "register",
    element: <Register />
  },
  {
    path: "edu-dashboard",
    element: <EduDashboard />,
  },
  {
    path: "budget-dashboard",
    element: <BudgetDashboard />,
  },
  {
    path: "profile",
    element: <ProfilePage />,
  },
  {
    path: "test",
    element: <Chatbot />,
  },
  {
    path: "news",
    element: <News/>,
  },
  {
    path: "news/marketNews",
    element: <MarketNews />,
  },
  {
    path: "news/cryptoNews",
    element: <CryptoNews />,
  },
  {
    path: "news/companyNews",
    element: <CompanyNews />,
  },
  {
    path: "news/financeNews",
    element: <FinanceNews />,
  },
  {
    path: "news/economyNews",
    element: <EconomyNews />,
  },
  {
    path: "course",
    element: <Course />,
  },
  {
    path: "course/courseOverview",
    element: <CourseOverview />,
  },
  {
    path: "course/financial-foundations-1",
    element: <CourseDetails1 />,
  },
  {
    path: "course/financial-foundations-2",
    element: <CourseDetails2 />,
  },
  {
    path: "course/financial-foundations-3",
    element: <CourseDetails3 />,
  },
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
