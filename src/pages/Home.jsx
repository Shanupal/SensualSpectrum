import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div className='bg-cover bg-center bg-[url(https://i.imgur.com/X22z40I.jpeg)]
       h-screen pt-8 flex flex-col justify-between  w-full'>

        <img className='w-16 ml-8'src='https://cc-prod.scene7.com/is/image/CCProdAuthor/mascot-logo-design_P1_900x420?$pjpeg$&jpegSize=200&wid=900' alt='Uber logo'  />
       <div className='bg-white pd-7 py-4 px-4 mb-8'>
        <h2 className='text-3xl font-bold'>Get started with Uber</h2>
        <Link to='/login' Link className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>
        
       </div>
      </div>
    </div>
  )
}

export default Home
