import '../styles/main.css';
import '../course/course.css';
import Navigation from "../navigation/navigation";
import Header from "../navigation/header";
import logoOnly from '../assets/sm_logo_only.png';
import course_bg from '../assets/bg4.png';
import { Link } from "react-router-dom";
import { CheckCircleIcon, PlayCircleIcon } from '@heroicons/react/24/outline'


function CourseDetails() {
    const couDetails = [
        {
            title: 'Financial Foundations: Building Your Financial Future', level: 'Beginner', section: '3', duration: '30', xp: '10',
            next: <div className='flex'> Mark as Completed<CheckCircleIcon className='w-[15px] ml-[5px]'></CheckCircleIcon></div>
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
                                                <h3 className='mb-4'>Chapter 1: Understanding Personal Finance Basics</h3>
                                                <p className='mb-4'>Welcome to the first section of our course, where we'll dive into the fundamental principles of personal finance management. In this section, we'll cover essential topics that form the bedrock of financial literacy, empowering you to take control of your financial future.</p>
                                                <ol className='list-decimal ml-4 mb-4'>
                                                    <li>Budgeting Essentials
                                                    <ul className='ml-4 mb-4'>
                                                        <li>Learn how to create a comprehensive personal budget tailored to your income and expenses.</li>
                                                        <li>Understand the importance of tracking your spending habits to identify areas for improvement.</li>
                                                        <li>Explore budgeting tools and techniques to help you effectively manage your finances.</li>
                                                    </ul>
                                                    </li>
                                                    <li>Savings Strategies
                                                    <ul className='ml-4 mb-4'>
                                                        <li>Discover various saving methods, including setting up emergency funds and saving for short-term and long-term goals.</li>
                                                        <li>Explore strategies to automate your savings and make saving a habit.</li>
                                                        <li>Learn how to prioritize your savings goals and allocate your resources accordingly.</li>
                                                    </ul>
                                                    </li>
                                                    <li>Debt Management
                                                    <ul className='ml-4 mb-4'>
                                                        <li>Understand the different types of debt and their associated risks.</li>
                                                        <li>Learn effective strategies for debt repayment, such as the snowball and avalanche methods.</li>
                                                        <li>Discover techniques to negotiate lower interest rates or consolidate debt for easier repayment.</li>
                                                    </ul>
                                                    </li>
                                                </ol>
                                                <p className='mb-4'>By the end of this section, you'll have gained practical skills and knowledge to build a strong financial foundation, enabling you to manage your finances with confidence and clarity.</p>
                                            </div>
                                            <div className='col-span-2 text-fontColor text-justify'>
                                                <div className='bg-blackOpacity1 rounded-[15px] px-8 py-4'>
                                                    <h3 className='mb-4 text-[20px]'>Content List</h3>
                                                    <ol className='list-decimal ml-4'>
                                                        <li className='h-6 focus:bg-grayOpacity'>Understanding Personal Finance Basics</li>
                                                        <li>Introduction to Basic Investment Principles</li>
                                                        <li>Planning for Financial Goals and Future</li>
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='grid grid-cols-1 md:grid-cols-2'>
                                            <div className="flex flex-wrap items-center mt-2 justify-starts text-xs text-center">
                                                <Link to='/course/courseOverview'>
                                                    <button className="mt-2 mr-2 py-[6px] px-[10px] bg-start rounded-[9px] flex cursor-pointer">
                                                        <PlayCircleIcon className='w-[15px] mr-[5px] rotate-180'></PlayCircleIcon>Previous
                                                    </button>
                                                </Link>
                                                <Link to='/course/financial-foundations-2'>
                                                    <buttonp className="mt-2 mr-2 py-[6px] px-[10px] bg-start rounded-[9px] flex cursor-pointer">
                                                        Next<PlayCircleIcon className='w-[15px] ml-[5px]'></PlayCircleIcon>
                                                    </buttonp>
                                                </Link>
                                            </div>
                                            <div className="flex items-center mt-2 justify-end text-xs text-center">
                                                {couDetail.next === <div className='flex'> Mark as Completed<CheckCircleIcon className='w-[15px] ml-[5px]'></CheckCircleIcon></div> ?
                                                    <Link to='/course/financial-foundations-2'>
                                                        <button className="mt-2 mr-2 py-[6px] px-[10px] bg-start rounded-[9px] w-[60px] text-black cursor-pointer">
                                                            {couDetail.next}
                                                        </button>
                                                    </Link>
                                                    :
                                                    <button className="mt-2 mr-2 py-[6px] px-[10px] bg-unlock rounded-[9px] text-black cursor-pointer text-nowrap">
                                                        {couDetail.next}
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
        </main>
    );
}

export default CourseDetails;