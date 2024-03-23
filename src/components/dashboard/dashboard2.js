import "../navigation/navistyle.css";
import "../dashboard/dashboard.css";
import dashboard_bg from "../assets/dashboard_bg.png";
import Navigation from "../navigation/navigation.js";
import Header from "../navigation/header.js";
import ProgressBar, { ProgressBar2 } from "./progress.js";
import BudgetModal from './budgetmodal.js';
import TransactionModal from './TransactionModal.js';
import BudgetPop from "../navigation/budgetpop.js";
import { CurrencyDollarIcon } from '@heroicons/react/24/solid'
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import IncomeChart from "./incomechart.js";
import ExpensesChart from "./expenseschart.js";
import { PiBowlFoodFill } from "react-icons/pi";
import {GiThreeFriends, GiSofa, GiCommercialAirplane  } from "react-icons/gi";
import Chatbot from "../chatbot/chatbot.js";



const currentDate = new Date();
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const BudgetDashboard = () => {

  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());

  const goToPreviousMonth = () => {
    setCurrentMonth(prevMonth => {
      if (prevMonth === 0) {
        setCurrentYear(year => year - 1 / 2);
        return 11; // December
      } else {
        return prevMonth - 1;
      }
    });
  };

  const goToNextMonth = () => {
    setCurrentMonth(prevMonth => {
      if (prevMonth === 11) {
        setCurrentYear(year => year + 1 / 2);
        return 0; // January
      } else {
        return prevMonth + 1;
      }
    });
  };

  const progress = 50;
  const progress2 = 50;
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);

  const handleOpenModal1 = () => {
    setIsModalOpen1(true);
  };

  const handleCloseModal1 = () => {
    setIsModalOpen1(false);
  };

  const handleOpenModal2 = () => {
    setIsModalOpen2(true);
  };

  const handleCloseModal2 = () => {
    setIsModalOpen2(false);
  };
  const transaction = [

    {
      date: '06/01/2024',
      mon: 'Sat',
      tolexpenses: 'MYR 100.00',
      tolincome: 'MYR 0.00',
      entries: [
        {
          accountcontent1: "Cash",
          catcontent1: "Food",
          detcontent1: "Snacks",
          incontent1: "",
          excontent1: "MYR 10.00"
        },
        {
          accountcontent1: "Cash",
          catcontent1: "Social",
          detcontent1: "With Family",
          incontent1: "",
          excontent1: "MYR 90.00"
        },
      ]
    },
    {
      date: '05/01/2024',
      mon: 'Fri',
      tolexpenses: 'MYR 40.00',
      tolincome: 'MYR 1540.00',
      entries: [
        {
          accountcontent1: "Bank",
          catcontent1: "Bonus",
          detcontent1: "Comission",
          incontent1: "MYR 40.00",
          excontent1: ""
        },
        {
          accountcontent1: "Bank",
          catcontent1: "Salary",
          detcontent1: "Full Time",
          incontent1: "MYR 1,500.00",
          excontent1: ""
        },
        {
          accountcontent1: "Erasmus",
          catcontent1: "Food",
          detcontent1: "Foo Fee",
          incontent1: "",
          excontent1: "MYR 40.00"
        }
      ]
    }, {
      date: '04/01/2024',
      mon: 'Thu',
      tolexpenses: 'MYR 510.00',
      tolincome: 'MYR 60.00',
      entries: [
        {
          accountcontent1: "Bank",
          catcontent1: "Salary",
          detcontent1: "Part-time",
          incontent1: "MYR 60.00",
          excontent1: ""
        },
        {
          accountcontent1: "Bank",
          catcontent1: "Amenities",
          detcontent1: "Rental Fees",
          incontent1: "",
          excontent1: "MYR 500.00"
        },
        {
          accountcontent1: "Erasmus",
          catcontent1: "Food",
          detcontent1: "Nasi Lemak",
          incontent1: "",
          excontent1: "MYR 10.00"
        }
      ]
    }
  ];


  const halfcircumference = (2 * Math.PI * 110) / 2;
  const [selected, setSelected] = useState(null)
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null)
    }
    setSelected(i)

  }
  const [isBDashChecked, setisBDashChecked] = useState(false)

  const handleCheckboxChange = () => {
    setisBDashChecked(!isBDashChecked)
  }

  const [isModalOpen3, setIsModalOpen3] = useState(false);
  const handleOpenModal3 = () => {
    setIsModalOpen3(true);
  };

  const handleCloseModal3 = () => {
    setIsModalOpen3(false);
  };

  return (
    <main>
      <div className="absolutejustify-between">
        {isModalOpen1 && <BudgetModal onClose={handleCloseModal1} />} {/* Render the BudgetModal component if isModalOpen is true */}
        {isModalOpen2 && <TransactionModal onClose={handleCloseModal2} />} {/* Render the BudgetModal component if isModalOpen is true */}
        {isModalOpen3 && <BudgetPop onClose={handleCloseModal3} />}
        <img src={dashboard_bg} className="bg" />
        <div class="bg h-screen w-screen flex relative overflow-x-auto overflow-y-hidden"> <div class="white-space: nowrap"> </div>
          <Navigation />
          <div className="w-screen  justify-between ">
            <Header title={"Dashboard"} /><div className="flex-start flex-wrap items-center mb-3 flex mx-2 justify-between">
              {/* session1 */}
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#FFFFFF" className="w-6 h-6 cursor-pointer" onClick={goToPreviousMonth}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
                <div className="text-fontColor mx-2 my-2">{months[currentMonth]} {currentYear}</div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#FFFFFF" className="w-6 h-6 cursor-pointer" onClick={goToNextMonth}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </div>

              {/* session2 */}
              <label className='themeSwitcherTwo relative cursor-pointer select-none items-center'>
                <input
                  type='checkbox'
                  checked={isBDashChecked}
                  onChange={handleCheckboxChange}
                  className='sr-only'
                />
                <span className="w-44 rounded-full flex">
                  <Link to='/edu-dashboard' className="z-10">
                    <span
                      className={`sliderpx-5 w-20 text-xs flex h-5 items-center rounded-full p-1 duration-200 ${isBDashChecked ? 'translate-x-[12px,12px] bg-[#A8DC42]' : 'bg-[#FFFFFF]'
                        }`}
                    >
                      <span className="w-full px-3 flex text-center justify-center">
                        Education
                      </span>
                    </span>
                  </Link>
                  <Link to='/budget-dashboard' className="z-0">
                    <span
                      className={`slider z-0 w-20 text-xs p-1 px-5 flex h-5 -ml-4 w-full items-center rounded-full p-1 duration-200 ${isBDashChecked ? 'bg-[#FFFFFF]' : 'bg-[#0042AD] bg-[#0042AD]'
                        }`}
                    >
                      <span className="w-full px-3 flex justify-center text-fontColor">
                        Budget
                      </span>
                    </span>
                  </Link>
                </span>
              </label>
              {/* session3 */}
              <div className="border mx-2 border-whitew text-whitew cursor-pointer px-3 rounded-lg flex items-center" onClick={handleOpenModal3}>
                <span className="mr-1 text-xs">Record</span>
                <CurrencyDollarIcon className="text-fontColor w-5 h-5" />
              </div>
            </div>
            <div className="dashboard-container transition-all flex-1">
              <div className="  dashboard-container2 " >
                <div className="flex items-center w-full dashboardbudget1_5">
                  <div className={"dashboardbudget1 inline-block text-fontColor mx-5 my-2 rounded shadow-xl"}>
                    <div className="items-center flex-wrap  my-1 flex flex-col p-5   ">
                      <span className="text-yellowtext mb-1">Income</span>
                      <div className="flex justify-center">
                        MYR 1,600.00
                      </div>
                    </div>
                  </div>
                  <div className={"dashboardbudget1 inline-block text-fontColor mx-5 my-2  rounded shadow-xl"}>
                    <div className="items-center flex-wrap  my-1 flex flex-col p-5 ">
                      <span className="text-yellowtext mb-1">Expenses</span>
                      <div className="flex justify-center">
                        MYR 700.00
                      </div>
                    </div>
                  </div>
                  <div className={"dashboardbudget1 inline-block text-fontColor mx-5 my-2  rounded shadow-xl"}>
                    <div className="items-center flex-wrap  my-1 flex flex-col p-5 ">
                      <span className="text-yellowtext mb-1">Total</span>
                      <div className="flex justify-center">
                        MYR 900.00
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center w-full dashboardbudget2_5">
                  <div className={"dashboardbudget2 inline-block text-fontColor mx-5 my-2 rounded shadow-xl"}>
                    <div className={"text-fontColor  m-5 mb-4"}>Expenses</div>
                    <div className="mb-5 flex-wrap">
                      <ExpensesChart />
                    </div>
                  </div>
                  <div className={"dashboardbudget2 inline-block text-fontColor mx-5 my-2  rounded shadow-xl"}>
                    <div className={"text-fontColor  m-5 mb-4"}>Income</div>
                    <div className="mb-5 flex-wrap">
                      <IncomeChart />
                    </div>
                  </div>
                </div>
                <div className={"dashboardedu2 rounded text-fontColor m-5 mb-10 shadow-xl"}>
                  <div className={"text-fontColor m-2 mb-4"}>Transaction History</div>
                  <div class="relative flex flex-col min-w-0 break-words rounded mycouse">
                    {transaction.map((item, i) => (
                      <table key={i} className="w-full border-collapse my-2 TransBar rounded " >
                        <div onClick={() => toggle(i)} >
                          <thead className="thead-light " >
                            <tr className="w-full">
                              <th className="pl-4 bg-blueGray-50 text-blueGray-500 align-middle border-solid border-blueGray-100 py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-semibold text-left" colSpan="2">
                                {item.date}
                              </th>
                              <th className="bg-moncol px-1 mx-1 inline-block text-blueGray-500 align-middle border-solid border-blueGray-100 my-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                {item.mon}
                              </th>
                              <th className="w-2/3 relative align-middle text-greentrans border-solid border-blueGray-100 py-3 text-xs border-l-0 border-r-0 font-semibold text-right">
                                {item.tolincome}
                              </th>
                              <th className="w-1/3 relative pr-5 m-3 align-middle text-redtrans border-solid border-blueGray-100 py-3 text-xs border-l-0 border-r-0 font-semibold text-right">
                                {item.tolexpenses}
                              </th>
                            </tr>
                          </thead></div><div className={selected === i ? 'content show' : 'content'}>
                          <tbody >
                            {item.entries.map((entry, j) => (
                              <tr key={j} >
                                <td className="pl-4 bg-blueGray-50 text-blueGray-500 align-middle border-solid border-blueGray-100 py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-light text-left">
                                  <div className="w-24 overflow-hidden break-words">{entry.accountcontent1}</div>
                                </td>
                                <td className="pl-4 bg-blueGray-50 text-blueGray-500 align-middle border-solid border-blueGray-100 py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-light text-left">
                                  <div className="w-24 overflow-hidden break-words">{entry.catcontent1}</div>
                                </td>
                                <td className="pl-4 bg-blueGray-50 text-blueGray-500 align-middle border-solid border-blueGray-100 py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-light text-left">
                                  <div className="w-24 overflow-hidden break-words">{entry.detcontent1}</div>
                                </td>
                                <td className="w-1/2 pr-5  bg-blueGray-50 text-blueGray-500 align-middle text-greentrans border-solid border-blueGray-100 py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-light text-right">
                                  {entry.incontent1}
                                </td>
                                <td className="w-1/2 pr-5 m-3 bg-blueGray-50 text-blueGray-500 align-middle text-redtrans border-solid border-blueGray-100 py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-light text-right">
                                  {entry.excontent1}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </div>
                      </table>))}
                  </div>
                  <div className="flex flex-col justify-center items-center pb-5">
                    <div class=" viewmore px-5 py-2 my-2 cursor-pointer font-medium rounded border " onClick={handleOpenModal2}>
                      View More
                    </div>
                  </div>
                </div>
              </div>
              <div className="  dashboard-container3 ">
                <div className={"dashboardbudget4 rounded text-fontColour m-5 pt-15 text-fontColor shadow-xl"}>
                  <div className="flex justify-between ">
                    <div className={"text-fontColor  m-2 "}>Budget</div>
                    <div className={"  px-5 py-1 m-2  sortby cursor-pointer"} onClick={handleOpenModal1}>Budget Setting
                    </div>
                  </div>
                  <div className="flex  justify-center items-center mb-10">
                    <svg className="  fill-becolour  min-w-90px h-90px ">
                      <g transform="rotate(-310, 90, 150)"> {/* Rotate the circle */}
                        <circle
                          cx="120"
                          cy="95"
                          r="110"
                          stroke="#141326"
                          stroke-width="23"
                          fill="transparent"
                          className="text-gray-700"
                        />
                        <defs>
                          <linearGradient id="linearGradient">
                            <stop offset="0%" stop-color="#42a5f5" />
                            <stop offset="100%" stop-color="#6C40D9" />
                          </linearGradient>
                        </defs>
                        <circle
                          cx="120"
                          cy="95"
                          r="110"
                          stroke="url(#linearGradient)"
                          stroke-width="25"
                          fill="transparent"
                          strokeDasharray={halfcircumference}
                          strokeDashoffset={halfcircumference - 0.8 * halfcircumference}
                          className=" bg-becolour"
                        />
                      </g>
                      <text
                        className="text-3xl text-center text-white fill "
                        x="150"
                        y="115"
                        dominantBaseline="middle"
                        textAnchor="middle"
                        fill="white"
                      >
                        28%
                      </text>
                      <text
                        className="text-16p text-center text-white "
                        x="150"
                        y="135"
                        fill="white"
                        dominantBaseline="middle"
                        textAnchor="middle"
                      >
                        Used
                      </text>
                    </svg>
                  </div>
                  <div className="flex  items-center mb-5 justify-between mb-2">
                    <div className="flex justify-start  py-2 ml-2 flex-col ">
                      <span className="text-xs w-24 overflow-hidden break-words">Total Budget</span>

                      <div className="flex text-sm">
                        <span>MYR 2,500.00</span>
                      </div>
                    </div>
                    <div className="flex-start w-3/4 p-2 pt-1 flex flex-col ">
                      <div className="container mx-full p-1 fontsizexxs">
                        <ProgressBar2 progress2={28} /> {/* Pass the progress value directly */}
                      </div>
                      <div className="flex justify-between  ">
                        <span className="text-xs	">MYR 700.00</span>
                        <span className="text-xs	">MYR1,800.00</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex  items-center  justify-between mb-2 ">
                    <div className="flex justify-start  py-2 ml-2 flex-col ">
                      <span className="text-xs text-fontColor w-24 overflow-hidden break-words flex "><PiBowlFoodFill className=" mr-2"/>Food</span>
                      <div className="flex text-sm">
                        <span>MYR 1,000.00</span>
                      </div>
                    </div>
                    <div className="flex-start w-3/4 p-2 pt-1 flex flex-col ">
                      <div className="container mx-full p-1 fontsizexxs">
                        <ProgressBar2 progress2={6} />
                      </div>
                      <div className="flex justify-between  ">
                        <span className="text-xs	">MYR 60.00</span>
                        <span className="text-xs	">MYR 940.00</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex  items-center  justify-between mb-2 ">
                    <div className="flex justify-start  py-2 ml-2 flex-col ">
                      <span className="text-xs w-24 overflow-hidden break-words flex text-font-Color"><GiThreeFriends className="mr-2" />Social</span>
                      <div className="flex text-sm">
                        <span>MYR 100.00</span>
                      </div>
                    </div>
                    <div className="flex-start w-3/4 p-2 pt-1 flex flex-col ">
                      <div className="container mx-full p-1 fontsizexxs">
                        <ProgressBar2 progress2={100} />
                      </div>
                      <div className="flex justify-between  ">
                        <span className="text-xs	">MYR 140.00</span>
                        <span className="text-xs text-redtrans	">Exceed MYR 40.00</span>
                      </div>
                    </div>
                  </div>       
                  <div className="flex  items-center  justify-between mb-2 ">
                    <div className="flex justify-start  py-2 ml-2 flex-col ">
                      <span className="text-xs w-24 overflow-hidden break-words flex text-fontColor"><GiSofa className="mr-2"/>Amenities</span>
                      <div className="flex text-sm">
                        <span>MYR 500.00</span>
                      </div>
                    </div>
                    <div className="flex-start w-3/4 p-2 pt-1 flex flex-col ">
                      <div className="container mx-full p-1 fontsizexxs">
                        <ProgressBar2 progress2={100} /> {/* Pass the progress value directly */}
                      </div>
                      <div className="flex justify-between  ">
                        <span className="text-xs	">MYR 500.00</span>
                        <span className="text-xs	">MYR 0.00</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex  items-center  justify-between mb-2 ">
                    <div className="flex justify-start  py-2 ml-2 flex-col ">
                      <span className="text-xs w-24 overflow-hidden break-words flex text-fontColor"><GiCommercialAirplane className="mr-2"/>Travel</span>
                      <div className="flex text-sm">
                        <span>MYR 900.00</span>
                      </div>
                    </div>
                    <div className="flex-start w-3/4 p-2 pt-1 flex flex-col ">
                      <div className="container mx-full p-1 fontsizexxs">
                        <ProgressBar2 progress2={0} /> {/* Pass the progress value directly */}
                      </div>
                      <div className="flex justify-between  ">
                        <span className="text-xs	">MYR 0.00</span>
                        <span className="text-xs	">MYR 900.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Chatbot />
    </main>
  );



  ;
}

export default BudgetDashboard;
