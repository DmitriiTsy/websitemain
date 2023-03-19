import React from 'react'

const Contact = ({mode}) => {
  return (
    <div name='contact' className={`w-full h-screen ${mode === 'white'? 'white': 'bg-[#0a192f]'} flex justify-center items-center p-4`}>
        <form method='POST' action="https://getform.io/f/3e76397b-52c3-4d37-aeeb-b9ef23e77989" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className={`text-4xl font-bold inline border-b-4 ${mode === 'white'? 'border-blue-600': 'border-pink-600'}  
                ${mode === 'white'? 'text-black-300': 'text-gray-300'}  `}>Contact</p>
                <p className={`${mode=== 'white'? 'text-black-300': 'text-gray-300'} py-4`}>// Submit the form below or shoot me an email - dmitry.tsyplakov.works@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className={`${mode==='white'? 'text-black': 'text-white'} ${mode==='white'? 'border-black': ''} border-2 ${mode==='white'? 'hover:bg-blue-600': 'hover:bg-pink-600'}  
            ${mode==='white'? 'hover:border-blue-600 ': 'hover:border-pink-600 '} ${mode==='white'? 'hover:text-white ': ' '}px-4 py-3 my-8 mx-auto flex items-center`}>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact