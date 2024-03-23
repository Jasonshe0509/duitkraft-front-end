import '../styles/main.css';
import '../course/course.css';
import Navigation from "../navigation/navigation";
import Header from "../navigation/header";
import logoOnly from '../assets/sm_logo_only.png';
import cou1 from '../assets/Course/Beginneer Level Financial Foundations Building Your Financial Future.png';
import course_bg from '../assets/bg4.png';
import { Link } from "react-router-dom";

function CourseOverview() {
    const Overviews = [
        {
            image: cou1, title: 'Financial Foundations: Building Your Financial Future', level: 'Beginner', section: '3', duration: '30', xp: '10', unlock: 'Start',
            content:
                <>
                    <p className='mb-4'>This beginner-level course provides a comprehensive introduction to personal finance management. </p>
                    <p className='mb-4'>Participants will learn fundamental concepts such as budgeting, saving, debt management, and basic investment principles.
                        The course emphasizes practical strategies for achieving financial goals and building a solid financial foundation for the future.</p>
                </>
        },
    ]
    return (
        <main>
            <div className="absolute justify-between">
                <img src={course_bg} className="bg" alt="background" />
                <div className="bg h-screen w-screen flex relative">
                    <Navigation />
                    <div className="w-screen justify-between ">
                        <Header title={"Course Overview"} />
                        <div className="courseContainer transition-all">
                            <div className='grid gap-3 w-full p-2 pt-0 md:p-8'>
                                <div className='flex justify-left w-full gap-1.5 overflow-x-auto text-center text-[14px] md:justify-end md:gap-3'>
                                    <div className='text-fontColor bg-allLvl rounded-[20px] px-[10px] py-[6px] cursor-pointer'>All</div>
                                    <div className='text-fontColor bg-lvlBeg rounded-[20px] px-[10px] py-[6px] cursor-pointer'>Beginner</div>
                                    <div className='text-fontColor bg-lvlInt rounded-[20px] px-[10px] py-[6px] cursor-pointer'>Intermediate</div>
                                    <div className='text-fontColor bg-lvlAdv rounded-[20px] px-[10px] py-[6px] cursor-pointer'>Advanced</div>
                                </div>
                                <div className='bg-blackOpacity rounded-[15px] p-5'>
                                    {Overviews.map((overview, index) => (
                                        <div key={index}>
                                            <img src={overview.image} className='h-[250px] object-cover object-left mb-4'></img>
                                            <h2 className='text-fontColor'>{overview.title}</h2>
                                            <div className="flex flex-wrap items-center mb-5 justify-starts text-xs text-center text-fontColor">
                                                {overview.level === 'Beginner'
                                                    ? <div className="mt-2 mr-2 py-1.5 px-2 bg-lvlBeg rounded-[20px]">{overview.level}</div> :
                                                    (overview.level === 'Intermediate' ? <div className="mt-2 mr-2 py-1.5 px-2 bg-lvlInt rounded-[20px]">{overview.level}</div> : <div className="mt-2 mr-2 py-1.5 px-2 bg-lvlAdv rounded-[20px]">{overview.level}</div>)
                                                }
                                                <div className="mt-2 mr-2 py-1.5 px-2 bg-courseSection rounded-[20px]">
                                                    {overview.section} sections
                                                </div>
                                                <div className="mt-2 mr-2 py-1.5 px-2 bg-duration rounded-[20px]">
                                                    {overview.duration} mins
                                                </div>
                                                <div className='flex mt-2 mr-2 py-1.5 px-2 bg-experience rounded-[20px] justify-center'>
                                                    <img src={logoOnly} alt='experience rate' width={'20px'} className='object-contain mr-[3px]'></img>
                                                    <div>
                                                        + {overview.xp}
                                                    </div>
                                                </div>
                                            </div>
                                            <p className='text-fontColor text-justify'>{overview.content}</p>
                                            <div className="flex flex-wrap items-center mt-2 justify-end text-xs text-center">
                                                {overview.unlock === 'Start' ?
                                                    <Link to='/course/financial-foundations-1'>
                                                        <button className="mt-2 mr-2 py-[6px] px-[10px] bg-start rounded-[9px] w-[60px] text-black cursor-pointer">
                                                            {overview.unlock}
                                                        </button>
                                                    </Link>
                                                    :
                                                    <button className="mt-2 mr-2 py-[6px] px-[10px] bg-unlock rounded-[9px] text-black cursor-pointer text-nowrap">
                                                        {overview.unlock}
                                                    </button>
                                                }

                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    );
}

export default CourseOverview;