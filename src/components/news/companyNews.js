import '../styles/main.css';
import '../news/news.css';
import Navigation from "../navigation/navigation";
import Header from "../navigation/header";
import news_bg from "../assets/bg2.png"
import company1 from "../assets/News/CISCO.webp"

function CompanyNews() {
    const companyTag = (
        <div className="text-xs py-1.5 px-2 text-fontColor bg-darkGray1 rounded-[20px] w-fit mb-4">Company</div>
    );

    const Companys = [{
        image: company1, title: 'Cisco Systems Completes Its $28 Billion Purchase of Splunk', date: '8 Mac 2024',
        content: <><p className='mb-4'>Just days after obtaining European regulatory approval, Cisco Systems (CSCO) said it closed its $28 billion acquisition of cybersecurity provider Splunk.</p>
        <p className='mb-4'>The software maker said that the addition of Splunk will help expand its reach in the growing artificial intelligence (AI) market. Cisco noted that to get the full benefits of AI, companies need &ldquo;the infrastructure to power it, the data to develop it, a security platform to protect it, and an observability platform to monitor and manage it in real time.&rdquo; Cisco added that with Splunk, it will be able to provide all four.</p>
        <p className='mb-4'>Gary Steele, executive vice president and general manager of Splunk, said the merger &ldquo;will bring tremendous value to our joint customers worldwide.&rdquo; One of those customers is Accenture (ACN), and Accenture CEO Julie Sweet noted that the firm looks forward &ldquo;to the opportunities this collaboration presents to our clients in the future.&rdquo;</p>
        <p className='mb-4'>The all-cash deal pays Splunk investors $157 per share. When the deal was announced in September, that represented a 31% premium to Splunk&rsquo;s previous closing price. Cisco reported that the transaction is expected to be cash flow positive (excluding certain acquisition-related and other items) and gross margin accretive in fiscal year 2025. It is anticipated to contribute to an increase in earnings per share (EPS) in fiscal year 2026.</p>
        <p className='mb-4'>Shares of Cisco ticked 0.7% higher Monday. They've lost about 2.5% year to date.</p></>
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
                                    {Companys.map((company, index) => (
                                        <div key={index}>
                                            <img src={company.image} className='h-[250px] object-cover object-left mb-4'></img>
                                            <h3 className='text-fontColor'>{company.title}</h3>
                                            <p className='text-fontColor my-2'>Published on: {company.date}</p>
                                            {companyTag}
                                            <p className='text-fontColor text-justify'>{company.content}</p>
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

export default CompanyNews;