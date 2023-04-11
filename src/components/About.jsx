import React from 'react';

const About = ({mode}) => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300' 
    style={{backgroundColor:mode === 'white'? 'white' :''}}>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className={`text-4xl font-bold inline border-b-4 ${mode === 'dark'? 'border-pink-600': 'border-blue-600'}`}
            style={{color: mode === 'white'? '#1D1D20': ''}}>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold' style={{color: mode === 'white'? '#1D1D20': ''}}>
              <p>Hi. I'm Dmitrii, nice to meet you. Please take a look around.</p>
            </div>
            <div style={{color: mode === 'white'? '#333335':''}}>
              <div>I really love building stuff <span role="img" aria-label="education">📱</span>.
              My interest in technology started back in 2014 when I build a new gaming technology for Sony PS4. 
              I am passionate about creating excellent software that improves
              the lives of those around me. 
              </div>
              <br></br>
              <br></br>
              <div>
              My main focus these days is building inspiring, accesible and inclusive products at SideMind</div> 
              <div>
              I'm a self-motivated learner with strong organisation, time management & communication skills who believe that web design 
              can be more diverse and inspiring. </div>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
