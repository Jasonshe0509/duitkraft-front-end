import '../styles/main.css';
import '../news/news.css';
import Navigation from "../navigation/navigation";
import Header from "../navigation/header";
import news_bg from "../assets/bg2.png"
import finance1 from "../assets/News/vanguard savers.webp"
import Chatbot from '../chatbot/chatbot';

function FinanceNews() {
    const financeTag = (
        <div className="text-xs py-1.5 px-2 text-fontColor bg-darkGreen rounded-[20px] w-fit mb-4">Finance</div>
    );

    const Finances = [{
        image: finance1, title: 'A Record Number Of Vanguard Savers Tapped 401ks for Emergency Funds In 2023', date: '8 Mac 2024',
        content: <><p>As inflation and high interest rates pressure household budgets, more people are using their retirement plans as a
            kind of self-funded safety net, according to a new report.<br /><br />Out of people with 401ks through Vanguard,
            3.6% took &ldquo;hardship withdrawals&rdquo; in 2023, up from 2.8% in 2022, the financial finance said in a report
            Monday. That was
            the highest level in at least the 19 years Vanguard has been keeping track.<br /><br />Rules changes in recent years
            have made it easier for people to tap into their 401ks in an emergency. At the same time, more companies are
            automatically enrolling people in retirement savings plans, and automatically increasing the amount they contribute
            each year as well. Those increased
            savings have become a lifeline as rapid cost-of-living increasesand high interest rates on
            consumer loans have made it harder for many households to make ends meet.<br /><br />&ldquo;Given that
            it&rsquo;s now easier to request a hardship withdrawal and that automatic enrollment is helping more workers save
            for retirement, especially lower-income workers, a modest increase isn't surprising,&rdquo; Vanguard said in the
            report, which was a preview of a more detailed analysis of retirement trends the finance releases each June.</p>
            <p>Normally,withdrawing funds from your 401k ahead of schedule comes with a 10% tax penalty, and the money you get
                also counts as income for tax purposes. Emergency withdrawals let you avoid those drawbacks, but can only be used to
                meet an "immediate and heavy financial need," not counting consumer purchases like boats and
                televisions.<br /><br />The report paints a complicated picture of how retirement savers were doing amid the
                economic crosswinds of 2023. Workers had plentiful jobs and pay raises in a hot
                labor market but faced high inflation for consumer goods and services. That pain was compounded by the Federal
                Reserve&rsquo;s tough medicine to subdue that inflation&mdash;the Fed&rsquo;s interest rate hikes pushed up interest
                rates on mortgages, credit cards, and other consumer loans to multi-decade highs.<br /><br />In addition to
                increasingly using their 401ks as emergency funds, retirement savers benefitted from the booming stock market, with
                the average account balance growing 19%, according to Vanguard.<br /><br />&ldquo;Participants generally remained
                resilient through 2023.While there were a few signals of a possible uptick in financial stress, overall,
                participants' retirement plan behavior remained in line with previous years, and most continued to maintain a
                long-term view,&rdquo; the finance said.</p></>
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
                                    <div className='text-fontColor bg-darkRed btnCrypto hover:bg-grayRed focus:bg-grayRed'>Market</div>
                                    <div className='text-fontColor bg-darkGray1 btnCompany hover:bg-grayGray1 focus:bg-grayGray1'>Company</div>
                                    <div className='text-fontColor bg-darkGreen btnFinance hover:bg-grayGreen focus:bg-grayGreen'>Finance</div>
                                    <div className='text-fontColor bg-darkGreen1 btnEconomy hover:bg-grayGreen1 focus:bg-grayGreen1'>Economy</div>
                                </div>
                                <div className='bg-blackOpacity rounded-[15px] p-5'>
                                    {Finances.map((finance, index) => (
                                        <div key={index}>
                                            <img src={finance.image} className='h-[250px] object-cover object-left mb-4'></img>
                                            <h3 className='text-fontColor'>{finance.title}</h3>
                                            <p className='text-fontColor my-2'>Published on: {finance.date}</p>
                                            {financeTag}
                                            <p className='text-fontColor text-justify'>{finance.content}</p>
                                        </div>
                                    ))}
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

export default FinanceNews;