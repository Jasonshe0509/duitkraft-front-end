// import logo from './logo.svg';
import '../profilePage/profilePage.css';
import '../styles/main.css';
import Navigation from "../navigation/navigation";
import Header from "../navigation/header";
import profile_bg from "../assets/bg3.png";
import { PlusIcon, PencilIcon, EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'
import Select2 from 'react-select2';
import React, { useState } from 'react';


function ProfilePage() {
  //Current Date
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); // Jan = 0, so add 1
  const yyyy = today.getFullYear();

  const formattedDate = `${dd}/${mm}/${yyyy}`;

  //Filter Expenses, Income
  const [selectedFilter, setSelectedFilter] = useState('expenses');
  const categories = [
    { text: 'Expenses', value: 'expenses', subCategories: ['food', 'beverage', 'parking'] },
    { text: 'Income', value: 'income', subCategories: ['pocket money', 'salary', 'interest'] },
  ];

  const handleFilterChange = (event) => {
    console.log(event)
    setSelectedFilter(event.target.value);
  };

  //Edit Profile
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleSelectChange = (event) => {
    setSelectedCountry(event.target.value);
  };
  const handleSelectGender = (event) => {
    setSelectedGender(event.target.value);
  };

  return (
    <main>
      <div className="absolute justify-between">
        <img src={profile_bg} className="bg" alt="background" />
        <div className="bg h-screen w-screen flex relative">
          <Navigation />
          <div className="w-screen justify-between ">
            <Header title={"Profile"} />
            <div className="profileContainer transition-all flex-1">
              <div className="grid grid-cols-1 gap-3 w-full p-5 md:grid-cols-2 gap-5">
                {/* Edit Profile Details */}
                <div className='row-span-7 container2 relative'>
                  <h2 className='text-fontColor'>Personal Details</h2>
                  <PencilIcon className='h-5 w-5 text-fontColor flex absolute right-[3%] top-0 translate-y-[120%]'></PencilIcon>
                  <div className="register-box max-w-[380px] lg:max-w-[480px]">
                    <form>
                      <div className="user-box">
                        <input type="text" name=""/>
                        <label>Fullname</label>
                      </div>
                      <div className="user-box">
                        <input type="text" name=""/>
                        <label>Username</label>
                      </div>
                      <div className="user-box">
                        <input type="text" name=""/>
                        <label>Email</label>
                      </div>
                      <div className="user-box grid grid-cols-2 gap-3">
                        <div>
                          <select name="country" value={selectedCountry} onChange={handleSelectChange} className='mb-[30px]'>
                            <option className='optColor bg-dropdownColor text-fontColor' value="">Country</option>
                            <option className='optColor bg-dropdownColor text-fontColor' value="MY">Malaysia</option>
                            <option className='optColor bg-dropdownColor text-fontColor' value="USA">USA</option>
                            <option className='optColor bg-dropdownColor text-fontColor' value="UK">UK</option>
                            <option className='optColor bg-dropdownColor text-fontColor' value="Canada">Canada</option>
                          </select>
                          {selectedCountry && <label>Country</label>}
                        </div>
                        <div>
                          <select name="gender" value={selectedGender} onChange={handleSelectGender} className='mb-[30px]'>
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
                          <select name="dialcode" className='col-span-2' >
                            <option className='optColor bg-dropdownColor text-fontColor' value="MY">MY +60</option>
                            <option className='optColor bg-dropdownColor text-fontColor' value="USA">US +1</option>
                            <option className='optColor bg-dropdownColor text-fontColor' value="UK">UK +44</option>
                            <option className='optColor bg-dropdownColor text-fontColor' value="Canada">CA +1</option>
                          </select>
                          <input type="text" name="" placeholder='Contact Number' className='col-span-3'/>
                        </div>
                      </div>
                      <div className="user-box">
                        <input
                          type={showPassword ? 'text' : 'password'}
                          name="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)} // Update password on change
                        />
                        <label>Password</label>
                        <div className='flex absolute right-0 text-fontColor' style={{ top: "10px" }} onClick={handleTogglePasswordVisibility}>
                          {showPassword ? <EyeIcon className='h-5 w-5' /> : <EyeSlashIcon className='h-5 w-5' />}
                        </div>
                      </div>
                      <div className='user-box'>
                        <input type="date" min="1960-01-01" max="2024-12-31"/>
                        <label>Date of Birth</label>
                      </div>
                      <button className='saveBtn max-md:translate-x-[-50%] translate-y-[50%]'>
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
                      <p className='text-darkYellow'>Cash</p>
                      <p className='text-fontColor'><span>MYR</span> 10, 000</p>
                    </div>
                    <div className='container3'>
                      <p className='text-darkYellow'>Cash</p>
                      <p className='text-fontColor'><span>MYR</span> 10, 000</p>
                    </div>
                    <div className='container3'>
                      <p className='text-darkYellow'>Cash</p>
                      <p className='text-fontColor'><span>MYR</span> 10, 000</p>
                    </div>
                    <div className='container3'>
                      <PlusIcon className='h-5 w-5 text-fontColor flex relative top-0 left-[50%] translate-x-[-50%] translate-y-1/2'></PlusIcon>
                    </div>
                  </div>
                </div>
                {/* Experience Earned */}
                <div className="row-span-2 container2 relative">
                  <h2 className='text-darkYellow flex relative h-fit'>Level 1</h2>
                  <button className='proBtn text-[12px] text-fontColor flex absolute right-[3%] translate-y-[20%]'>Pro Version</button>
                  <p className='text-fontColor text-[18px] my-[10px]'>{formattedDate}</p>
                  <p className='text-[36px] text-lightBlue mb-[10px]'>12 <span className='text-[18px]'>/ 300 xp earned</span></p>
                  <div className="w-full bg-darkGray rounded-full h-2.5 mb-[10px]">
                    <div className="bg-red h-2.5 rounded-full w-[45%]" />
                  </div>

                </div>
                {/* Add Categories */}
                <div className="row-span-3 container2 relative">
                  <h2 className='text-fontColor h-fit'>Category</h2>
                  {/* <PlusIcon className='h-5 w-5 text-fontColor flex absolute left-[80%] translate-y-[-150%] translate-x-[-100%]'></PlusIcon> */}
                  <Select2 className='bg-grayOpacity text-fontColor p-2 rounded-[5px] text-[13px] flex absolute right-[3%] translate-y-[-90%] focus:border border-lightBlue hover:border border-lightBlue'
                    value={selectedFilter} onClick={handleFilterChange}
                    defaultValue={1}
                    data={[
                      { text: 'Expenses', id: 1, value: 'Expenses' },
                      { text: 'Income', id: 2, value: 'Income' },
                    ]}
                  />
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
                                <div className='bg-darkGray rounded-[50%] w-[50px] mr-[10px]'></div>
                                <p className='text-fontColor my-auto text-[18px]'>{subCategory}</p>
                              </div>
                            ))}
                          </>
                        ))}
                      </>
                    )}
                    <div className='container4'>
                      <div className='bg-darkGray rounded-[50%] w-[50px] mr-[10px]'>
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
      {/* </div> */}
    </main>
  );
}

export default ProfilePage;