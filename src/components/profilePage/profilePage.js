import React, { useState, useEffect } from 'react';
import '../profilePage/profilePage.css';
import '../styles/main.css';
import Navigation from "../navigation/navigation";
import Header from "../navigation/header";
import profile_bg from "../assets/bg3.png";
import { PlusIcon, PencilIcon, EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'
import Chatbot from '../chatbot/chatbot';
import EditProfileModal from './editProfileModal';
import AccountModal from './accountModal';
import ProVersionModal from './proVersionModal';
import { MdLocalDrink, MdAutoGraph  } from "react-icons/md";
import { PiBowlFoodFill } from "react-icons/pi";
import { FaSquareParking, FaMoneyBillWave } from "react-icons/fa6";
import { RiRedPacketFill } from "react-icons/ri";
import { GiPayMoney, GiThreeFriends, GiSofa, GiCommercialAirplane   } from "react-icons/gi";
import CategoryModal from './categoryModal';

function ProfilePage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('11223344');
  const [fullName, setFullName] = useState("Bernard Ong");
  const [username, setUsername] = useState("bernard_ong");
  const [email, setEmail] = useState("bernard_ong@gmail.com");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedGender, setSelectedGender] = useState("");

  const [editMode, setEditMode] = useState(false);
  const [success, setSuccess] = useState(false);

  const [accountModalOpen, setAccountModalOpen] = useState(false);
  const [accounts, setAccounts] = useState([]);

  const [proVersionModalOpen, setProVersionModalOpen] = useState(false);

  const [categoryModalOpen, setCategoryModalOpen] = useState(false);

  //Current Date
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); // Jan = 0, so add 1
  const yyyy = today.getFullYear();

  const formattedDate = `${dd}/${mm}/${yyyy}`;

  //Filter Expenses, Income
  const [selectedFilter, setSelectedFilter] = useState('expenses');
  const categories = [
    { text: 'Expenses', value: 'expenses', subCategories: [{ name: 'food', icon: PiBowlFoodFill }, { name: 'beverage', icon: MdLocalDrink }, { name: 'parking', icon: FaSquareParking }, 
    { name: 'social', icon: GiThreeFriends },{ name: 'amenities', icon: GiSofa  }, { name: 'travel', icon: GiCommercialAirplane  }] },
    { text: 'Income', value: 'income', subCategories: [{ name: 'Allowance', icon: RiRedPacketFill }, { name: 'salary', icon: FaMoneyBillWave }, { name: 'Bonus', icon: GiPayMoney },{name:'Investment', icon: MdAutoGraph }] },
  ];

  const handleFilterChange = (event) => {
    console.log(event)
    setSelectedFilter(event.target.value);
  };

  //Edit Profile
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleSelectChange = (event) => {
    setSelectedCountry(event.target.value);
  };
  const handleSelectGender = (event) => {
    setSelectedGender(event.target.value);
  };

  //Edit Mode and Edit Profile Pop Up
  const handleToggleEditMode = () => {
    setEditMode(!editMode); // Toggle edit mode
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setEditMode(false);
    setSuccess(true);
  };
  useEffect(() => {
    if (success) {
      const timeoutId = setTimeout(() => {
        setSuccess(false);
      }, 2000);

      return () => clearTimeout(timeoutId); // Cleanup on unmount
    }
  }, [success]);

  const handleAddAccount = (newAccount) => {
    setAccounts([...accounts, newAccount]);
  };

  if (!mounted) {
    return '';
  }

  return (
    <main>
      <div className="absolute justify-between">
        <img src={profile_bg} className="bg" alt="background" />
        <div className="bg h-screen w-screen flex relative">
          <Navigation />
          <div className="w-screen justify-between ">
            <Header title={"Profile"} />
            <div className="profileContainer transition-all flex-1 overflow-y-auto	">
              <div className="grid grid-cols-1 gap-3 w-full p-5 md:grid-cols-2 gap-5">
                {/* Edit Profile Details */}
                <div className='row-span-7 container2 relative'>
                  <h2 className='text-fontColor'>Personal Details</h2>
                  <PencilIcon
                    className='h-5 w-5 text-fontColor flex absolute right-[3%] top-0 translate-y-[120%] cursor-pointer'
                    onClick={handleToggleEditMode} // Toggle edit mode when pencil icon is clicked
                  />
                  <div className="register-box max-w-[380px] lg:max-w-[480px]">
                    <form onSubmit={handleSubmit}>
                      <div className="user-box">
                        <input type="text" name="" value={fullName} onChange={(e) => setFullName(e.target.value)} readOnly={!editMode} />
                        <label>Fullname</label>
                      </div>
                      <div className="user-box">
                        <input type="text" name="" value={username} onChange={(e) => setUsername(e.target.value)} readOnly={!editMode} />
                        <label>Username</label>
                      </div>
                      <div className="user-box">
                        <input type="text" name="" value={email} onChange={(e) => setEmail(e.target.value)} readOnly={!editMode} />
                        <label>Email</label>
                      </div>
                      <div className="user-box grid grid-cols-2 gap-3">
                        <div>
                          <select name="country" value={selectedCountry} onChange={handleSelectChange} className='mb-[30px]' disabled={!editMode}>
                            {/* <option className='optColor bg-dropdownColor text-fontColor' value="">Country</option> */}
                            <option className='optColor bg-dropdownColor text-fontColor' value="MY">Malaysia</option>
                            <option className='optColor bg-dropdownColor text-fontColor' value="USA">USA</option>
                            <option className='optColor bg-dropdownColor text-fontColor' value="UK">UK</option>
                            <option className='optColor bg-dropdownColor text-fontColor' value="Canada">Canada</option>
                          </select>
                          <label className='contact-number'>Country</label>
                        </div>
                        <div>
                          <select name="gender" value={selectedGender} onChange={handleSelectGender} className='mb-[30px]' disabled={!editMode}>
                            <option className='optColor bg-dropdownColor text-fontColor' value="">Gender</option>
                            <option className='optColor bg-dropdownColor text-fontColor' value="female">Female</option>
                            <option className='optColor bg-dropdownColor text-fontColor' value="male">Male</option>
                          </select>
                          {selectedGender && <label className='gender'>Gender</label>}
                        </div>
                      </div>
                      <div className="user-box">
                        <label className='contact-number'>Contact Number</label>
                        <div className='grid grid-cols-5 gap-3'>
                          <select name="dialcode" className='col-span-2' disabled={!editMode}>
                            <option className='optColor bg-dropdownColor text-fontColor' value="MY">MY +60</option>
                            <option className='optColor bg-dropdownColor text-fontColor' value="USA">US +1</option>
                            <option className='optColor bg-dropdownColor text-fontColor' value="UK">UK +44</option>
                            <option className='optColor bg-dropdownColor text-fontColor' value="Canada">CA +1</option>
                          </select>
                          <input type="text" name="" value="172903819" placeholder='Contact Number' className='col-span-3' readOnly={!editMode} />
                        </div>
                      </div>
                      <div className="user-box">
                        <input
                          type={showPassword ? 'text' : 'password'}
                          name="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)} // Update password on change
                          readOnly={!editMode}
                        />                        <label>Password</label>
                        <div className='flex absolute right-0 text-fontColor' style={{ top: "10px" }} onClick={handleTogglePasswordVisibility}>
                          {showPassword ? <EyeIcon className='h-5 w-5' /> : <EyeSlashIcon className='h-5 w-5' />}
                        </div>
                      </div>
                      <div className='user-box'>
                        <input type="date" min="1960-01-01" max="2024-12-31" readOnly={!editMode} />
                        <label>Date of Birth</label>
                      </div>
                      <button className={`saveBtn max-md:translate-x-[-50%] translate-y-[50%]`} disabled={!editMode}>
                        <p className='text-fontColor'>Save</p>
                      </button>
                    </form>
                  </div>
                </div>
                {/* Account */}
                <div className="row-span-2 container2">
                  <h2 className='text-fontColor'>Account</h2>
                  <div className='grid grid-cols-1 gap-3 w-full p-5 md:grid-cols-2'>
                    <div className='container3'>
                      <p className='text-darkYellow'>Bank</p>
                      <p className='text-fontColor'><span>MYR</span> 10000</p>
                    </div>
                    <div className='container3'>
                      <p className='text-darkYellow'>Cash</p>
                      <p className='text-fontColor'><span>MYR</span> 10000</p>
                    </div>
                    <div className='container3'>
                      <p className='text-darkYellow'>Touch N Go</p>
                      <p className='text-fontColor'><span>MYR</span> 10000</p>
                    </div>
                    {accounts.map((account, index) => (
                      <div key={index} className='container3'>
                        <p className='text-darkYellow'>{account.type}</p>
                        <p className='text-fontColor'><span>MYR</span> {account.amount}</p>
                      </div>
                    ))}
                    <div className='container3 cursor-pointer' onClick={() => { setAccountModalOpen(true); }}>
                      <PlusIcon className='h-5 w-5 text-fontColor flex relative top-0 left-[50%] translate-x-[-50%] translate-y-1/2'></PlusIcon>
                    </div>
                  </div>
                </div>
                {/* Experience Earned */}
                <div className="row-span-2 container2 relative">
                  <h2 className='text-darkYellow flex relative h-fit'>Level 1</h2>
                  <button className='proBtn text-[12px] text-fontColor flex absolute right-[3%] translate-y-[20%]' onClick={() => { setProVersionModalOpen(true); }}>Pro Version</button>
                  <p className='text-fontColor text-[18px] my-[10px]'>{formattedDate}</p>
                  <p className='text-[36px] text-lightBlue mb-[10px]'>12 <span className='text-[18px]'>/ 300 xp earned</span></p>
                  <div className="w-full bg-darkGray rounded-full h-2.5 mb-[10px]">
                    <div className="bg-red h-2.5 rounded-full w-[45%]" />
                  </div>

                </div>
                {/* Add Categories */}
                <div className="row-span-3 container2 relative">
                  <h2 className='text-fontColor h-fit'>Category</h2>
                  <select
                    className='bg-grayOpacity text-fontColor p-2 rounded-[5px] text-[13px] flex absolute right-[3%] translate-y-[-90%] focus:border border-lightBlue hover:border border-lightBlue'
                    value={selectedFilter}
                    onChange={handleFilterChange}
                  >
                    <option value="expenses">Expenses</option>
                    <option value="income">Income</option>
                  </select>
                  {/* <Select2 className='bg-grayOpacity text-fontColor p-2 rounded-[5px] text-[13px] flex absolute right-[3%] translate-y-[-90%] focus:border border-lightBlue hover:border border-lightBlue'
                    value={selectedFilter} onChange={handleFilterChange} options={categories.map((option) => ({ value: option.value, label: option.text }))}
                    defaultValue={2}
                    data={[
                      { text: 'Expenses', id: 1, value: 'expenses' },
                      { text: 'Income', id: 2, value: 'income' },
                    ]}
                  /> */}

                  {/* <div className='grid grid-cols-2 gap-3 w-full p-5 md:grid-cols-3'>
                    {selectedFilter === 'Expenses' && (
                      <div>
                        <div className='container4'>
                          <div className='bg-darkGray rounded-[50%] w-[50px] h-[50px] mr-[10px]'></div>
                          <p className='text-fontColor my-auto text-[18px]'>Food</p>
                        </div>
                        <div className='container4'>
                          <div className='bg-darkGray rounded-[50%] w-[50px] h-[50px] mr-[10px]'></div>
                          <p className='text-fontColor my-auto text-[18px]'>Beverage</p>
                        </div>
                        <div className='container4'>
                          <div className='bg-darkGray rounded-[50%] w-[50px] h-[50px] mr-[10px]'></div>
                          <p className='text-fontColor my-auto text-[18px]'>Parking</p>
                        </div>
                      </div>
                    )}
                    {selectedFilter === 'Income' && (
                      <div>
                        <div className='container4'>
                          <div className='bg-darkGray rounded-[50%] w-[50px] h-[50px] mr-[10px]'></div>
                          <p className='text-fontColor my-auto text-[18px]'>Salary</p>
                        </div>
                        <div className='container4'>
                          <div className='bg-darkGray rounded-[50%] w-[50px] h-[50px] mr-[10px]'></div>
                          <p className='text-fontColor my-auto text-[18px]'>Interest</p>
                        </div>
                        <div className='container4'>
                          <div className='bg-darkGray rounded-[50%] w-[50px] h-[50px] mr-[10px]'></div>
                          <p className='text-fontColor my-auto text-[18px]'>Pocket Money</p>
                        </div>
                      </div>
                    )}
                  </div> */}
                  <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3 w-full pt-5'>
                    {/* <div className='container4'> */}
                    {selectedFilter && ( // Only render if a filter is selected
                      <>
                        {categories.filter((category) =>
                          category.value.toLowerCase().startsWith(selectedFilter.toLowerCase())
                        ).map((category) => (
                          <>
                            {category.subCategories.map((subCategory) => (
                              <div key={subCategory} className='container4'>
                                <div className='bg-darkGray rounded-[50%] w-[50px] mr-[10px]'>
                                  <subCategory.icon className='w-[25px] h-[25px] text-fontColor ml-1 mt-1 text-center translate-x-[33%] translate-y-[35%]'></subCategory.icon>
                                </div>
                                <p className='text-fontColor my-auto text-[18px]'>{subCategory.name}</p>
                              </div>
                            ))}
                          </>
                        ))}
                      </>
                    )}
                    <div className='container4'>
                      <div className='bg-darkGray rounded-[50%] w-[50px] mr-[10px] cursor-pointer' onClick={() => { setCategoryModalOpen(true); }}>
                        <PlusIcon className='w-[30px] text-fontColor text-center translate-x-[33%] translate-y-[35%]'></PlusIcon>
                      </div>
                      <p className='text-fontColor my-auto text-[18px]'>category</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Chatbot />
      {success && <EditProfileModal />}
      {accountModalOpen && <AccountModal setOpenModal={setAccountModalOpen} handleAddAccount={handleAddAccount} />}
      {proVersionModalOpen && <ProVersionModal setOpenModal={setProVersionModalOpen} />}
      {categoryModalOpen && <CategoryModal setOpenModal={setCategoryModalOpen} />}
      {/* </div> */}
    </main>
  );
}

export default ProfilePage;