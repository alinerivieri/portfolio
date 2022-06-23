import React from 'react'
import photo from '../assets/photo.png'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#27083b] text-gray-300'>
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
          <img className='w-[300px] mx-auto' src={photo} alt="" />
            <p>Hi, I'm Aline, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
            I have a degree in Management Processes from Estácio de Sá, I worked for more than 10 years in the administrative area, being my last experience in purchasing, where I was able to develop interpersonal communication, empathy and conflict resolution.
            </p>
            <br/>
            <p>
            I've had a passion since childhood for everything related to technology and now as an adult, I rediscovered myself in this programming path.
            </p>
            <br/>
            <p>
            In the search for this knowledge, I found several courses, where I could learn a lot. In addition to technical learning, I learned to learn, maintaining dedication and discipline.
            </p>
            <br/>
            <p>
            Through this experience, in the training as a Web Developer, I was able to gain knowledge in HTML, CSS, JavaScript, ReactJS, Tailwind, Bootstrap, SASS and now learning more about Firebase, NodeJS etc.
            </p>
            <br/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About