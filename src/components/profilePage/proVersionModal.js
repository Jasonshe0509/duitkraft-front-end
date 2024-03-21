import "../styles/popup.css";
import "../styles/main.css";
import bg from '../assets/bg3.png';
import { XMarkIcon } from '@heroicons/react/24/solid'
import React, { useState } from "react";
import DoubleUpXp from "../assets/double up xp.png";
import SkipLvl from "../assets/skip lvl.png";


function ProVersionModal({ setOpenModal }) {
    const handleProVersion = () => {
        // Close the modal
        setOpenModal(false);
    };
    return (
        <main>
            <img src={bg} className='background flex' alt='background' />
            <div className="proVersionModalContainer">
                <div className="header">
                    <h2 className="text-fontColor">Pro Version</h2>
                    <XMarkIcon className="text-fontColor h-[20px] mt-3 cursor-pointer" onClick={() => { setOpenModal(false); }} />
                </div>
                <p className="text-fontColor ml-4">Please select one or both card to purchase: </p>
                <form>
                    <div className="md-overflow-auto">
                        <div className="radio-inputs flex-col md:flex-row">
                            <label>
                                <input
                                    defaultChecked=""
                                    className="radio-input "
                                    type="radio"
                                    name="engine"
                                />
                                <span className="radio-tile ">
                                    <span className="radio-icon "><img src={DoubleUpXp} className="h-[150px]" alt="double_up_xp" /></span>
                                    <h2 className="radio-label text-fontColor">Double Experience Card</h2>
                                    <ul className='text-fontColor ml-8 mr-3 mt-2'>
                                        <li>all experience gained in the next 7 days can be doubled up, including:
                                            <ui>
                                                <li className='features'>record budget</li>
                                                <li className='features'>record transaction (income/expenses)</li>
                                                <li className='features'>learn module</li>
                                            </ui>
                                        </li>
                                    </ul>
                                    <h3 className="text-fontColor absolute text-center inset-x-0 bottom-2">MYR 39.99</h3>
                                </span>
                            </label>
                            <label>
                                <input className="radio-input" type="radio" name="engine" />
                                <span className="radio-tile ">
                                    <span className="radio-icon -mt-5"><img src={SkipLvl} className="h-[150px]" alt="double_up_xp" /></span>
                                    <h2 className="radio-label text-fontColor">Skip Level Card</h2>
                                    <ul className='text-fontColor ml-8 mr-3 mt-2'>
                                        <li>one level can be skipped after purchasing the skip level pass
                                            <ui>
                                                <li className='features'>do take note that, the skip level pass is being used in module learning section only</li>
                                            </ui>
                                        </li>
                                    </ul>
                                    <h3 className="text-fontColor absolute text-center inset-x-0 bottom-2">MYR 69.99</h3>
                                </span>
                            </label>
                        </div>
                        <button className={`purchaseBtn max-md:translate-x-[-50%] translate-y-[50%]`} onClick={handleProVersion}>
                            <p className='text-fontColor'>Purshase</p>
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
}

export default ProVersionModal;