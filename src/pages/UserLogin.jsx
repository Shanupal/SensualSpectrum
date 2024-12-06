import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UserLogin = () => {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [UserData, setUserData] = useState({})

  const SubmitHandler = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted with email:', email, 'and password:', password);
    // Reset form state
    setemail('');
    setpassword('');

  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between '>
      <div>
        <img className='w-16 mb-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQy-OIkA6In0fTvVwZADPmFFibjmszu2A0g&s"/>
        <form onSubmit={(e)=>{
        SubmitHandler(e)
       } }>
      <h3 className='text-xl font-medium mb-2'>Whats your Email</h3>
      <input 
      className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
       type="email"
       required 
       value={email}
       onChange={(e) =>{
        setemail(e.target.value)
       }}
       
       placeholder='Example@gmail.com'
       />
      <h3 className='text-lg font-medium mb-2'>Enter password</h3>
      <input 
      className='bg-[#eeeeee} mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
      value={password}
       onChange={(e) =>{
        setpassword(e.target.value)
       }}
      type="password" 
      placeholder='password'/>
      
      <button 
      className='bg-[#111] text-white font-semibold mb-2 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'
      >Login</button>
      <p className='text-center'>New Here?<Link to='/signup' className='text-blue-600'>Create New account</Link></p>

      </form>
      </div>
      <div>
      <Link to='/captain-login' className='bg-[#111] flex item-center justify-center text-white font-semibold mb-5 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'>Sign in as Captain</Link>
      </div>
    </div>
  )
}

export default UserLogin
