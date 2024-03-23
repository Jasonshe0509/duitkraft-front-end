import "../styles/popup.css";
import "../styles/main.css";
import "../dashboard/dashboard.css";
import bg from '../assets/bg1.png'
import { useState } from "react";



function TransactionModal({ onClose }) {

  const filter = [
    {
      allcontent: 'All',
      content1: 'Allowance',
      content2: 'Salary',
      content3: 'Bonus',
      content4: 'Investent',
    },
    {
      allcontent: 'All',
      content1: 'Food',
      content2: 'Beverage',
      content3: 'Parking',
      content4: 'Social',
      content5: 'Amenities',
      content6: 'Travel',
    },
    {
      allcontent: 'All',
      content1: 'Bank',
      content2: 'Cash',
      content3: 'Touch N Go',
    }
  ]
  const transaction = [

    {
      date: '06/01/2024',
      mon: 'Sat',
      tolexpenses: 'MYR 100.00',
      tolincome: 'MYR 0.00',
      entries: [
        {
          accountcontent1: "Cash",
          catcontent1: "Food",
          detcontent1: "Snacks",
          incontent1: "",
          excontent1: "MYR 10.00"
        },
        {
          accountcontent1: "Cash",
          catcontent1: "Social",
          detcontent1: "With Family",
          incontent1: "",
          excontent1: "MYR 90.00"
        },
      ]
    },
    {
      date: '05/01/2024',
      mon: 'Fri',
      tolexpenses: 'MYR 40.00',
      tolincome: 'MYR 1540.00',
      entries: [
        {
          accountcontent1: "Bank",
          catcontent1: "Bonus",
          detcontent1: "Comission",
          incontent1: "MYR 40.00",
          excontent1: ""
        },
        {
          accountcontent1: "Bank",
          catcontent1: "Salary",
          detcontent1: "Full Time",
          incontent1: "MYR 1,500.00",
          excontent1: ""
        },
        {
          accountcontent1: "Erasmus",
          catcontent1: "Food",
          detcontent1: "Foo Fee",
          incontent1: "",
          excontent1: "MYR 40.00"
        }
      ]
    }, {
      date: '04/01/2024',
      mon: 'Thu',
      tolexpenses: 'MYR 510.00',
      tolincome: 'MYR 60.00',
      entries: [
        {
          accountcontent1: "Bank",
          catcontent1: "Salary",
          detcontent1: "Part-time",
          incontent1: "MYR 60.00",
          excontent1: ""
        },
        {
          accountcontent1: "Bank",
          catcontent1: "Amenities",
          detcontent1: "Rental Fees",
          incontent1: "",
          excontent1: "MYR 500.00"
        },
        {
          accountcontent1: "Erasmus",
          catcontent1: "Food",
          detcontent1: "Nasi Lemak",
          incontent1: "",
          excontent1: "MYR 10.00"
        }
      ]
    }, {
      date: '03/01/2024',
      mon: 'Wed',
      tolexpenses: 'MYR 50.00',
      tolincome: 'MYR 0.00',
      entries: [
        {
          accountcontent1: "Cash",
          catcontent1: "Social",
          detcontent1: "Toy",
          incontent1: "",
          excontent1: "MYR 30.00"
        },
        {
          accountcontent1: "Cash",
          catcontent1: "Social",
          detcontent1: "Book",
          incontent1: "",
          excontent1: "MYR 20.00"
        },

      ]
    }
  ];

  const [currentPage, setCurrentPage] = useState(1)

  // const rowData = Object.values(defaultfilte3r);
  const [activeFilterIndex, setActiveFilterIndex] = useState(0); // State to track active filter index

  const [filterVisible, setFilterVisible] = useState(false);

  const recordsPerPage = 2;
  const totalRecords = transaction.length;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = transaction.slice(firstIndex, lastIndex);
  const npage = Math.ceil(transaction.length / recordsPerPage);
  const nummbers = [...Array(npage + 1).keys()].slice(1);

  const [isOpen, setIsOpen] = useState(true); // Initially open

  function changeCFilter(index) {
    setActiveFilterIndex(index);
  };

  return (
    isOpen && (

      <main>
        <img src={bg} className='background flex z-10' alt='background' />
        <div className="TransactionModalContainer">
          <div className="flex justify-end text-fontColor"><div className="px-1 py-1 m-2 text-fontColor rounded-full  cursor-pointer" onClick={onClose}>
            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div></div>

          {/* <div className="body"> */}
          <div className="flex justify-between ">
            <div className={"text-fontColor  m-2 mb-4"}>Monthly Transaction History</div>

            <div className="  px-5 py-1 m-2 mb-4 sortby text-fontColor cursor-pointer" onClick={() => setFilterVisible(!filterVisible)} >Filter</div>
          </div>
          <div className="flex justify-center">

            <div className="w-full">
              <div className={` ${filterVisible ? 'block' : 'hidden'}`}>

                <table className={' w-full border-collapse my-2 TransBar rounded text-fontColor py-10 '}>

                  <thead className="thead-light  " >

                    <tr className="w-fulll text-xs">
                      <th className="py-3">
                        <div className={`hover:bg-white inline-block py-1 px-2 rounded ${activeFilterIndex === 0 ? 'bg-white' : ''}`} onClick={() => changeCFilter(0)}>Income</div>
                      </th>
                      <th>
                        <div className={`hover:bg-white inline-block py-1 px-2 rounded ${activeFilterIndex === 1 ? 'bg-white' : ''}`} onClick={() => changeCFilter(1)}>Expenses</div>
                      </th>
                      <th>
                        <div className={`hover:bg-white inline-block py-1 px-2 rounded ${activeFilterIndex === 2 ? 'bg-white' : ''}`} onClick={() => changeCFilter(2)}>Account</div>
                      </th>
                    </tr>
                    <tr>
                      <td colSpan="3" className="border-b border-gray-300 "></td>
                    </tr>
                  </thead>

                  <tbody className="m-5">
                    {[...Array(Math.ceil(Object.keys(filter[activeFilterIndex]).length / 3)).keys()].map((rowIndex) => (
                      <tr key={rowIndex}>
                        {Object.keys(filter[activeFilterIndex]).slice(rowIndex * 3, rowIndex * 3 + 3).map((key, index) => (
                          <td className="text-center text-xs pt-3" key={index}>
                            <input type="checkbox" value="" className="w-2 mx-2 h-2 bg-transparent border-transparent rounded focus:ring-transparent dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            {filter[activeFilterIndex][key]}
                          </td>
                        ))}
                      </tr>
                    ))}


                    <tr className="justify-ends">
                      <td colSpan="3" className="text-right py-5 pr-10 justify-end">
                        <button className="bg-whitew text-darkGray font-bold rounded mx-1 text-xs  px-2 " onClick={() => setFilterVisible(!filterVisible)}>
                          Cancel
                        </button>
                        <button className="bg-whitew text-white font-bold mx-1 px-2 text-xs rounded" onClick={() => setFilterVisible(!filterVisible)}>
                          OK
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="relative flex flex-col min-w-0 break-words rounded mycouse">
                {records.map((item, i) => (
                  <table key={i} className="w-full border-collapse my-2 TransBar rounded text-fontColor " >
                    <div  >
                      <thead className="thead-light  " >

                        <tr>
                          <th className="pl-4 bg-blueGray-50 text-blueGray-500 align-middle border-solid border-blueGray-100 py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                            {item.date}
                          </th>
                          <th className="bg-moncol px-1 mx-1 inline-block text-blueGray-500 align-middle border-solid border-blueGray-100 my-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                            {item.mon}
                          </th>
                          <th className="w-2/3 relative align-middle text-greentrans  border-solid border-blueGray-100 py-3 text-xs border-l-0 border-r-0 font-semibold text-right">
                            {item.tolincome}
                          </th>
                          <th className="w-1/3 relative pr-5 m-3 align-middle text-redtrans border-solid border-blueGray-100 py-3 text-xs border-l-0 border-r-0 font-semibold text-right">
                            {item.tolexpenses}
                          </th>
                        </tr>
                      </thead></div><div>
                      <tbody >
                        {item.entries.map((entry, j) => (

                          <tr key={j} >
                            <td className="pl-4 bg-blueGray-50 text-blueGray-500 align-middle border-solid border-blueGray-100 py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-light text-left">
                              <div className="w-24 overflow-hidden break-words">{entry.accountcontent1}</div>
                            </td>
                            <td className="pl-4 bg-blueGray-50 text-blueGray-500 align-middle border-solid border-blueGray-100 py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-light text-left">
                              <div className="w-24 overflow-hidden break-words">{entry.catcontent1}</div>
                            </td>
                            <td className="pl-4 bg-blueGray-50 text-blueGray-500 align-middle border-solid border-blueGray-100 py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-light text-left">
                              <div className="w-24 overflow-hidden break-words">{entry.detcontent1}</div>
                            </td>
                            <td className="w-1/2 pr-5 bg-blueGray-50 text-blueGray-500 align-middle text-greentrans border-solid border-blueGray-100 py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-light text-right">
                              {entry.incontent1}
                            </td>
                            <td className="w-1/2 pr-5 m-3 bg-blueGray-50 text-blueGray-500 align-middle text-redtrans border-solid border-blueGray-100 py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-light text-right">
                              {entry.excontent1}
                            </td>
                          </tr>
                        ))}
                      </tbody>



                    </div>  </table>))}

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
                        <li key={i} className={`mx-2 rounded cursor-pointer  items-center px-2 py-1 inline-block text-sm font-semibold  bg-blueGray bg-opacity-80 text-littleGray inline-block ml-2 mr-2 ${currentPage === n ? 'active' : ''}`} onClick={() => changeCPage(n)}> {/* Consistent spacing */}
                          <a href="#" >{n}</a>
                        </li>
                      ))}
                      {/* <li className={`mx-2 rounded  items-center px-2 py-1 inline-block text-sm font-semibold  bg-blueGray bg-opacity-80 text-littleGray ${currentPage === nummbers.length - 1 ? 'disabled' : ''}`}> 
      <a href="#" onClick={nextPage}>Next</a>
    </li> */}
                    </ul>
                  </nav>
                </div>
              </div>


            </div></div>


        </div>
      </main>
    ));

  function changeCPage(id) {
    setCurrentPage(id)
  };


}

export default TransactionModal;