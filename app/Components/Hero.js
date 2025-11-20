import React from "react";
import Image from "next/image";
import Servicescards from "./Servicescards";
import Scrollgallery from "./Scrollonggallery";
import Link from "next/link";
import Faqs from "./Faqs";
import RoofingForm from "./Formspree";
import FadeUp from "./FadeUp";
const Hero = () => {
    return (
        <>
        <FadeUp>
            <header className="relative w-full h-[95vh]">

                {/* Hero Image */}
                <Image
                    src="/hero.webp"
                    alt="Roofing Hero"
                    fill
                    className="object-cover"
                    priority
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40"></div>
                {/* You can use bg-green-600/30 for green tint */}

                {/* Content on top */}
                <div className="absolute inset-0 mt-5 flex flex-col items-start justify-center px-20 text-white">
                    <h1 className="text-5xl font-bold mb-4 drop-shadow-lg w-[50vw]">
                        Trusted Roofing Experts Protecting What Matters Most
                    </h1>
                    <p className="text-lg mb-6 drop-shadow-md w-[60vw]">
                        Protect your home with a roof that lasts. Our experienced team uses premium materials and expert craftsmanship to ensure every installation provides safety, durability, and peace of mind. We treat every home like our own—because your family deserves nothing less.
                    </p>
                    <div className="flex gap-5">

                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=ayankhalid4447@gmail.com&su=Roofing%20Inquiry&body=Hi,%20I%20want%20to%20know%20more%20about%20your%20services."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-black font-semibold px-9 py-4 rounded-md inline-block text-center hover:bg-gray-100 transition"
                        >
                            Email Us
                        </a>
                        <button className="bg-green-600 cursor-pointer text-white font-semibold px-5 py-2 rounded-md hover:bg-green-700 transition">
                            <a href="tel:+19283283629">Call Now</a>
                        </button>
                    </div>
                </div>

                {/* Background fallback */}
                <div className="absolute inset-0 bg-gray-200 -z-10"></div>

            </header>

            <section>
                <div className="flex items-center">
                    <div className="left">
                        <Image className=" m-10 mt-15 object-cover" src="/Houses.webp" width={550} height={500} alt="House"></Image>


                    </div>
                    <div className="right">
                        <h1 className="text-[30px] w-[40vw] text-green-500 font-semibold">Why Homeowners Trust PeakShield Roofing?</h1>
                        <p className="w-[50vw] mt-5">For years, families have trusted us because we treat every home like our own. We don’t rush jobs, cut corners, or disappear after installation. We show up, listen, and make sure your roof is built with honesty, care, and craftsmanship you can actually feel. When you call us, you’re not talking to a big company — you’re talking to real people who genuinely want your home safe, strong, and protected for years to come. That’s why homeowners choose PeakShield Roofing, and why they stay with us.</p>

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
                <div className="h-[10vh] bg-green-600 flex justify-around items-center mt-10 ">
                    <h1 className="text-white font-semibold text-[25px]">Get a No-Hassle, Free Estimate Today!</h1>

                    <Link href="/getaquote"><button className="bg-white px-4 py-4 rounded-xl hover:scale-105 transition ease-in-out cursor-pointer ">Get My Free Estimate</button></Link>

                </div>
            </section>

            <section>
                <h1 className="text-[35px] mt-[50px] font-bold text-center">Check Out Our Team In Action</h1>
                <p className="w-[60vw] m-auto text-center mt-3">Our team is more than just experts — we’re passionate craftsmen who treat every project like it’s our own home. Every nail, every shingle, every detail reflects our commitment to quality and care. Watch how we bring roofs to life with precision, dedication, and a personal touch that keeps our clients confident and worry-free.</p>
                <Scrollgallery />
            </section>

            <section className="flex justify-around mt-[50px] items-center">
                <div className="left">
                    <Image className="w-[500px] h-[400px]" width={500} height={500} alt="House" src="/Chooseus.webp"></Image>

                </div>
                <div className="right">
                    <h1 className="text-[35px] font-semibold w-[40vw]">Why Work With Peak Shield Roofing?</h1>
                    <h1 className="mt-4 font-bold text-[15px]">We create roofs that lasts for years.</h1>
                    <p className="mt-3 w-[50vw]">At Peak Shield Roofing, we don’t just fix roofs — we protect homes, families, and peace of mind. Every project is handled with care, precision, and dedication, ensuring lasting results. Our team combines years of experience with a personal touch, making sure you feel confident, supported, and worry-free from start to finish.</p>

                    <ul className="ml-15 mt-5">
                        <li className="list-disc marker:text-green-600">Over 10 years of trusted experience</li>
                        <li className="list-disc marker:text-green-600">15+ certified technicians</li>
                        <li className="list-disc marker:text-green-600">500+ successful roofing projects completed</li>
                        <li className="list-disc marker:text-green-600">Transparent pricing with no hidden costs</li>
                    </ul>
                                <div className="flex justify-center">
                <button className="bg-green-600 px-9 py-4 rounded-xl text-white font-semibold mt-4 hover:scale-105 transition ease-in-out cursor-pointer"><a href="tel:+19283283629">Call Now</a></button>

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