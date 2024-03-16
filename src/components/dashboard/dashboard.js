import "../navigation/navistyle.css";
import "../dashboard/dashboard.css";
import dashboard_bg from "../assets/dashboard_bg.png";
import Navigation from "../navigation/navigation";
import Header from "../navigation/header";
import ProgressBar from "../dashboard/progress.js";


const Dashboard = () => {
  const progress = 50; 

  return (
    <main>
      <div className="absolutejustify-between">
        <img src={dashboard_bg} className="bg"/>
        <div class="bg h-screen w-screen flex relative overflow-x-auto overflow-y-hidden"> <div class="white-space: nowrap"> </div>
          <Navigation />
          <div className="w-screen  justify-between ">
            <Header title={"Dashboard"}/>
            <div className="dashboard-container transition-all flex-1">
              <div className="  dashboard-container2 ">
                <div className={" dashboardedu1 text-fontColor m-5  pt-10  shadow-xl"}>dashboard
                </div>
                <div className={"  dashboardedu2 text-fontColor m-5 mb-10  shadow-xl"}>
                  <div  className={"   text-fontColor m-2 mb-5 "}>Course Bar</div>
                  <div class="relative flex flex-col min-w-0 break-words shadow-lg rounded mycouse">
                      <table className="items-center w-full border-collapse text-blueGray-700  ">
                        <thead className="thead-light CourseBar">
                          <tr>
                            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle  border-solid border-blueGray-100 py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                              Name
                            </th>
                            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle  border-solid border-blueGray-100 py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                            Progress
                            </th>
                            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle  border-solid border-blueGray-100 py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                            Difficulty
                            </th>
                            <th className="px-6 bg-blueGray-50 text-blueGray-700 align-middle   border-solid border-blueGray-100 py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px" />
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th className="border-t-0 px-6 align-middle border-l-0 border border-r-0 text-xs whitespace-nowrap p-4 text-left">
                              Facebook
                            </th>
                            <td className="border-t-0 px-6 align-middle border-l-0 border border-r-0 text-xs whitespace-nowrap p-4 ">
                              <div className="container mx-auto py-8">
      <ProgressBar progress={progress} />
    </div>
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border border-r-0 text-xs whitespace-nowrap p-4 ">
                            <div className={`difficult text-fontColor   `}>beginner</div>
                            </td>
                            <td className="border-t-0 px-1 align-middle border-l-0 border border-r-0 text-xs whitespace-nowrap p-4 ">
                            <div className={`continue bg-continuebutton text-black cursor-pointer  `}>Continue</div>
                            </td>
                          </tr>

                        </tbody>
                      </table>
                    </div>
                </div>
              </div>
              <div className=" relative dashboard-container3  ">
                <div className={"  dashboardedu3 text-fontColour m-5 pt-15 text-fontColor  shadow-xl"}>

                <div  className={"   text-fontColor m-2 mb-5 "}>Recommended Module</div>
                <div className="bg-white border m-2 mb-5 h-60 w-96p border-0  relative">
                  <div className="bg-black h-20 border-5 w-full "> </div> 
                  <div className="bg-profilecircle h-80p border-5 w-full ">
                  <div  className={"   text-fontColor ml-2 pt-3"}>Recommended Module</div>
                  {/* <div class=" \grid	 -cols-4 gap-4 ml-2 "> */}
                  <div class=" flex-wrap p-2 w-full">                            
                  <div className={`difficult text-fontColor   `}>beginner</div>

                                        <div className={`difficult text-fontColor   `}>beginner</div>
</div>
                </div>                  
                </div>                  
                </div>
                {/* </div> */}
                
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );


  ;
}

export default Dashboard;
