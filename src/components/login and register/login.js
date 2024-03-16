import React, { useState } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'
import vLogo from '../assets/Vertical_Logo.png';
import bg from '../assets/bg1.png'
import '../../components/styles/main.css';
import { Link } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className='duitkraft'>
      <img src={bg} className='bg1 flex' alt='background' />
      {/* <div className='container m-auto'> */}
      <div className='columns-2xs gap-5 flex-row outerColumn max-md:flex-col-reverse gap-y-0'>
        <div className='container1 p-12 max-md:px-14 pb-8'>
          <h2 className='subtitle text-fontColor'>Login</h2>
          <p className='text-fontColor text-lg'>Welcome back, </p>
          <div className="login-box">
            <form>
              <div className="user-box">
                <input type="text" name="" required />
                <label>Email</label>
              </div>
              <div className="user-box">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} // Update password on change
                  required
                />
                <label>Password</label>
                <div className='flex absolute right-0 text-fontColor' style={{ top: "10px" }} onClick={handleTogglePasswordVisibility}>
                  {showPassword ? <EyeIcon className='h-5 w-5' /> : <EyeSlashIcon className='h-5 w-5' />}
                </div>
              </div>
              <Link to='/dashboard'>
                <button className='loginBtn max-md:translate-x-[-50%] translate-y-[50%]'>
                  <p className='text-fontColor'>Login</p>
                </button>
              </Link>
            </form>
            <p className='text-fontColor mt-20 text-center' style={{ fontSize: "14px" }}>Do not have an account?</p>
            <Link to='/register'>
              <p className='text-fontColor underline underline-offset-8 mb-12 text-center signUp' style={{ fontSize: "14px" }}>Sign Up Now!</p>
            </Link>

          </div>
        </div>
        <div className='container1 p-12 max-md:px-14 pt-8'>
          <img src={vLogo} height={'100px'} width={'200px'} className='m-auto' alt='logo' style={{ marginTop: "15%" }} />
          <h3 className='font-semibold text-fontColor text-center mb-3' style={{ fontSize: "16px" }}>FINANCIAL EDUCATION · <br className='block lg:hidden' />BUDGETTING · FUN</h3>
          <p className='text-fontColor text-justify block max-md:hidden'>Sign in to continue your budgetting and education journey in DuitKraft</p>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default Login;