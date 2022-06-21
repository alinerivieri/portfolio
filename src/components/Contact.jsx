import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#27083b] flex justify-center items-center p-4'>
         {/*Container*/}
             <form method='POST' action="https://getform.io/f/5ecea726-1a20-4834-9114-8a8c21ddfabc" className='flex flex-col max-w-[600px] w-full'>
                 <div className='pb-8'>
                     <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                     <p className='py-4 text-gray-300'>/ Submit the form below or shoot me an e-mail - alinerrivieri@gmail.com /</p>
                 </div>
                 <input className='p-2 bg-[#ccd6f620] text-white' type="text" placeholder='Name' name='name' />
                 <input className='my-4 p-2 bg-[#ccd6f620] text-white' type="email" placeholder='E-mail' name='email' />
                 <textarea className='p-2 bg-[#ccd6f620] text-white' name="message" rows="7" placeholder='Message'></textarea>
                 <button className='text-white group border-2 px-2 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                     Let's Collaborate
                 </button>
             </form>
    </div>
  )
}

export default Contact