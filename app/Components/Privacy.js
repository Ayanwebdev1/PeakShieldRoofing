import React from 'react'
import FadeUp from './FadeUp'

const Privacy = () => {
  return (
    <>
    <FadeUp>
        <main className="min-h-screen px-4 md:px-20 py-20 bg-gray-50 text-gray-900 flex flex-col items-center">
      <h1 className="text-[35px] font-bold mb-12 text-center">
        Privacy <span className="text-green-500">Policy</span>
      </h1>

      <div className="max-w-[60vw] space-y-8 text-lg">
        <p>
          At <span className="text-green-500 font-semibold">Peak Shield Roofing</span>, your privacy is not just a requirement—it’s a commitment. We understand that when you share personal information with us, you trust us to handle it with care. This policy explains what data we collect, how we use it, and the steps we take to protect your privacy. Our goal is to provide complete transparency and peace of mind.
        </p>

        <p>
          When you interact with our website or services, we may collect information such as your name, email address, phone number, project details, and any other details necessary to deliver exceptional roofing services. This information is used solely to improve your experience, provide timely communication, and ensure we deliver exactly what you need. Under no circumstances do we sell, rent, or share your personal data with third parties without your consent.
        </p>

        <p>
          We implement <span className="text-green-500 font-semibold">advanced security measures</span> to safeguard your information, including encrypted data storage and secure communication channels. We continuously review and update these measures to maintain the highest standard of protection for your personal information. Every step we take reflects our dedication to keeping your data safe.
        </p>

        <p>
          By using our website, submitting inquiries, or working with our team, you agree to this Privacy Policy. We encourage you to review this policy periodically, as it may be updated to reflect new technologies or practices. Our promise is simple: your privacy will always be respected, and your trust will never be taken for granted.
        </p>

        <p>
          If you have any questions or concerns regarding our privacy practices, our team is always available to provide clear answers. At <span className="text-green-500 font-semibold">Peak Shield Roofing</span>, protecting your personal information is not just policy—it’s a reflection of the trust we aim to earn with every client, every project, and every interaction.
        </p>
      </div>
    </main>
    </FadeUp>
    </>
  )
}

export default Privacy