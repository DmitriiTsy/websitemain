import React from 'react';
import WorkImg from '../assets/workImg.jpeg';
import realEstate from '../assets/realestate.jpg';
import portfolioweb from '../assets/portfolioweb.jpeg';
import twelve from '../assets/twelve.png'
import progress from '../assets/progress.jpeg';
import jockey from '../assets/Jockey.png'
import sidemind from '../assets/sidemind_web.png'
import hackforla from '../assets/hfla_fb_logo.png'
import { HiArrowNarrowRight } from 'react-icons/hi';
import {Link} from 'react-scroll'

const ThirdUseCase = ({mode}) => {
  return (
    <div name='thirdusecase' className={` w-full sm:py-[800px] md:h-screen ${mode === 'white'? 'text-black-300': 'text-gray-300'} 
    ${mode === 'white'? 'white': 'bg-[#0a192f]'}`}>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className={`text-4xl font-bold inline border-b-4 ${mode === 'white' ? 'white': 'text-gray-300'}
          ${mode === 'white' ? 'border-blue-600': 'border-pink-600'} `}>
            Use Case for SideMind
          </p>
          <p className='py-6'>// Check out my use case for SideMind</p>
        </div>

{/* Container */}
        <div className='flex justify-center flex-row'>

            {/* Grid Item */}
            <div
            style={{ backgroundImage: `url(${sidemind})`}}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div '
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className='text-center  font-bold text-white tracking-wider  text-2xl'>
                Chat GPT 3 messanger
                <br></br>
                (TypeScript + React Native + React + Firebase + Retool)
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
                <a href='https://sidemind.ai'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Web
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='py-6'>
          <span className='text-2xl font-bold text-white tracking-wider text-center'>
            Enhancing User Experience with Specialized AI Assistants
          </span>
          <div className="pt-6">
            <span className='text-2xl font-bold text-white tracking-wider text-center'>
              Project Description
            </span>
          </div>
          <p >
            SideMind is a platform featuring over 50 different OpenAI assistant chat messengers, allowing users to interact with specialized assistants for detailed, polished, and structured answers. Examples include a gym coach assistant for fitness plans and an IT support assistant for computer issues.
          </p>
          <div className="pt-6">
            <span className='text-2xl font-bold text-white tracking-wider text-center'>
              Problem Statement
            </span>
          </div>
          <div>
            <div className="p">The primary challenge was to create a seamless user experience across web and mobile platforms, enabling users to easily interact with multiple specialized AI assistants. The goal was to provide a more detailed and structured interaction compared to general AI solutions like ChatGPT.</div>
          </div>
          <div className="pt-6">
            <span className='text-2xl font-bold text-white tracking-wider text-center'>
              My Contributions
            </span>
          </div>
          <div className="div">
            <div className="p">
            Joining the team shortly after the demo launch of ChatGPT technology, I took on the role of the first engineer and played a key role in growing the team to 15 members.
            <div className="p pt-3">My key responsibilities included:</div>
            
                <div className="p">Developing the Web Application:</div>

                <li className="li">Designed and implemented the initial web application from scratch.</li>
                <li className="li">Integrated deep linking to allow users to share assistant information and direct access to specific chats in the mobile app..</li>
                
                Building the Mobile Application:

                <li className="li">Created a smooth and intuitive mobile app interface.</li>
                <li className="li">Developed functionalities for group chats, enabling users to interact with multiple assistants simultaneously.</li>

                Ensuring Smooth Web and Mobile Integration:

                <li className="li">Worked on features to ensure seamless transitions between web and mobile platforms.</li>
                <li className="li">Implemented robust communication and synchronization mechanisms between the two platforms.</li>
            
            </div>
          </div>
          <div className="pt-6">
            <span className='text-2xl font-bold text-white tracking-wider text-center'>
              Outcome
            </span>
          </div>
          <li className="li">Successfully launched both the web and mobile applications in 5 months</li>
          <li className="li">Developed deep linking and group chat functionalities, enhancing user engagement and experience.</li>
          <li className="li">Gained significant experience in interacting with ChatGPT APIs and building a solid AI-based product.</li>
          <div className="pt-6">
            <span className='text-2xl font-bold text-white tracking-wider text-center'>
              Conclusion
            </span>
          </div>
          <div className="p">Working on SideMind allowed me to leverage my skills in frontend and mobile development to create a versatile and user-friendly platform. By addressing the challenges of seamless web and mobile integration and developing innovative features, we provided users with an enhanced experience interacting with specialized AI assistants.</div>

      </div>

      </div>

    </div>
  );
};

export default ThirdUseCase;
