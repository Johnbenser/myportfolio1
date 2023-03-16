import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='h-screen bg-[#0D1117] w-full flex justify-center items-center p-4'>
                <form method='POST' action='https://getform.io/f/a0b751f0-c53e-4e7c-8b29-4eccdefb8600' className='max-w-[600px] mb-16 flex flex-col w-full'>
                    <div className='pb-8'>
                        <p className='text-gray-300 flex justify-center font-bold items-center text-4xl w-[150px] mx-auto'>Contact</p>
                    </div>
                    <input className='bg-[#ccd6f6] p-2 rounded-sm' type='text' name='name' placeholder='Enter your name' required/>
                    <input className='bg-[#ccd6f6] p-2 my-4 rounded-sm' type='email' name='email' placeholder='Enter your email' required/>
                    <textarea className='bg-[#ccd6f6] p-2 rounded-sm' name='message' rows='10' placeholder='Message'/>
                    <div className='inline-block'>
                    <input type='checkbox' name='subs' required/>
                    <label for='checkbox2' className='text-gray-500 mx-2'>I'd like to receive emails about the news and updates.</label>
                    </div>
                    <button className='rounded-md w-[150px] mx-auto my-4 py-3 text-black bg-gradient-to-br from-[#E6DDC4] to-[#F0E9D2]'>let's collaborate</button>
                </form>
        </div>
  )
}

export default Contact
