import { useState } from "react";

import "../navigation/navistyle.css";

const App = () => {
    const [open, setOpen] = useState(true);
    const Menus = [ {title: "Dashboard" },{title: "Dashboard2",submenu:true,submenuItems:[{title: "Submenu" },] },{title: "Dashboard3" },];


    return (
        <div className="flex">
          <div className="bg h-screen w-screen flex">
      
              <div className={`menu h-screen p-5 pt-8 ${open ? "w-60" : "w-20"} relative transition-all duration-300`}>
                <div className="flex flex-col items-center justify-between">
                <div style={{ backgroundColor: 'rgba(128,128,128, 0.2)' }} className={`bg-white text-dark-purple text-3xl outline-none absolute right-0 top-1/2 transform -translate-y-1/2 h-screen cursor-pointer ${!open && "rotate-180"}`} onClick={() => setOpen(!open)}>
  <div className="menuone absolute right-0 mr-0 flex flex-col items-center justify-center h-full text-white">></div>
</div>

                <div className=" logoonly w-12 h-12 text-white p-1"></div>
                
                  <div className=" w-12 h-12 m-2 bg-blue-500 rounded-full"></div>
          

                <div className={`username focus:outline-none ${!open && "hidden"}`}>username</div>
                <div className="inline-flex">
                <div className={`username2 focus:outline-none ${!open && "hidden"}`}>lvl1</div>
                <div className={`username3 focus:outline-none ${!open && "hidden"}`}>testing</div>
</div>
                <div className="lines"></div>                
                <ul className="pt-1 text-white margin-10 center">
                  {Menus.map((menu, index) => (
                    <li key={index} className={`flex rounded-md p-2 cursor-pointer hover:bg-gray-500 text-gray-300 text-sm items-center gap-x-2 ${Menus.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-gray-900"}`}>
                      <span className="w-7 h-7 bg-blue-500 rounded-full"></span>
                      <span className={`focus:outline-none ${!open && "hidden"}`}>{menu.title}</span>
                    </li>
                  ))}
                </ul>
                <div className="p-7">
                  <h1 className="text-2xl"></h1>
                </div>
              </div>
      
            </div>
          </div>

      </div>
      
        )
    
    ;
}

export default App;
