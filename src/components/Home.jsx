import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import {Link} from 'react-scroll'

const Home = ({mode}) => {
  return (
    <div name='home' className='w-full h-screen' style={{backgroundColor: mode === 'white'?'white': '#0a192f'}}>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className={` ${mode === 'dark'? 'text-pink-600':'text-blue-600'}`}>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]' style={{color: mode === 'white'? '#1D1D20': ''}}>
          Dmitrii 
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]' style={{color: mode === 'white'? '#1D1D20': ''}}>
          I'm a Front-end developer
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]' style={{color: mode === 'white'?'#333335':''}}>
          I’m a  lifelong learner  <span role="img" aria-label="education">🎓</span>
          and  front-end developer specializing in building (and occasionally
          designing) exceptional digital experiences. I love exploring and creating &nbsp;
          <span role="img" aria-label="rocket">🚀</span>
        </p>
        <div>
        <Link to='work' smooth={true} duration={500}>
          <button className={`text-white group border-2 px-6 py-3 my-2 flex items-center ${mode === 'dark'? 'hover:bg-pink-600':'hover:bg-blue-600' } ${mode === 'dark'? 'hover:border-pink-600':'hover:bg-blue-600'}
          ${mode === 'white'? 'text-[#1D1D21]':''} ${mode === 'white'? 'hover:text-white':'' } ${mode === 'white'? 'border-black':'' } ${mode === 'white'? 'hover:border-white':'' }`}>
        View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
