import React from 'react';
import WorkImg from '../assets/workImg.jpeg';
import realEstate from '../assets/realestate.jpg';
import portfolioweb from '../assets/portfolioweb.jpeg';
import twelve from '../assets/twelve.png'
import progress from '../assets/progress.jpeg';
import jockey from '../assets/Jockey.png'
import sidemind from '../assets/sidemindlogo.webp'
import hackforla from '../assets/hfla_fb_logo.png'
import { Link } from 'react-scroll';
const Work = ({mode}) => {
  return (
    <div name='work' className={`w-full md:h-screen ${mode === 'white'? 'text-black-300': 'text-gray-300'} 
    ${mode === 'white'? 'white': 'bg-[#0a192f]'}`}>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className={`text-4xl font-bold inline border-b-4 ${mode === 'white' ? 'white': 'text-gray-300'}
          ${mode === 'white' ? 'border-blue-600': 'border-pink-600'} `}>
            Work
          </p>
          <p className='py-6'>// Check out some of my recent work</p>
        </div>

{/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

            {/* Grid Item */}
            <div
            style={{ backgroundImage: `url(${hackforla})`}}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div '
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className=' font-bold text-white tracking-wider text-center'>
                Event web platform Hack for LA <br></br>
              </span>
              <span className=' font-bold text-white tracking-wider text-center'>
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
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    <Link to='firstusecase' smooth={true} duration={500}>
                    Use Case & Details
                    </Link>
                  </button>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${sidemind})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className='text-center  font-bold text-white tracking-wider'>
                Chat GPT 3 messanger
                <br></br>
                (TypeScript + React Native + Firebase)
              </span>
              <div className='pt-8 text-center'>
                <a href='https://apps.apple.com/us/app/sidemind-personal-ai-chatbots/id1660825704'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/DmitriiTsy/todo'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    <Link to='thirdusecase' smooth={true} duration={500}>
                    Use Case & Details
                    </Link>
                  </button>
              </div>
            </div>
          </div>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${portfolioweb})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='text-center opacity-0 group-hover:opacity-100'>
              <span className='text-center font-bold text-white tracking-wider'>
                Personal Website v2.0
                <br></br>
                (React, Tailwind, Netlify)
              </span>
              <div className='pt-8 text-center'>
                <a href='https://dmitrii-portfolio.com/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/DmitriiTsy/port/tree/details/port'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='text-center opacity-0 group-hover:opacity-100'>
              <span className='text-center  font-bold text-white tracking-wider'>
                Songs Search
                <br></br>
                (React, Tailwind, Netlify)
              </span>
              <div className='pt-8 text-center'>
                <a href='http://spotifyt.surge.sh/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/DmitriiTsy/myfirstreactapp/tree/main/myfirstreactapp'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${jockey})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='text-center opacity-0 group-hover:opacity-100'>
              <span className='text-center  font-bold text-white tracking-wider'>
                Jockey - AI Chat assistant 
                <br></br>
                (React, LangGraph, Python, LangChain)
              </span>
              <div className='pt-8 text-center'>
                <a href='https://www.twelvelabs.io/blog/introducing-jockey'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Article about the project
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${twelve})`}}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='text-center opacity-0 group-hover:opacity-100'>
              <span className='text-center  font-bold text-white tracking-wider'>
                 Multimodal AI platform
                 <br></br>
                (JS, TypeScript, React, Tailwind, LangGraph)
              </span>
              <div className='pt-8 text-center'>
                <a href='https://www.twelvelabs.io'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
              </div>
              <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    <Link to='secondusecase' smooth={true} duration={500}>
                    Use Case & Details
                    </Link>
                  </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
