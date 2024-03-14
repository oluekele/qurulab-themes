
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
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Account = () => {

  const [inputType, setInputType] = useState('password');
  const [isActive, setIsActive] = useState(false)
  const [first_name, setFirstName] = useState("")
  const [last_name, setLastName] = useState("")
  const [phone_number, setPhoneNumber] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
    
const pw = document.getElementById('password')
  
 
 const handleSubmit = (e) => {
    e.preventDefault()
    
    if(pw.value = 'john'){
      window.location = '/marketplace'
      console.log('password' + " " + pw.value)
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
          <h2 className='w-[90%] font-bold text-[25px]'>Create Account</h2>
          <p className=' mb-8 text-gray-400' style={{marginTop: '-20px'}}>Provide details to create an account</p>
          <div className='w-full'>
            
            <form className=' flex flex-col items-center w-full' onSubmit={handleSubmit}>
              <div className=' w-full'>
                <label className='font-bold text-[#292828e7]'>Email Address</label>
                <input type='email' name="email" placeholder='Enter Your Email Address' className='border-[1px] rounded-lg px-4 py-4 w-full my-2 outline-none' required/>
                <label className='font-bold text-[#292828e7]'>Phone Number</label>
                <input type='text' name="phone" placeholder='Enter Your Phone Number' className='border-[1px] rounded-lg px-4 py-4 w-full my-2 outline-none' required/>
                <label className='font-bold text-[#292828e7]'>Password</label>
                <div className='relative w-full mt-1' style={{position: 'relative'}}>
                  <input type={inputType} placeholder='Password' name="password" className='border-[1px] rounded-lg px-4 py-4 w-full relative outline-none' id='password' required/>
                  { !isActive? <FaEyeSlash size={20} className=" cursor-pointer absolute  right-5" onClick={handlePassword} style={{position: 'absolute', right: '10', top: '15'}}/>:
                      <FaEye size={20} className=" cursor-pointer absolute top-3 right-5" onClick={handlePassword} style={{position: 'absolute', right: '10', top: '15'}}/>
                  }
                </div>
                <label className='font-bold mt-3 text-[#292828e7]'>First Name</label>
                <input type='text' name="firstName" placeholder= "Enter Your First Name" className='border-[1px] rounded-full p-4 w-full outline-none  mb-4' required/>
                <label className='font-bold text-[#292828e7]'>Last Name</label>
                <input type='text' name="lastName" placeholder= "Enter Your Last Name" className='border-[1px] rounded-full p-4 w-full outline-none  mb-4' required/>
              </div>
              <div className='d-flex gap-2 w-100 my-3' style={{alignItems: 'center'}}>
                <input type="checkbox" className="" style={{opacity: '1', position: 'relative', padding: '0', width: '20px'}} required/>
                <p className="">I Accept Win Reality Terms And Condition</p>
              </div>
              <button type='submit' className='bg-primary text-center rounded-2 w-100 text-white p-4 mb-4 border-0'>Create Account</button>  
              <p>Already have an account? <Link href='/login' className='text-[orange] cursor-pointer'>Login</Link></p>        
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