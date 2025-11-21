import React from "react";
import Image from "next/image";
import Servicescards from "./Servicescards";
import Scrollgallery from "./Scrollonggallery";
import Link from "next/link";
import Faqs from "./Faqs";
import RoofingForm from "./Formspree";
import FadeUp from "./FadeUp";
// "use client"
// import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// // Static + safe components
// import Servicescards from "./Servicescards";
// import FadeUp from "./FadeUp"; 

// // Lazy load heavy components
// import dynamic from "next/dynamic";
// const Scrollgallery = dynamic(() => import("./Scrollonggallery"), { ssr: false });
// const Faqs = dynamic(() => import("./Faqs"), { ssr: false });
// const RoofingForm = dynamic(() => import("./Formspree"), { ssr: false });
const Hero = () => {
    return (
        <>

            <header className="relative w-full h-[95vh]">


                {/* <Image
                        src="/hero3.webp"
                        alt="Roofing Hero"
                        // fill
                        height={2000}
                        width={1200}
                        className="w-full h-[95vh] object-cover"
                        priority
                    /> */}

                {/* <Image
                    src="/hero3.webp"
                    alt="Roofing Hero"
                    height={2000} // original image
                    width={1200}
                    className="w-full h-[95vh] object-cover"
                    priority
                    sizes="(max-width: 640px) 100vw,
         (max-width: 768px) 100vw,
         100vw"
                /> */}

                <div className="relative w-full h-[95vh]">
                    <Image
                        src="/hero3.webp"              // .webp already best format
                        alt="Roofing Hero"
                        fill                           // ye sabse important hai hero ke liye
                        className="object-cover"
                        priority                       // LCP image hai to priority=true
                        quality={75}                   // default 75 hi rehta hai, optional
                        placeholder="blur"             // optional but nice UX
                        blurDataURL="data:image/webp;base64,UklGRnwAAABXRUJQVlA4WAoAAAAQAAAABQAAQUxQSAIAAAAEAO..." // ya automatically generate ho jayega agar image static ho
                        sizes="100vw"                  // hero full width hai almost har device pe
                    />
                </div>



                <div className="absolute h-[95vh] inset-0 bg-black/40"></div>

                <div className="absolute inset-0 mt-5 flex flex-col md:items-start justify-center px-5 sm:px-10 md:px-20 text-white">
                    <h1 className="text-3xl sm:text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg w-full sm:w-[80%] md:w-[50vw]">
                        Trusted Roofing Experts Protecting What Matters Most
                    </h1>
                    <p className="text-base sm:text-lg mb-6 drop-shadow-md w-full sm:w-[90%] md:w-[60vw]">
                        Protect your home with a roof that lasts. Our experienced team uses premium materials and expert craftsmanship to ensure every installation provides safety, durability, and peace of mind. We treat every home like our own—because your family deserves nothing less.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 w-full sm:w-auto">

                        <a
                            href="tel:+19283283629"
                            className="bg-green-600 text-white font-semibold px-5 py-2 rounded-md hover:bg-green-700 transition w-full sm:w-auto flex justify-center items-center"
                        >
                            Call Now
                        </a>

                        <Link href="/getaquote" className="w-full sm:w-auto">
                            <button className="bg-white cursor-pointer text-black font-semibold px-5 py-2 sm:px-5 sm:py-4 rounded-md hover:bg-gray-200 transition w-full sm:w-auto">
                                Get A Free Quote
                            </button>
                        </Link>

                    </div>


                </div>


                {/* Background fallback */}
                <div className="absolute inset-0 bg-gray-200 -z-10"></div>

            </header>

            <FadeUp>
                <section>
                    <div className="flex flex-col md:flex-row items-center px-5 md:px-20 py-10">

                        <div className="left flex-shrink-0 mb-6 md:mb-0 md:mr-10">
                            <Image
                                className="object-cover w-full sm:w-[400px] md:w-[550px] rounded-md"
                                src="/Houses.webp"
                                width={550}
                                height={500}
                                alt="House"
                            />
                        </div>


                        <div className="right w-full md:w-[50%]">
                            <h1 className="text-2xl sm:text-3xl md:text-[30px] text-green-500 font-semibold mb-4 text-center md:text-left">
                                Why Homeowners Trust PeakShield Roofing?
                            </h1>
                            <p className="text-base sm:text-lg md:text-base text-center md:text-left">
                                For years, families have trusted us because we treat every home like our own. We don’t rush jobs, cut corners, or disappear after installation. We show up, listen, and make sure your roof is built with honesty, care, and craftsmanship you can actually feel. When you call us, you’re not talking to a big company — you’re talking to real people who genuinely want your home safe, strong, and protected for years to come. That’s why homeowners choose PeakShield Roofing, and why they stay with us.
                            </p>
                        </div>
                    </div>
                </section>

                <section className=" mt-4">

                    <div className=" flex flex-col mt-20 text-center px-5">
                        <h1 className="text-[35px] font-bold text-black mb-3 ">
                            Our <span className="text-green-500">Roofing</span> Services
                        </h1>

                        <div className="flex justify-center">
                            <hr className="w-[50vw] text-black/30 text-center " />
                        </div>

                        <Servicescards />


                    </div>
                    {/* <div className="h-[10vh] bg-green-600 flex justify-around items-center mt-10 ">
                        <h1 className="text-white font-semibold text-[25px]">Get a No-Hassle, Free Estimate Today!</h1>

                        <Link href="/getaquote"><button className="bg-white px-4 py-4 rounded-xl hover:scale-105 transition ease-in-out cursor-pointer ">Get My Free Estimate</button></Link>

                    </div> */}
                    <div className="bg-green-600 flex flex-col md:flex-row justify-center md:justify-around md:h-[10vh] items-center mt-10 gap-4 px-5 py-6">
                        <h1 className="text-white font-semibold text-[20px] sm:text-[22px] md:text-[25px] text-center md:text-left">
                            Get a No-Hassle, Free Estimate Today!
                        </h1>

                        <Link href="/getaquote">
                            <button className="bg-white px-6 py-3 sm:py-4 rounded-xl hover:scale-105 transition ease-in-out cursor-pointer text-green-600 font-semibold w-full md:w-auto">
                                Get My Free Estimate
                            </button>
                        </Link>
                    </div>
                </section>

                <section>
                    <h1 className="text-[35px] mt-[50px] font-bold text-center">Check Out Our <span className="text-green-500">Team</span> In <span className="text-green-500">Action</span></h1>
                    <p className="w-[90vw] md:w-[60vw] m-auto text-center mt-3">Our team is more than just experts — we’re passionate craftsmen who treat every project like it’s our own home. Every nail, every shingle, every detail reflects our commitment to quality and care. Watch how we bring roofs to life with precision, dedication, and a personal touch that keeps our clients confident and worry-free.</p>
                    <Scrollgallery />
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


                <section className="mt-9">
                    <Faqs />
                </section>

                <section>
                    <h1 className="font-bold text-[35px] text-center">Speak With a <span className="text-green-500">Roofing</span> Specialist Today</h1>
                    <RoofingForm />
                </section>

            </FadeUp>

        </>
    );
};

export default Hero;