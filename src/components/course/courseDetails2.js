import '../styles/main.css';
import '../course/course.css';
import Navigation from "../navigation/navigation";
import Header from "../navigation/header";
import logoOnly from '../assets/sm_logo_only.png';
import course_bg from '../assets/bg4.png';
import { Link } from "react-router-dom";
import { CheckCircleIcon, PlayCircleIcon, CheckBadgeIcon, ClipboardDocumentListIcon } from '@heroicons/react/24/outline'
import Chatbot from '../chatbot/chatbot';
import { useState } from 'react';
import QuizModal from './quizModal';


function CourseDetails() {
    const [quizOpenModal, setQuizOpenModal] = useState(false);
    const couDetails = [
        {
            title: 'Financial Foundations: Building Your Financial Future', level: 'Beginner', section: '3', duration: '30', xp: '10',
            next: 'Quizz'
        }
    ]
    return (
        <main>
            <div className="absolute justify-between">
                <img src={course_bg} className="bg" alt="background" />
                <div className="bg h-screen w-screen flex relative">
                    <Navigation />
                    <div className="w-screen justify-between ">
                        <Header title={"Course Details"} />
                        <div className="courseContainer transition-all">
                            <div className='grid gap-3 w-full p-2 pt-0 md:p-8'>
                                <div className='flex justify-left w-full gap-1.5 overflow-x-auto text-center text-[14px] md:justify-end md:gap-3'>
                                    <div className='text-fontColor bg-allLvl rounded-[20px] px-[10px] py-[6px] cursor-pointer'>All</div>
                                    <div className='text-fontColor bg-lvlBeg rounded-[20px] px-[10px] py-[6px] cursor-pointer'>Beginner</div>
                                    <div className='text-fontColor bg-lvlInt rounded-[20px] px-[10px] py-[6px] cursor-pointer'>Intermediate</div>
                                    <div className='text-fontColor bg-lvlAdv rounded-[20px] px-[10px] py-[6px] cursor-pointer'>Advanced</div>
                                </div>
                            </div>
                            <div className='bg-blackOpacity rounded-[15px] p-8 mx-5'>
                                {couDetails.map((couDetail, index) => (
                                    <div key={index}>
                                        <h2 className='text-fontColor'>{couDetail.title}</h2>
                                        <div className="flex flex-wrap items-center mb-5 justify-starts text-xs text-center text-fontColor">
                                            {couDetail.level === 'Beginner'
                                                ? <div className="mt-2 mr-2 py-1.5 px-2 bg-lvlBeg rounded-[20px]">{couDetail.level}</div> :
                                                (couDetail.level === 'Intermediate' ? <div className="mt-2 mr-2 py-1.5 px-2 bg-lvlInt rounded-[20px]">{couDetail.level}</div> : <div className="mt-2 mr-2 py-1.5 px-2 bg-lvlAdv rounded-[20px]">{couDetail.level}</div>)
                                            }
                                            <div className="mt-2 mr-2 py-1.5 px-2 bg-courseSection rounded-[20px]">
                                                {couDetail.section} sections
                                            </div>
                                            <div className="mt-2 mr-2 py-1.5 px-2 bg-duration rounded-[20px]">
                                                {couDetail.duration} mins
                                            </div>
                                            <div className='flex mt-2 mr-2 py-1.5 px-2 bg-experience rounded-[20px] justify-center'>
                                                <img src={logoOnly} alt='experience rate' width={'20px'} className='object-contain mr-[3px]'></img>
                                                <div>
                                                    + {couDetail.xp}
                                                </div>
                                            </div>
                                        </div>
                                        <div className='grid grid-cols-1 gap-8 md:grid-cols-5'>
                                            <div className='col-span-3 text-fontColor text-justify'>
                                                <h3 className='mb-4'>Chapter 3: Planning for Financial Goals and Future</h3>
                                                <p className='mb-4'>In the final section, participants will learn how to translate their financial goals into actionable plans, setting themselves up for long-term success.</p>
                                                <p className='mb-4'>They will discover the importance of setting SMART (Specific, Measurable, Achievable, Relevant, Time-bound) financial goals, whether it's saving for retirement, purchasing a home, or funding their children's education. Through practical exercises, participants will develop personalized financial plans, outlining the steps required to achieve their objectives within a specified timeframe.</p>
                                                <p className='mb-4'>Delving into retirement planning, participants will explore various retirement savings vehicles, such as employer-sponsored retirement plans (e.g., 401(k) or 403(b)), individual retirement accounts (IRAs), and annuities. They will learn about the tax advantages of these retirement accounts and strategies to maximize their savings potential, ensuring a comfortable retirement lifestyle. Furthermore, participants will discover wealth-building strategies, including tax-efficient investing, estate planning, and charitable giving, laying the groundwork for generational wealth and financial legacy.</p>
                                                <p className='mb-4'>By the end of this section, participants will emerge with a clear roadmap for their financial future, equipped with the knowledge and confidence to navigate life's financial challenges successfully.</p>
                                            </div>
                                            <div className='col-span-2 text-fontColor text-justify'>
                                                <div className='bg-blackOpacity1 rounded-[15px] px-6 py-4'>
                                                    <h3 className='mb-4 text-[20px]'>Content List</h3>
                                                    <ol className='list-decimal ml-2 text-left'>
                                                        <li>
                                                            <div className='flex'>
                                                                Understanding Personal Finance Basics<CheckBadgeIcon className='w-[20px] ml-[5px]'></CheckBadgeIcon>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className='flex'>
                                                                Introduction to Basic Investment Principles<CheckBadgeIcon className='w-[20px] ml-[5px]'></CheckBadgeIcon>
                                                            </div>
                                                        </li>
                                                        <li>Planning for Financial Goals and Future</li>
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='grid grid-cols-1 md:grid-cols-2'>
                                            <div className="flex flex-wrap items-center mt-2 justify-starts text-xs text-center">
                                                <Link to='/course/financial-foundations-2'>
                                                    <button className="mt-2 mr-2 py-[6px] px-[10px] bg-start rounded-[9px] flex cursor-pointer">
                                                        <PlayCircleIcon className='w-[15px] mr-[5px] rotate-180'></PlayCircleIcon>Previous
                                                    </button>
                                                </Link>
                                            </div>
                                            <div className="flex items-center mt-2 justify-end text-xs text-center">
                                                {couDetail.next === 'Mark as completed' ?
                                                    <Link to='/course/financial-foundations-2'>
                                                        <button className="mt-2 mr-2 py-[6px] px-[10px] bg-unlock rounded-[9px] text-black cursor-pointer text-nowrap">
                                                            <div className='flex'> Mark as Completed<CheckCircleIcon className='w-[15px] ml-[5px]'></CheckCircleIcon></div>
                                                        </button>
                                                    </Link>
                                                    :
                                                    <button className="mt-2 mr-2 py-[6px] px-[10px] bg-unlock rounded-[9px] text-black cursor-pointer text-nowrap" onClick={() => { setQuizOpenModal(true); }}>
                                                        <div className='flex'> Quiz<ClipboardDocumentListIcon className='w-[15px] ml-[5px]'></ClipboardDocumentListIcon></div>
                                                    </button>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Chatbot />
            {quizOpenModal && <QuizModal setOpenModal={setQuizOpenModal} />}
        </main>
    );
}

export default CourseDetails;