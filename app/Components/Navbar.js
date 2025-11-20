import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import FadeUp from './FadeUp'

const Navbar = () => {
  return (
    <>
    <FadeUp>


      <div className="w-full h-2 bg-green-600 "></div>

      <nav className="bg-white sticky top-0 z-50 border-gray-200 shadow h-[120px] flex items-center justify-between px-10">

        {/* Logo */}
        <div className="flex items-center h-full">
          <Link href="/"><Image
            className="h-[150px] mt-5 w-[150] "
            width={150}
            height={100}
            alt="Logo"
            src="/Logo.webp"
          /></Link>
        </div>

        {/* Center Menu */}
        <ul className="flex items-center gap-10 text-[15px] font-semibold text-gray-700">
          <Link href="/"><li className="hover:text-green-600 cursor-pointer transition">HOME</li></Link>

          <Link href="/about"><li className="hover:text-green-600 cursor-pointer transition">ABOUT US</li></Link>

          <Link href="/services"><li className="hover:text-green-600 cursor-pointer transition">SERVICES</li></Link>

          <Link href="/projects"><li className="hover:text-green-600 cursor-pointer transition">PROJECTS</li></Link>

          <Link href="/reviews"><li className="hover:text-green-600 cursor-pointer transition">REVIEWS</li></Link>

          <Link href="/contact"><li className="hover:text-green-600 cursor-pointer transition">CONTACT US</li></Link>

          <Link href="/getaquote"><li className="hover:text-green-600 cursor-pointer transition">GET A FREE QUOTE</li></Link>
        </ul>

        {/* Right Side: Social Icons + CTA */}
        <div className="flex items-center gap-6">

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a href='https://www.tiktok.com/' target='_blank' className="h-8 w-8 border hover:bg-green-500 cursor-pointer border-gray-400 rounded-md flex items-center justify-center  hover:border-green-600 transition p-1">
              <Image
                src="/Tiktok.webp"
                alt="TikTok"
                width={20}
                height={20}
                className="object-contain"
              />
            </a>

            {/* Facebook */}
            <a href='https://www.facebook.com/' target='_blank' className="h-8 w-8 cursor-pointer hover:bg-green-500 border border-gray-400 rounded-md flex items-center justify-center hover:border-green-600  transition p-1">
              <Image
                src="/Facebook.webp"
                alt="Facebook"
                width={20}
                height={20}
                className="object-contain"
              />
            </a>

            {/* Instagram */}
            <a href='https://www.instagram.com/' target='_blank' className="h-8 w-8 border cursor-pointer border-gray-400 rounded-md flex items-center justify-center hover:bg-green-500 hover:border-green-600 transition p-1">
              <Image
                src="/Insta.webp"
                alt="Instagram"
                width={20}
                height={20}
                className="object-contain"
              />
            </a>

          </div>

          {/* Call Now Button */}
          <button className="bg-green-600 cursor-pointer text-white font-semibold px-5 py-2 rounded-md hover:bg-green-700 transition">
            <a href="tel:+19283283629">Call Now</a>
          </button>

        </div>

      </nav>
      </FadeUp>

    </>
  )
}

export default Navbar