import React from 'react'
import FadeUp from './FadeUp'

const Warranty = () => {
  return (
    <>
    <FadeUp>
    <main className="min-h-screen px-4 md:px-20 py-20 bg-gray-50 text-gray-900 flex flex-col items-center">
      <h1 className="text-[35px] font-bold mb-12 text-center">
        Warranty <span className="text-green-500">Policy</span>
      </h1>

      <div className="w-[90vw] md:max-w-[60vw] space-y-8 text-lg">
        <p>
          At <span className="text-green-500 font-semibold">Peak Shield Roofing</span>, we take immense pride in the quality of our work. Every roofing project is completed with care, expertise, and attention to detail, which is why we offer a comprehensive warranty to ensure your peace of mind.
        </p>

        <p>
          Our warranty covers both workmanship and certain materials, giving you confidence that your investment is protected. From minor repairs to full roof replacements, we stand behind the durability and integrity of our services. The terms and duration of each warranty are clearly communicated upfront, so there are no surprises.
        </p>

        <p>
          Should any issues arise that are covered under our warranty, our dedicated team is available to provide prompt support, guidance, and resolution. Your satisfaction and the long-term protection of your home are our top priorities.
        </p>

        <p>
          We believe that trust is earned through consistency, transparency, and accountability. By honoring our warranty commitments, we reinforce our promise to every client: that choosing <span className="text-green-500 font-semibold">Peak Shield Roofing</span> means choosing reliability, professionalism, and unmatched quality.
        </p>

        <p>
          For any questions regarding your warranty or the services we provide, our team is always ready to respond. Your home deserves the best protection, and our warranty ensures that our commitment extends well beyond project completion.
        </p>
      </div>
    </main>
    </FadeUp>
    </>
  )
}

export default Warranty