import React from 'react';
import WorkImg from '../assets/workImg.jpeg';
import realEstate from '../assets/realestate.jpg';
import portfolioweb from '../assets/portfolioweb.jpeg';
import twelve from '../assets/twelve.png'
import progress from '../assets/progress.jpeg';
import jockey from '../assets/Jockey.png'
import sidemind from '../assets/sidemindlogo.webp'
import hackforla from '../assets/hfla_web.png'
import { HiArrowNarrowRight } from 'react-icons/hi';
import {Link} from 'react-scroll'

const FirstUseCase = ({mode}) => {
  return (
    <div name='firstusecase' className={`w-full sm:py-[800px] md:h-screen ${mode === 'white'? 'text-black-300': 'text-gray-300'} 
    ${mode === 'white'? 'white': 'bg-[#0a192f]'}`}>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className={`text-4xl font-bold inline border-b-4 ${mode === 'white' ? 'white': 'text-gray-300'}
          ${mode === 'white' ? 'border-blue-600': 'border-pink-600'} `}>
            Use Case Hack for LA
          </p>
          <p className='py-6'>// Check out my use case for Hack for LA</p>
        </div>

{/* Container */}
        <div className='flex justify-center flex-row'>

            {/* Grid Item */}
            <div
            style={{ backgroundImage: `url(${hackforla})`}}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div '
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className='text-2xl font-bold text-white tracking-wider text-center'>
                Event web platform Hack for LA <br></br>
              </span>
              <span className='text-2xl font-bold text-white tracking-wider text-center'>
                (TypeScript + React.JS)
              </span>
              <div className='pt-8 text-center'>
                <a href='https://www.hackforla.org/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/hackforla/website'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='py-6'>
          <span className='text-2xl font-bold text-white tracking-wider text-center'>
            Enhancing Community Engagement through Improved User Experience
          </span>
          <div className="pt-6">
            <span className='text-2xl font-bold text-white tracking-wider text-center'>
              Project Description
            </span>
          </div>
          <p >
            Hack for LA is an event platform designed to connect individuals passionate about coding, design, marketing, and other fields with volunteer opportunities in various Los Angeles county projects, including government initiatives like Metro and water stations.
          </p>
          <div className="pt-6">
            <span className='text-2xl font-bold text-white tracking-wider text-center'>
              Problem Statement
            </span>
          </div>
          <div>
            <div className="p">            The primary challenge was to integrate different layers of people interested in various disciplines and provide them with a seamless experience to contribute and volunteer in Los Angeles county projects. The platform needed to address issues related to:</div>

            <li>
            User Accessibility: Ensuring that users can easily navigate the platform and find what they need.
            </li>
            <li>
            Scalability: Managing over 100,000 users efficiently.
            </li>
            <li>
            UX/UI Improvement: Enhancing user engagement to increase time spent on the platform, form completions, and subscriptions.
            </li>
          </div>
          <div className="pt-6">
            <span className='text-2xl font-bold text-white tracking-wider text-center'>
              My Contributions
            </span>
          </div>
          <div className="div">
            <div className="p">
            As a Frontend Engineer, I joined the existing team of developers to tackle these challenges.
            <div className="p pt-3">My key responsibilities included:</div>
            
                Solving Complex User Accessibility Issues:

                <li className="li">Implemented intuitive navigation and search functionalities.</li>
                <li className="li">Enhanced accessibility features to accommodate diverse user needs.</li>
                Ensuring Scalability:

                <li className="li">Optimized frontend performance to handle a large user base.</li>
                <li>Collaborated with backend engineers to improve load balancing and data fetching efficiency.</li>

                Improving UX/UI:

                <li className="li">Redesigned user interfaces to be more engaging and user-friendly.</li>
                <li className="li">Conducted user testing and gathered feedback to iterate on designs.</li>
                
                
            </div>
          </div>
          <div className="pt-6">
            <span className='text-2xl font-bold text-white tracking-wider text-center'>
              Outcome
            </span>
          </div>
          <li className="li">Successfully resolved critical accessibility and scalability issues.</li>
          <li className="li">Helped the core team create a new version of the platform within tight deadlines..</li>
          <li className="li">Contributed to a significant improvement in user satisfaction and engagement metrics.</li>
      </div>
      <Link to='secondusecase' smooth={true} duration={500}>
          <button className={`text-white group border-2 px-6 py-3 my-2 flex items-center ${mode === 'dark'? 'hover:bg-pink-600':'hover:bg-blue-600' } ${mode === 'dark'? 'hover:border-pink-600':'hover:bg-blue-600'}
          ${mode === 'white'? 'text-[#1D1D21]':''} ${mode === 'white'? 'hover:text-white':'' } ${mode === 'white'? 'border-black':'' } ${mode === 'white'? 'hover:border-white':'' }`}>
              Next Project
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
          </Link>
      </div>

    </div>
  );
};

export default FirstUseCase;
