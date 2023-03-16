import React from 'react';
import Html from '../assets/html.png';
import Css from '../assets/css.png';
import Javascript from '../assets/javascript.png';
import Tailwind from '../assets/tailwind.png';
import RrEACT from '../assets/react.png';
import Mongodb from '../assets/mongo.png';
import Typewriter from 'typewriter-effect'


const Skills = () => {
    return(
        <div name='skills' className='w-full bg-[#0D1117] text-gray-300'>
            {/**container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col py-[10rem] md:py-[20rem] justify-center items-center w-full h-full'>

                <div className='w-[80px] h-[80px] transform scale-75 bg-[#E6DDC4] text-black  border-2 border-white rounded-full flex items-center justify-center text-2xl'>
                    Skills
                </div>
                <div className='hw-inner lg:w-[15rem] lg:h-[15rem] flex justify-between items-center absolute border border-gray-400 rounded-full animate-spin-slow anim-8s'>
                    <div className='bg-white p-1 rounded-full h-7 w-7 flex justify-center items-center transform -translate-x-4 overflow-hidden'>
                        <img className='h-6 w-6 object-center animate-rotate-img anim-8s'
                        src={Html} alt="Html icon" />
                    </div>

                    <div className='bg-white overflow-hidden p-1 flex justify-center items-center rounded-full h-7 w-7 transform translate-x-4'>
                        <img className='h-6 w-6 object-center animate-rotate-img anim-8s'
                        src={Css} alt="Html icon" />
                    </div>
                </div>

                <div className='hw-outer lg:w-[23rem] lg:h-[23rem] flex justify-between items-center absolute border border-gray-400 rounded-full animate-spin-slow'>
                        <div className='flex justify-between'>
                            <div className='bg-white p-1 rounded-full h-7 w-7 flex justify-center items-center transform -translate-x-3 overflow-hidden'>
                                <img className='h-6 w-6 object-center animate-rotate-img'
                                src={Javascript} alt="Javascript icon" />
                            </div>

                            <div className='bg-white overflow-hidden flex justify-center items-center p-1 rounded-full h-7 w-7 transform translate-x-2'>
                                <img className='h-6 w-6 object-center animate-rotate-img'
                                src={Tailwind} alt="Tailwind icon" />
                            </div>
                        </div>
                        <div className='flex justify-between'>
                            <div className='bg-white p-1 rounded-full h-7 w-7 flex justify-center items-center transform -translate-x-2'>
                                <img className='h-6 w-6 object-center animate-rotate-img overflow-hidden'
                                src={RrEACT} alt="React icon" />
                            </div>

                            <div className='bg-white overflow-hidden p-1 flex justify-center items-center rounded-full h-7 w-7 transform translate-y-10 translate-x-2'>
                                <img className='h-6 w-6 object-center animate-rotate-img'
                                src={Mongodb} alt="Mongodb icon" />
                            </div>
                        </div>
                </div>
            </div>
            <div className='p-4'>
            <div className='max-w-[500px] bg-black mx-auto border-[1px] h-[400px] relative'>
                <div className='flex justify-start gap-2 mb-4 w-full bg-gray-700 p-3'>
                <div className='bg-red-500 w-[10px] rounded-full h-[10px]'></div>
                <div className='bg-yellow-500 w-[10px] rounded-full h-[10px]'></div>
                <div className='bg-green-500 w-[10px] rounded-full h-[10px]'></div>
                </div>

                <div className='p-4'>
                <p className='text-white font-mono text-[13px]'><span className='text-[#23b623]'>Johnbenser@DESKTOP-B32B99</span>
                <span className='text-[#ae33c7]'> MINGW64 </span>
                <span className='text-[#ad9b30]'>~</span></p>
                <span className='inline-block font-mono'>$ <Typewriter
                    options={{autoStart: true,
                    loop: true,
                    delay: 50,
                    strings: [
                        "Using the latest technology: When it comes to website building, it is important to use the latest technology in order to stay ahead in the industry. The quality of a web system must deliver with planning, analysis, design, development, testing, implementation and maintenance to elevates client/customer satisfaction.",
                    ],
                }}
                />

                </span>

                <div className='absolute bottom-4 left-4 font-mono text-[#23b623]'>
                <Typewriter
                    options={{autoStart: true,
                    loop: true,
                    delay: 30,
                    strings: [
                        "HTML",
                        "CSS",
                        "Javascript",
                        "React.js",
                        "TailwindCSS",
                        "Bootstrap",
                        "SQL",
                        "PHP"
                    ],
                }}
                    />
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Skills
