import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Beforeaftergallery from './Beforeaftergallery'
import FadeUp from './FadeUp'

const About = () => {
    return (
        <>
        <FadeUp>
            <header className="relative w-full h-[95vh]">
                {/* Hero Image */}
                <Image
                    src="/teamimg.webp"
                    alt="Our Team"
                    fill
                    className="object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50"></div>

                {/* Text Content */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 md:px-10">
                    <h1 className="text-white text-5xl font-bold mb-4">
                        About Peak Shield Roofing
                    </h1>
                    <p className="text-white mt-5 text-lg md:text-xl max-w-2xl">
                        At Peak Shield Roofing, we’ve been safeguarding homes and families across Texas for over a decade. Our team of skilled technicians combines experience, precision, and dedication to deliver roofing solutions that last. From inspections to full replacements, every project is handled with care, honesty, and professionalism.
                    </p>
                    <div className='flex gap-5'>
                        <button className='px-5 py-4 md:px-8 md:py-5 bg-green-600 text-white font-bold rounded-xl hover:scale-105 hover:bg-green-700 transition ease-in-out cursor-pointer mt-5'><a href="tel:+19283283629">Call Now</a></button>

                        <Link href="/getaquote"><button className='px-5 py-4 md:px-8 md:py-5 bg-white text-black font-bold rounded-xl hover:scale-105 transition ease-in-out cursor-pointer mt-5'>Get A Free Quote</button></Link>
                    </div>
                </div>
            </header>

            <section>
                <h1 className='text-[35px] font-bold text-center mt-[50px]'>About <span className='text-green-500 '>Peak</span> Shield Roofing</h1>
                <p className='w-[90vw] md:w-[60vw] text-center m-auto mt-5'>At Peak Shield Roofing, we believe a roof isn’t just a structure — it’s security, comfort, and peace of mind for the people who live under it. That’s why our work has always been personal. Since day one, our mission has been simple: <span className='font-semibold'>protect every home as if it were our own.</span>

                    Over the years, our team has grown, our tools have improved, and our experience has expanded — but our values haven’t changed. We show up on time, we do the job right, and we never leave a homeowner confused or stressed. When we say we care, we mean it.

                    From small repairs to full replacements, every project is handled with honesty, skill, and attention to detail. And whether you’ve worked with us once or a dozen times, you’ll always get the same level of respect and transparency that our customers trust us for.

                    Peak Shield Roofing wasn’t built to be the biggest company — it was built to be the most reliable. And that’s exactly what we aim to prove with every single roof we touch.</p>
            </section>

            
 <section className="flex flex-col md:flex-row items-center md:items-start mt-[50px]">
  {/* Left Image */}
  <div className="left m-0 md:m-10 flex justify-center w-full md:w-auto">
    <Image
      width={500}
      height={500}
      className="w-full md:w-[500px] h-auto"
      alt="House"
      src="/Houses.webp"
    />
  </div>

  {/* Right Text */}
  <div className="right mt-5 md:mt-0 md:ml-10 flex flex-col items-center md:text-center w-full md:w-auto">
    <h1 className="font-bold text-[30px] text-center md:text-left">
      Our <span className="text-green-500">Story</span>
    </h1>

    <p className="w-[90vw] md:w-[50vw] mt-5 text-center md:text-left">
      Every roofing company has tools. 
      <span className="font-semibold">What makes us different is why we picked them up.</span>

      Peak Shield Roofing started with a simple promise:
      No homeowner should ever feel unsafe inside their own home.

      Back in 2013, we were just a small crew doing small jobs — fixing leaks, patching damaged shingles, helping families after storms. But one thing became clear very quickly: people didn’t just need repairs… 
      <span className="font-semibold">they needed someone they could trust.</span>

      So instead of chasing numbers, we focused on relationships.
      One home at a time.
      One family at a time.
      One honest job at a time.

      Word spread.
      Not because we advertised — but because homeowners felt cared for.

      Today, with <span className="font-semibold">10+ skilled technicians and 500+ projects completed across Texas, our mission is still the same: Protect every home like it’s our own.</span>

      When we step onto a roof, we’re not just installing materials —
      we’re rebuilding comfort, security, and peace of mind.

      This is our story.
      And if you choose us, it becomes part of yours too.
    </p>

    <div className="flex justify-center mt-5">
      <Link href="/contact">
        <button className="px-6 py-4 rounded-xl bg-green-600 text-white hover:scale-105 transition ease-in-out cursor-pointer">
          Contact Us
        </button>
      </Link>
    </div>
  </div>
</section>


            
            

            <section className='mt-[60px] '>
                <h1 className='text-[35px] text-center font-bold'>Why <span className='text-green-500'>Homeowners</span> Trust Us</h1>

                <p className='text-center w-[90vw] md:w-[60vw] m-auto mt-5 mb-8'>
                    Homeowners choose Peak Shield Roofing because we treat every roof like it’s our own. With a team of skilled technicians, years of hands-on experience, and a commitment to honesty, transparency, and quality, we make sure every project is done right the first time. From emergency repairs to full replacements, our clients know they can rely on us for timely, professional, and dependable service — because protecting your home is more than a job, it’s a promise.
                </p>
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
                <div>
                    <h1 className='text-[35px] text-center font-bold mt-[50px]'>Meet Our <span className='text-green-500'>Team</span></h1>
                    <p className='w-[85vw] md:w-[60vw] m-auto text-center mt-3'>Our team is the heart of everything we do. With years of experience and a passion for quality, each member is dedicated to protecting your home and earning your trust. From our skilled roofers to our friendly support staff, we work together to deliver reliable, high-quality roofing solutions and make sure every project is done right the first time.</p>
                </div>

                <div className='teammembers flex-col md:flex-row flex justify-center flex-wrap mt-[30px] mb-5 gap-5'>

                    <div className="tm w-[90vw] m-auto md:m-0 md:w-[25vw] md:h-[50vh] rounded-xl border border-gray-200 shadow-xl hover:scale-105 transition duration-100 ease-in-out  cursor-pointer">
                        <Image className='w-[50%] h-[40%] m-auto' src="/owner.webp" width={300} height={100} alt='owner'></Image>
                        <h1 className='font-bold text-center mt-3'>Founder - John Smith</h1>
                        <p className='w-[70%] m-auto text-center mt-4'>John has 15 years of experience in roofing and leads our company with a focus on quality and trust.</p>

                    </div>
                    <div className="tm w-[90vw] m-auto md:m-0 md:w-[25vw] md:h-[50vh] rounded-xl border border-gray-200 shadow-xl hover:scale-105 transition duration-100 ease-in-out  cursor-pointer">
                        <Image className='w-[60%] h-[40%] m-auto' src="/tm1.webp" width={300} height={100} alt='owner'></Image>
                        <h1 className='font-bold text-center mt-3'>David Wilson – Lead Installer</h1>
                        <p className='w-[70%] m-auto text-center mt-4'>David is our expert installer, known for precision, durability, and top-quality workmanship.</p>

                    </div>

                    <div className="tm w-[90vw] m-auto md:m-0 md:w-[25vw] md:h-[50vh] rounded-xl border border-gray-200 shadow-xl hover:scale-105 transition duration-100 ease-in-out  cursor-pointer">
                        <Image className='w-[35%] h-[40%] m-auto' src="/tm2.webp" width={300} height={100} alt='owner'></Image>
                        <h1 className='font-bold text-center mt-3'>Michael Brown – Project Manager</h1>
                        <p className='w-[70%] m-auto text-center mt-4'>Michael ensures every roofing project runs smoothly, coordinating the team and keeping timelines on track.</p>

                    </div>

                    <div className="tm w-[90vw] m-auto md:m-0 md:w-[25vw] md:h-[50vh] rounded-xl border border-gray-200 shadow-xl hover:scale-105 transition duration-100 ease-in-out  cursor-pointer">
                        <Image className='w-[55%] h-[40%] ml-14' src="/tm3.webp" width={300} height={100} alt='owner'></Image>
                        <h1 className='font-bold text-center mt-3'>James Taylor – Roofing Technician</h1>
                        <p className='w-[70%] m-auto text-center mt-4'>James handles on-site installation and repairs, making sure every roof meets our high standards.</p>

                    </div>

                    <div className="tm w-[90vw] m-auto md:m-0 md:w-[25vw] md:h-[50vh] rounded-xl border border-gray-200 shadow-xl hover:scale-105 transition duration-100 ease-in-out  cursor-pointer">
                        <Image className='w-[55%] h-[40%] ml-14' src="/tm4.webp" width={300} height={100} alt='owner'></Image>
                        <h1 className='font-bold text-center mt-3'>Robert Johnson – Customer Support</h1>
                        <p className='w-[70%] m-auto text-center mt-4'>Robert manages client communications and ensures every customer has a seamless, stress-free experience.</p>

                    </div>

                </div>
            </section>

            <section className='mt-[50px]'>

                <h1 className='text-[35px] font-bold text-center'>See the <span className='text-green-500'>Difference</span>: Before <span className='text-green-500'>&</span> After</h1>
                <p className='w-[90vw] md:w-[60vw] m-auto text-center mt-3'>Every roof tells a story — and we let the results speak for themselves. From worn-out shingles to fully restored roofs, our before-and-after gallery showcases the skill, care, and precision we bring to every project. These transformations aren’t just improvements in appearance — they’re lasting protection for homes and peace of mind for families.</p>
                <Beforeaftergallery />
            </section>

            <section>
                <h1 className='text-center font-bold text-[35px] mt-[50px]'>Ready to <span className='text-green-500'>Protect</span> Your Home?</h1>
                <p className='w-[90vw] md:w-[60vw] m-auto text-center mt-3'>Don’t wait until small issues become costly problems. With Peak Shield Roofing, you get skilled technicians, honest advice, and quality work that lasts. Let us give your home the protection it deserves — fast, reliable, and stress-free.</p>

                    <div className='flex gap-5 items-center justify-center mb-5'>
                        <button className='px-5 py-4 md:px-8 md:py-5 bg-green-600 text-white font-bold rounded-xl hover:scale-105 hover:bg-green-700 transition ease-in-out cursor-pointer mt-5'><a href="tel:+19283283629">Call Now</a></button>

                        <Link href="/getaquote"><button className='px-5 py-4 md:px-8 md:py-5 bg-gray-200 text-black font-bold rounded-xl hover:scale-105 transition ease-in-out cursor-pointer mt-5'>Get A Free Quote</button></Link>
                    </div>
            </section>
            </FadeUp>
        </>
    )
}

export default About