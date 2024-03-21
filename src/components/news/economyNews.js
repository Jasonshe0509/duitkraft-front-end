import '../styles/main.css';
import '../news/news.css';
import Navigation from "../navigation/navigation";
import Header from "../navigation/header";
import news_bg from "../assets/bg2.png"
import economy1 from "../assets/News/homebuilders.webp"

function EconomyNews() {
    const ecomonyTag = (
        <div className="text-xs py-1.5 px-2 text-fontColor bg-darkGreen1 rounded-[20px] w-fit mb-4">Economy</div>
    );

    const Economys = [{
        image: economy1, title: 'Refinancing Mortgages Has Become Nearly Unheard Of', date: '8 Mac 2024',
        content: <><p>With mortgage rates at or near multi-decade highs over the last year, home loan refinancing has gone nearly extinct.<br /><br />Fewer people applied for home loan refinancing over the last year as of February than at any time since at least 2013, data from the Federal Reserve Bank of New York released Monday showed.
            The refinancing application rate fell to 1% from 3% in October, and well below the peak of 27% reached in June 2021 according to the Survey of Consumer Expectations credit access survey, which is conducted three times each year.</p><br />
            <p>Mortgage rates surged in 2023, pushed up by the Federal Reserve&rsquo;s campaign of anti-inflation interest rate hikes. The average rate offered for a 30-year mortgage peaked at 7.79% in October, the highest since 2000, according to Freddie Mac. Since then, it&rsquo;s fallen to 6.74% as of last week.<br /><br />Since it makes little financial sense for borrowers to take out a higher-interest home loan than the one they currently have, it&rsquo;s not a very appealing option at the moment.
                The Mortgage Bankers Association, which collects its own data on home loan applications, has also noted the dearth of refinancing activity.<br /><br />&ldquo;We expect that most of this activity reflects borrowers who took out a loan at or near the peak of rates in the past two years,&rdquo; Mike Fratantoni, chief economist at the association, said in a press release.&nbsp;</p>
        </>
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
                                    {Economys.map((economy, index) => (
                                        <div key={index}>
                                            <img src={economy.image} className='h-[250px] object-cover object-left mb-4'></img>
                                            <h3 className='text-fontColor'>{economy.title}</h3>
                                            <p className='text-fontColor my-2'>Published on: {economy.date}</p>
                                            {ecomonyTag}
                                            <p className='text-fontColor text-justify'>{economy.content}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default EconomyNews;