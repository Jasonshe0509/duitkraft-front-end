import "../navigation/navistyle.css";
import "../dashboard/dashboard.css";
import dashboard_bg from "../assets/dashboard_bg.png";
import Navigation from "../navigation/navigation";
import Header from "../navigation/header";

const Dashboard = () => {
  return (
    <main>
      <div className="absolute justify-between">
        <img src={dashboard_bg} className="bg" />
        <div className="h-screen w-screen flex relative">
          <Navigation />
          <div className="w-screen justify-between ">
            <Header title={"Dashboard"}/>
            <div className="dashboard-container transition-all flex-1">
              <div className="  dashboard-container2 ">
                <div className={" dashboardedu1 text-fontColor m-5  pt-10  shadow-xl"}>dashboard
                </div>
                <div className={"  dashboardedu2 text-fontColor m-5 mb-10  shadow-xl"}>my module
                  <div className="">
                    <div className="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded  ">
                      <table className="items-center w-full border-collapse text-blueGray-700  ">
                        <thead className="thead-light ">
                          <tr>
                            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                              Referral
                            </th>
                            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                              Visitors
                            </th>
                            <th className="px-6 bg-blueGray-50 text-blueGray-700 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px" />
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                              Facebook
                            </th>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                              1,480
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                              <div className="flex items-center">
                                <span className="mr-2">60%</span>
                                <div className="relative w-full">
                                  <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                                    <div
                                      style={{ width: "60%" }}
                                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                                    />
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                              Facebook
                            </th>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                              5,480
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                              <div className="flex items-center">
                                <span className="mr-2">50%</span>
                                <div className="relative w-full">
                                  <div className="overflow-hidden h-2 text-xs flex rounded bg-purple-200">
                                    <div
                                      style={{ width: "50%" }}
                                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"
                                    />
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                              Google
                            </th>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                              4,807
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                              <div className="flex items-center">
                                <span className="mr-2">60%</span>
                                <div className="relative w-full">
                                  <div className="overflow-hidden h-2 text-xs flex rounded bg-purple-200">
                                    <div
                                      style={{ width: "60%" }}
                                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"
                                    />
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" relative dashboard-container3  ">
                <div className={"  dashboardedu3 text-fontColour m-5 pt-15 text-fontColor  shadow-xl"}>recomended</div>
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
