
import PageHead from "../Head";
import { Provider } from "react-redux";
import Store from "@/redux/store";
import BackToTop from "../backToTop";
import Link from 'next/link'
import Context from "@/context/Context";
import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";
import HeaderStyleNine from "@/components/Header/HeaderStyle-Nine";
import Marketplace from "@/components/12-Marketplace/12-Marketplace";
import HeaderTopBar from "@/components/Header/HeaderTopBar/HeaderTopBar";
import FooterThree from "@/components/Footer/Footer-Three";
import Separator from "@/components/Common/Separator";
import { FaEyeSlash, FaEye } from 'react-icons/fa'
import { useState, useEffect } from "react";
import validator from 'validator'



const Account = () => {
  const [inputType, setInputType] = useState('password');
  const [isActive, setIsActive] = useState(false)

  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState(''); 
  const [errors, setErrors] = useState({}); 
  const [isFormValid, setIsFormValid] = useState(false); 
  

  useEffect(() => { 
      validateForm(); 
  }, [ email, password]); 
  // Validate form 
  const validateForm = () => { 
      let errors = {};  

      if (!email) { 
          errors.email = 'Email is required.'; 
      } else if (!/\S+@\S+\.\S+/.test(email)) { 
          errors.email = 'Email is invalid.'; 
      } 

      if (!password) { 
          errors.password = 'Password is required.'; 
      } else if (password.length < 8) { 
          errors.password = 'Password must be at least 8 characters.'; 
      }else if(validator.isStrongPassword(password, { 
        minLength: 8, minLowercase: 1, 
        minUppercase: 1, minNumbers: 1, minSymbols: 1 
    })) { 
         
    }

      setErrors(errors); 
      setIsFormValid(Object.keys(errors).length === 0); 
  }; 
  // Submit 
  const handleSubmit = (e) => { 
    e.preventDefault();
      if (isFormValid) { 
          console.log('Form submitted successfully!'); 
          window.location = '/marketplace'
      } else { 
          console.log('Form has errors. Please correct them.'); 
      } 
  };

  const handlePassword = (e)=>{
    if(setIsActive(!isActive)){
      setInputType(inputType === "password"? 'text' : 'password');
      
    }else{
      setInputType(inputType === "text"? 'password' : 'text');
      
    }
    
  }



  return (
    <>
      <PageHead title="Mentorbliss - New learning platform" />
      <Provider store={Store}>
        <Context>
          <MobileMenu />
          <HeaderTopBar />
          <HeaderStyleNine headerType="" />
          <div className="w-100 mt-5" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <div className="shadow-lg p-5 bg-white rounded" style={{ width: '500px'}}>
            <div className='w-[80%] mx-auto text-[18px]'>
          <h2 className='w-[90%] font-bold text-[18px]'>Login Your Account</h2>
          <p className='text-gray-400' style={{marginTop: '-20px'}}>Provide details to login</p>
          <div className='w-full'>
            
            <form className=' flex flex-col items-center w-full' onSubmit={handleSubmit}>
              <div className=' w-full'>
                <label className='font-bold text-[#292828e7]'>Email Address</label>
                <input type='email' value={email} placeholder='Enter Your Email Address' className=' px-4 py-4 w-full my-2 outline-none' required
                onChange={(e) => setEmail(e.target.value)}  />
                {errors.email && <p style={{color: 'red', marginBottom: '0px'}}>{errors.email}</p>}
                
                <label className='font-bold text-[#292828e7]'>Password</label>
                <div className='relative w-full mt-1' style={{position: 'relative'}}>
                <input type={inputType} placeholder='Password' value={password} className=' px-4 py-4 w-full relative outline-none' id='password' required
                  onChange={(e) => setPassword(e.target.value)} />
                  {errors.password && <p style={{color: 'red', marginBottom: '0px'}}>{errors.password}</p>}
                  { !isActive? <FaEyeSlash size={20} className=" cursor-pointer absolute  right-5" onClick={handlePassword} style={{position: 'absolute', right: '10', top: '15'}}/>:
                      <FaEye size={20} className=" cursor-pointer absolute top-3 right-5" onClick={handlePassword} style={{position: 'absolute', right: '10', top: '15'}}/>
                  }
                </div>
                
              </div>
              <div className='d-flex gap-2 w-100 my-3' style={{alignItems: 'center'}}>
                <input type="checkbox" className="" style={{opacity: '1', position: 'relative', padding: '0', width: '20px'}} required/>
                <p className="">I Accept Win Reality Terms And Condition</p>
              </div>
              <button type='submit' className='bg-primary text-center rounded-2 w-100 text-white p-4 mb-4 border-0'>Login</button>  
              <p>Don&apos;t have an account? <Link href='/create-account' className='text-[orange] cursor-pointer'>Create Account</Link></p>        
            </form>
          </div>
        </div>
            </div>
            
          </div>
          {/* <Marketplace /> */}
          {/* <Cart /> */}

          {/* <BackToTop /> */}
          {/* <Separator /> */}
          <FooterThree />
        </Context>
      </Provider>
    </>
  );
};

export default Account;
