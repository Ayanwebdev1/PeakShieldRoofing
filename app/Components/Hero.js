import React from "react";
import Image from "next/image";

const Hero = () => {
    return (
        <>
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
                        <Image className=" m-10 mt-15" src="/Houses.webp" width={550} height={500} alt="House"></Image>

                    </div>
                    <div className="right">
                        <h1 className="text-[30px] w-[40vw] text-green-500 font-semibold">Why Homeowners Trust PeakShield Roofing?</h1>
                        <p className="w-[50vw] mt-5">For years, families have trusted us because we treat every home like our own. We don’t rush jobs, cut corners, or disappear after installation. We show up, listen, and make sure your roof is built with honesty, care, and craftsmanship you can actually feel. When you call us, you’re not talking to a big company — you’re talking to real people who genuinely want your home safe, strong, and protected for years to come. That’s why homeowners choose PeakShield Roofing, and why they stay with us.</p>

                    </div>

                </div>
            </section>

            <section className="relative w-full h-full mt-5">
                <Image
                    className="w-full h-full object-cover"
                    width={500}
                    height={500}
                    alt="Services"
                    src="/Services1.webp"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50"></div>

                <div className="absolute inset-0 flex flex-col mt-20 text-center px-5">
                    <h1 className="text-[35px] font-bold text-white mb-3 ">
                        Our Roofing Services
                    </h1>

                    <div className="flex justify-center">
                        <hr className="w-[50vw] text-white/30 text-center " />
                    </div>

                    <div className="cards">
                        <div className="w-[30%]">
                            <Image className="w-[400px] h-[250px] m-auto" width={300} height={300} alt="Image" src="/Repair4.webp"></Image>
                            <h1 className="text-white font-semibold text-[25px]">Roof Repairs</h1>
                            <p className="text-gray-200">Small leaks can turn into expensive damage fast. Our team finds the exact problem, fixes it professionally, and protects your home from future issues. Whether it's missing shingles, water stains, or storm damage, we repair it right the first time so you can relax knowing your roof is safe again.</p>
                        </div>

                    </div>

                </div>

            </section>













        </>
    );
};

export default Hero;