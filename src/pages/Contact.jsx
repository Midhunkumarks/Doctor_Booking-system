import React from 'react'
import contactimg from '../assets/contact_image.png'
const Contact = () => {
  return (
    <div>
    <div className='text-center text-2xl pt-10 text-gray-500'>
      <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
    </div>

    <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
      <img className='w-full md:max-w-[360px]'src={contactimg} alt="" />
      <div className='flex flex-col justify-center items-start gap-6'>
        <p className='font-sembold text-lg'>Our OFFICE</p>
        <p className='text-gray-500'>54709 Willms station <br />Suite 350,Wahington, USA</p>
        <p className='text-gray-500'>Tel: (415) 555-0132 <br /> Email: midhun@gmail.com</p>
        <p className='font-semibold text-lg text-gray-600'>Careers at PRESCRIPTO</p>
        <p className='text-gray-500'>Learn more about our teams and job openings</p>
        <button className='border border-black px-8 py-4 teext-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
      </div>
    </div>
    </div>
  )
}

export default Contact