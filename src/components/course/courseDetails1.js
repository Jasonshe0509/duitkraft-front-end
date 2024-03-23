import '../styles/main.css';
import '../course/course.css';
import Navigation from "../navigation/navigation";
import Header from "../navigation/header";
import logoOnly from '../assets/sm_logo_only.png';
import course_bg from '../assets/bg4.png';
import { Link } from "react-router-dom";
import { CheckCircleIcon, PlayCircleIcon, CheckBadgeIcon, ClipboardDocumentListIcon } from '@heroicons/react/24/outline'
import Chatbot from '../chatbot/chatbot';


function CourseDetails() {
    const couDetails = [
        {
            title: 'Financial Foundations: Building Your Financial Future', level: 'Beginner', section: '3', duration: '30', xp: '10',
            next: 'Mark as completed'
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
                                                <h3 className='mb-4'>Chapter 2: Introduction to Basic Investment Principles</h3>
                                                <p className='mb-4'>Welcome to the second section of our course, where we'll explore the exciting world of investments and introduce you to key investment principles.</p>
                                                <ol className='list-decimal ml-4 mb-4'>
                                                    <li className='mb-4 ml-4'>Investment Fundamentals
                                                        <ul className='ml-4 mb-4'>
                                                            <li>Understand the relationship between risk and return and how it impacts your investment decisions.</li>
                                                            <li>Learn about different asset classes, including stocks, bonds, and mutual funds, and their respective risk profiles.</li>
                                                            <li>Explore the importance of diversification and asset allocation in building a well-balanced investment portfolio. Investment Options</li>
                                                        </ul>
                                                    </li>
                                                </ol>
                                                <p className='mb-4'>Gain insights into various investment options available, from traditional securities to alternative investments.</p>
                                                <p className='mb-4'>Understand the advantages and disadvantages of each investment vehicle and how they align with your investment goals.</p>
                                                <p className='mb-4'>Building an Investment Portfolio</p>
                                                <ul className='ml-8 mb-4'>
                                                    <li>Learn how to construct a diversified investment portfolio tailored to your risk tolerance and financial objectives.</li>
                                                    <li>Explore portfolio management techniques, such as rebalancing and asset reallocation, to maintain portfolio alignment over time.</li>
                                                </ul>
                                                <p className='mb-4'>By the end of this section, you'll have a solid understanding of basic investment principles and be equipped to make informed investment decisions that align with your financial goals.</p>
                                                <p className='mb-4'>By the end of this section, you'll have gained practical skills and knowledge to build a strong financial foundation, enabling you to manage your finances with confidence and clarity.</p>
                                            </div>
                                            <div className='col-span-2 text-fontColor text-justify'>
                                                <div className='bg-blackOpacity1 rounded-[15px] px-8 py-4'>
                                                    <h3 className='mb-4 text-[20px]'>Content List</h3>
                                                    <ol className='list-decimal ml-2'>
                                                        <li>
                                                            <div className='flex'>
                                                                Understanding Personal Finance Basics <CheckBadgeIcon className='w-[20px] ml-[5px]'></CheckBadgeIcon>
                                                            </div>
                                                        </li>
                                                        <li>Introduction to Basic Investment Principles</li>
                                                        <li>Planning for Financial Goals and Future</li>
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='grid grid-cols-1 md:grid-cols-2'>
                                            <div className="flex flex-wrap items-center mt-2 justify-starts text-xs text-center">
                                                <Link to='/course/financial-foundations-1'>
                                                    <button className="mt-2 mr-2 py-[6px] px-[10px] bg-start rounded-[9px] flex cursor-pointer">
                                                        <PlayCircleIcon className='w-[15px] mr-[5px] rotate-180'></PlayCircleIcon>Previous
                                                    </button>
                                                </Link>
                                                <Link to='/course/financial-foundations-3'>
                                                    <button className="mt-2 mr-2 py-[6px] px-[10px] bg-start rounded-[9px] flex cursor-pointer">
                                                        Next<PlayCircleIcon className='w-[15px] ml-[5px]'></PlayCircleIcon>
                                                    </button>
                                                </Link>
                                            </div>
                                            <div className="flex items-center mt-2 justify-end text-xs text-center">
                                                {couDetail.next === 'Mark as completed' ?
                                                    <Link to='/course/financial-foundations-3'>
                                                        <button className="mt-2 mr-2 py-[6px] px-[10px] bg-unlock rounded-[9px] text-black cursor-pointer text-nowrap">
                                                            <div className='flex'> Mark as Completed<CheckCircleIcon className='w-[15px] ml-[5px]'></CheckCircleIcon></div>
                                                        </button>
                                                    </Link>
                                                    :
                                                    <button className="mt-2 mr-2 py-[6px] px-[10px] bg-unlock rounded-[9px] text-black cursor-pointer text-nowrap">
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
        </main>
    );
}

export default CourseDetails;