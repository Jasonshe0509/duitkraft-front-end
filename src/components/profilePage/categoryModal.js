import "../styles/popup.css";
import "../styles/main.css";
import bg from '../assets/bg3.png';
import { XMarkIcon } from '@heroicons/react/24/solid'
import React, { useState } from "react";
import { MdLocalDrink, MdHealthAndSafety, MdHome, MdFamilyRestroom } from "react-icons/md";
import { PiBowlFoodFill } from "react-icons/pi";
import { FaSquareParking, FaMoneyBillWave, FaGift, FaBus } from "react-icons/fa6";
import { RiRedPacketFill } from "react-icons/ri";
import { GiPayMoney } from "react-icons/gi";



function CategoryModal({ setOpenModal }) {
    const [categoryType, setCategoryType] = useState('expenses');
    const categories = [
        {
            text: 'Expenses', value: 'expenses', subCategories: [{ icon: PiBowlFoodFill }, { icon: MdLocalDrink }, { icon: FaSquareParking }, { icon: MdHealthAndSafety }, { icon: MdHome },
            { icon: FaGift }, { icon: MdFamilyRestroom }, { icon: FaBus }]
        },
        { text: 'Income', value: 'income', subCategories: [{ icon: RiRedPacketFill }, { icon: FaMoneyBillWave }, { name: 'interest', icon: GiPayMoney }, { name: 'Gift', icon: FaGift }] },
    ];
    const handleCategoryChange = (event) => {
        setCategoryType(event.target.value);
    };
    const handleSaveCategory = (e) => {
        e.preventDefault();
        setOpenModal(false);
    };
    return (
        <main>
            <img src={bg} className='background flex' alt='background' />
            <div className="categoryModalContainer overflow-y-auto">
                <div className="header"> {/* New class name for header */}
                    <h2 className="text-fontColor">Category</h2>
                    <XMarkIcon className="text-fontColor h-[20px] mt-3 cursor-pointer" onClick={() => { setOpenModal(false); }} />
                </div>
                <div className="account-box">
                    <form onSubmit={handleSaveCategory}>
                        <div className="input-box">
                            <input type="text" required />
                            <label>Category name</label>
                        </div>
                        <div className="input-box mt-2">
                            <select
                                value={categoryType}
                                onChange={handleCategoryChange}
                            >
                                {[
                                    { text: 'Expenses', value: 'expenses' },
                                    { text: 'Income', value: 'income' },
                                ].map(option => (
                                    <option key={option.value} value={option.value} className=" optColor bg-dropdownColor text-fontColor">
                                        {option.text}
                                    </option>
                                ))}
                            </select>
                            <label className="category-type">Category type</label>
                        </div>
                        <div className='grid grid-cols-2 gap-3 w-full ml-4 -mt-4 pt-5 md:grid-cols-4'>
                            {categories.filter((category) =>
                                category.value.toLowerCase().startsWith(categoryType.toLowerCase())
                            ).map((category) => (
                                <>
                                    {category.subCategories.map((subCategory) => (
                                        <label key={subCategory.name} className="radio-label">
                                            <input
                                                type="radio"
                                                name="subcategory"
                                                className="hidden"
                                            />
                                            <div className='container4 cursor-pointer'>
                                                <div className='bg-blackOpacity rounded-[50%] w-[50px] mr-[10px]'>
                                                    <subCategory.icon className='w-[25px] h-[25px] text-fontColor ml-1 mt-1 text-center translate-x-[33%] translate-y-[35%] icon'></subCategory.icon>
                                                </div>
                                            </div>
                                        </label>
                                    ))}
                                </>
                            ))}
                        </div>



                        <button type="submit" className='saveBtn mt-4 '>
                            <p className='text-fontColor'>Save</p>
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
}

export default CategoryModal;