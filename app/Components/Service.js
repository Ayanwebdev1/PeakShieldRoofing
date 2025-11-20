import React from 'react'
import Servicescards from './Servicescards'
import Beforeaftergallery from './Beforeaftergallery'
import Image from 'next/image'
import Link from 'next/link'
import RoofingForm from './Formspree'
import FadeUp from './FadeUp'

const Service = () => {
  return (
    <>
    <FadeUp>
    <header>
<div className="relative bg-green-600 w-full max-w-[600px] h-[400px] mx-auto my-10 rounded-[60%_40%_70%_30%_/_50%_60%_40%_50%] flex items-center justify-center p-10 text-white">
  <div className="text-center">
    <h2 className="text-3xl font-bold mb-4">Our Premium Services</h2>
    <p className="text-lg">
      From roof repairs to full replacements, our skilled team ensures top-quality work that protects your home and family.
    </p>
  </div>
</div>
    </header>

    <section>
        <h1 className='text-center text-[35px] font-bold mt-[50px]'>Our Roofing <span className='text-green-500'>Roofing</span> You Can Rely On</h1>
        <p className='w-[60vw] m-auto text-center mt-3 mb-5'>At Peak Shield Roofing, we don’t just fix roofs — we protect homes and families. Every service we offer is backed by years of hands-on experience, skilled technicians, and a commitment to quality. Whether it’s a repair, replacement, or inspection, we treat every project with care, precision, and respect for your home.</p>
        <Servicescards />
    </section>
    <section className='mt-[50px]'>
        <h1 className='text-[35px] text-center font-bold'>See Our Work <span className='text-green-500'>Transforms</span> Homes</h1>
        <p className='w-[60vw] m-auto text-center mt-3'>Every roof tells a story. From worn-out and damaged to fully restored, our before-and-after gallery shows the care and precision we bring to every project. These real transformations highlight our commitment to quality and the trust homeowners place in Peak Shield Roofing.</p>
        <Beforeaftergallery />
    </section>

    <section className='mt-[50px]'>
        <h1 className='text-[35px] font-bold text-center'>Why <span className='text-green-500'>Choose</span> Us</h1>
        <p className='w-[60vw] m-auto text-center mt-3'>At Peak Shield Roofing, we combine experience, skill, and care in every project. With a dedicated team of over 10 technicians and 100+ successful roofing projects across Texas, we focus on quality, reliability, and protecting what matters most—your home and family. When you choose us, you’re choosing a team that treats every roof like it’s our own.</p>
        <div className="chooseuscards flex flex-col md:flex-row md:flex-wrap mt-5 md:justify-center gap-5  ">
                            <div className="card max-w-[80vw] m-auto md:m-0 md:w-[25vw] md:h-[45vh]  border border-gray-200 bg-gray-100 rounded-xl hover:scale-105 transition duration-100 ease-in-out cursor-pointer ">
                                <Image className="m-auto" width={100} height={35} alt="trust" src="/trust.webp"></Image>
                                <h1 className="font-bold text-[20px] text-center mt-2">Licensed & Insured</h1>
                                <div className="w-[80%] text-center m-auto mt-2">Your home deserves professionals you can rely on — fully certified, protected, and committed to safe, top-quality roofing work.</div>
                            </div>
        
                            <div className="card max-w-[80vw] m-auto md:m-0 md:w-[25vw] md:h-[45vh]  border border-gray-200 bg-gray-100 rounded-xl hover:scale-105 transition duration-100 ease-in-out cursor-pointer">
                                <Image className="m-auto " width={100} height={35} alt="trust" src="/exp.webp"></Image>
                                <h1 className="font-bold text-[20px] text-center mt-2"> 10+ Years of Experience</h1>
                                <div className="w-[80%] text-center m-auto mt-2">A decade of fixing, replacing, and protecting roofs across neighborhoods — we’ve seen it all and perfected what works.</div>
                            </div>
        
                            <div className="card max-w-[80vw] m-auto md:m-0 md:w-[25vw] md:h-[45vh]  border border-gray-200 bg-gray-100 rounded-xl hover:scale-105 transition duration-100 ease-in-out cursor-pointer">
                                <Image className="m-auto " width={120} height={100} alt="trust" src="/servicetime.webp"></Image>
                                <h1 className="font-bold text-[20px] text-center mt-2"> 24/7 Emergency Repairs</h1>
                                <div className="w-[80%] text-center m-auto mt-2">When storms hit or leaks surprise you, our team’s ready anytime — because roofing problems don’t wait for office hours.</div>
                            </div>
        
                            <div className="card max-w-[80vw] m-auto md:m-0 md:w-[25vw] md:h-[45vh]  border border-gray-200 bg-gray-100 rounded-xl hover:scale-105 transition duration-100 ease-in-out cursor-pointer">
                                <Image className="m-auto " width={100} height={100} alt="trust" src="/warranty.webp"></Image>
                                <h1 className="font-bold text-[20px] text-center mt-2"> 2 Years Warranty</h1>
                                <div className="w-[80%] text-center m-auto mt-2">We stand by our work long after it’s done. Every roof we build comes with a solid 2-year workmanship guarantee for total peace of mind.</div>
                            </div>
        
                        </div>

    </section>
    <section>
        <h1 className='text-[35px] font-bold text-center mt-[50px]'>What Our <span className='text-green-500'>Clients</span> Say About Us</h1>
        <p className='w-[60vw] m-auto text-center mt-3'>We take pride in the trust homeowners place in us. From emergency repairs to full roof replacements, our clients appreciate the care, professionalism, and attention to detail we bring to every project. Their words reflect the commitment and reliability that define Peak Shield Roofing.</p>
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


                </div>
                <div className='flex justify-center mb-5'>
                    <Link href="/reviews"><button className='px-5 py-3 text-white rounded-xl bg-green-600 hover:scale-105 transition duration-100 ease-in-out  cursor-pointer hover:bg-green-700'>View More</button></Link>
                </div>
    </section>
    <section>
        <h1 className='text-[35px] mt-[50px] text-center font-bold'>Ready to start your <span className='text-green-500'>roofing</span> project?</h1>
        <p className='mt-3 text-center'>Fill the form and our team is ready to help.</p>
        <RoofingForm />
    </section>
    </FadeUp>
    </>
  )
}

export default Service