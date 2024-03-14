import { useState } from "react";

import "../navigation/navistyle.css";

const App = () => {
    const [open, setOpen] = useState(true);
    const Menus = [ {title: "Dashboard" },{title: "Education",submenu:true,submenuItems:[{title: "Module" },{title: "Skill Path" }] },{title: "News" },{title: "Market Value" },];


    return (
      <div className="absolute justify-between">
        <div className="bg h-screen w-screen flex">
          <div className={`menu h-screen p-5 pt-8 ${open ? "min-width" : "max-width"} relative transition-all duration-300 shadow-xl`}>
            <div className="flex flex-col items-center justify-between">
              <div style={{ backgroundColor: 'rgba(128,128,128, 0.2)' }} className={`bg-fontColor outline-none absolute right-0 top-1/2 transform -translate-y-1/2 h-screen cursor-pointer ${!open && "rotate-180"}`} onClick={() => setOpen(!open)}>
                <div className="menuone right-0 mr-0 flex flex-col items-center justify-center h-full text-fontColor shadow-xl">></div>
              </div>
    
              <div className={`logowithword w-12 h-12 text-fontColor p-1 ${open ? "" : "hidden"}`}></div>
              <div className={`logoonly w-12 h-12 text-fontColor p-1 ${open && "hidden"}`}></div>
    
              <div className="w-12 h-12 m-2 bg-profilecircle rounded-full"></div>
    
              <div className={`username text-fontColor focus:outline-none ${!open && "hidden"}`}>username</div>
              <div className="flex justify-center">
                <span className={`username2 text-fontColor focus:outline-none ${!open && "hidden"}`}>lvl1</span>
                <span className={`username3 text-fontColor focus:outline-none ${!open && "hidden"}`}>hiadddaa</span>
              </div>
              <div className="lines"></div>
              <ul className="pt-1 text-fontColor margin-10 center">
                {Menus.map((menu, index) => (
                  <li key={index} className={`flex flex-col rounded-md p-2 cursor-pointer hover:bg-hoverr text-fontColor text-sm gap-x-2 ${Menus.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-gray-900"}`}>
                    <div className="flex items-center gap-x-2">
                      <span className="w-7 h-7 bg-profilecircle rounded-full"></span>
                      <span className={`focus:outline-none ${!open && "hidden"}`}>
                        <p>{menu.title}</p>
                      </span>
                    </div>
                    {menu.submenu && open && menu.submenuItems && (
                      <ul className="ml-4">
                        {menu.submenuItems.map((submenu, subIndex) => (
                          <li key={subIndex} className={`cursor-pointer rounded-md p-1 hover:bg-white text-fontColor text-sm items-center gap-x-5 mr-2 gap-x-2 ${Menus.gap ? "mt-9" : "mt-2"}`}>
                            <div className="flex items-center gap-x-2">
                              <span className="ml-4 w-7 h-7 bg-profilecircle rounded-full"></span>
                              <span className={`focus:outline-none ${!open && "hidden"}`}>
                                <p>{submenu.title}</p>
                              </span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
              <div className="p-7">
                <h1 className="text-2xl"></h1>
              </div>
            </div>
          </div>
    
          <div className="   w-screen justify-between">
            <div className="search relative">
              <div className="search relative flex justify-end mb-3 xl:w-96">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                  <input
                    type="search"
                    className="searchbar relative m-0 flex-auto rounded bg-transparent px-3"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="button-addon2"
                  />
                  <span className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base" id="basic-addon2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" className="h-5 w-5">
                      <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <div className="w-5 h-5 m-2 bg-white rounded-full"></div>
                  <div className="w-5 h-5 m-2 bg-white rounded-full"></div>
                  <div className="w-5 h-5 m-2 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
    
            <div className="new-container relative ">
              {/* the code paste here */}
            </div>
          </div>
        </div>
      </div>
    );
    
    
    ;
}

export default App;
