import registerIcon from "../assets/register success icon.png";
import "../styles/popup.css";
import "../styles/main.css";
import "../dashboard/dashboard.css";

import "../navigation/navistyle.css";
import bg from '../assets/bg1.png'
import { useState } from "react";


function BudgetPopUp({ onClose }) {
  const [sessionVisible, setSessionVisible] = useState(1); // Initialise with session 2
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [session, setSession] = useState(1);
  const [isOpen, setIsOpen] = useState(true); // Initially open

  const handleSessionClick = (sessionNumber) => {
    setSession(sessionNumber);
  };
  const handleSave = () => {
    setSessionVisible(1); // Switch to session 1
  };

  const hanldeCloseModal = () => {
    onClose(false);
  };

  return (
    isOpen && (
      <main>
        <img src={bg} className='background popup  z-10' alt='background' />
        <div className="" >
          <div className="BudgetPopUpModal">
            <div className="flex justify-between ">
              <div className={"text-fontColor  m-2 "}></div>
              <div className={"flex"}>
                <div className="px-1 py-1 m-2 text-fontColor rounded-full  cursor-pointer" onClick={onClose}>
                  <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex w-full justify-center py-4">
              <div className={`flex-1 text-center text-xs hover:border-white border-2 cursor-pointer greyCBackground border-transparent text-yellowtext rounded ${session === 2 ? 'active' : ''}`} onClick={() => handleSessionClick(2)}>Income</div>
              <div className={`flex-1 text-center text-xs hover:border-white border-2 cursor-pointer greyCBackground border-transparent text-yellowtext mx-2 rounded ${session === 1 ? 'active' : ''}`} onClick={() => handleSessionClick(1)}>Expenses</div>
              <div className={`flex-1 text-center text-xs hover:border-white border-2 cursor-pointer greyCBackground border-transparent text-yellowtext rounded ${session === 3 ? 'active' : ''}`} onClick={() => handleSessionClick(3)}>Transfer</div>
            </div>
            <div className="pt-5"></div>
            <div className="flex greyCBackground mb-3 rounded justify-between py-2 text-xs">
              <div className="flex px-2 py-2">
                <div className="text-fontColor py-1 ml-1 w-24 overflow-hidden break-words text-xs">TRANSACTION</div></div>
              <div className="flex-start w-3/4  flex flex-col ">
                <div className="flex justify-end  ">
                  <input value="20.01.2023 1:00PM" class="block py-1 px-0 w-full mr-5 text-sm text-fontColor bg-transparent border-0 border-b-2 border-yellowtext  appearance dark:text-blueGray-400 dark:border-blueGray focus:outline-none focus:ring-0 focus:border-blueGray-200 " onClick={() => setIsDatePickerOpen(!isDatePickerOpen)}>
                  </input>
                </div>
              </div>
            </div>
            <>
              {/* Datepicker */}
              <div className={` ${isDatePickerOpen ? 'block' : 'hidden'}  w-80  test mr-8 absolute bg-black border shadow-lg rounded-xl overflow-hidden `}>
                <div className="p-3">
                  {/* Calendar */}
                  <div className="space-y-0.5">
                    {/* Months */}
                    <div className="grid grid-cols-5 items-center gap-x-3 mx-1.5 pb-3">
                      {/* Prev Button */}
                      <div className="col-span-1">
                        <button
                          type="button"
                          className="size-8 flex justify-center items-center  hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none dark: dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        >
                          <svg
                            className="flex-shrink-0 size-4"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#FFFFFF"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m15 18-6-6 6-6" />
                          </svg>
                        </button>
                      </div>
                      {/* End Prev Button */}
                      {/* Month / Year */}
                      <div className="col-span-3 flex justify-center items-center gap-x-1">
                        <div className="relative">
                          <select
                            className="hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative flex text-nowrap w-full cursor-pointer text-start font-medium text-whitew bg-transparent hover:text-whitew focus:bg-black dark:bg-transparent focus:outline-none focus:text-whitew before:absolute before:inset-0 before:z-[1] "
                          >
                            <option value={0}>January</option>
                            <option value={1}>February</option>
                            <option value={2}>March</option>
                            <option value={3}>April</option>
                            <option value={4}>May</option>
                            <option value={5}>June</option>
                            <option value={6} selected="">
                              July
                            </option>
                            <option value={7}>August</option>
                            <option value={8}>September</option>
                            <option value={9}>October</option>
                            <option value={10}>November</option>
                            <option value={11}>December</option>
                          </select>
                        </div>
                        <div className="relative">
                          <select
                            className="hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative flex text-nowrap w-full cursor-pointer text-start font-medium text-whitew bg-transparent hover:text-whitew focus:bg-black dark:bg-transparent focus:outline-none focus:text-whitew before:absolute before:inset-0 before:z-[1] "
                          >
                            <option>2024</option>
                            <option>2025</option>
                            <option>2026</option>
                            <option>2027</option>
                          </select>
                        </div>
                      </div>
                      {/* End Month / Year */}
                      {/* Next Button */}
                      <div className="col-span-1 flex justify-end">
                        <button
                          type="button"
                          className="size-8 flex justify-center items-center  hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none dark: dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        >
                          <svg
                            className="flex-shrink-0 size-4"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#FFFFFF"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m9 18 6-6-6-6" />
                          </svg>
                        </button>
                      </div>
                      {/* End Next Button */}
                    </div>
                    {/* Months */}
                    {/* Weeks */}
                    <div className="flex text-whitew pb-1.5">
                      <span className="m-px w-10 block text-center text-sm">
                        Mo
                      </span>
                      <span className="m-px w-10 block text-center text-sm">
                        Tu
                      </span>
                      <span className="m-px w-10 block text-center text-sm">
                        We
                      </span>
                      <span className="m-px w-10 block text-center text-sm">
                        Th
                      </span>
                      <span className="m-px w-10 block text-center text-sm">
                        Fr
                      </span>
                      <span className="m-px w-10 block text-center text-sm">
                        Sa
                      </span>
                      <span className="m-px w-10 block text-center text-sm">
                        Su
                      </span>
                    </div>
                    {/* Weeks */}
                    {/* Days */}
                    <div className="flex  ">
                      <div>
                        <button
                          type="button"
                          className="m-px text-blueGray size-10  flex justify-center items-center border border-transparent text-sm  hover:border-whitew  rounded-full "
                          disabled=""
                        >
                          26
                        </button>
                      </div>
                      <div>
                        <button
                          type="button"
                          className="m-px size-10 text-blueGray flex justify-center items-center border border-transparent text-sm  hover:border-whitew  rounded-full "
                          disabled=""
                        >
                          27
                        </button>
                      </div>
                      <div>
                        <button
                          type="button"
                          className="m-px size-10 text-blueGray flex justify-center items-center border border-transparent text-sm  hover:border-whitew  rounded-full "
                          disabled=""
                        >
                          28
                        </button>
                      </div>
                      <div>
                        <button
                          type="button"
                          className="m-px size-10 text-blueGray flex justify-center items-center border border-transparent text-sm  hover:border-whitew  rounded-full "
                          disabled=""
                        >
                          29
                        </button>
                      </div>
                      <div>
                        <button
                          type="button"
                          className="m-px size-10 text-blueGray flex justify-center items-center border border-transparent text-sm  hover:border-whitew  rounded-full "
                          disabled=""
                        >
                          30
                        </button>
                      </div>
                      <div>
                        <button
                          type="button"
                          className="m-px size-10 text-whitew flex justify-center items-center border border-transparent text-sm  hover:border-whitew  rounded-full "
                        >
                          1
                        </button>
                      </div>
                      <div>
                        <button
                          type="button"
                          className="m-px size-10 text-whitew flex justify-center items-center border border-transparent text-sm  hover:border-whitew  rounded-full "
                        >
                          2
                        </button>
                      </div>
                    </div>
                    {/* Days */}
                    {/* Days */}
                    <div className="flex">
                      <div>
                        <button
                          type="button"
                          className="m-px size-10 text-whitew flex justify-center items-center border border-transparent text-sm  hover:border-whitew  rounded-full "
                        >
                          3
                        </button>
                      </div>
                      <div>
                        <button
                          type="button"
                          className="m-px size-10 text-whitew flex justify-center items-center border border-transparent text-sm  hover:border-whitew  rounded-full "
                        >
                          4
                        </button>
                      </div>
                      <div>
                        <button
                          type="button"
                          className="m-px size-10 text-whitew flex justify-center items-center border border-transparent text-sm  hover:border-whitew  rounded-full "
                        >
                          5
                        </button>
                      </div>
                      <div>
                        <button
                          type="button"
                          className="m-px size-10 text-whitew flex justify-center items-center border border-transparent text-sm  hover:border-whitew  rounded-full "
                        >
                          6
                        </button>
                      </div>
                      <div>
                        <button
                          type="button"
                          className="m-px size-10 text-whitew flex justify-center items-center border border-transparent text-sm  hover:border-whitew  rounded-full "
                        >
                          7
                        </button>
                      </div>
                      <div>
                        <button
                          type="button"
                          className="m-px size-10 text-whitew flex justify-center items-center border border-transparent text-sm  hover:border-whitew  rounded-full "
                        >
                          8
                        </button>
                      </div>
                      <div>
                        <button
                          type="button"
                          className="m-px size-10 text-whitew flex justify-center items-center border border-transparent text-sm  hover:border-whitew  rounded-full "
                        >
                          9
                        </button>
                      </div>
                    </div>
                    {/* Days */}
                    {/* Days */}
                    <div className="flex">
                      <div>
                        <button
                          type="button"
                          className="m-px size-10 text-whitew flex justify-center items-center border border-transparent text-sm  hover:border-whitew  rounded-full "
                        >
                          10
                        </button>
                      </div>
                      <div>
                        <button
                          type="button"
                          className="m-px size-10 text-whitew flex justify-center items-center border border-transparent text-sm  hover:border-whitew  rounded-full "
                        >
                          11
                        </button>
                      </div>
                      <div>
                        <button
                          type="button"
                          className="m-px size-10 text-whitew flex justify-center items-center border border-transparent text-sm  hover:border-whitew  rounded-full "
                        >
                          12
                        </button>
                      </div>
                      <div>
                        <button
                          type="button"
                          className="m-px size-10 text-whitew flex justify-center items-center border border-transparent text-sm  hover:border-whitew  rounded-full "
                        >
                          13
                        </button>
                      </div>
                      <div>
                        <button
                          type="button"
                          className="m-px size-10 text-whitew flex justify-center items-center border border-transparent text-sm  hover:border-whitew  rounded-full "
                        >
                          14
                        </button>
                      </div>
                      <div>
                        <button
                          type="button"
                          className="m-px size-10 text-whitew flex justify-center items-center border border-transparent text-sm  hover:border-whitew  rounded-full "
                        >
                          15
                        </button>
                      </div>
                      <div>
                        <button
                          type="button"
                          className="m-px size-10 text-whitew flex justify-center items-center border border-transparent text-sm  hover:border-whitew  rounded-full "
                        >
                          16
                        </button>
                      </div>
                    </div>
                    {/* Days */}
                    {/* Days */}
                    <div className="flex">
                      <div>
                        <button
                          type="button"
                          className="m-px size-10 text-whitew flex justify-center items-center border border-transparent text-sm  hover:border-whitew  rounded-full "
                        >
                          17
                        </button>
                      </div>
                      <div>
                        <button
                          type="button"
                          className="m-px size-10 text-whitew flex justify-center items-center border border-transparent text-sm  hover:border-whitew  rounded-full "
                        >
                          18
                        </button>
                      </div>
                      <div>
                        <button
                          type="button"
                          className="m-px size-10 text-whitew flex justify-center items-center border border-transparent text-sm  hover:border-whitew  rounded-full "
                        >
                          19
                        </button>
                      </div>
                      <div>
                        <button
                          type="button"
                          className="m-px size-10 flex justify-center items-center bg-whitew border border-transparent text-sm font-medium text-white hover:border-whitew rounded-full dark:bg-blue-500 disabled: disabled:pointer-events-none dark:hover:"
                        >
                          20
                        </button>
                      </div>
                      <div>
                        <button
                          type="button"
                          className="m-px size-10 text-whitew flex justify-center items-center border border-transparent text-sm  hover:border-whitew  rounded-full "
                        >
                          21
                        </button>
                      </div>
                      <div>
                        <button
                          type="button"
                          className="m-px size-10 text-whitew flex justify-center items-center border border-transparent text-sm  hover:border-whitew  rounded-full "
                        >
                          22
                        </button>
                      </div>
                      <div>
                        <button
                          type="button"
                          className="m-px size-10 text-whitew flex justify-center items-center border border-transparent text-sm  hover:border-whitew  rounded-full "
                        >
                          23
                        </button>
                      </div>
                    </div>
                    {/* Days */}
                    {/* Days */}
                    <div className="flex">
                      <div>
                        <button
                          type="button"
                          className="m-px size-10 text-whitew flex justify-center items-center border border-transparent text-sm  hover:border-whitew  rounded-full "
                        >
                          24
                        </button>
                      </div>
                      <div>
                        <button
                          type="button"
                          className="m-px size-10 text-whitew flex justify-center items-center border border-transparent text-sm  hover:border-whitew  rounded-full "
                        >
                          25
                        </button>
                      </div>
                      <div>
                        <button
                          type="button"
                          className="m-px size-10 text-whitew flex justify-center items-center border border-transparent text-sm  hover:border-whitew  rounded-full "
                        >
                          26
                        </button>
                      </div>
                      <div>
                        <button
                          type="button"
                          className="m-px size-10 text-whitew flex justify-center items-center border border-transparent text-sm  hover:border-whitew  rounded-full "
                        >
                          27
                        </button>
                      </div>
                      <div>
                        <button
                          type="button"
                          className="m-px size-10 text-whitew flex justify-center items-center border border-transparent text-sm  hover:border-whitew  rounded-full "
                        >
                          28
                        </button>
                      </div>
                      <div>
                        <button
                          type="button"
                          className="m-px size-10 text-whitew flex justify-center items-center border border-transparent text-sm  hover:border-whitew  rounded-full "
                        >
                          29
                        </button>
                      </div>
                      <div>
                        <button
                          type="button"
                          className="m-px size-10 text-whitew flex justify-center items-center border border-transparent text-sm  hover:border-whitew  rounded-full "
                        >
                          30
                        </button>
                      </div>
                    </div>
                    {/* Days */}
                    {/* Days */}
                    <div className="flex">
                      <div>
                        <button
                          type="button"
                          className="m-px size-10 text-whitew flex justify-center items-center border border-transparent text-sm  hover:border-whitew  rounded-full "
                        >
                          31
                        </button>
                      </div>
                      <div>
                        <button
                          type="button"
                          className="m-px size-10 text-blueGray flex justify-center items-center border border-transparent text-sm  hover:border-whitew  rounded-full "
                          disabled=""
                        >
                          1
                        </button>
                      </div>
                      <div>
                        <button
                          type="button"
                          className="m-px size-10 text-blueGray flex justify-center items-center border border-transparent text-sm  hover:border-whitew  rounded-full "
                          disabled=""
                        >
                          2
                        </button>
                      </div>
                      <div>
                        <button
                          type="button"
                          className="m-px size-10 text-blueGray flex justify-center items-center border border-transparent text-sm  hover:border-whitew  rounded-full "
                          disabled=""
                        >
                          3
                        </button>
                      </div>
                      <div>
                        <button
                          type="button"
                          className="m-px size-10 text-blueGray flex justify-center items-center border border-transparent text-sm  hover:border-whitew  rounded-full "
                          disabled=""
                        >
                          4
                        </button>
                      </div>
                      <div>
                        <button
                          type="button"
                          className="m-px size-10 text-blueGray flex justify-center items-center border border-transparent text-sm  hover:border-whitew  rounded-full "
                          disabled=""
                        >
                          5
                        </button>
                      </div>
                      <div>
                        <button
                          type="button"
                          className="m-px size-10 text-blueGray flex justify-center items-center border border-transparent text-sm  hover:border-whitew  rounded-full "
                          disabled=""
                        >
                          6
                        </button>
                      </div>
                    </div>
                    {/* Days */}
                  </div>
                  {/* End Calendar */}
                  {/* Time */}
                  <div className="mt-3 flex justify-center items-center gap-x-2">
                    {/* Select */}
                    <div className="relative">
                      <select

                        className="border-whitew border hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative flex text-nowrap w-full cursor-pointer text-start font-medium text-whitew bg-transparent hover:text-whitew focus:bg-black dark:bg-transparent focus:outline-none focus:text-whitew before:absolute before:inset-0 before:z-[1] "
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>11</option>
                        <option selected="">12</option>
                      </select>
                      <div className="absolute top-1/2 end-2 -translate-y-1/2">

                      </div>
                    </div>
                    {/* End Select */}
                    <span className=" text-whitew">:</span>
                    {/* Select */}
                    <div className="relative">
                      <select
                        className=" border-whitew border hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative flex text-nowrap w-full cursor-pointer text-start font-medium text-whitew bg-transparent hover:text-whitew focus:bg-black dark:bg-transparent focus:outline-none focus:text-whitew before:absolute before:inset-0 before:z-[1] "

                      >
                        <option selected="">00</option>
                        <option>01</option>
                        <option>02</option>
                        <option>03</option>
                        <option>04</option>
                        <option>05</option>
                        <option>06</option>
                        <option>07</option>
                        <option>08</option>
                        <option>09</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                        <option>13</option>
                        <option>14</option>
                        <option>15</option>
                        <option>16</option>
                        <option>17</option>
                        <option>18</option>
                        <option>19</option>
                        <option>20</option>
                        <option>21</option>
                        <option>22</option>
                        <option>23</option>
                        <option>24</option>
                        <option>25</option>
                        <option>26</option>
                        <option>27</option>
                        <option>28</option>
                        <option>29</option>
                        <option>30</option>
                        <option>31</option>
                        <option>32</option>
                        <option>33</option>
                        <option>34</option>
                        <option>35</option>
                        <option>36</option>
                        <option>37</option>
                        <option>38</option>
                        <option>39</option>
                        <option>40</option>
                        <option>41</option>
                        <option>42</option>
                        <option>43</option>
                        <option>44</option>
                        <option>45</option>
                        <option>46</option>
                        <option>47</option>
                        <option>48</option>
                        <option>49</option>
                        <option>50</option>
                        <option>51</option>
                        <option>52</option>
                        <option>53</option>
                        <option>54</option>
                        <option>55</option>
                        <option>56</option>
                        <option>57</option>
                        <option>58</option>
                        <option>59</option>
                      </select>
                      <div className="absolute top-1/2 end-2 -translate-y-1/2">

                      </div>
                    </div>
                    {/* End Select */}
                    {/* Select */}
                    <div className="relative">
                      <select
                        className="border-whitew border hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative flex text-nowrap w-full cursor-pointer text-start font-medium text-whitew bg-transparent hover:text-whitew focus:bg-black dark:bg-transparent focus:outline-none focus:text-whitew before:absolute before:inset-0 before:z-[1] "
                      >
                        <option selected="">PM</option>
                        <option>AM</option>
                      </select>

                    </div>
                    {/* End Select */}
                  </div>
                  {/* End Time */}
                </div>
                {/* Footer */}
                <div className="flex justify-center items-center gap-x-2 p-3 border-t dark:">
                  <button
                    type="button"
                    className="py-2 px-3 inline-flex items-center gap-x-2 text-xs font-semibold rounded-lg border border-transparent bg-whitew text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    onClick={() => setIsDatePickerOpen(!isDatePickerOpen)} >
                    Apply
                  </button>
                  <button
                    type="button"
                    className="py-2 px-3  inline-flex items-center gap-x-2 text-xs font-medium rounded-lg border border-gray-200 bg-transparent text-whitew"
                    onClick={() => setIsDatePickerOpen(!isDatePickerOpen)}>
                    Cancel
                  </button>

                </div>
                {/* End Footer */}
              </div>
              {/* End Datepicker */}
            </>
            {/* session1 */}
            {session === 1 && (
              <div className="session1">
                <div className="flex greyCBackground mb-3 justify-between py-2 text-xs">
                  <div className="flex px-2 py-2">
                    <div className="text-fontColor py-1 ml-1 w-24 overflow-hidden break-words text-xs">ACCOUNT</div></div>
                  <div className="flex-start w-3/4  flex flex-col ">
                    <div className="flex justify-end  ">
                      <select id="underline_select" class="block mr-5 py-1 px-0 w-full text-s text-fontColor bg-transparent border-0 border-b-2 border-yellowtext appearance dark:text-blueGray-400 dark:border-blueGray focus:outline-none focus:ring-0 focus:border-blueGray-200 ">
                        <option selected></option>
                        <option value="All" class="text-xs">Bank</option>
                        <option value="FD" class="text-xs">Cash</option>
                        <option value="SC" class="text-xs">Touch N Go</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="flex greyCBackground mb-3 justify-between py-2 text-xs">
                  <div className="flex  px-2 py-2">
                    <div className="text-fontColor py-1 ml-1 w-24 overflow-hidden break-words text-xs">CATEGORY</div></div>
                  <div className="flex-start w-3/4  flex flex-col ">
                    <div className="flex justify-end  ">
                      <select id="underline_select" class="block mr-5 py-1 px-0 w-full text-s text-fontColor bg-transparent border-0 border-b-2 border-yellowtext appearance dark:text-blueGray-400 dark:border-blueGray focus:outline-none focus:ring-0 focus:border-blueGray-200 ">
                        <option selected></option>
                        <option value="All" class="text-xs">Education</option>
                        <option value="FD" class="text-xs">Food</option>
                        <option value="SC" class="text-xs">Social</option>
                        <option value="AM" class="text-xs">Amenities</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>)}
            {session === 2 && (
              <div className="session2">
                {/* Your session 2 content here */}    <div className="flex greyCBackground mb-3 justify-between py-2 text-xs">
                  <div className="flex px-2 py-2">
                    <div className="text-fontColor py-1 ml-1 w-24 overflow-hidden break-words text-xs">ACCOUNT</div></div>
                  <div className="flex-start w-3/4  flex flex-col ">
                    <div className="flex justify-end  ">
                      <select id="underline_select" class="block mr-5 py-1 px-0 w-full text-s text-fontColor bg-transparent border-0 border-b-2 border-yellowtext appearance dark:text-blueGray-400 dark:border-blueGray focus:outline-none focus:ring-0 focus:border-blueGray-200 ">
                        <option selected></option>
                        <option value="All" class="text-xs">Bank</option>
                        <option value="FD" class="text-xs">Cash</option>
                        <option value="SC" class="text-xs">Touch N Go</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="flex greyCBackground mb-3 justify-between py-2 text-xs">
                  <div className="flex  px-2 py-2">
                    <div className="text-fontColor py-1 ml-1 w-24 overflow-hidden break-words text-xs">CATEGORY</div></div>
                  <div className="flex-start w-3/4  flex flex-col ">
                    <div className="flex justify-end  ">
                      <select id="underline_select" class="block mr-5 py-1 px-0 w-full text-s text-fontColor bg-transparent border-0 border-b-2 border-yellowtext appearance dark:text-blueGray-400 dark:border-blueGray focus:outline-none focus:ring-0 focus:border-blueGray-200 ">
                        <option selected></option>
                        <option value="All" class="text-xs">Salary</option>
                        <option value="FD" class="text-xs">Invesment</option>
                        <option value="SC" class="text-xs">Allowance</option>
                        <option value="AM" class="text-xs">Bonus</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>)}
            {/* session3 */}
            {session === 3 && (
              <div className="session3">    <div className="flex greyCBackground mb-3 justify-between py-2 text-xs">
                <div className="flex px-2 py-2">
                  <div className="text-fontColor py-1 ml-1 w-24 overflow-hidden break-words text-xs">FROM</div></div>
                <div className="flex-start w-3/4  flex flex-col ">
                  <div className="flex justify-end  ">
                    <select id="underline_select" class="block mr-5 py-1 px-0 w-full text-s text-fontColor bg-transparent border-0 border-b-2 border-yellowtext appearance dark:text-blueGray-400 dark:border-blueGray focus:outline-none focus:ring-0 focus:border-blueGray-200 ">
                      <option selected></option>
                      <option value="All" class="text-xs">Bank</option>
                      <option value="FD" class="text-xs">Cash</option>
                      <option value="SC" class="text-xs">Touch N Go</option>
                    </select>
                  </div>
                </div>
              </div>

                <div className="flex greyCBackground mb-3 justify-between py-2 text-xs">
                  <div className="flex px-2 py-2">
                    <div className="text-fontColor py-1 ml-1 w-24 overflow-hidden break-words text-xs">TO</div></div>
                  <div className="flex-start w-3/4  flex flex-col ">
                    <div className="flex justify-end  ">
                      <select id="underline_select" class="block mr-5 py-1 px-0 w-full text-s text-fontColor bg-transparent border-0 border-b-2 border-yellowtext appearance dark:text-blueGray-400 dark:border-blueGray focus:outline-none focus:ring-0 focus:border-blueGray-200 ">
                        <option selected></option>
                        <option value="All" class="text-xs">Bank</option>
                        <option value="FD" class="text-xs">Cash</option>
                        <option value="SC" class="text-xs">Touch N Go</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>)}
            {/* <div className="flex greyCBackground mb-3 justify-between py-2 text-xs">
              <div className="flex px-2 py-2">
                <div className="text-fontColor py-1 ml-1 w-24 overflow-hidden  break-words text-xs">CURRENCY</div></div>
              <div className="flex-start w-3/4  flex flex-col ">
                <div className="flex justify-between  ">
                  <select id="underline_select" class="block mr-5 py-1 px-0 w-full text-s text-fontColor bg-transparent border-0 border-b-2 border-yellowtext  appearance dark:text-blueGray-400 dark:border-blueGray focus:outline-none focus:ring-0 focus:border-blueGray-200 ">
                    <option selected></option>
                    <option value="MYR" className="text-xs"> MYR</option>
                  </select>
                </div>
              </div>
            </div> */}
            <div className="flex greyCBackground mb-3 justify-between py-2 text-xs">
              <div className="flex px-2 py-2">
                <div className="text-fontColor py-1 ml-1 w-24 overflow-hidden break-words text-xs">AMOUNT</div></div>
              <div className="flex-start w-3/4  flex flex-col ">
                <div className="flex justify-end  ">
                  <input class="block py-1 px-0 w-full mr-5 text-sm text-fontColor bg-transparent border-0 border-b-2 border-yellowtext  appearance dark:text-blueGray-400 dark:border-blueGray focus:outline-none focus:ring-0 focus:border-blueGray-200 ">
                  </input>
                </div>
              </div>
            </div>
            <div className="flex justify-between greyCBackground mb-3 py-2 text-xs">
              <div className="flex px-2 py-2">
                <div className="text-fontColor py-1 ml-1 w-24 overflow-hidden break-words text-xs">DESCRIPTION</div></div>
              <div className="flex-start w-3/4  flex flex-col ">
                <div className="flex justify-end  ">
                  <input class="block py-1 px-0 w-full mr-5 text-sm text-fontColor bg-transparent border-0 border-b-2 border-yellowtext  appearance dark:text-blueGray-400 dark:border-blueGray focus:outline-none focus:ring-0 focus:border-blueGray-200 ">
                  </input>
                </div>
              </div>
            </div>
            <div className="flex pt-5 flex-col justify-end bottom-content h-full">
              <div className="flex justify-between mb-10">
                <div className="cursor-pointer  rounded-lg py-2 CSave mr-2 w-3/4 text-yellowtext text-center rounded sortby cursor-pointer" onClick={onClose}>
                  Save
                </div>
                <div className="cursor-pointer rounded-lg  w-1/4 CSave px-5 py-2 text-fontColor text-center rounded sortby cursor-pointer" onClick={hanldeCloseModal}>
                  Cancel
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    ));
}

export default BudgetPopUp;


