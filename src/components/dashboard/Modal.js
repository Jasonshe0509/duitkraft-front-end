import "../styles/popup.css";
import "../styles/main.css";
import "../dashboard/dashboard.css";
import bg from '../assets/bg1.png'
import { useState } from "react";

// import { useState } from 'react';


  

function Modal() {


  const wee = [
    {
      date: '04/03/2024',
      mon: 'Mon',
      tolincome: '11000000',
      tolexpenses: '10000',
      entries: [
        {
          accountcontent1: "Erasmus",
          catcontent1: "Food",
          detcontent1: "Kebab",
          incontent1: "",
          excontent1: "20"
        },
        {
          accountcontent1: "Bank",
          catcontent1: "Important",
          detcontent1: "Rental Fees",
          incontent1: "",
          excontent1: "5000"
        },
        {
          accountcontent1: "Erasmus",
          catcontent1: "Food",
          detcontent1: "Cola",
          incontent1: "",
          excontent1: "100"
        }
      ]
    },
    {
      date: '03/03/2024',
      mon: 'Sun',
      tolincome: '1000',
      tolexpenses: '1000',
      entries: [
        {
          accountcontent1: "Erasmus",
          catcontent1: "ss",
          detcontent1: "Kebab",
          incontent1: "",
          excontent1: "20"
        },
        {
          accountcontent1: "Bank",
          catcontent1: "Impor飒飒撒、tant",
          detcontent1: "Rental Fees",
          incontent1: "",
          excontent1: "5000"
        },
        {
          accountcontent1: "Erasmus",
          catcontent1: "Food",
          detcontent1: "Cola",
          incontent1: "",
          excontent1: "100"
        }
      ]
    },
    {
      date: '02/03/2024',
      mon: 'Sat',
      tolincome: '1000',
      tolexpenses: '1000',
      entries: [
        {
          accountcontent1: "Erasmus",
          catcontent1: "Food",
          detcontent1: "Kebab",
          incontent1: "",
          excontent1: "20"
        },
        {
          accountcontent1: "Bank",
          catcontent1: "Important",
          detcontent1: "Rental Fees",
          incontent1: "",
          excontent1: "5000"
        },
        {
          accountcontent1: "Erasmus",
          catcontent1: "Food",
          detcontent1: "Cola",
          incontent1: "",
          excontent1: "100"
        }
      ]
    }
  ];

  const [currentPage,setCurrentPage]=useState(1)
const recordsPerPage=1;
const lastIndex= currentPage*recordsPerPage;
const firstIndex= lastIndex-recordsPerPage;
const records =wee.slice(firstIndex,lastIndex);
const npage=Math.ceil(wee.length/recordsPerPage);
const nummbers=[...Array(npage+1).keys()].slice(1);

    return (

        <main>
            <img src={bg} className='background flex' alt='background' />
            <div className="TransactionModalContainer">
            <div className="flex justify-end text-fontColor">x</div>
                
                {/* <div className="body"> */}
                    <div className="flex justify-between ">
  <div className={"text-fontColor  m-2 mb-4"}>Monthy Transaction History</div>
  <div className={"  px-5 py-1 m-2 mb-4 sortby text-fontColor"}>Filter</div>
</div>
                  <div class="relative flex flex-col min-w-0 break-words rounded mycouse">
                  {records.map((item,i) => (
                    <table key={i} className="w-full border-collapse my-2 TransBar rounded text-fontColor " >
                      <div  >
                    <thead className="thead-light  " >
                   
                      <tr> 
                        <th className="pl-4 bg-blueGray-50 text-blueGray-500 align-middle border-solid border-blueGray-100 py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          {item.date}
                        </th>
                        <th className=" bg-moncol px-1 mx-1 inline-block text-blueGray-500 align-middle border-solid border-blueGray-100 my-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          {item.mon}
                        </th>
                        <th className="w-full text-right"></th>
                        <th className="w-full text-right"></th> {/* This will push the next two columns to the right */}
                        <th className="w-10 px-6  bg-blueGray-50 text-blueGray-500 align-middle text-greentrans border-solid border-blueGray-100 py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-semibold text-right">
                          {item.tolexpenses}
                        </th>
                        <th className="w-10 px-5  m-3  bg-blueGray-50 text-blueGray-500 align-middle text-redtrans border-solid border-blueGray-100 py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-semibold text-right">
                          {item.tolincome}  
                        </th>
                      </tr>
                    </thead></div><div>
                    <tbody >
  {item.entries.map((entry, j) => (

    <tr key={j } >
      <td className="pl-4 bg-blueGray-50 text-blueGray-500 align-middle border-solid border-blueGray-100 py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-light text-left">
        <div className="w-24 overflow-hidden break-words">{entry.accountcontent1}</div>
      </td>
      <td className="pl-4 bg-blueGray-50 text-blueGray-500 align-middle border-solid border-blueGray-100 py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-light text-left">
        <div className="w-24 overflow-hidden break-words">{entry.catcontent1}</div>
      </td>
      <td className="pl-4 bg-blueGray-50 text-blueGray-500 align-middle border-solid border-blueGray-100 py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-light text-left">
        <div className="w-24 overflow-hidden break-words">{entry.detcontent1}</div>
      </td>
      <td className="w-full text-right"></td>
      <td className="w-10 px-6 bg-blueGray-50 text-blueGray-500 align-middle text-greentrans border-solid border-blueGray-100 py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-light text-right">
        {entry.incontent1}
      </td>
      <td className="w-10 px-5 m-3 bg-blueGray-50 text-blueGray-500 align-middle text-redtrans border-solid border-blueGray-100 py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-light text-right">
        {entry.excontent1}
      </td>
    </tr>
  ))}
</tbody>



</div>  </table>                                    ))}

                    </div>            
                    <div className="flex justify-between pt-3">

    <div class="hidden sm:flex justify-starts sm:flex-1 sm:items-center">
      <div>
        <p class="text-sm text-fontColor">
          Showing
          <span class="font-medium text-fontColor px-2">1</span>
          to
          <span class="font-medium text-fontColor px-2">10</span>
          of
          <span class="font-medium text-fontColor px-2">97</span>
          results
        </p>
      </div>
    </div>

    <div>
      <nav class="justify-starts rounded-md shadow-sm" aria-label="Pagination">
      <li><a href="#" onClick={prePage}>Previous</a></li>
        { nummbers.map((n,i) => (
          <li className={`${currentPage === n? 'active':''}`}key={i}>
            <a href="#" onClick={() => changeCPage(n)}>{n}</a>

             </li>))
        }
        <li><a className="tableNotCurrentPage  bg-blueGray bg-opacity-80 text-littleGray" href="#" onClick={nextPage}>Next</a></li>
        { nummbers.map((n,i) => (
          <div className={`tableNotCurrentPage ${currentPage === n? 'active':''}`}key={i}>
      <a href="" onClick={() => changeCPage(n)}>{n}</a></div>
      ))
        }
        <a href="#" class="mx-2 rounded  items-center px-2 py-1 inline-block text-sm font-semibold text-littleGray hover:bg-blueGray bg-blueGray bg-opacity-80">2</a>
        <a href="#" class=" rounded  items-center px-2 py-1 inline-block text-sm font-semibold text-littleGray hover:bg-blueGray bg-blueGray bg-opacity-80">3</a>
        <span className="px-3 text-fontColor">..</span>
        <a href="#" class="mx-2 rounded  items-center px-2 py-1 inline-block text-sm font-semibold text-littleGray hover:bg-blueGray bg-blueGray bg-opacity-80">9</a>
        <a href="#" class="  rounded  items-center px-2 py-1 inline-block text-sm font-semibold text-littleGray hover:bg-blueGray bg-blueGray bg-opacity-80">10</a>
       
      </nav>
    </div>
</div>



                
               
            </div>
        </main>
    );

    function prePage(){

      if(currentPage !== firstIndex){
        setCurrentPage(currentPage-1)
      }
     };
    function changeCPage(id){
      setCurrentPage(id)
    };
    function nextPage(){
      
      if(currentPage !== firstIndex){
        setCurrentPage(currentPage+1)
      }
    };
}

export default Modal;