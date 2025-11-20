import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Servicescards = () => {
    return (
        <>
            <div className="cards  flex justify-center flex-wrap gap-5">
                <div className="w-[30%] mt-5 border p-2 border-gray-200 rounded-xl cursor-pointer hover:scale-105 transition ease-in-out">
                    <Link href="/getaquote"><Image className="w-[400px] h-[250px] m-auto rounded-xl cursor-pointer" width={300} height={300} alt="Image" src="/Repair4.webp"></Image>
                    <h1 className="text-black text-center font-semibold text-[25px]">Roof Repair</h1>
                    <p className="text-black/70 mt-2 text-center">Small leaks can turn into expensive damage fast. Our team finds the exact problem, fixes it professionally, and protects your home from future issues. Whether it's missing shingles, water stains, or storm damage, we repair it right the first time so you can relax knowing your roof is safe again.</p></Link>
                </div>
                <div className="w-[30%] mt-5 border p-2 border-gray-200 rounded-xl cursor-pointer hover:scale-105 transition ease-in-out">
                    <Link href="/getaquote"><Image className="w-[400px] h-[250px] m-auto rounded-xl cursor-pointer" width={300} height={300} alt="Image" src="/Roof.webp"></Image>
                    <h1 className="text-black text-center font-semibold text-[25px]">Roof Replacement</h1>
                    <p className="text-black/70 mt-2 text-center">When your roof is old, damaged, or beyond repair, we provide a smooth and stress-free replacement experience. From materials to installation, everything is handled with care and precision. You get a stronger, better-looking roof that boosts your home’s value and keeps your family protected for years to come.</p></Link>
                </div>
                <div className="w-[30%] mt-5 border p-2 border-gray-200 rounded-xl cursor-pointer hover:scale-105 transition ease-in-out">
                    <Link href="/getaquote"><Image className="w-[400px] h-[250px] m-auto rounded-xl cursor-pointer" width={300} height={300} alt="Image" src="/Gutter3.webp"></Image>
                    <h1 className="text-black text-center font-semibold text-[25px]">Gutter Installation & Repair</h1>
                    <p className="text-black/70 mt-2 text-center">Healthy gutters protect your home from water damage. We repair blockages, fix sagging sections, and install new systems that guide water away safely. Clean, strong gutters prevent leaks, foundation issues, and mold — saving you money and keeping your home safe during heavy rain.</p></Link>
                </div>
                <div className="w-[30%] mt-5 border p-2 border-gray-200 rounded-xl cursor-pointer hover:scale-105 transition ease-in-out">
                    <Link href="/getaquote"><Image className="w-[400px] h-[250px] m-auto rounded-xl cursor-pointer" width={300} height={300} alt="Image" src="/Emergency.webp"></Image>
                    <h1 className="text-black text-center font-semibold text-[25px]">Emergency Roofing Service</h1>
                    <p className="text-black/70 mt-2 text-center">When storms hit or sudden leaks appear, every minute matters. Our emergency team responds fast to stop the damage, protect your home, and provide temporary or permanent solutions. No waiting, no excuses — just quick, reliable help when you need it most.</p></Link>
                </div>
                <div className="w-[30%] mt-5 border p-2 border-gray-200 rounded-xl cursor-pointer hover:scale-105 transition ease-in-out">
                    <Link href="/getaquote"><Image className="w-[400px] h-[250px] m-auto rounded-xl cursor-pointer" width={300} height={300} alt="Image" src="/Inspection2.webp"></Image>
                    <h1 className="text-black text-center font-semibold text-[25px]">Roof Inspection</h1>
                    <p className="text-black/70 mt-2 text-center">Our thorough roof inspections help identify potential issues before they turn into costly problems. From minor leaks to structural concerns, we assess every detail and provide you with a clear, honest report so you can make informed decisions for your home’s safety and longevity.</p></Link>
                </div>

            </div>
        </>
    )
}

export default Servicescards