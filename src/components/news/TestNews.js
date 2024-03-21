import '../styles/main.css';
import '../news/news.css';
import Navigation from "../navigation/navigation";
import Header from "../navigation/header";
import news_bg from '../assets/bg2.png';
import React, { useState } from 'react';
import market1 from "../assets/News/S&P500.webp"
import crypto1 from "../assets/News/Bitcoin and Ether Prices Fall.webp"
import company1 from "../assets/News/CISCO.webp"
import economy1 from "../assets/News/homebuilders.webp"
import finance1 from "../assets/News/vanguard savers.webp"
import { Link } from "react-router-dom";

function TestNews() {
    const trendingTag = (<div className="text-xs py-1.5 px-2 text-fontColor bg-hotTrends rounded-[20px]">🔥Trending</div>);
    const cryptoTag = (<div className="text-xs py-1.5 px-2 text-fontColor bg-darkYellow1 rounded-[20px] w-fit">Crypto</div>);
    const marketTag = (<div className="text-xs py-1.5 px-2 text-fontColor bg-darkRed rounded-[20px] w-fit">Market</div>);
    const companyTag = (<div className="text-xs py-1.5 px-2 text-fontColor bg-darkGray1 rounded-[20px] w-fit">Company</div>);
    const financeTag = (<div className="text-xs py-1.5 px-2 text-fontColor bg-darkGreen rounded-[20px] w-fit">Finance</div>);
    const economyTag = (<div className="text-xs py-1.5 px-2 text-fontColor bg-darkGreen1 rounded-[20px] w-fit">Economy</div>);
    const [selectedButton, setSelectedButton] = useState('All');

    const Markets = [{
        image: market1, title: 'Tesla Shares Jump After Model Y Price Increase', date: '8 Mac 2024',
        content: <><p>Major U.S. equities indexes jumped higher on Monday ahead of this week's
            Federal Reserve meeting. Although the central bank is likely to hold interest rates steady for now,
            investors will be watching closely for confirmation that rate cuts are on the horizon.</p>
            <p>Optimism around artificial intelligence
                (AI) opportunities once again took center stage as Nvidia (NVDA) kicked off its
                GPU technology conference, underpinning gains for the tech sector and several of its big names.</p>
            <p>The S&amp;P 500 added 0.6% on the day. The strong performance from the tech sector helped the Nasdaq add 0.8%, while
                the Dow closed the session 0.2% higher.</p>
            <p>Tesla (TSLA) shares led the way for the S&amp;P
                500, popping 6.3% after the company announced a $1,000 price
                    increase for the Model Y, its most popular electric vehicle (EV). starting April 1. Tesla had already
                boosted Model Y price tags at the beginning of March after cutting prices on some of its vehicles in China, Europe,
                and the U.S. earlier in the year.</p>
            <p>Shares of Match Group (MTCH) gained 4.7% Monday. News emerged
                late last week that the owner of Tinder and other online dating platforms had attracted interest from +activist investor Anson Funds. The activist investor is
                reportedly pressuring the company to make changes to its board of directors. Goldman Sachs also included Match Group
                on a list of companies that could benefit from increased productivity thanks to AI.</p>
            <p>Alphabet (GOOGL, GOOG) shares jumped after reports that
                the Google parent company is in talks with
                    Apple (AAPL) to incorporate Google's Gemini AI
                technology in future iPhone operating systems. While Apple is reportedly developing its own AI capabilities, it may
                license technologies from other companies for performing larger AI tasks like generating long texts and images.
                Apple shares were up 0.6% on the day.</p>
            <p>Super Micro Computer (SMCI) shares posted the steepest losses
                on the S&amp;P 500 on their first day as a
                    component of the benchmark index. After moving higher to start the day, shares of the tech firm reversed
                course, closing the session down 6.4%.</p>
            <p>Shares of International Paper (IP) tumbled 3.9%
                after reports that one of the company's directors sold around $21,000 worth of the stock. The paper and packaging
                producer has been under pressure amid lower earnings and an uncertain market outlook.</p>
            <p>Shares of VF Corp. (VFC), the parent company of Vans, The
                North Face, and other apparel brands, sank 2.7%. The downturn followed news that a top executive at Vans would step
                down at the end of the month amid ongoing efforts to turn around the struggling brand.</p></>
    }];

    return (
        <main>
            <div className="absolute justify-between">
                <img src={news_bg} className="bg" alt="background" />
                <div className="bg h-screen w-screen flex relative">
                    <Navigation />
                    <div className="w-screen justify-between ">
                        <Header title={"News"} />
                        <div className="newsContainer transition-all">
                            <div className='grid gap-3 w-full p-2 pt-0 md:p-5'>
                                {/* Categories */}
                                <div className='flex justify-left w-full gap-1.5 overflow-x-auto text-center text-[14px] md:justify-end md:gap-3'>
                                    <div className='text-fontColor bg-darkOrange btnAll hover:bg-grayOrange focus:bg-grayOrange' onClick={() => setSelectedButton('All')}>All</div>
                                    <div className='text-fontColor bg-darkYellow1 btnCrypto hover:bg-grayYellow1 focus:bg-grayYellow1' onClick={() => setSelectedButton('Crypto')}>Cryptocurrency</div>
                                    <div className='text-fontColor bg-darkRed btnMarket hover:bg-grayRed focus:bg-grayRed' onClick={() => setSelectedButton('Market')}>Market</div>
                                    <div className='text-fontColor bg-darkGray1 btnCompany hover:bg-grayGray1 focus:bg-grayGray1' onClick={() => setSelectedButton('Company')}>Company</div>
                                    <div className='text-fontColor bg-darkGreen btnFinance hover:bg-grayGreen focus:bg-grayGreen' onClick={() => setSelectedButton('Finance')}>Finance</div>
                                    <div className='text-fontColor bg-darkGreen1 btnEconomy hover:bg-grayGreen1 focus:bg-grayGreen1' onClick={() => setSelectedButton('Economy')}>Economy</div>
                                </div>
                                {/* Trending News */}
                                <h2 className='text-fontColor justify-right'>Trending News</h2>
                                <div className='grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-5'>
                                    {(selectedButton === 'Market' || selectedButton === 'All') && (
                                        <>
                                            <Link to='/marketNews'>
                                                <div className="col-span-1 flex w-full rounded-[15px] bg-blackOpacity p-[15px]">
                                                    <img className="object-cover object-left w-[30%] md:w-[40%] mr-3" src={market1}></img>
                                                    <div className="self-center w-[70%] md:w-[60%]">
                                                        <h3 className="text-fontColor">
                                                            Tesla Shares Jump After Model Y Price Increase
                                                        </h3>
                                                        <p className='text-fontColor text-[12px] my-2'>Published on: 08 Mac 2024</p>
                                                        <div className="flex text-nowrap flex-nowrap items-center justify-starts gap-1">
                                                            {trendingTag}{marketTag}
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </>
                                    )}
                                    {(selectedButton === 'Crypto' || selectedButton === 'All') && (
                                        <>
                                            <div className="col-span-1 flex w-full rounded-[15px] bg-blackOpacity p-[15px]">
                                                <img className="object-cover object-left w-[30%] md:w-[40%] mr-3" src={crypto1}></img>
                                                <div className="w-[70%] md:w-[60%] self-center">
                                                    <h3 className="text-fontColor">
                                                        Bitcoin and Ether Prices Fall After Dencun Upgrade
                                                    </h3>
                                                    <p className='text-fontColor text-[12px] my-2'>Published on: 08 Mac 2024</p>
                                                    <div className="flex text-nowrap items-center justify-starts gap-1">
                                                        {trendingTag}{cryptoTag}
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                    {(selectedButton === 'Company' || selectedButton === 'All') && (
                                        <>
                                            <div className="col-span-1 flex w-full rounded-[15px] bg-blackOpacity p-[15px]">
                                                <img className="object-cover object-left w-[30%] md:w-[40%] mr-3" src={company1}></img>
                                                <div className="w-[70%] md:w-[60%] self-center">
                                                    <h3 className="text-fontColor">
                                                        Cisco Systems Completes Its $28 Billion Purchase of Splunk
                                                    </h3>
                                                    <p className='text-fontColor text-[12px] my-2'>Published on: 08 Mac 2024</p>
                                                    <div className="flex text-nowrap items-center justify-starts gap-1">
                                                        {trendingTag}{companyTag}
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                    {(selectedButton === 'Finance' || selectedButton === 'All') && (
                                        <>
                                            <div className="col-span-1 flex w-full rounded-[15px] bg-blackOpacity p-[15px]">
                                                <img className="object-cover object-left w-[30%] md:w-[40%] mr-3" src={finance1}></img>
                                                <div className="w-[70%] md:w-[60%] self-center">
                                                    <h3 className="text-fontColor">
                                                        A Record Number Of Vanguard Savers Tapped 401ks for Emergency Funds In 2023
                                                    </h3>
                                                    <p className='text-fontColor text-[12px] my-2'>Published on: 08 Mac 2024</p>
                                                    <div className="flex text-nowrap items-center justify-starts gap-1">
                                                        {trendingTag}{financeTag}
                                                    </div>
                                                </div>
                                            </div>

                                        </>
                                    )}
                                    {(selectedButton === 'Economy' || selectedButton === 'All') && (
                                        <>
                                            <div className="col-span-1 flex w-full rounded-[15px] bg-blackOpacity p-[15px]">
                                                <img className="object-cover object-left w-[30%] md:w-[40%] mr-3" src={economy1}></img>
                                                <div className="w-[70%] md:w-[60%] self-center">
                                                    <h3 className="text-fontColor">
                                                        New York Area Business Activity Stays Steady in March
                                                    </h3>
                                                    <p className='text-fontColor text-[12px] my-2'>Published on: 08 Mac 2024</p>
                                                    <div className="flex text-nowrap items-center justify-starts gap-1">
                                                        {trendingTag}{economyTag}
                                                    </div>
                                                </div>
                                            </div>

                                        </>
                                    )}
                                </div>
                                {/* News */}
                                <div className='bg-blackOpacity rounded-[15px]'>
                                    {(selectedButton === 'Market' || selectedButton === 'All') && (
                                        <>
                                            <div className="flex p-[15px] md:max-h-[200px]">
                                                <img className="object-cover object-left w-[20%] mr-3" src={market1}></img>
                                                <div className="self-center w-[80%]">
                                                    <h3 className="text-fontColor">
                                                        Tesla Shares Jump After Model Y Price Increase
                                                    </h3>
                                                    <p className='text-fontColor text-[12px] my-2'>Published on: 08 Mac 2024</p>
                                                    {marketTag}
                                                    <p className='text-fontColor my-2'>Major U.S. equities indexes jumped higher on Monday... </p>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                    {(selectedButton === 'Company' || selectedButton === 'All') && (
                                        <>
                                            <div className="flex p-[15px] md:max-h-[200px]">
                                                <img className="object-cover object-left w-[20%] mr-3" src={company1}></img>
                                                <div className="self-center w-[80%]">
                                                    <h3 className="text-fontColor">
                                                        Cisco Systems Completes Its $28 Billion Purchase of Splunk
                                                    </h3>
                                                    <p className='text-fontColor text-[12px] my-2'>Published on: 08 Mac 2024</p>
                                                    {companyTag}
                                                    <p className='text-fontColor my-2'>(CISCO) said it closed its $28 billion acquisition of cybersecurity provider Splunk...</p>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                    {(selectedButton === 'Crypto' || selectedButton === 'All') && (
                                        <>
                                            <div className="flex p-[15px] md:max-h-[200px]">
                                                <img className="object-cover object-left w-[20%] mr-3" src={crypto1}></img>
                                                <div className="self-center w-[80%]">
                                                    <h3 className="text-fontColor">
                                                        Bitcoin and Ether Prices Fall After Dencun Upgrade
                                                    </h3>
                                                    <p className='text-fontColor text-[12px] my-2'>Published on: 08 Mac 2024</p>
                                                    {cryptoTag}
                                                    <p className='text-fontColor my-2'>Last week proved to be a roller-coaster ride for bitcoin (BTC) investors...</p>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                    {(selectedButton === 'Finance' || selectedButton === 'All') && (
                                        <>
                                            <div className="flex p-[15px] md:max-h-[200px]">
                                                <img className="object-cover object-left w-[20%] mr-3" src={finance1}></img>
                                                <div className="self-center w-[80%]">
                                                    <h3 className="text-fontColor">
                                                        A Record Number Of Vanguard Savers Tapped 401ks for Emergency Funds In 2023
                                                    </h3>
                                                    <p className='text-fontColor text-[12px] my-2'>Published on: 08 Mac 2024</p>
                                                    {financeTag}
                                                    <p className='text-fontColor my-2'>As inflation and high interest rates pressure household budgets...</p>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                    {(selectedButton === 'Economy' || selectedButton === 'All') && (
                                        <>
                                            <div className="flex p-[15px] md:max-h-[200px]">
                                                <img className="object-cover object-left w-[20%] mr-3" src={economy1}></img>
                                                <div className="self-center w-[80%]">
                                                    <h3 className="text-fontColor">
                                                        New York Area Business Activity Stays Steady in March
                                                    </h3>
                                                    <p className='text-fontColor text-[12px] my-2'>Published on: 08 Mac 2024</p>
                                                    {economyTag}
                                                    <p className='text-fontColor my-2'>Business activity in the New York and Northern New Jersey area stabilized in March...</p>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default TestNews;
