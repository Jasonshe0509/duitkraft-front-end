import "../styles/popup.css";
import "../styles/main.css";
import "../dashboard/dashboard.css";
import bg from '../assets/bg1.png'
import { useState } from "react";

// import { useState } from 'react';


  

function Modal() {

const filter =[
  {allcontent: 'All',
  content1: 'income1',
  content2: 'income2',
  content3: 'income3',
  content4: 'income4',
  content5: 'income5',
  content6: 'income6',
  content7: 'income7',} ,
  {allcontent: 'All',
  content1: 'expenses1',
  content2: 'expenses2',
  content3: 'expenses3',
  content4: 'expenses4',
  content5: 'expenses5',
  content6: 'expenses6',
  content7: 'expenses7',},
  {allcontent: 'All',
  content1: 'account1',
  content2: 'account2',
  content3: 'account3',
  content4: 'account4',
  content5: 'account5',
}
]
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
  const [filterPage,setCurrentFilter]=useState(1)
  const defaultfilter = filter[0];
  const rowData = Object.values(defaultfilter);

const recordsPerPage=2;
const totalRecords = wee.length;
const lastIndex= currentPage*recordsPerPage;
const firstIndex= lastIndex-recordsPerPage;
const records =wee.slice(firstIndex,lastIndex);
const npage=Math.ceil(wee.length/recordsPerPage);
const nummbers=[...Array(npage+1).keys()].slice(1);
const filterrecords =filter.slice(firstIndex,lastIndex);
const filternpage=Math.ceil(filter.length/3);
const filternummbers=[...Array(npage+1).keys()].slice(1);
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
<table  className="table-fixed border-collapse my-2 TransBar rounded text-fontColor  " >
                     
                    <thead className="thead-light  " >
                   
                      <tr className="w-fulll text-xs "> 
                        <th className="py-5 ">
                          INCOME
                        </th>
                        <th>
                          EXPENSES
                        </th>
                        <th>
                          ACCOUNT
                        </th>
                      </tr>

                    </thead>    
                    <tbody>
                    
                    {Array.from({ length: Math.ceil(rowData.length / 3) }).map((_, rowIndex) => (
                <tr key={rowIndex}>
                    {Array.from({ length: 3 }).map((_, colIndex) => {
                        const dataIndex = rowIndex * 3 + colIndex;
                        return (
                          
                            <td key={colIndex} className=" text-xs pl-5">
                                  <input id="default-checkbox" type="checkbox" value="" class="w-2 h-2 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <span className="mx-2">{rowData[dataIndex]}</span>
                            </td>
                        );
                    })}
                </tr>
            ))}
            
    </tbody>



 </table>  

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
          <span class="font-medium text-fontColor px-2">{currentPage}</span>
          to
          <span class="font-medium text-fontColor px-2">{recordsPerPage}</span>
          of
          <span class="font-medium text-fontColor px-2">{totalRecords}</span>
          results
        </p>
      </div>
    </div>

    <div>
    <nav className="justify-start rounded-md shadow-sm" aria-label="Pagination">
  <ul className="inline-flex"> {/* Use ul for pagination lists */}
    {/* <li className={`mx-2 rounded  items-center px-2 py-1 inline-block text-sm font-semibold  bg-blueGray bg-opacity-80 text-littleGray ${currentPage === 0 ? 'disabled' : ''}`}> 
      <a href="#" onClick={prePage}>Previous</a>
    </li> */}
    {nummbers.map((n, i) => (
      <li key={i} className={`mx-2 rounded  items-center px-2 py-1 inline-block text-sm font-semibold  bg-blueGray bg-opacity-80 text-littleGray inline-block ml-2 mr-2 ${currentPage === n ? 'active' : ''}`}> {/* Consistent spacing */}
        <a href="#" onClick={() => changeCPage(n)}>{n}</a>
      </li>
    ))}
    {/* <li className={`mx-2 rounded  items-center px-2 py-1 inline-block text-sm font-semibold  bg-blueGray bg-opacity-80 text-littleGray ${currentPage === nummbers.length - 1 ? 'disabled' : ''}`}> 
      <a href="#" onClick={nextPage}>Next</a>
    </li> */}
  </ul>
</nav>
</div>
</div>



                
               
            </div>
        </main>
    );

    // function prePage(){

    //   if(currentPage !== firstIndex){
    //     setCurrentPage(currentPage -1)
    //   }
    //  };
    function changeCPage(id){
      setCurrentPage(id)
    };

    function changeFilter(id){
      setCurrentFilter(id)
    };
    // function nextPage(){
      
    //   if(currentPage !== firstIndex){
    //     setCurrentPage(currentPage+1)
    //   }
    // };
}

export default Modal;