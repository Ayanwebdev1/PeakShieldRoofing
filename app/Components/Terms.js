import React from 'react'
import FadeUp from './FadeUp'

const Terms = () => {
  return (
    <>
    <FadeUp>
      <main className="min-h-screen px-4 md:px-20 py-20 bg-gray-50 text-gray-900 flex flex-col items-center">
      <h1 className="text-[35px] font-bold mb-12 text-center">
        Terms & <span className="text-green-500">Conditions</span>
      </h1>

      <div className="max-w-[60vw] space-y-8 text-lg">
        <p>
          By accessing or using the website and services provided by <span className="text-green-500 font-semibold">Peak Shield Roofing</span>, you agree to comply with these Terms & Conditions. These terms ensure clarity, accountability, and fairness for both our clients and our team. By continuing to engage with our services, you acknowledge your understanding and acceptance of these rules.
        </p>

        <p>
          All content, including images, descriptions, service details, and communications, is provided for informational purposes. We reserve the right to update, modify, or correct content at any time to reflect our ongoing commitment to transparency, accuracy, and quality. Misuse of our website or services may result in suspension of access or legal action, as necessary.
        </p>

        <p>
          Every service we offer is executed with the highest standard of quality, and all projects are agreed upon in advance to ensure mutual understanding. By entering into an agreement or contract with us, you consent to provide accurate information, respond promptly to communications, and respect the guidelines we establish for successful project completion.
        </p>

        <p>
          Our liability is limited to the extent permitted by law, and we are committed to resolving any disputes fairly and transparently. Our priority is always to maintain the trust and satisfaction of our clients, delivering superior roofing solutions while ensuring clear communication and mutual respect.
        </p>

        <p>
          For any questions or concerns regarding these terms, our team is available to provide guidance and clarification. At <span className="text-green-500 font-semibold">Peak Shield Roofing</span>, we aim to build relationships founded on honesty, reliability, and professionalism, ensuring peace of mind in every interaction.
        </p>
      </div>
    </main>
    </FadeUp>
    </>
  )
}

export default Terms