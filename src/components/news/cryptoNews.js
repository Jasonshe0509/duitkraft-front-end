import '../styles/main.css';
import '../news/news.css';
import Navigation from "../navigation/navigation";
import Header from "../navigation/header";
import news_bg from "../assets/bg2.png"
import crypto1 from "../assets/News/Bitcoin and Ether Prices Fall.webp"
import Chatbot from '../chatbot/chatbot';

function CryptoNews() {
    const cryptoTag = (
        <div className="text-xs py-1.5 px-2 text-fontColor bg-darkYellow1 rounded-[20px] w-fit mb-4">Crypto</div>
    );

    const Cryptos = [{
        image: crypto1, title: 'Bitcoin and Ether Prices Fall After Dencun Upgrade', date: '8 Mac 2024',
        content: <><h3 className='mb-4'>What Happened in Crypto Markets Last Week?</h3>
        <p className='mb-4'>Last week proved to be a roller-coaster ride for bitcoin (BTC) investors, as the largest cryptocurrency by market capitalization topped another lifetime high of $73,000 to start the week but fell below the $65,000 mark by Sunday after a sell-off. Ethereum's Dencun upgrade fulfilled its intended goal by lowering fees on various Layer 2 networks but ether (ETH) prices also weakened at the end of the week.</p>
        <p className='mb-4'>Elsewhere, prosecutors recommended that former FTX Chief Executive Officer (CEO) Sam Bankman-Fried receive up to 50 years in prison for charges related to fraud and money laundering. Additionally, digital asset manager Grayscale Investments has filed for a second spot bitcoin ETF in an effort to offer lower its management fees.</p>
        <h3 className='mb-4'>Dencun Upgrade Leads to Lower Fees on Ethereum Layer 2 Networks</h3>
        <p className='mb-4'>Following the Dencun upgrade on Ethereum's mainnet on March 13, Ethereum Layer 2 (L2) protocols have experienced a remarkable reduction in transaction fees, with some protocols slashing fees by as much as 99%. Dencun, hailed as a pivotal scalability-focused upgrade, is being called one of Ethereum's most significant advancements since The Merge.</p>
        <p className='mb-4'>Prominent L2 protocols have marked an impressive 99% decrease in gas fees post-upgrade, with current fees for some like Starknet plummeting to 2.7 cents. The introduction of data blobs through EIP-484 during the Dencun hard fork has improved transaction data processing, offering faster and more cost-effective transactions for L2s.</p>
        <h3 className='mb-4'>Prosecutors Recommend Up to 50 Years for Former FTX CEO Bankman-Fried</h3>
        <p className='mb-4'>Federal prosecutors are advocating for a substantial sentence of up to 50 years for the disgraced cryptocurrency prodigy Sam Bankman-Fried, according to court documents unveiled on Friday. Bankman-Fried, the former CEO and co-founder of the failed cryptocurrency exchange FTX, was convicted of multiple criminal charges including wire fraud and money laundering.</p>
        <p className='mb-4'>The prosecution contends that his actions warrant a sentence commensurate with the scale of his offenses, emphasizing the necessity for justice in the face of widespread harm and flagrant disregard for the law. As the March 28 sentencing date approaches, the severity of the recommended punishment stands in stark contrast to the comparatively lenient request put forth by Bankman-Fried's legal team.</p>
        <h3 className='mb-4'>Grayscale Files for New Bitcoin ETF with BTC Ticker</h3>
        <p className='mb-4'>Digital asset manager Grayscale Investments made headlines last Tuesday by filing for a spin-off of its Grayscale Bitcoin Trust (GBTC), a move aimed at providing investors with more cost-effective exposure to bitcoin.</p>
        <p className='mb-4'>The spin-off, designed to reduce fees associated with GBTC, comes in response to investors' preference for lower-cost alternatives, particularly as GBTC's fees have been comparatively higher than its competitors'. Grayscale plans to introduce the Grayscale Bitcoin Mini Trust&mdash;which will hold a portion of the bitcoin currently held by GBTC&mdash;with existing GBTC shareholders receiving shares in the Mini Trust in exchange.</p>
        <p className='mb-4'>Despite bitcoin's surge to record highs, GBTC has experienced significant capital outflows of more than $11 billion since January, versus inflows at competing ETFs such as BlackRock's iShares Bitcoin ETF (IBIT) and Fidelity Wise Origin Bitcoin Fund (FBTC). While Grayscale has yet to finalize the fees for the Mini Trust, the spin-off signals a strategic move toward independent operation for both GBTC and the Mini Trust after regulatory approval earlier this year, marking a significant development in the evolving landscape of bitcoin investment opportunities.</p>
        <h3 className='mb-4'>What To Expect in The Markets This Week</h3>
        <p className='mb-4'>Spot bitcoin ETF volumes in March already are much larger than they were in January and February. In addition, BlackRock has accumulated more than 230,000 bitcoin via its IBIT offering. That said, inflows appear to be slowing after peaking at more than $1 billion on March 12, according to data from Farside Investors. This week, analysts will be watching to see if inflows into these ETFs continue to slide.</p></>
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
                                    {Cryptos.map((crypto, index) => (
                                        <div key={index}>
                                            <img src={crypto.image} className='h-[250px] object-cover object-left mb-4'></img>
                                            <h2 className='text-fontColor'>{crypto.title}</h2>
                                            <p className='text-fontColor my-2'>Published on: {crypto.date}</p>
                                            {cryptoTag}
                                            <p className='text-fontColor text-justify'>{crypto.content}</p>
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

export default CryptoNews;