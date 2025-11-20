"use client";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
                {/* Left Section: Business Info */}
                <div className="flex flex-col gap-3">
                    <h2 className="text-xl font-bold">Peak <span className="text-green-500">Shield</span> Roofing</h2>
                    <p>Working Hours: Mon - Sat, 8:00 AM - 6:00 PM</p>
                    <p>1234 Elm Street, Houston, TX 77001</p>
                    <p>Service Area: Texas</p>
                    <p>Phone: <a href="tel:+19283283629" className="text-green-500 hover:underline">+1 928-328-3629</a></p>
                </div>

                {/* Middle Section: Policy Links */}
                <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-semibold mb-2">Quick Links</h3>

                    <Link href="/privacy" className="hover:text-green-500 transition">Privacy Policy</Link>
                    <Link href="/terms" className="hover:text-green-500 transition">Terms of Service</Link>
                    <Link href="/warranty" className="hover:text-green-500 transition">Warranty Policy</Link>
                    <Link href="/contact" className="hover:text-green-500 transition">Contact Us</Link>
                    <Link href="/services" className="hover:text-green-500 transition">Services</Link>
                </div>

                {/* Right Section: Social + Map */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
                    <div className="flex gap-3">
                        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="w-8 h-8 flex items-center justify-center bg-white rounded-full">
                            <Image src="/Facebook.webp" alt="Facebook" width={20} height={20} />
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="w-8 h-8 flex items-center justify-center bg-white rounded-full">
                            <Image src="/Insta.webp" alt="Instagram" width={20} height={20} />
                        </a>
                        <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer" className="w-8 h-8 flex items-center justify-center bg-white rounded-full">
                            <Image src="/Tiktok.webp" alt="TikTok" width={20} height={20} />
                        </a>
                    </div>

                    {/* Map */}
                    <div className="mt-4 w-full h-48 md:h-32 rounded-lg overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.123456789!2d-95.36980438489953!3d29.76042698189247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640bf123456789%3A0x123456789abcdef!2s1234+Elm+Street%2C+Houston%2C+TX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            className="border-0"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Business Location"
                        ></iframe>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
                © 2025 Peak <span>Shield</span> Roofing. All rights reserved.
            </div>
        </footer>
    );
}
