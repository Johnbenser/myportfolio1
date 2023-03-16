import React from 'react';
import Typewriter from 'typewriter-effect';
//import {HiArrowNarrowRight} from 'react-icons/hi';

const Home = () => {
    return(
        <div name='home' className='w-full h-screen bg-[#0D1117]'>

            {/**container */}
            <div className='max-w-[1000px] after:content-[""] after:w-[3px] after:absolute relative after:h-[440px] after:left-3 after:bg-gradient-to-tl after:from-violet-600 after:to-red-700 mx-auto px-8 flex flex-col justify-center h-full text-gray-300
            before:content-[""] before:absolute before:left-[6px] before:bg-gradient-to-br before:from-violet-500 before:to-red-600 before:bottom-[5.9rem] before:z-10 before:w-[15px] before:h-[15px] before:rounded-full before:bg-slate-100'>
                <p className='text-[#879ebd] font-bold'>Hi, my name is</p>
                <h1 className='text-4xl font-bold md:text-5xl text-[#ccd6f6]'>John Benser Serraon</h1>
                <h2 className='text-4xl md:text-7xl font-bold text-[#8892b0] title'>Aspiring</h2>
                <div className='text-4xl md:text-7xl font-bold text-[#8892b0] title'>
                    <Typewriter
                    options={{autoStart: true,
                    loop: true,
                    delay: 40,
                    strings: [
                        "Software Engineer",
                        "Web ",
                        "Cyber Security",
                    ],
                }}
                    />
                </div>
                <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a Full Stack developer specializing in building and designing. Currently, I'm focused on
                    building responsive full-stack web applications.
                </p>
                <div>
                    <button className='border-[1px] transition ease-in-out delay-200 duration-300 bg-[#F0E9D2] hover:bg-slate-300 text-black py-2 px-4 hover:text-black rounded-md'>explore</button>
                </div>
            </div>

        </div>
    )
}

export default Home
