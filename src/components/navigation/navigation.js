import { useState } from "react";
import "../navigation/navistyle.css";
import profile_image from "../assets/profile_image.png"
import { AcademicCapIcon, ChartBarIcon, DocumentDuplicateIcon, DocumentIcon, HomeIcon, NewspaperIcon } from '@heroicons/react/24/solid'


const Navigation = () => {
  const [open, setOpen] = useState(true);
  const Menus = [{ title: "Dashboard", icon: <HomeIcon className="w-6 h-6 text-fontColor" /> },
  {
    title: "Education", icon: <AcademicCapIcon className="w-6 h-6 text-fontColor" />,
    submenu: true, submenuItems: [{ title: "Course", icon: <DocumentIcon className="w-6 h-6 text-fontColor" /> }, { title: "Module", icon: <DocumentDuplicateIcon className="w-6 h-6 text-fontColor" /> }]
  },
  { title: "News", icon: <NewspaperIcon className="w-6 h-6 text-fontColor" /> },
  { title: "Market Value", icon: <ChartBarIcon className="w-6 h-6 text-fontColor" /> }];



  return (
    <main>
      <div className={`menu h-screen p-5 pt-8 ${open ? "min-width" : "max-width"} relative transition-all duration-300 shadow-xl`}>
        <div className="flex flex-col items-center justify-between">
          <div style={{ backgroundColor: 'rgba(128,128,128, 0.2)' }} className={`bg-fontColor outline-none absolute right-0 top-1/2 transform -translate-y-1/2 h-screen cursor-pointer ${!open && "rotate-180"}`} onClick={() => setOpen(!open)}>
            <div className="menuone right-0 mr-0 flex flex-col items-center justify-center h-full text-fontColor shadow-xl">></div>
          </div>

          <div className={`logowithword w-12 h-12 text-fontColor p-1 ${open ? "" : "hidden"}`}></div>
          <div className={`logoonly w-12 h-12 text-fontColor p-1 ${open && "hidden"}`}></div>

          <div >
            <img src={profile_image} className="w-16 h-16 m-2 rounded-full" />
          </div>

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
                  {menu.icon}
                  <span className={`focus:outline-none ${!open && "hidden"}`}>
                    <p>{menu.title}</p>
                  </span>
                </div>
                {menu.submenu && open && menu.submenuItems && (
                  <ul className="ml-4 list-none">
                    {menu.submenuItems.map((submenu, subIndex) => (
                      <li key={subIndex} className={`cursor-pointer rounded-md p-1 hover:bg-white text-fontColor text-sm items-center gap-x-5 mr-2 gap-x-2 ${Menus.gap ? "mt-9" : "mt-2"}`}>
                        <div className="flex items-center gap-x-2">
                          {submenu.icon}
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
    </main>
  );


  ;
}

export default Navigation;
