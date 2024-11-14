import React from 'react';

const Navbar = () => {
  return (
    <>
    
    <nav className=' bg-black w-full h-14 flex justify-between items-center px-4 shadow-lg'>
                    <div className=" flex justify-start items-center gap-2">
                        <svg width="22" height="22" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0H11V29H4C1.79086 29 0 27.2091 0 25V0Z" fill="#FF00A6"/>
                            <path d="M28 0H35C37.7614 0 40 2.23858 40 5V12H28V0Z" fill="#FF00A6"/>
                            <path d="M11 29H40V40H15C12.7909 40 11 38.2091 11 36V29Z" fill="#FF00A6"/>
                        </svg>
                        <h1 className=' font-bold text-white'> LinkUp</h1>
                    </div>
                    <div className=" flex justify-center items-center gap-5">
                        <div className=" w-10 h-10 flex justify-center items-center relative">
                            <i className="fa-regular fa-bell fa-lg" style={{color: '#D6D6D6'}}></i>
                            <div className=" w-5 h-5 rounded-full bg-[#FF0004] absolute top-0 right-0.5 text-[9px] font-semibold flex justify-center items-center text-white">
                                +9
                            </div>
                        </div>
                        <div className=" w-8 h-8 rounded-full bg-slate-300 relative">
                            <img className='  w-8 h-8 rounded-full' src="1.jpg" alt="" />
                            <div className=" absolute -bottom-0.5 left-0 w-3 h-3 bg-[#FF00A6] rounded-full"></div>
                        </div>
                    </div>
                </nav>
                </>
  );
};

export default Navbar;
