 

import React from 'react';
import Search from './Search';
 

const Navbar: React.FC = () => {
  return (
  <nav className='flex row items-center w-full h-14 shadow'>
    <div className='flex items-center space-x-4' >
      <img src="../../public/logo-stream.png" className='w-10 h-10' alt="" />
      
      <span>Streamino</span>
     
    </div>
    
    <div className='flex flex-grow justify-center'>
    <Search/>
    </div>
    
    <div className='flex items-center'>
      <img src="../../public/dark.jpg" alt="" className='object-cover rounded-full w-10 h-10 ' />
    </div>
  </nav>
  );
};

export default Navbar;
