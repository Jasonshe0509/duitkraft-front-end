import "../navigation/navistyle.css";
import "../dashboard/dashboard.css";
import dashboard_bg from "../assets/dashboard_bg.png";
import Navigation from "../navigation/navigation.js";
import Header from "../navigation/header.js";
import ProgressBar from "./progress.js";
import { useState } from "react";
import { Link } from "react-router-dom";
import logoOnly from '../assets/sm_logo_only.png';
import cou2 from '../assets/Course/Intermediate Level Data-Driven Investment Strategies Unlocking Opportunities with Analytics.png';
import cou3 from '../assets/Course/Expert level Sustainable Finance and Impact Investing Driving Positive Change through Finance.png';
import Chatbot from "../chatbot/chatbot.js";


const EduDashboard = () => {
  const progress = 50;
  const circumference = 2 * Math.PI * 60;
  const [isEDashChecked, setisEDashChecked] = useState(true)

  const handleCheckboxChange = () => {
    setisEDashChecked(!isEDashChecked)
  }


  return (
    <main>
      <div className="absolutejustify-between">
        <img src={dashboard_bg} className="bg" />
        <div class="bg h-screen w-screen flex relative overflow-x-auto overflow-y-hidden"> <div class="white-space: nowrap"> </div>
          <Navigation />
          <div className="w-screen  justify-between ">
            <Header title={"Dashboard"} />

            {/* session2 */}
            <div className="flex justify-center">

              <label className='themeSwitcherTwo relative cursor-pointer select-none items-center'>
                <input
                  type='checkbox'
                  checked={isEDashChecked}
                  onChange={handleCheckboxChange}
                  className='sr-only'
                />
                <span className="w-44 rounded-full flex">
                  <Link to='/edu-dashboard' className="z-10">
                    <span
                      className={`sliderpx-5 w-20 text-xs flex h-5 items-center rounded-full p-1 duration-200 ${isEDashChecked ? 'translate-x-[12px,12px] bg-[#A8DC42]' : 'bg-[#FFFFFF]'
                        }`}
                    >
                      <span className="w-full px-3 flex text-center justify-center">
                        Education
                      </span>
                    </span>
                  </Link>
                  <Link to='/budget-dashboard' className="z-0">
                    <span
                      className={`slider z-0 w-20 text-xs p-1 px-5 flex h-5 -ml-4 w-full items-center rounded-full p-1 duration-200 ${isEDashChecked ? 'bg-[#FFFFFF]' : 'bg-[#0042AD] bg-[#0042AD]'
                        }`}
                    >
                      <span className="w-full px-3 flex justify-center">
                        Budget
                      </span>
                    </span>
                  </Link>
                </span>
              </label>
            </div>
            <div className="dashboard-container transition-all flex-1">
              <div className="  dashboard-container2 ">
                <div className={" dashboardedu1 rounded text-fontColor m-5  pt-10  shadow-xl"}>
                  <div className="flex flex-wrap justify-center items-center mb-2">

                    <div className="flex-start  my-1 flex flex-col md:mx-10 sm:mx-2 ">
                      <span className="text-yellowtext">Total Module Enrolled</span>

                      <div className="flex justify-center">
                        <span>9</span>
                      </div>
                    </div>
                    <div className="flex-start text- my-1 flex flex-col md:mx-10 sm:mx-2 ">
                      <span className="text-yellowtext">Total Course Completed</span>
                      <div className="flex justify-center">
                        <span>7</span>
                      </div> {/* Maintains spacing for "1" */}
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-center items-center mb-2">
                    <svg className="  fill-becolour w-48 h-48 ">
                      <g transform="rotate(-90, 100, 100)"> {/* Rotate the circle */}
                        <circle
                          cx="120"
                          cy="95"
                          r="60"
                          stroke="#141326"
                          stroke-width="18"
                          fill="transparent"
                          className="text-gray-700"
                        />
                        <circle
                          cx="120"
                          cy="95"
                          r="60"
                          stroke="#6C40D9"
                          stroke-width="20"
                          fill="transparent"
                          strokeDasharray={circumference}
                          strokeDashoffset={circumference - 0.9 * circumference}
                          className=" bg-becolour"
                        />
                      </g>
                      <text
                        className="text-3xl text-center text-white fill "
                        x="100"
                        y="85"
                        dominantBaseline="middle"
                        textAnchor="middle"
                        fill="white"
                      >
                        90%
                      </text>
                      <text
                        className="text-16p text-center text-white "
                        x="100"
                        y="170"
                        dominantBaseline="middle"
                        textAnchor="middle"
                      >
                        beginner
                      </text>
                    </svg>

                    <svg className="  fill-incolour w-48 h-48 ">
                      <g transform="rotate(-90, 100, 100)"> {/* Rotate the circle */}
                        <circle
                          cx="120"
                          cy="95"
                          r="60"
                          stroke="#141326"
                          stroke-width="18"
                          fill="transparent"
                          className="text-gray-700"
                        />

                        <circle
                          cx="120"
                          cy="95"
                          r="60"
                          stroke="#00A6C2"
                          stroke-width="20"
                          fill="transparent"
                          strokeDasharray={circumference}
                          strokeDashoffset={circumference - 0.4 * circumference}
                          className="text-blue-500"
                        />
                      </g>
                      <text
                        className="text-3xl text-center text-white"
                        x="100"
                        y="85"
                        dominantBaseline="middle"
                        textAnchor="middle"
                        fill="white"
                      >
                        40%
                      </text>
                      <text
                        className="text-16p text-center text-white "
                        x="100"
                        y="170"
                        dominantBaseline="middle"
                        textAnchor="middle"
                      >
                        Intermediate
                      </text>
                    </svg>
                    <svg className="  fill-adcolour w-48 h-48 ">
                      <g transform="rotate(-90, 100, 100)"> {/* Rotate the circle */}
                        <circle
                          cx="120"
                          cy="95"
                          r="60"
                          stroke="#141326"
                          stroke-width="18"
                          fill="transparent"
                          className="text-gray-700"
                        />

                        <circle
                          cx="120"
                          cy="95"
                          r="60"
                          stroke="#E3823C"
                          stroke-width="20"
                          fill="transparent"
                          strokeDasharray={circumference}
                          strokeDashoffset={circumference - 0.8 * circumference}
                          className="text-blue-500"
                        />
                      </g>
                      <text
                        className="text-3xl text-center text-white"
                        x="100"
                        y="85"
                        dominantBaseline="middle"
                        textAnchor="middle"
                        fill="white"
                      >
                        80%
                      </text>
                      <text
                        className="text-16p text-center text-white "
                        x="100"
                        y="170"
                        dominantBaseline="middle"
                        textAnchor="middle"
                      >
                        Advanced
                      </text>
                    </svg>
                  </div>
                </div>
                <div className={"  dashboardedu2 text-fontColor m-5 mb-10 rounded shadow-xl"}>
                  <div className="flex justify-between ">
                    <div className={"text-fontColor  m-2 mb-4"}>Course Bar</div>
                    {/* <div className={"  px-5 py-1 m-2 mb-4 sortby"}>Sort By</div> */}
                  </div>
                  <div class="relative flex flex-col min-w-0 break-words shadow-lg rounded mycouse">
                    <table className="items-center w-full border-collapse text-blueGray-700  ">
                      <thead className="thead-light CourseBar">
                        <tr>
                          <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border-solid border-blueGray-100 py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                            Name
                          </th>
                          <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle  border-solid border-blueGray-100 py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                            Progress
                          </th>
                          <th className="px-7 bg-blueGray-50 text-blueGray-500 align-middle  border-solid border-blueGray-100 py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                            Difficulty
                          </th>
                          <th className="px-4 bg-blueGray-50 text-blueGray-700 align-middle   border-solid border-blueGray-100 py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px" />
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border-t-0 px-6 align-middle border-l-0 border border-r-0 text-xs whitespace-nowrap text-left">
                            <div className="max-w-[180px] overflow-hidden overflow-ellipsis">
                              Financial Foundations: Building Your Financial Future
                            </div>
                          </td>
                          <td className="border-t-0 px-6 align-middle border-l-0 border border-r-0 text-xs whitespace-nowrap  ">
                            <div className="container mx-auto py-8">
                              <ProgressBar progress={progress} />
                            </div>
                          </td>
                          <td className="border-t-0 px-6 align-middle border-l-0 border border-r-0 text-xs whitespace-nowrap  ">
                            <div className="py-1 px-4 w-[84px] h-[24px] bg-lvlBeg rounded-[20px]">Beginner</div>
                          </td>
                          <td className="border-t-0 px-1 align-middle border-l-0 border border-r-0 text-xs whitespace-nowrap ">
                            <div className={`continue bg-continuebutton text-black  py-1 px-5  cursor-pointer text-clip font-medium  `}>Continue</div>
                          </td>
                        </tr>

                        <tr>
                          <td className="border-t-0 px-6 align-middle border-l-0 border border-r-0 text-xs whitespace-nowrap text-left">
                            <div className="max-w-[180px] overflow-hidden overflow-ellipsis">
                              Financial Foundations: Building Your Financial Future
                            </div>
                          </td>
                          <td className="border-t-0 px-6 align-middle border-l-0 border border-r-0 text-xs whitespace-nowrap  ">
                            <div className="container mx-auto py-8">
                              <ProgressBar progress={progress} />
                            </div>
                          </td>
                          <td className="border-t-0 px-6 align-middle border-l-0 border border-r-0 text-xs whitespace-nowrap  ">
                            <div className="py-1 px-4 w-[84px] h-[24px] bg-lvlBeg rounded-[20px]">Beginner</div>
                          </td>
                          <td className="border-t-0 px-1 align-middle border-l-0 border border-r-0 text-xs whitespace-nowrap ">
                            <div className={`continue bg-continuebutton text-black  py-1 px-5  cursor-pointer text-clip font-medium  `}>Continue</div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="flex flex-col justify-center items-center mt-4">
                    <Link to='/course'>
                      <div class=" viewmore px-5 py-2 my-2 cursor-pointer font-medium rounded border ">
                        View More
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="  dashboard-container3 ">
                <div className={"  dashboardedu3 text-fontColour m-5 pt-15 text-fontColor rounded shadow-xl"}>
                  <div className="flex justify-between ">
                    <div className={"text-fontColor  m-2 "}>Recommeded Module</div>
                    {/* <div className={"  px-5 py-1 m-2  sortby"}>Sort By</div> */}
                  </div>
                  <div className="border m-2 mb-5 h- w-96p border-0 overflow-hidden  relative">
                    {/* <a href="#" class="block w-full h-full"> */}
                    <img alt="blog photo" src={cou2} class="object-cover w-full max-h-40" />
                    <div class="w-full p-4 courseblog mb-10">
                      <p class="font-medium text-indigo-500 text-md">
                        🔥Data-Driven Investment Strategies: Unlocking Opportunities with Analytics
                      </p>
                      <div class="flex flex-wrap items-center justify-starts">
                        <div className="mt-2 mr-2 py-1 px-4 w-[100px] text-[12px] h-[24px] bg-lvlInt rounded-[20px]">Intermediate</div>
                        <div className="mt-2 mr-2 py-1 px-5 w-[100px] text-[12px] h-[24px] bg-courseSection rounded-[20px]">5 chapters</div>
                        <div className="mt-2 mr-2 py-1 px-5 w-[85px] text-[12px] h-[24px] bg-duration rounded-[20px]">60 mins</div>
                        <div className='flex mt-2 mr-2 py-1 px-2  w-[68px] text-[12px] h-[24px] bg-experience rounded-[20px] justify-center'>
                          <img src={logoOnly} alt='experience rate' width={'20px'} className='object-contain mr-[3px]'></img>
                          <div>
                            +20
                          </div>
                        </div>
                      </div>
                      <div class="flex flex-wrap items-center mt-5  justify-end">
                        <Link to='/course/courseOverview'>
                          <div class=" viewmore px-5 py-1 my-1 cursor-pointer font-medium rounded-[9px] border ">
                            View More
                          </div>
                        </Link>
                        <button className=" ml-2 py-[5px] px-[10px] bg-unlock rounded-[9px] text-[10px] text-black cursor-pointer text-nowrap">
                          Unlock at level 2
                        </button>
                      </div>
                    </div>
                    <img alt="blog photo" src={cou3} class="object-cover w-full max-h-40" />
                    <div class="w-full p-4 courseblog mb-10">
                      <p class="font-medium text-indigo-500 text-md">
                        🔥Data-Driven Investment Strategies: Unlocking Opportunities with Analytics
                      </p>
                      <div class="flex flex-wrap items-center justify-starts">
                        <div className="mt-2 mr-2 py-1 px-3 w-[80px] text-[12px] h-[24px] bg-lvlAdv rounded-[20px]">Advanced</div>
                        <div className="mt-2 mr-2 py-1 px-5 w-[105px] text-[12px] h-[24px] bg-courseSection rounded-[20px]">15 chapters</div>
                        <div className="mt-2 mr-2 py-1 px-5 w-[90px] text-[12px] h-[24px] bg-duration rounded-[20px]">360 mins</div>
                        <div className='flex mt-2 mr-2 py-1 px-2  w-[68px] text-[12px] h-[24px] bg-experience rounded-[20px] justify-center'>
                          <img src={logoOnly} alt='experience rate' width={'20px'} className='object-contain mr-[3px]'></img>
                          <div>
                            +20
                          </div>
                        </div>
                      </div>
                      <div class="flex flex-wrap items-center mt-5  justify-end">
                        <Link to='/course/courseOverview'>
                          <div class=" viewmore px-5 py-1 my-1 cursor-pointer font-medium rounded-[9px] border ">
                            View More
                          </div>
                        </Link>
                        <button className=" ml-2 py-[5px] px-[10px] bg-unlock rounded-[9px] text-[10px] text-black cursor-pointer text-nowrap">
                          Unlock at level 3
                        </button>
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
}

export default EduDashboard;
