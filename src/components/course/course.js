import React, { useState } from 'react';
import '../styles/main.css';
import '../course/course.css';
import Navigation from "../navigation/navigation";
import Header from "../navigation/header";
import logoOnly from '../assets/sm_logo_only.png';
import cou1 from '../assets/Course/Beginneer Level Financial Foundations Building Your Financial Future.png';
import cou2 from '../assets/Course/Intermediate Level Data-Driven Investment Strategies Unlocking Opportunities with Analytics.png';
import cou3 from '../assets/Course/Expert level Sustainable Finance and Impact Investing Driving Positive Change through Finance.png';
import course_bg from '../assets/bg4.png';
import { Link } from "react-router-dom";
import Chatbot from '../chatbot/chatbot';


function Course() {
    const [selectedButton, setSelectedButton] = useState('All');

    const recDetails = [
        { image: cou1, title: 'Financial Foundations: Building Your Financial Future', level: 'Beginner', section: '3', duration: '30', xp: '10', unlock: 'Start' },
        { image: cou2, title: 'Data-Driven Investment Strategies: Unlocking Opportunities with Analytics', level: 'Intermediate', section: '5', duration: '60', xp: '20', unlock: 'Unlock at Level 2' },
        { image: cou3, title: 'Sustainable Finance and Impact Investing: Driving Positive Change through Finance', level: 'Advanced', section: '15', duration: '360', xp: '30', unlock: 'Unlock at Level 5' },
    ]
    const courseDetails = [
        { image: cou1, title: 'Financial Foundations: Building Your Financial Future', level: 'Beginner', section: '3', duration: '30', xp: '10', unlock: 'Start' },
        { image: cou2, title: 'Data-Driven Investment Strategies: Unlocking Opportunities with Analytics', level: 'Intermediate', section: '5', duration: '60', xp: '20', unlock: 'Unlock at Level 2' },
        { image: cou3, title: 'Sustainable Finance and Impact Investing: Driving Positive Change through Finance', level: 'Advanced', section: '15', duration: '360', xp: '30', unlock: 'Unlock at Level 5' },
        { image: cou1, title: 'Financial Foundations: Building Your Financial Future', level: 'Beginner', section: '3', duration: '30', xp: '10', unlock: 'Start' },
        { image: cou2, title: 'Data-Driven Investment Strategies: Unlocking Opportunities with Analytics', level: 'Intermediate', section: '5', duration: '60', xp: '20', unlock: 'Unlock at Level 2' },
        { image: cou3, title: 'Sustainable Finance and Impact Investing: Driving Positive Change through Finance', level: 'Advanced', section: '15', duration: '360', xp: '30', unlock: 'Unlock at Level 5' },
        { image: cou1, title: 'Financial Foundations: Building Your Financial Future', level: 'Beginner', section: '3', duration: '30', xp: '10', unlock: 'Start' },
        { image: cou2, title: 'Data-Driven Investment Strategies: Unlocking Opportunities with Analytics', level: 'Intermediate', section: '5', duration: '60', xp: '20', unlock: 'Unlock at Level 2' },
        { image: cou3, title: 'Sustainable Finance and Impact Investing: Driving Positive Change through Finance', level: 'Advanced', section: '15', duration: '360', xp: '30', unlock: 'Unlock at Level 5' },
    ]
    const filteredRecCourse = selectedButton === 'All' ? recDetails : recDetails.filter(rec_course => rec_course.level === selectedButton);
    // Filter the courses based on the selected level
    const filteredCourses = selectedButton === 'All'
        ? courseDetails
        : courseDetails.filter(course => course.level === selectedButton);
    return (
        <main>
            <div className="absolute justify-between">
                <img src={course_bg} className="bg" alt="background" />
                <div className="bg h-screen w-screen flex relative">
                    <Navigation />
                    <div className="w-screen justify-between ">
                        <Header title={"Course"} />
                        <div className="courseContainer transition-all">
                            <div className='grid gap-3 w-full p-2 pt-0 md:p-8'>
                                <div className='flex justify-left w-full gap-1.5 overflow-x-auto text-center text-[14px] md:justify-end md:gap-3'>
                                    <div className='text-fontColor bg-allLvl rounded-[20px] px-[10px] py-[6px] cursor-pointer' onClick={() => setSelectedButton('All')}>All</div>
                                    <div className='text-fontColor bg-lvlBeg rounded-[20px] px-[10px] py-[6px] cursor-pointer' onClick={() => setSelectedButton('Beginner')}>Beginner</div>
                                    <div className='text-fontColor bg-lvlInt rounded-[20px] px-[10px] py-[6px] cursor-pointer' onClick={() => setSelectedButton('Intermediate')}>Intermediate</div>
                                    <div className='text-fontColor bg-lvlAdv rounded-[20px] px-[10px] py-[6px] cursor-pointer' onClick={() => setSelectedButton('Advanced')}>Advanced</div>
                                </div>
                                <h2 className='text-fontColor justify-right'>Recommended Course</h2>
                                <div className='grid grid-cols-1 gap-5 md:grid-cols-3 gap-3'>
                                    {filteredRecCourse.map((details, index) => (
                                        <div key={index}>
                                            <div className="m-auto overflow-hidden rounded-[15px] shadow-lg text-fontColor h-full">
                                                <img alt="blog photo" src={details.image} className="object-cover object-center w-full max-h-40" />
                                                <div className="w-full h-full p-4 bg-blackOpacity">
                                                    <h3>🔥 {details.title}</h3>
                                                    <div className="flex flex-wrap items-center mt-2 justify-starts text-xs text-center">
                                                        {details.level === 'Beginner'
                                                            ? <div className="mt-2 mr-2 py-1.5 px-2 bg-lvlBeg rounded-[20px]">{details.level}</div> :
                                                            (details.level === 'Intermediate' ? <div className="mt-2 mr-2 py-1.5 px-2 bg-lvlInt rounded-[20px]">{details.level}</div> : <div className="mt-2 mr-2 py-1.5 px-2 bg-lvlAdv rounded-[20px]">{details.level}</div>)
                                                        }
                                                        <div className="mt-2 mr-2 py-1.5 px-2 bg-courseSection rounded-[20px]">
                                                            {details.section} sections
                                                        </div>
                                                        <div className="mt-2 mr-2 py-1.5 px-2 bg-duration rounded-[20px]">
                                                            {details.duration} mins
                                                        </div>
                                                        <div className='flex mt-2 mr-2 py-1.5 px-2 bg-experience rounded-[20px] justify-center'>
                                                            <img src={logoOnly} alt='experience rate' width={'20px'} className='object-contain mr-[3px]'></img>
                                                            <div>
                                                                + {details.xp}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-wrap items-center mt-2 justify-end text-xs text-center h-[12%]">
                                                        <Link to='./courseOverview'>
                                                            <div className="mt-2 mr-2 py-[6px] px-[10px] bg-hotTrends rounded-[9px] text-nowrap cursor-pointer">
                                                                View More
                                                            </div>
                                                        </Link>
                                                        {details.unlock === 'Start' ?
                                                            <Link to='./financial-foundations-1'>
                                                                <button className="mt-2 mr-2 py-[6px] px-[10px] bg-start rounded-[9px] w-[60px] text-black cursor-pointer">
                                                                    {details.unlock}
                                                                </button>
                                                            </Link>
                                                            :
                                                            <button className="mt-2 mr-2 py-[6px] px-[10px] bg-unlock rounded-[9px] text-black cursor-pointer text-nowrap">
                                                                {details.unlock}
                                                            </button>
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className='bg-blackOpacity rounded-[15px]'>
                                    <div className='grid grid-cols-1 gap-5 p-5 md:grid-cols-3 gap-3'>
                                        {filteredCourses.map((details, index) => (
                                            <div key={index}>
                                                <div className="m-auto overflow-hidden rounded-[15px] shadow-lg cursor-pointer text-fontColor  h-full">
                                                    <img alt="blog photo" src={details.image} className="object-cover object-center w-full max-h-40" />
                                                    <div className="h-full p-4 bg-blackOpacity">
                                                        <h3>{details.title}</h3>
                                                        <div className="flex flex-wrap items-center mt-2 justify-starts text-xs text-center">
                                                            {details.level === 'Beginner'
                                                                ? <div className="mt-2 mr-2 py-1.5 px-2 bg-lvlBeg rounded-[20px]">{details.level}</div> :
                                                                (details.level === 'Intermediate' ? <div className="mt-2 mr-2 py-1.5 px-2 bg-lvlInt rounded-[20px]">{details.level}</div> : <div className="mt-2 mr-2 py-1.5 px-2 bg-lvlAdv rounded-[20px]">{details.level}</div>)
                                                            }
                                                            <div className="mt-2 mr-2 py-1.5 px-2 bg-courseSection rounded-[20px]">
                                                                {details.section} sections
                                                            </div>
                                                            <div className="mt-2 mr-2 py-1.5 px-2 bg-duration rounded-[20px]">
                                                                {details.duration} mins
                                                            </div>
                                                            <div className='flex mt-2 mr-2 py-1.5 px-2 bg-experience rounded-[20px] justify-center'>
                                                                <img src={logoOnly} alt='experience rate' width={'20px'} className='object-contain mr-[3px]'></img>
                                                                <div>
                                                                    + {details.xp}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-wrap items-center mt-2 justify-end text-xs text-center">
                                                            <Link to='./courseOverview'>
                                                                <div className="mt-2 mr-2 py-[6px] px-[10px] bg-hotTrends rounded-[9px] text-nowrap cursor-pointer">
                                                                    View More
                                                                </div>
                                                            </Link>
                                                            {details.unlock === 'Start' ?
                                                                <Link to='./financial-foundations-1'>
                                                                    <button className="mt-2 mr-2 py-[6px] px-[10px] bg-start rounded-[9px] w-[60px] text-black cursor-pointer">
                                                                        {details.unlock}
                                                                    </button>
                                                                </Link>
                                                                :
                                                                <button className="mt-2 mr-2 py-[6px] px-[10px] bg-unlock rounded-[9px] text-black cursor-pointer text-nowrap">
                                                                    {details.unlock}
                                                                </button>
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Chatbot />
        </main >

    );
}

export default Course;