import vLogo from '../assets/Vertical_Logo.png';
import bg from '../assets/bg1.png'
import '../../components/styles/main.css';

function Login() {


  return (
    <div className='duitkraft'>
      <img src={bg} className='bg1 flex' alt='background' />
      {/* <div className='container m-auto'> */}
        <div className='columns-2xs gap-5 flex-row outerColumn max-md:flex-col-reverse gap-y-0'>
          <div className='container1 p-12 max-md:px-14 pb-8'>
            <h2 className='subtitle text-fontColor'>Login</h2>
            <p className='text-fontColor text-lg'>Welcome back, </p>
            {/* <div className="form-control">
              <input type="value" required=""/>
              <label>
                <span style={{transitionDelay: "0ms" }}>Email</span>
              </label>
              <input type="value" required="" style={{paddingTop: "35px"}}/>
              <label style={{ top:"108px" }}>
                <span style={{transitionDelay: "0ms"}}>Password</span>
              </label>
            </div> */}
            <div className="login-box">
              <form>
                <div className="user-box">
                  <input type="text" name="" required />
                  <label>Email</label>
                </div>
                <div className="user-box">
                  <input type="password" name="" required />
                  <label>Password</label>
                  <div className='w-[30px] h-[30px] rounded-[50%] flex absolute right-0' style={{backgroundColor:"blue", top:"5px"}}></div>
                </div>
              </form>
              <button className='loginBtn max-md:translate-x-[-50%] translate-y-[50%]'>
                <p className='text-fontColor'>Login</p>
              </button>
              <p className='text-fontColor mt-20 text-center' style={{ fontSize: "14px" }}>Do not have an account?</p>
              <p className='text-fontColor underline underline-offset-8 mb-12 text-center signUp' style={{ fontSize: "14px" }}>Sign Up Now!</p>
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