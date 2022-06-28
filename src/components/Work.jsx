import React from 'react'
import barber from '../assets/barbershop.PNG';
import beaches from '../assets/beaches.PNG';
import licoin from '../assets/licoin.PNG';
import dogwalker from '../assets/dogwalker.PNG';
import secured from '../assets/secured.PNG';
import travel from '../assets/travel.PNG';


const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen bg-[#27083b] text-gray-300'>
        {/*Container*/}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
           <div className='pb-8'>
               <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Work</p>
               <p className='py-4'>/ Check out some of my recent work /</p>
           </div>

           {/*Card Container*/}
           <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 '>
            
               {/*Card Item*/}
               <div style={{backgroundImage: `url(${barber})`}} 
               className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                   {/*Hover Effects*/}
                   <div className='opacity-0 group-hover:opacity-100'>
                       <span className='text-2xl font-bold text-white tracking-wider'>
                           Barber Shop
                       </span>
                       <div className='pt-8 text-center'>
                           <a href="https://github.com/alinerivieri/barbershop" target='blank'>
                               <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                           </a>
                           <a href="https://barbershop-ivory.vercel.app/" target='blank'>
                               <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                           </a>
                       </div>
                   </div>
               </div>
               <div style={{backgroundImage: `url(${beaches})`}} 
               className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                   {/*Hover Effects*/}
                   <div className='opacity-0 group-hover:opacity-100'>
                       <span className='text-2xl font-bold text-white tracking-wider'>
                           Beaches Travel
                       </span>
                       <div className='pt-8 text-center'>
                           <a href="https://github.com/alinerivieri/beachestravel" target='blank'>
                               <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                           </a>
                           <a href="http://beachestravel.vercel.app/" target='blank'>
                               <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                           </a>
                       </div>
                   </div>
               </div>
               <div style={{backgroundImage: `url(${licoin})`}} 
               className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                   {/*Hover Effects*/}
                   <div className='opacity-0 group-hover:opacity-100'>
                       <span className='text-2xl font-bold text-white tracking-wider'>
                           LiCoin - Crypto
                       </span>
                       <div className='pt-8 text-center'>
                           <a href="https://github.com/alinerivieri/licoin-finance" target='blank'>
                               <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                           </a>
                           <a href="https://licoin-finance.vercel.app/" target='blank'>
                               <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                           </a>
                       </div>
                   </div>
               </div>
               <div style={{backgroundImage: `url(${dogwalker})`}} 
               className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                   {/*Hover Effects*/}
                   <div className='opacity-0 group-hover:opacity-100'>
                       <span className='text-2xl font-bold text-white tracking-wider'>
                           Dog Walker
                       </span>
                       <div className='pt-8 text-center'>
                           <a href="https://github.com/alinerivieri/dog_walker" target='blank'>
                               <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                           </a>
                           <a href="http://dog-walker-phi.vercel.app/" target='blank'>
                               <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                           </a>
                       </div>
                   </div>
               </div>
               <div style={{backgroundImage: `url(${secured})`}} 
               className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                   {/*Hover Effects*/}
                   <div className='opacity-0 group-hover:opacity-100'>
                       <span className='text-2xl font-bold text-white tracking-wider'>
                           Secured
                       </span>
                       <div className='pt-8 text-center'>
                           <a href="https://github.com/alinerivieri/secured" target='blank'>
                               <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                           </a>
                           <a href="http://secured.vercel.app/" target='blank'>
                               <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                           </a>
                       </div>
                   </div>
               </div>
               <div style={{backgroundImage: `url(${travel})`}} 
               className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                   
                   {/*Hover Effects*/}
                   <div className='opacity-0 group-hover:opacity-100'>
                       <span className='text-2xl font-bold text-white tracking-wider'>
                           Galaxy Travel
                       </span>
                       <div className='pt-8 text-center'>
                           <a href="https://github.com/alinerivieri/spacetravel" target='blank'>
                               <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                           </a>
                           <a href="http://spacetravel-two.vercel.app/" target='blank'>
                               <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                           </a>
                       </div>
                   </div>
               </div>
           </div>
        </div>
    </div>
  )
}

export default Work