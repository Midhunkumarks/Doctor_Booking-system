import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>


      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>About <span className='text-gray-600 font-medium'>US</span></p>
      </div>

      <div className='my-10 flex flex-col items-center md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justfy-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Our doctor booking platform makes healthcare simple by letting patients quickly find trusted specialists, view schedules, and book appointments anytime, anywhere, ensuring timely care without unnecessary waiting or confusion.</p>
          <p>We partner with verified hospitals and clinics to offer secure, real-time bookings, detailed doctor profiles, and patient reviews, helping you confidently choose the best medical professional for your needs.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Designed for both patients and doctors, our service saves time, reduces administrative work, and guarantees a smooth, convenient, and reliable healthcare experience from search to appointment confirmation.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
      <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-500 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
      <b>Efficiency:</b>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi atque, cumque minima molestias repellendus vel.</p>
      </div>

       <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-500 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
        <b>Convenience:</b>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia temporibus et quis perferendis vitae. Blanditiis!</p>
      </div>

       <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-500 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
        <b>personalization:</b>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus maiores recusandae asperiores totam minima molestias!</p>
      </div>

      </div>
    </div>
  )
}

export default About