import "../styles/popup.css";
import "../styles/main.css";
import bg from '../assets/bg3.png';
import { XMarkIcon } from '@heroicons/react/24/solid'
import React, {useState} from "react";



function AccountModal({ setOpenModal, handleAddAccount }) {
    const [accountType, setAccountType] = useState('');
    const [accountAmount, setAccountAmount] = useState('');
    const handleSaveAccount = () => {
        // Create a new account object
        const newAccount = {
            type: accountType,
            amount: accountAmount,
        };
        // Pass the new account to the parent component
        handleAddAccount(newAccount);
        // Close the modal
        setOpenModal(false);
    };
    return (
        <main>
            <img src={bg} className='background flex' alt='background' />
            <div className="accountModalContainer">
                <div className="header"> {/* New class name for header */}
                    <h2 className="text-fontColor">Account</h2>
                    <XMarkIcon className="text-fontColor h-[20px] mt-3 cursor-pointer" onClick={() => { setOpenModal(false); }} />
                </div>
                <div className="account-box">
                    <form>
                        <div className="input-box">
                            <input type="text" value={accountType} required onChange={(e) => setAccountType(e.target.value)} />
                            <label>Account name</label>
                        </div>
                        <div className="input-box">
                            <input type="number" value={accountAmount} required onChange={(e) => setAccountAmount(e.target.value)}/>
                            <label>Amount</label>
                        </div>
                        <button className='saveBtn' onClick={handleSaveAccount}>
                            <p className='text-fontColor'>Save</p>
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
}

export default AccountModal;