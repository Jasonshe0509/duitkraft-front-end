import "../navigation/navistyle.css";
import "../dashboard/dashboard.css";
import dashboard_bg from "../assets/dashboard_bg.png";
import Navigation from "../navigation/navigation.js";
import Header from "../navigation/header.js";
import ProgressBar, { ProgressBar2 } from "./progress.js";

import coursebg from "../assets/coursebg.jpg";
import { useState } from 'react';

import Chart1 from "./expenseschart.js";
import Chart2 from "./incomechart.js";

const Dashboard = () => {
  const progress = 50; 
  const progress2 = 50; 
  const wee = [
    {
      date: '04/03/2024',
      mon: 'Mon',
      tolincome: '11000000',
      tolexpenses: '10000',
      entries: [
        {
          accountcontent1: "Erasmus",
          catcontent1: "Food",
          detcontent1: "Kebab",
          incontent1: "",
          excontent1: "20"
        },
        {
          accountcontent1: "Bank",
          catcontent1: "Important",
          detcontent1: "Rental Fees",
          incontent1: "",
          excontent1: "5000"
        },
        {
          accountcontent1: "Erasmus",
          catcontent1: "Food",
          detcontent1: "Cola",
          incontent1: "",
          excontent1: "100"
        }
      ]
    },
    {
      date: '03/03/2024',
      mon: 'Sun',
      tolincome: '1000',
      tolexpenses: '1000',
      entries: [
        {
          accountcontent1: "Erasmus",
          catcontent1: "ss",
          detcontent1: "Kebab",
          incontent1: "",
          excontent1: "20"
        },
        {
          accountcontent1: "Bank",
          catcontent1: "Impor飒飒撒、tant",
          detcontent1: "Rental Fees",
          incontent1: "",
          excontent1: "5000"
        },
        {
          accountcontent1: "Erasmus",
          catcontent1: "Food",
          detcontent1: "Cola",
          incontent1: "",
          excontent1: "100"
        }
      ]
    },
    {
      date: '02/03/2024',
      mon: 'Sat',
      tolincome: '1000',
      tolexpenses: '1000',
      entries: [
        {
          accountcontent1: "Erasmus",
          catcontent1: "Food",
          detcontent1: "Kebab",
          incontent1: "",
          excontent1: "20"
        },
        {
          accountcontent1: "Bank",
          catcontent1: "Important",
          detcontent1: "Rental Fees",
          incontent1: "",
          excontent1: "5000"
        },
        {
          accountcontent1: "Erasmus",
          catcontent1: "Food",
          detcontent1: "Cola",
          incontent1: "",
          excontent1: "100"
        }
      ]
    }
  ];
  

  const halfcircumference = (2 * Math.PI * 110 )/2;
  const[selected,setSelected]=useState(null)
  const toggle = (i) =>{
      if(selected===i){
          return setSelected(null)
      }
      setSelected(i)
      
  }
  
  return (
    <main>
      <div className="absolutejustify-between">
        <img src={dashboard_bg} className="bg"/>
        <div class="bg h-screen w-screen flex relative overflow-x-auto overflow-y-hidden"> <div class="white-space: nowrap"> </div>
          <Navigation />
          <div className="w-screen  justify-between ">
            <Header title={"Dashboard"}/>
            <div className="flex-start flex-wrap items-center  mb-3 flex mx-2">
  <svg classNamexmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#FFFFFF" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" /></svg>
  <div className="text-fontColor mx-2 my-2">March</div>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#FFFFFF" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
</div>

            <div className="dashboard-container transition-all flex-1">
              
              <div className="  dashboard-container2 ">
              <div className="flex items-center w-full dashboardbudget1_5">

<div className={"dashboardbudget1 inline-block text-fontColor mx-5 my-2 rounded shadow-xl"}>
<div className="items-center flex-wrap  my-1 flex flex-col p-5   ">  
        <span className="text-yellowtext mb-1">Income</span>

        <div className="flex justify-center"> 
          1500000000000000000
        </div>
      </div>
</div>

<div className={"dashboardbudget1 inline-block text-fontColor mx-5 my-2  rounded shadow-xl"}>
<div className="items-center flex-wrap  my-1 flex flex-col p-5 ">  
        <span className="text-yellowtext mb-1">Expenses</span>

        <div className="flex justify-center"> 
          1500000000000000000
        </div>
      </div></div>

<div className={"dashboardbudget1 inline-block text-fontColor mx-5 my-2  rounded shadow-xl"}>
<div className="items-center flex-wrap  my-1 flex flex-col p-5 ">  
        <span className="text-yellowtext mb-1">Total</span>

        <div className="flex justify-center"> 
          150000000
        </div>
      </div></div>

</div>
<div className="flex items-center w-full dashboardbudget2_5">

<div className={"dashboardbudget2 inline-block text-fontColor mx-5 my-2 rounded shadow-xl"}>
<div className={"text-fontColor  m-5 mb-4"}>Expenses</div>
<div className="mb-5 flex-wrap">
<Chart1/>
</div>
</div>

<div className={"dashboardbudget2 inline-block text-fontColor mx-5 my-2  rounded shadow-xl"}>
<div className={"text-fontColor  m-5 mb-4"}>Income</div>
<div className="mb-5 flex-wrap">
<Chart2/>
</div></div>



</div>


                <div className={"  dashboardedu2 text-fontColor m-5 mb-10  shadow-xl"}>
  <div className={"text-fontColor  m-2 mb-4"}>Transaction History</div>
                  <div class="relative flex flex-col min-w-0 break-words rounded mycouse">
                  {wee.map((item,i) => (
                    <table key={i} className="w-full border-collapse my-2 TransBar rounded " >
                      <div onClick={() => toggle(i)} >
                    <thead className="thead-light " >
                   
                      <tr> 
                        <th className="pl-4 bg-blueGray-50 text-blueGray-500 align-middle border-solid border-blueGray-100 py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          {item.date}
                        </th>
                        <th className=" bg-moncol px-1 mx-1 inline-block text-blueGray-500 align-middle border-solid border-blueGray-100 my-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          {item.mon}
                        </th>
                        <th className="w-full text-right"></th>
                        <th className="w-full text-right"></th> {/* This will push the next two columns to the right */}
                        <th className="w-10 px-6  bg-blueGray-50 text-blueGray-500 align-middle text-greentrans border-solid border-blueGray-100 py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-semibold text-right">
                          {item.tolexpenses}
                        </th>
                        <th className="w-10 px-5  m-3  bg-blueGray-50 text-blueGray-500 align-middle text-redtrans border-solid border-blueGray-100 py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-semibold text-right">
                          {item.tolincome}  
                        </th>
                      </tr>
                    </thead></div><div className={selected === i ? 'content show' : 'content'}>
                    <tbody >
  {item.entries.map((entry, j) => (

    <tr key={j } >
      <td className="pl-4 bg-blueGray-50 text-blueGray-500 align-middle border-solid border-blueGray-100 py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-light text-left">
        <div className="w-24 overflow-hidden break-words">{entry.accountcontent1}</div>
      </td>
      <td className="pl-4 bg-blueGray-50 text-blueGray-500 align-middle border-solid border-blueGray-100 py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-light text-left">
        <div className="w-24 overflow-hidden break-words">{entry.catcontent1}</div>
      </td>
      <td className="pl-4 bg-blueGray-50 text-blueGray-500 align-middle border-solid border-blueGray-100 py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-light text-left">
        <div className="w-24 overflow-hidden break-words">{entry.detcontent1}</div>
      </td>
      <td className="w-full text-right"></td>
      <td className="w-10 px-6 bg-blueGray-50 text-blueGray-500 align-middle text-greentrans border-solid border-blueGray-100 py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-light text-right">
        {entry.incontent1}
      </td>
      <td className="w-10 px-5 m-3 bg-blueGray-50 text-blueGray-500 align-middle text-redtrans border-solid border-blueGray-100 py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-light text-right">
        {entry.excontent1}
      </td>
    </tr>
  ))}
</tbody>



</div>  </table>                                    ))}

                    </div>            
                    <div className="flex flex-col justify-center items-center"> <div class=" viewmore px-5 py-2 my-2 cursor-pointer font-medium rounded border ">
    View More
</div></div>

                </div>
              </div>
              <div className="  dashboard-container3 ">
                <div className={"  dashboardbudget4 rounded text-fontColour m-5 pt-15 text-fontColor  shadow-xl"}>

                
                <div className="flex justify-between ">
  <div className={"text-fontColor  m-2 "}>Budget</div>
  <div className={"  px-5 py-1 m-2  sortby"}>Budget Setting</div>
</div>                             


<div className="flex  justify-center items-center mb-10">               
<svg className="  fill-becolour  min-w-90px h-90px ">
          <g transform="rotate(-180, 135, 130)"> {/* Rotate the circle */}
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
        80%
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
    <span>MYR 2,500</span>
    </div>
  </div>

      <div className="flex-start w-3/4 p-2 pt-1 flex flex-col ">  

    <div className="container mx-full p-1 fontsizexxs">
      <ProgressBar2 progress2={progress2} />
    </div>
    <div className="flex justify-between  ">  
    <span className="text-xs	">MYR123</span>
    <span className="text-xs	">MYR123</span>

    </div>                 
    </div>
                

  </div>                  
  

  <div className="flex  items-center  justify-between mb-2 ">
  <div className="flex justify-start  py-2 ml-2 flex-col ">  
  <span className="text-xs w-24 overflow-hidden break-words">Food</span>

    <div className="flex text-sm">  
    <span>MYR 1,00</span>
    </div>
  </div>

      <div className="flex-start w-3/4 p-2 pt-1 flex flex-col ">  

    <div className="container mx-full p-1 fontsizexxs">
      <ProgressBar2 progress2={progress2} />
    </div>
    <div className="flex justify-between  ">  
    <span className="text-xs	">MYR123</span>
    <span className="text-xs	">MYR123</span>

    </div>                 
    </div>
                
                
  

  </div>            
  <div className="flex  items-center  justify-between mb-2 ">
  <div className="flex justify-start  py-2 ml-2 flex-col ">  
  <span className="text-xs w-24 overflow-hidden break-words">Social</span>

    <div className="flex text-sm">  
    <span>MYR 900</span>
    </div>
  </div>

      <div className="flex-start w-3/4 p-2 pt-1 flex flex-col ">  

    <div className="container mx-full p-1 fontsizexxs">
      <ProgressBar2 progress2={progress2} />
    </div>
    <div className="flex justify-between  ">  
    <span className="text-xs	">MYR123</span>
    <span className="text-xs	">MYR123</span>

    </div>                 
    </div>
                
                
  

  </div>       <div className="flex  items-center  justify-between mb-2 ">
  <div className="flex justify-start  py-2 ml-2 flex-col ">  
  <span className="text-xs w-24 overflow-hidden break-words">Amenities</span>

    <div className="flex text-sm">  
    <span>MYR 500</span>
    </div>
  </div>

      <div className="flex-start w-3/4 p-2 pt-1 flex flex-col ">  

    <div className="container mx-full p-1 fontsizexxs">
      <ProgressBar2 progress2={progress2} />
    </div>
    <div className="flex justify-between  ">  
    <span className="text-xs	">MYR123</span>
    <span className="text-xs	">MYR123</span>

    </div>                 
    </div>
                
                
  

  </div>  
  <div className="flex  items-center  justify-between mb-2 ">
  <div className="flex justify-start  py-2 ml-2 flex-col ">  
  <span className="text-xs w-24 overflow-hidden break-words">Travel</span>

    <div className="flex text-sm">  
    <span>MYR 400</span>
    </div>
  </div>

      <div className="flex-start w-3/4 p-2 pt-1 flex flex-col ">  

    <div className="container mx-full p-1 fontsizexxs">
      <ProgressBar2 progress2={progress2} />
    </div>
    <div className="flex justify-between  ">  
    <span className="text-xs	">MYR123</span>
    <span className="text-xs	">MYR123</span>

    </div>                 
    </div>
                
                
  

  </div>  
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );



  ;
}

export default Dashboard;
