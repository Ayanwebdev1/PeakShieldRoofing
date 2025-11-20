import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Beforeaftergallery from './Beforeaftergallery'
import Scrollgallery from './Scrollonggallery'
import CompGallery from './Scrollcomgallery'
import FadeUp from './FadeUp'

const Project = () => {
    return (
        <>
        <FadeUp>
            <header>
                <div className="relative w-full h-[90vh]">
                    {/* Hero Image */}
                    <img
                        className="w-full h-full object-cover"
                        src="/Projecthero.webp"
                        alt="hero"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/60"></div>

                    {/* Text */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Our Roofing Projects in Action
                        </h1>
                        <p className="text-lg md:text-xl text-white max-w-2xl">
                            Every home we work on tells a story of care, skill, and precision. From minor repairs to complete roof replacements, our team ensures that each project protects your family and elevates your home’s value. See real transformations that highlight the quality and trust behind Peak Shield Roofing.
                        </p>
                        <div className='flex gap-5 mt-8'>
                            <button className="bg-green-600 cursor-pointer text-white font-semibold px-6 py-4 rounded-md hover:bg-green-700 transition">
                                <a href="tel:+19283283629">Call Now</a>
                            </button>

                            <Link href="/contact"><button className='px-6 py-4 rounded-xl bg-white text-black hover:scale-105 transition ease-in-out cursor-pointer'>Contact Us</button></Link>


                        </div>
                    </div>

                </div>

            </header>

            <section className='mt-[50px]'>
                <h1 className='text-[35px] text-center font-bold'>Transformations That <span className='text-green-500'>Speak</span> for Themselves</h1>
                <p className='w-[90vw] md:w-[60vw] m-auto text-center mt-3'>See the difference our team makes with every project. From worn-out roofs to fully restored, safe, and beautiful homes, our before-and-after gallery showcases the quality, precision, and care that Peak Shield Roofing brings to each job. These transformations highlight our commitment to protecting your home and family.</p>

                <Beforeaftergallery />
            </section>

            <section className='mt-[50px]'>
                <h1 className='text-[35px] text-center font-bold'>Ongoing <span className='text-green-500'>Projects</span></h1>
                <p className='w-[90vw] md:w-[60vw] m-auto text-center mt-3'>Our team is constantly at work, transforming homes across Texas with precision and care. These ongoing projects show the dedication, skill, and attention to detail we bring to every roof, ensuring every home is protected and improved while the work is in progress.</p>
                <Scrollgallery />
            </section>

            <section className='mt-[50px]'>
                <h1 className='text-[35px] text-center font-bold'>Completed <span className='text-green-500'>Projects</span></h1>
                <p className='w-[90vw] md:w-[60vw] m-auto text-center mt-3'>From roof repairs to full replacements, our completed projects showcase the quality, craftsmanship, and reliability that Peak Shield Roofing stands for. Each transformation reflects our commitment to protecting homes and delivering results that our clients trust and admire.</p>
                <CompGallery />
            </section>

            <section className='mt-[50px]'>
                <h1 className='text-[35px] text-center font-bold'>Hear From Our <span className='text-green-500'>Happy</span> Homeowners</h1>
                <p className='w-[90vw] md:w-[60vw] m-auto text-center mt-3'>Nothing speaks louder than the words of those we’ve served. Our clients share their experiences working with Peak Shield Roofing — from initial consultation to the final nail — highlighting our professionalism, quality, and dedication to protecting their homes. These testimonials reflect the trust and satisfaction we aim to deliver on every project.</p>
                <div className="reviwcards flex-wrap flex-col md:flex-row flex justify-center mt-[50px] gap-5 mb-5">

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
            </section>

            <section className='mt-[50px]'>
                <h1 className='text-[35px] text-center font-bold'>Ready to <span className='text-green-500'>Upgrade</span> Your Roof?</h1>
                <p className='w-[90vw] md:w-[60vw] m-auto text-center mt-3'>Don’t wait until small issues turn into big problems. Our skilled team at Peak Shield Roofing is ready to assess your home, provide expert solutions, and deliver a roof that protects your family and adds lasting value. Let’s make your next roofing project stress-free and reliable.</p>
                <div className='flex justify-center gap-5 items-center mb-5'>
                    <button className="bg-green-600 px-5 py-3  md:px-8 md:py-4 rounded-xl text-white font-semibold mt-4 hover:scale-105 transition ease-in-out cursor-pointer"><a href="tel:+19283283629">Call Now</a></button>

                    <Link href="/getaquote"><button className=' px-5 py-3 md:px-8 md:py-4 bg-gray-200 text-black rounded-xl hover:scale-105 transition ease-in-out cursor-pointer mt-5'>Get A Free Quote</button></Link>
                </div>
            </section>
            </FadeUp>
        </>
    )
}

export default Project