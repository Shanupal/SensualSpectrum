import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserSignup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName,setLastName] = useState('')
  const [userData, setUserData] = useState({})

  const submitHandler=(e)=>{
    e.preventDefault();
    const newUserData = {
      userName: {
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
      password: password,
    };
    setUserData(newUserData);
    console.log(userData);
    setEmail('')
    setPassword('')
    setFirstName('')
    setLastName('')
  }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
    <div>
    <img className='w-16 mb-10' src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQy-OIkA6In0fTvVwZADPmFFibjmszu2A0g&s" alt=""/>
    <form onSubmit={(e)=>{
      submitHandler(e)
    }}>
  <h3 className='text-base font-medium mb-2 '>What's your Name</h3>
  <div className='flex gap-4 mb-5'>
  <input 
  className='bg-[#eeeeee] rounded-lg px-4 py-2 border w-1/2 text-base placeholder:sm'
   type="text"
   placeholder='First Name'
   value = {firstName}
   onChange={(e)=>
    setFirstName(e.target.value)
   }
   />
   <input 
  className='bg-[#eeeeee] rounded-base px-4 py-2 border w-1/2 text-base placeholder:sm'
   type="text"
   placeholder='Last Name'
   value = {lastName}
   onChange={(e)=>
    setLastName(e.target.value)
   }
   />
  </div>
  <h3 className='text-base font-medium mb-2'>What's your Email</h3>
  <input 
  className='bg-[#eeeeee] mb-5 rounded-base px-4 py-2 border w-full text-lg placeholder:text-base'
   type="email"
   placeholder='abc@gmail.com'
   value = {email}
   onChange={(e)=>
    setEmail(e.target.value)
   }
   />
  <h3 className='text-base font-medium mb-2'>Enter password</h3>
  <input className='bg-[#eeeeee] mb-5 rounded-lg px-4 py-2 border w-full text-base placeholder:sm'
  type="password" 
  placeholder='password'
  value = {password}
   onChange={(e)=>
    setPassword(e.target.value)
   }
  />
  
  <button 
  className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-base placeholder:sm'
  >Login</button>
  </form>
  <p className='text-center'>Already have a account?<Link to ='/login' className='text-blue-600'>Login here</Link></p>

  
  </div>
   <div >
   <p className='text-[10px] leading-tight text-gray-500'>This is Site is Protected by reCaptvha and the <span className='underline'>Google Privacy Policy </span> and Terms of Services apply</p>
   </div>
  </div>
  )
}

export default UserSignup