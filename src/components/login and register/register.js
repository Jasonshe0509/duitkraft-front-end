import React, { useState, useEffect } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'
import vLogo from '../assets/Vertical_Logo.png';
import bg from '../assets/bg1.png'
import '../../components/styles/main.css';
import '../login and register/register.css';
import RegisterModal from './registerModal';

function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const [selectedCountry, setSelectedCountry] = useState("");
    const handleSelectChange = (event) => {
        setSelectedCountry(event.target.value);
    };

    const [openModal, setOpenModal] = useState(false);
    const handleOpenModal = () => {
        setOpenModal(true);
        document.querySelector('.duitkraft').style.opacity = '0.5';
    };
    useEffect(() => {
        if (openModal) {
            const timeoutId = setTimeout(() => {
                setOpenModal(false);
                // Redirect to login page (replace with your actual logic)
                window.location.href = "/";
            }, 1000); // Adjust timeout for 5 seconds

            return () => clearTimeout(timeoutId); // Cleanup on unmount
        }
    }, [openModal]);
    return (
        <main>
            <div className='duitkraft'>
                <img src={bg} className='bg1 flex' alt='background' />
                {/* <div className='container m-auto'> */}
                <div className='columns-2xs pb-5 gap-5 flex-row OuterColumnRegister max-md:flex-col-reverse gap-y-0'>
                    <div className='container2 p-12 max-md:px-14 pb-8'>
                        <h2 className='subtitle text-fontColor'>Register</h2>
                        <p className='text-fontColor text-lg'>Welcome guest, </p>
                        <div className="register-box">
                            <form>
                                <div className="user-box">
                                    <input type="text" name="" required/>
                                    <label>Fullname</label>
                                </div>
                                <div className="user-box">
                                    <input type="text" name="" required/>
                                    <label>Username</label>
                                </div>
                                <div className="user-box">
                                    <input type="text" name="" required/>
                                    <label>Email</label>
                                </div>
                                <div className="user-box">
                                    <select name="country" value={selectedCountry} onChange={handleSelectChange} className='mb-[30px]'>
                                        <option className=' optColor bg-dropdownColor text-fontColor' value="">Country</option>
                                        <option className='optColor bg-dropdownColor text-fontColor' value="MY">Malaysia</option>
                                        <option className='optColor bg-dropdownColor text-fontColor' value="USA">USA</option>
                                        <option className='optColor bg-dropdownColor text-fontColor' value="UK">UK</option>
                                        <option className='optColor bg-dropdownColor text-fontColor' value="Canada">Canada</option>
                                    </select>
                                    {selectedCountry && <label>Country</label>}
                                </div>
                                <div className="user-box grid gap-1">
                                    <select name="dialcode" className='max-md:col-start-1 col-end-2' >
                                        <option className=' optColor bg-dropdownColor text-fontColor' value="MY">MY +60</option>
                                        <option className=' optColor bg-dropdownColor text-fontColor' value="USA">US +1</option>
                                        <option className=' optColor bg-dropdownColor text-fontColor' value="UK">UK +44</option>
                                        <option className=' optColor bg-dropdownColor text-fontColor' value="Canada">CA +1</option>
                                    </select>
                                    <label className='contact-number'>Contact Number</label>
                                    <input type="text" name="" className=' max-md:col-start-3 col-end-4' placeholder='Contact Number' required/>
                                </div>
                                <div className="user-box">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        name="password"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)} // Update password on change
                                    />
                                    <label>Password</label>
                                    <div className='flex absolute right-0 text-fontColor' style={{ top: "10px" }} onClick={handleTogglePasswordVisibility}>
                                        {showPassword ? <EyeIcon className='h-5 w-5' /> : <EyeSlashIcon className='h-5 w-5' />}
                                    </div>
                                </div>
                                <div className='grid gap-2'>
                                    <input type="checkbox" className="ui-checkbox col-start-1 col-end-3" />
                                    <p className='text-fontColor col-start-4 col-end-13'>I agree with all the <u>terms and conditions</u> applied.</p>
                                </div>

                            </form>
                            <button
                                className="registerBtn max-md:translate-x-[-50%] translate-y-[50%]"
                                onClick={handleOpenModal}
                            >
                                <p className="text-fontColor">Register</p>
                            </button>
                        </div>
                    </div>
                    <div className='container2 p-12 max-md:px-14 pt-8'>
                        <img src={vLogo} height={'100px'} width={'200px'} className='m-auto' alt='logo' style={{ marginTop: "15%" }} />
                        <h3 className='font-semibold text-fontColor text-center mb-3' style={{ fontSize: "16px" }}>FINANCIAL EDUCATION · <br className='block lg:hidden' />BUDGETTING · FUN</h3>
                        <div>
                            <p className='text-fontColor text-justify block max-md:hidden'>Embark on an exciting journey towards financial literacy and empowerment by registering now and immersing yourself in the incredible features offered by DuitKraft! </p>
                            <ul className='text-fontColor text-justify block ml-4 mt-2 max-md:hidden'>
                                <li>Online Financial Learning</li>
                                <li>Gamification Learning</li>
                                <li>Budget Record System</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {openModal && <RegisterModal />}
        </main>
        // </div>
    );
}
export default Register;
