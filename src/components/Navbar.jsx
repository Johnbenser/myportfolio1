import React, {useState} from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'
import Jlogo from '../assets/j logo (1).png'
import {Link} from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  return (
    <div className='fixed shadow-lg z-10 w-full h-[80px] flex justify-between items-center px-4 bg-[#0D1117] text-gray-300'>
        <div>
            <img src={Jlogo} alt="my logo at navbar" width="40px"/>
        </div>

        {/**menu */}

            <ul className='hidden md:flex'>
                <li>
                    <Link to='home' smooth={true} duration={500}>
                    <span className='text-green-500 font-mono'>1. </span> Home
                    </Link>
                </li>
                <li>
                    <Link to='about' smooth={true} duration={500}>
                    <span className='text-green-500 font-mono'>2. </span> About
                    </Link>
                </li>
                <li>
                    <Link to='skills' smooth={true} duration={500}>
                    <span className='text-green-500 font-mono'>3. </span> Skills
                    </Link>
                </li>
                <li>
                    <Link to='contact' smooth={true} duration={500}>
                    <span className='text-green-500 font-mono'>4. </span> Contact
                    </Link>
                </li>
               {/**  <li className='bg-[#F0E9D2] text-[#181D31] rounded-sm'>
                    <Link to='resume' smooth={true} duration={500}>
                     Resume
                    </Link>
                </li>*/}
                <a href='https://www.linkedin.com/in/jasper-ayawan-7abb47232/?originalSubdomain=ph' className='bg-[#F0E9D2] px-[.7rem] text-[#181D31] font-semibold rounded-md'>
                    LinkedIn
                </a>
            </ul>

        {/**hamburger */}

        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes/>}
        </div>

        {/**mobile menu */}

            <ul className={!nav ? 'hidden' : 'absolute top-8 left-0 py-8 mx-auto mt-[2.5rem] rounded-md w-full bg-[#fff] color-grey-300 flex flex-col justify-center items-center'}>
                <li className='py-6 text-[1.2rem] text-[#24292F] font-semibold'>
                    <Link onClick={handleClick} to='home' smooth={true} duration={500}>
                     Home
                    </Link>
                </li>
                <li className='py-6 text-[1.2rem] text-[#24292F] font-semibold'>
                    <Link onClick={handleClick} to='about' smooth={true} duration={500}>
                     About
                    </Link>
                </li>
                <li className='py-6 text-[1.2rem] text-[#24292F] font-semibold'>
                    <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
                     Skills
                    </Link>
                </li>
                <li className='py-6 text-[1.2rem] text-[#24292F] font-semibold'>
                    <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
                     Contact
                    </Link>
                </li>
               {/**  <li className='text-2xl bg-[#F0E9D2] text-[#181D31] rounded-sm px-4 py-1'>
                    <Link onClick={handleClick} to='resume' smooth={true} duration={500}>
                     Resume
                    </Link>
                </li> */}
                <a href='https://www.linkedin.com/in/jasper-ayawan-7abb47232/?originalSubdomain=ph' className='bg-[#24292F] font-semibold text-[#FFFFFF] px-8 py-[.5rem] rounded-md'>
                    LinkedIn
                </a>
            </ul>

    </div>
  )
}

export default Navbar
