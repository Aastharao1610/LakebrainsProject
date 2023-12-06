import  { useState } from 'react';
import EyeIcon from './EyeIcon';
import LanguageSelector from './LanguageSelctor';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
   


    
  <div className=" mx-2 w-screen my-10 px-20 flex relative">
<div className="flex-1 bg-gradient-to-b from-green-400 to-green-200 to-green-100 to-green-50 flex h-screen w-full">
<h2 className='my-7 mx-5 text-3xl mt-40 w-full '>Find 3D Objects ,Mockups and Illustration here</h2>
{/* <div className="mb-4 mt-4 flex items-center justify-center w-full h-auto   ">
          <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQb-4PCV201xrF2_NCVcvB_sf6YOF42k1mlAiOcwM1LPkwUttsY" alt="Login Image" className=" w-full" />
  </div>*/}
</div> 
<div className="w-2/3 bg-white rounded-bl-3xl rounded-tl-3xl px-10 py-4 ">

{/* Language Selector */}
<LanguageSelector />  


<div className=' mt-10 px-20 gap-6 py-2 -mx-10 items-start justify-center '>
  <div className='mb-20   font-bold  mx-2 text-black text-sm'>
  <h1>Create Account</h1>
  </div>

<div className='flex mx-10 my-6 px-10 gap-8 mb-10  '>
  <button className='border border-black shadow-xl font-bold bg-white rounded-3xl mx-2 text-black '>
   Sign Up With Google
  </button>
  <button className='border  border-black shadow-2xl  bg-white font-bold rounded-3xl mx-2 text-black whitespace-no-wrap'>
   Sign Up With Facebook
  </button>
  </div>
  </div>

{/* Full Name */}
<div className=" pointer mb-8">
  <label htmlFor="fullName" className="block text-sm font-medium text-gray-600 ">
  </label>
  <input
    type="text"
    id="fullName"
    placeholder="Enter your full name"
    className="border outline  w-full mb-4  py-5"
  />
  <div className="border-b-2 absolute bottom-0 left-0 right-0 border-black"></div>
</div>


{/* Email */}
<div className="py-0 ">
  <label htmlFor="email" className="block text-sm font-medium text-gray-600">
    
  </label>
  <input
    type="email"
    id="email"
    className="border outline w-full mb-10 py-4"
    placeholder="Enter your email"
  />
</div>

{/* Password */}
<div className="mb-8 relative">
  <label htmlFor="password" className="block text-sm font-medium text-gray-600">
   
  </label>
  <input
    type={showPassword ? 'text' : 'password'}
    id="password"
    className="border outline w-full mb-9 py-4" 

    placeholder="Enter your password"
  />
  <EyeIcon showPassword={showPassword} togglePasswordVisibility={togglePasswordVisibility} />
</div>


{/*Submit button */}
 <div className="flex items-center justify-center w-full">
        {/* Your login form can go here */}
        <button className="bg-green-300 text-white px-4 py-2 rounded-3xl w-full text-2xl">
          Create Your account
        </button>
      </div>
    </div>

  
</div>
  
  

   
  );
};

export default LoginForm;


 