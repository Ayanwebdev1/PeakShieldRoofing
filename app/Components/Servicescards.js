import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Servicescards = () => {
    return (
        <>
            <div className="cards flex flex-row md:flex-wrap gap-5 overflow-x-auto md:overflow-x-visible px-5 py-5 scrollbar-hide md:justify-center">
  {/* Card 1 */}
  <div className="flex-shrink-0 w-[300px] md:w-[30%] mt-5 border p-2 border-gray-200 rounded-xl cursor-pointer hover:scale-105 transition ease-in-out">
    <Link href="/getaquote">
      <Image
        className="w-full h-[150px] md:h-[250px] m-auto rounded-xl cursor-pointer"
        width={400}
        height={250}
        alt="Roof Repair"
        src="/Repair4.webp"
      />
      <h1 className="text-black text-center font-semibold text-[20px] md:text-[25px] mt-2">
        Roof Repair
      </h1>
      <p className="text-black/70 text-center mt-1 text-sm md:text-base">
        Small leaks can turn into expensive damage fast. Our team finds the exact problem, fixes it professionally, and protects your home from future issues. Whether it's missing shingles, water stains, or storm damage, we repair it right the first time so you can relax knowing your roof is safe again.
      </p>
    </Link>
  </div>

  {/* Card 2 */}
  <div className="flex-shrink-0 w-[300px] md:w-[30%] mt-5 border p-2 border-gray-200 rounded-xl cursor-pointer hover:scale-105 transition ease-in-out">
    <Link href="/getaquote">
      <Image
        className="w-full h-[150px] md:h-[250px] m-auto rounded-xl cursor-pointer"
        width={400}
        height={250}
        alt="Roof Replacement"
        src="/Roof.webp"
      />
      <h1 className="text-black text-center font-semibold text-[20px] md:text-[25px] mt-2">
        Roof Replacement
      </h1>
      <p className="text-black/70 text-center mt-1 text-sm md:text-base">
        When your roof is old, damaged, or beyond repair, we provide a smooth and stress-free replacement experience. From materials to installation, everything is handled with care and precision. You get a stronger, better-looking roof that boosts your home’s value and keeps your family protected for years to come.
      </p>
    </Link>
  </div>

  {/* Card 3 */}
  <div className="flex-shrink-0 w-[300px] md:w-[30%] mt-5 border p-2 border-gray-200 rounded-xl cursor-pointer hover:scale-105 transition ease-in-out">
    <Link href="/getaquote">
      <Image
        className="w-full h-[150px] md:h-[250px] m-auto rounded-xl cursor-pointer"
        width={400}
        height={250}
        alt="Gutter Installation & Repair"
        src="/Gutter3.webp"
      />
      <h1 className="text-black text-center font-semibold text-[20px] md:text-[25px] mt-2">
        Gutter Installation & Repair
      </h1>
      <p className="text-black/70 text-center mt-1 text-sm md:text-base">
        Healthy gutters protect your home from water damage. We repair blockages, fix sagging sections, and install new systems that guide water away safely. Clean, strong gutters prevent leaks, foundation issues, and mold — saving you money and keeping your home safe during heavy rain.
      </p>
    </Link>
  </div>

  {/* Card 4 */}
  <div className="flex-shrink-0 w-[300px] md:w-[30%] mt-5 border p-2 border-gray-200 rounded-xl cursor-pointer hover:scale-105 transition ease-in-out">
    <Link href="/getaquote">
      <Image
        className="w-full h-[150px] md:h-[250px] m-auto rounded-xl cursor-pointer"
        width={400}
        height={250}
        alt="Emergency Roofing Service"
        src="/Emergency.webp"
      />
      <h1 className="text-black text-center font-semibold text-[20px] md:text-[25px] mt-2">
        Emergency Roofing Service
      </h1>
      <p className="text-black/70 text-center mt-1 text-sm md:text-base">
        When storms hit or sudden leaks appear, every minute matters. Our emergency team responds fast to stop the damage, protect your home, and provide temporary or permanent solutions. No waiting, no excuses — just quick, reliable help when you need it most.
      </p>
    </Link>
  </div>

  {/* Card 5 */}
  <div className="flex-shrink-0 w-[300px] md:w-[30%] mt-5 border p-2 border-gray-200 rounded-xl cursor-pointer hover:scale-105 transition ease-in-out">
    <Link href="/getaquote">
      <Image
        className="w-full h-[150px] md:h-[250px] m-auto rounded-xl cursor-pointer"
        width={400}
        height={250}
        alt="Roof Inspection"
        src="/inspection2.webp"
      />
      <h1 className="text-black text-center font-semibold text-[20px] md:text-[25px] mt-2">
        Roof Inspection
      </h1>
      <p className="text-black/70 text-center mt-1 text-sm md:text-base">
        Our thorough roof inspections help identify potential issues before they turn into costly problems. From minor leaks to structural concerns, we assess every detail and provide you with a clear, honest report so you can make informed decisions for your home’s safety and longevity.
      </p>
    </Link>
  </div>
</div>

        </>
    )
}

export default Servicescards