import React from 'react';
import WorkImg from '../assets/workImg.jpeg';
import realEstate from '../assets/realestate.jpg';
import portfolioweb from '../assets/portfolioweb.jpeg';
import twelve from '../assets/twelve.png'
import progress from '../assets/progress.jpeg';
import jockey from '../assets/Jockey.png'
import sidemind from '../assets/sidemindlogo.webp'
import assistant from '../assets/assistant.png'
import hackforla from '../assets/hfla_fb_logo.png'
import { HiArrowNarrowRight } from 'react-icons/hi';
import {Link} from 'react-scroll'

const SecondUseCase = ({mode}) => {
  return (
    <div name='secondusecase' className={` w-full sm:py-[800px] md:h-screen ${mode === 'white'? 'text-black-300': 'text-gray-300'} 
    ${mode === 'white'? 'white': 'bg-[#0a192f]'}`}>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className={`text-4xl font-bold inline border-b-4 ${mode === 'white' ? 'white': 'text-gray-300'}
          ${mode === 'white' ? 'border-blue-600': 'border-pink-600'} `}>
            Use Case for Twelve Labs
          </p>
          <p className='py-6'>// Check out my use case for Twelve Labs</p>
        </div>

{/* Container */}
        <div className='flex justify-center flex-row'>

            {/* Grid Item */}
            <div
            style={{ backgroundImage: `url(${assistant})`}}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div '
          >
            {/* Hover Effects */}
            <div className='text-center opacity-0 group-hover:opacity-100'>
              <span className='text-center text-2xl font-bold text-white tracking-wider'>
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
            </div>
          </div>
        </div>
        <div className='py-6'>
          <span className='text-2xl font-bold text-white tracking-wider text-center'>
            Revolutionizing Video Editing with AI-Powered Tools
          </span>
          <div className="pt-6">
            <span className='text-2xl font-bold text-white tracking-wider text-center'>
              Project Description
            </span>
          </div>
          <p >
            Twelve Labs is a developers' platform that provides multimodal AI capable of understanding videos as accurately as humans. In 2023, I joined the team to contribute to both core products and innovative solutions, enhancing the capabilities of video creators and bloggers.
          </p>
          <div className="pt-6">
            <span className='text-2xl font-bold text-white tracking-wider text-center'>
              Problem Statement
            </span>
          </div>
          <div>
            <div className="p">The primary challenge for video creators and bloggers is the time-consuming process of finding the right video clips and performing various editing tasks. The goal was to develop a tool that significantly accelerates this process, enabling users to create final videos up to 20 times faster.</div>
          </div>
          <div className="pt-6">
            <span className='text-2xl font-bold text-white tracking-wider text-center'>
              My Contributions
            </span>
          </div>
          <div className="div">
            <div className="p">
            As a Senior Frontend Engineer, I collaborated with a small team to design and develop the Adobe Premiere Pro Extension from scratch. 
            <div className="p pt-3">My key responsibilities included:</div>
                <p className="div">Developing Text-Based Video Search</p>
                

                <li className="li">Implemented advanced search functionality allowing users to input queries like "pink color car driving around Manhattan" and retrieve matching video clips from the internet.</li>
                
                Creating Text Query-Driven Video Editing

                <li className="li">Developed features for cutting and merging video clips based on text queries, simplifying the editing process..</li>

                Ensuring Robust Functionality:

                <li className="li">Focused on creating a user-friendly interface with comprehensive video editing tools to enhance productivity.</li>
            
            </div>
          </div>
          <div className="pt-6">
            <span className='text-2xl font-bold text-white tracking-wider text-center'>
              Outcome
            </span>
          </div>
          <li className="li">Successfully developed and launched the Adobe Premiere Pro Extension within three months.</li>
          <li className="li">The tool has been widely adopted by video creators and bloggers, significantly reducing the time required for video editing tasks.</li>
          <li className="li">Enhanced the user experience by providing powerful, AI-driven functionalities that streamline video production..</li>
          <div className="pt-6">
            <span className='text-2xl font-bold text-white tracking-wider text-center'>
              Conclusion
            </span>
          </div>
          <div className="p">Working on Twelve Labs allowed me to leverage my frontend engineering expertise to develop innovative solutions that meet the needs of modern video creators. By addressing key challenges and implementing cutting-edge AI technologies, we delivered a powerful tool that transforms the video editing process, making it more efficient and accessible.</div>

      </div>
      <Link to='thirdusecase' smooth={true} duration={500}>
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

export default SecondUseCase;
