import '../styles/main.css';
import '../news/news.css';
import Navigation from "../navigation/navigation";
import Header from "../navigation/header";
import news_bg from "../assets/bg2.png"
import market1 from "../assets/News/S&P500.webp"
import Chatbot from '../chatbot/chatbot';

function MarketNews() {
    const marketTag = (
        <div className="text-xs py-1.5 px-2 text-fontColor bg-darkRed rounded-[20px] w-fit mb-4">Market</div>
    );

    const Markets = [{
        image: market1, title: 'Tesla Shares Jump After Model Y Price Increase', date: '8 Mac 2024',
        content: <><p className='mb-4'>Major U.S. equities indexes jumped higher on Monday ahead of this week's
            Federal Reserve meeting. Although the central bank is likely to hold interest rates steady for now,
            investors will be watching closely for confirmation that rate cuts are on the horizon.</p>
            <p className='mb-4'>Optimism around artificial intelligence
                (AI) opportunities once again took center stage as Nvidia (NVDA) kicked off its
                GPU technology conference, underpinning gains for the tech sector and several of its big names.</p>
            <p className='mb-4'>The S&amp;P 500 added 0.6% on the day. The strong performance from the tech sector helped the Nasdaq add 0.8%, while
                the Dow closed the session 0.2% higher.</p>
            <p className='mb-4'>Tesla (TSLA) shares led the way for the S&amp;P
                500, popping 6.3% after the company announced a $1,000 price
                increase for the Model Y, its most popular electric vehicle (EV). starting April 1. Tesla had already
                boosted Model Y price tags at the beginning of March after cutting prices on some of its vehicles in China, Europe,
                and the U.S. earlier in the year.</p>
            <p className='mb-4'>Shares of Match Group (MTCH) gained 4.7% Monday. News emerged
                late last week that the owner of Tinder and other online dating platforms had attracted interest from +activist investor Anson Funds. The activist investor is
                reportedly pressuring the company to make changes to its board of directors. Goldman Sachs also included Match Group
                on a list of companies that could benefit from increased productivity thanks to AI.</p>
            <p className='mb-4'>Alphabet (GOOGL, GOOG) shares jumped after reports that
                the Google parent company is in talks with
                Apple (AAPL) to incorporate Google's Gemini AI
                technology in future iPhone operating systems. While Apple is reportedly developing its own AI capabilities, it may
                license technologies from other companies for performing larger AI tasks like generating long texts and images.
                Apple shares were up 0.6% on the day.</p>
            <p className='mb-4'>Super Micro Computer (SMCI) shares posted the steepest losses
                on the S&amp;P 500 on their first day as a
                component of the benchmark index. After moving higher to start the day, shares of the tech firm reversed
                course, closing the session down 6.4%.</p>
            <p className='mb-4'>Shares of International Paper (IP) tumbled 3.9%
                after reports that one of the company's directors sold around $21,000 worth of the stock. The paper and packaging
                producer has been under pressure amid lower earnings and an uncertain market outlook.</p>
            <p className='mb-4'>Shares of VF Corp. (VFC), the parent company of Vans, The
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
                                <div className='flex justify-left w-full gap-1.5 overflow-x-auto text-center text-[14px] md:justify-end md:gap-3'>
                                    <div className='text-fontColor bg-darkOrange btnAll hover:bg-grayOrange focus:bg-grayOrange'>All</div>
                                    <div className='text-fontColor bg-darkYellow1 btnCrypto hover:bg-grayYellow1 focus:bg-grayYellow1'>Cryptocurrency</div>
                                    <div className='text-fontColor bg-darkRed btnMarket hover:bg-grayRed focus:bg-grayRed'>Market</div>
                                    <div className='text-fontColor bg-darkGray1 btnCompany hover:bg-grayGray1 focus:bg-grayGray1'>Company</div>
                                    <div className='text-fontColor bg-darkGreen btnFinance hover:bg-grayGreen focus:bg-grayGreen'>Finance</div>
                                    <div className='text-fontColor bg-darkGreen1 btnEconomy hover:bg-grayGreen1 focus:bg-grayGreen1'>Economy</div>
                                </div>
                                <div className='grid grid-cols-1 gap-5 md:grid-cols-5'>
                                    <div className='bg-blackOpacity rounded-[15px] p-5 md:p-10 col-span-3'>
                                        {Markets.map((market, index) => (
                                            <div key={index}>
                                                <img src={market.image} className='h-[250px] object-cover object-left mb-4'></img>
                                                <h2 className='text-fontColor'>{market.title}</h2>
                                                <p className='text-fontColor my-2'>Published on: {market.date}</p>
                                                {marketTag}
                                                <p className='text-fontColor text-justify'>{market.content}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className='bg-blackOpacity rounded-[15px] p-5 md:p-10 col-span-2'>
                                        <p>Consectetur eiusmod eiusmod occaecat minim veniam magna consectetur et pariatur duis aliquip et aute labore.</p>
                                        <p>Consectetur eiusmod eiusmod occaecat minim veniam magna consectetur et pariatur duis aliquip et aute labore.</p>
                                        <p>Consectetur eiusmod eiusmod occaecat minim veniam magna consectetur et pariatur duis aliquip et aute labore.</p>
                                        <p>Consectetur eiusmod eiusmod occaecat minim veniam magna consectetur et pariatur duis aliquip et aute labore.</p>
                                        <p>Consectetur eiusmod eiusmod occaecat minim veniam magna consectetur et pariatur duis aliquip et aute labore.</p>
                                        <p>Consectetur eiusmod eiusmod occaecat minim veniam magna consectetur et pariatur duis aliquip et aute labore.</p>
                                        <p>Consectetur eiusmod eiusmod occaecat minim veniam magna consectetur et pariatur duis aliquip et aute labore.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Chatbot/>
        </main>
    )
}

export default MarketNews;