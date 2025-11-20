import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Beforeaftergallery from './Beforeaftergallery'
import FadeUp from './FadeUp'

const Reviews = () => {
  return (
    <>
    <FadeUp>
    <header>
      <h1 className='text-[35px] font-bold text-center mt-[50px]'>What Our <span className='text-green-500'>Customers</span> Say</h1>
      <p className='w-[90vw] md:w-[60vw] m-auto text-center mt-3'>Real experiences from homeowners who trusted Peak Shield Roofing with their most important investment — their home.</p>
    </header>

    <section>
      <h1 className='text-center font-bold text-[25px] mt-[50px]'>⭐5.0 / 5.0  </h1>
      <h1 className='text-center font-bold text-[25px] mt-5'>Trusted by <span className='text-green-500'>Homeowners</span> Across Texas    </h1>
      <h1 className='text-center font-bold text-[25px] mt-5'>Based on <span className='text-green-500'>100</span>+ Verified Reviews</h1>
    </section>

    <section>
      <div className="reviwcards flex-wrap flex-col md:flex-row flex justify-center mt-[50px] gap-5 mb-5">

                    <div className="rcard w-[90vw] m-auto md:m-0
                     md:w-[20vw] h-[55vh] border border-gray-200 rounded-xl hover:scale-105 transition duration-100 ease-in-out  cursor-pointer">
                        <Image className="m-auto" width={150} height={150} alt="man" src="/rw1.webp"></Image>
                        <h1 className="font-bold text-center text-[20px]">David Johnson</h1>
                        <p className="text-center w-[90%] m-auto">These guys did a flawless job replacing my old roof. Super professional, on time, and kept me updated throughout the project. Highly recommend them!</p>
                        <Image className="m-auto" width={100} height={100} alt="icon" src="/verified.webp"></Image>
                    </div>

                    <div className="rcard w-[90vw] m-auto md:m-0
                     md:w-[20vw] h-[55vh] border border-gray-200 rounded-xl hover:scale-105 transition duration-100 ease-in-out  cursor-pointer">
                        <Image className="m-auto" width={90} height={150} alt="man" src="/rw2.webp"></Image>
                        <h1 className="font-bold text-center text-[20px]">Mark Stevens</h1>
                        <p className="text-center w-[90%] m-auto">Had a serious leak during heavy rain — they came within hours and fixed it perfectly. Honest pricing and great communication!</p>
                        <Image className="m-auto mt-5" width={100} height={100} alt="icon" src="/verified.webp"></Image>
                    </div>

                    <div className="rcard w-[90vw] m-auto md:m-0
                     md:w-[20vw] h-[55vh] border border-gray-200 rounded-xl hover:scale-105 transition duration-100 ease-in-out  cursor-pointer">
                        <Image className="m-auto" width={120} height={150} alt="man" src="/rw3.webp"></Image>
                        <h1 className="font-bold text-center text-[20px]">Michael Reed</h1>
                        <p className="text-center w-[90%] m-auto">Top-notch service from start to finish. The crew was respectful, fast, and left my property cleaner than before. Roof looks amazing!</p>
                        <Image className="m-auto mt-5" width={100} height={100} alt="icon" src="/verified.webp"></Image>
                    </div>
                    <div className="rcard w-[90vw] m-auto md:m-0
                     md:w-[20vw] h-[55vh] border border-gray-200 rounded-xl hover:scale-105 transition duration-100 ease-in-out  cursor-pointer">
                        <Image className="m-auto" width={150} height={150} alt="man" src="/rw4.webp"></Image>
                        <h1 className="font-bold text-center text-[20px]">David Thompson</h1>
                        <p className="text-center w-[90%] m-auto">Apex Roofing Co completely transformed my old, leaking roof. The team arrived on time, worked efficiently, and left the property spotless. Highly recommended!</p>
                        <Image className="m-auto mt-3" width={100} height={100} alt="icon" src="/verified.webp"></Image>
                    </div>

                    <div className="rcard w-[90vw] m-auto md:m-0
                     md:w-[20vw] h-[55vh] border border-gray-200 rounded-xl hover:scale-105 transition duration-100 ease-in-out  cursor-pointer">
                        <Image className="m-auto" width={60} height={150} alt="man" src="/rw5.webp"></Image>
                        <h1 className="font-bold text-center text-[20px] mt-2.5">Michael Harris</h1>
                        <p className="text-center w-[90%] m-auto"> everything was handled with top-notch professionalism. The new roof looks incredible,Couldn’t be happier with the results!</p>
                        <Image className="m-auto mt-5" width={100} height={100} alt="icon" src="/verified.webp"></Image>
                    </div>

                    <div className="rcard w-[90vw] m-auto md:m-0
                     md:w-[20vw] h-[55vh] border border-gray-200 rounded-xl hover:scale-105 transition duration-100 ease-in-out  cursor-pointer">
                        <Image className="m-auto" width={120} height={150} alt="man" src="/rw6.webp"></Image>
                        <h1 className="font-bold text-center text-[20px] mt-5">Jason Miller</h1>
                        <p className="text-center w-[90%] m-auto">Storm damage repaired in a week! Great team, fair price, and reliable service.</p>
                        <Image className="m-auto mt-16" width={100} height={100} alt="icon" src="/verified.webp"></Image>
                    </div>

                </div>
                <h1 className='text-[35px] text-center font-bold mt-[50px]'>And dozens more <span className='text-green-500'>satisfied</span> customers.</h1>
                <div className='flex justify-center mt-5 mb-5'>
                  <Link href="/contact"><button className='bg-green-600 py-3 px-6 rounded-xl text-white hover:scale-105 transition duration-100 ease-in-out cursor-pointer hover:bg-green-700'>Contact Us</button></Link>
                </div>
    </section>

    <section>
      <h1 className='text-[35px] text-center font-bold mt-[70px]'>Real Results We’re <span className='text-green-500'>Proud</span> Of</h1>
      <p className='w-[90vw] md:w-[60vw] m-auto text-center mt-3'>Every project tells a story — of a home protected, a family made safer, and a job done with care. Here are a few of the transformations our team has proudly completed.</p>
      <Beforeaftergallery />
    </section>



            <section className="flex flex-col md:flex-row justify-center md:justify-around items-center mt-12 px-5 md:px-10 gap-8">
              {/* Left Image */}
              <div className="left flex-shrink-0">
                <Image
                  className="w-full max-w-[500px] h-auto rounded"
                  width={500}
                  height={400}
                  alt="House"
                  src="/Chooseus.webp"
                />
              </div>
            
              {/* Right Text */}
              <div className="right max-w-[600px] text-center md:text-left">
                <h1 className="text-[28px] sm:text-[32px] md:text-[35px] font-semibold mb-2">
                  Why Work With Peak Shield Roofing?
                </h1>
                <h2 className="mt-2 font-bold text-[14px] sm:text-[15px] mb-3">
                  We create roofs that last for years.
                </h2>
                <p className="mb-4 text-base sm:text-lg">
                  At Peak Shield Roofing, we don’t just fix roofs — we protect homes, families, and peace of mind. Every project is handled with care, precision, and dedication, ensuring lasting results. Our team combines years of experience with a personal touch, making sure you feel confident, supported, and worry-free from start to finish.
                </p>
            
                <ul className="list-disc marker:text-green-600 text-left mb-4 pl-5">
                  <li>Over 10 years of trusted experience</li>
                  <li>15+ certified technicians</li>
                  <li>500+ successful roofing projects completed</li>
                  <li>Transparent pricing with no hidden costs</li>
                </ul>
            
                <div className="flex justify-center md:justify-start">
                  <button className="bg-green-600 px-8 py-3 rounded-xl text-white font-semibold hover:scale-105 transition ease-in-out cursor-pointer">
                    <a href="tel:+19283283629">Call Now</a>
                  </button>
                </div>
              </div>
            </section>
            

            <section>
              <h1 className='text-[35px] text-center font-bold mt-[50px]'>Ready to Join Our <span className='text-green-500'>Satisfied</span> Homeowners?</h1>
              <p className='w-[90vw] md:w-[60vw] m-auto text-center mt-3'>Your home deserves the same level of care and craftsmanship our customers trust us for. If you’re ready for quality work, we’re here to help — with honesty, speed, and real expertise.</p>
              <div className='flex justify-center mt-5 mb-5'>
                <Link href="/getaquote"><button className="bg-gray-200 px-4 py-4 rounded-xl hover:scale-105 transition ease-in-out cursor-pointer ">Get A Free Estimate</button></Link>
              </div>
            </section>
            </FadeUp>
    </>
  )
}

export default Reviews