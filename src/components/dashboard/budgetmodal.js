import registerIcon from "../assets/register success icon.png";
import "../styles/popup.css";
import "../styles/main.css";
import "../dashboard/dashboard.css";

import "../navigation/navistyle.css";
import bg from '../assets/bg1.png'
import { useState } from "react";


function BudgetModal({onClose }) {
    const [sessionVisible, setSessionVisible] = useState(1); // Initialise with session 2
    const [isOpen, setIsOpen] = useState(true); // Initially open

    const handleSave = () => {
      setSessionVisible(1); // Switch to session 1
    };

    const handleAdd = () => {
        setSessionVisible(2); // Switch to session 1
      };

    
    return (
        isOpen && ( 

        <main>
        <div className="">

                        <img src={bg} className='backgroundbudget popup   z-10' alt='background' />
            <div className="BudgetTransactionModal">
                {/* session1 */}
                <div className={`container1 ${sessionVisible === 1 ? 'block' : 'hidden'}`}>
            <div className="flex justify-between ">
  <div className={"text-fontColor  m-2 "}>Budget</div>

  <div className={"flex"}>
    <div className="text-fontColor m-2 "onClick={handleAdd}>
+
    </div>
    <div className="px-1 py-1 m-2 text-fontColor rounded-full  cursor-pointer" onClick={onClose}>
    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
    </div>
    </div>
</div>    <div className="flex justify-between py-2 text-xs">
    <div className="flex px-1 py-2">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFFFFF" class="w-5 h-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z" />
</svg>
<div className="mx-5 text-fontColor py-1 text-xs">All</div></div>
<div className="mx-5 text-fontColor px-12 text-xs"></div>
<div className="text-fontColor  py-1 m-2 text-xs ">
    MYR 2,500.00
</div>

    </div>    
    <div className="flex justify-between py-2 text-xs">
    <div className="flex px-1 py-2">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFFFFF" class="w-5 h-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z" />
</svg>
<div className="mx-5 text-fontColor py-1 text-xs">Food</div></div>
<div className="text-fontColor  py-1 m-2 text-xs ">
    MYR 1,000.00
</div>

    </div>    
    <div className="flex justify-between py-2 text-xs" >
    <div className="flex px-1 py-2" >
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFFFFF" class="w-5 h-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z" />
</svg>
<div className="mx-5 text-fontColor py-1 text-xs">Social</div></div>
<div className="text-fontColor  py-1 m-2 text-xs ">
    MYR 100.00
</div>
    </div> 
    
    <div className="flex justify-between py-2 text-xs" >
    <div className="flex px-1 py-2" >
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFFFFF" class="w-5 h-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z" />
</svg>
<div className="mx-5 text-fontColor py-1 text-xs">Amenities</div></div>
<div className="text-fontColor  py-1 m-2 text-xs ">
    MYR 500.00
</div>
    </div> 

    <div className="flex justify-between py-2 text-xs" >
    <div className="flex px-1 py-2" >
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFFFFF" class="w-5 h-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z" />
</svg>
<div className="mx-5 text-fontColor py-1 text-xs">Travel</div></div>
<div className="text-fontColor  py-1 m-2 text-xs ">
    MYR 900.00
</div>
    </div> 
      </div> 
     {/* session2 */}
     <div className={`container2 ${sessionVisible === 2 ? 'block' : 'hidden'}`}>
            <div className="flex justify-between ">
  <div className={"text-fontColor  m-2 "}>Budget</div>

  <div className={"flex"}>
    
    <div className="px-1 py-1 m-2 text-fontColor rounded-full  cursor-pointer"onClick={onClose}>
    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
    </div>
    </div>
</div>    <div className="flex justify-between py-2 text-xs">
    <div className="flex  px-2 py-2">
    <div className="text-fontColor py-1 ml-1 w-24 overflow-hidden break-words text-xs">CATEGORY</div></div>
<div className="flex-start w-3/4  flex flex-col ">  


<div className="flex justify-end  ">  
<select id="underline_select" class="block mr-5 py-1 px-0 w-full text-s text-fontColor bg-transparent border-0 border-b-2 border-yellowtext  dark:text-blueGray-400 dark:border-blueGray focus:outline-none focus:ring-0 focus:border-blueGray-200 ">
  <option selected></option>
  <option value="All" class="text-xs">All</option>
  <option value="FD" class="text-xs">Food</option>
  <option value="SC" class="text-xs">Social</option>
  <option value="AM" class="text-xs">Amenities</option>
</select>


</div>                 
</div>

    </div>    
    <div className="flex justify-between py-2 text-xs">
    <div className="flex px-2 py-2">
<div className="text-fontColor py-1 ml-1 w-24 overflow-hidden break-words text-xs">AMOUNT</div></div>
<div className="flex-start w-3/4  flex flex-col ">  


<div className="flex justify-end  ">  
<input class="block py-1 px-0 w-full mr-5 text-sm text-fontColor bg-transparent border-0 border-b-2 border-yellowtext  dark:text-blueGray-400 dark:border-blueGray focus:outline-none focus:ring-0 focus:border-blueGray-200 ">
      
  </input>

</div>                 
</div>




    </div> 
    <div className="flex justify-between py-2 text-xs">
    <div className="flex px-2 py-2">
    <div className="text-fontColor py-1 ml-1 w-24 overflow-hidden  break-words text-xs">CURRENCY</div></div>
<div className="flex-start w-3/4  flex flex-col ">  


<div className="flex justify-between  ">  
<select id="underline_select" class="block mr-5 py-1 px-0 w-full text-s text-fontColor bg-transparent border-0 border-b-2 border-yellowtext   dark:text-blueGray-400 dark:border-blueGray focus:outline-none focus:ring-0 focus:border-blueGray-200 ">
      <option selected></option>
      <option value="MYR"className="text-xs"> MYR</option>
  </select>

</div>                 
</div>
 </div> 
 <div className="flex flex-col justify-end bottom-content h-full">

 <div className="flex justify-between mb-10">
  
 <div className=" py-2 mx-2 w-3/4 text-yellowtext text-center rounded sortby cursor-pointer" onClick={handleSave}>
        Save
    </div>
    <div className="w-1/4 px-5 py-2 text-fontColor text-center rounded sortby cursor-pointer" onClick={handleSave}>
        Continue
    </div>

</div>     </div>
      </div> 
            </div>
            </div>
        </main>
        
        )
    );
}

export default BudgetModal;


