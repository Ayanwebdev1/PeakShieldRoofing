"use client";
import RoofingForm from "./Formspree";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Link from "next/link";
import FadeUp from "./FadeUp";


export default function ContactPage() {
    return (
        <>
        <FadeUp>
        
            <header>
                <h1 className="text-[35px] font-bold text-center mt-[50px]">Get in <span className="text-green-500">Touch</span> With Our <span className="text-green-500">Roofing</span> Experts</h1>
                <p className="text-[20px] text-center mt-3 w-[90vw] md:w-[60vw] m-auto">Fast responses. Honest answers. Real support</p>

            </header>
           <section className="w-full overflow-hidden bg-gray-50 py-20">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-4">

                    {/* LEFT SIDE → YOUR FORM */}
                    <div>
                        <h2 className="text-4xl font-bold mb-4 text-center">Get In Touch With Us</h2>
                        <p className="text-gray-600 mb-8">
                            Fill out the form and our roofing expert will contact you shortly.
                        </p>

                        <RoofingForm />
                    </div>

                    {/* RIGHT SIDE → CONTACT BOX */}
                    <div className="bg-white shadow-xl p-8 rounded-2xl border border-gray-100 h-fit">
                        <h2 className="text-3xl font-bold mb-4">Contact Details</h2>
                        <p className="text-gray-600 mb-8">
                            We're here to help with roofing inspections, emergencies, or questions.
                        </p>

                        <div className="space-y-8 m-auto">

                            <div className="flex items-start gap-4">
                                <Phone className="text-green-500" size={28} />
                                <div>
                                    <h3 className="font-semibold text-xl">Phone</h3>
                                    <p className="text-gray-600">(512) 555-1234</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Mail className="text-green-500" size={28} />
                                <div>
                                    <h3 className="font-semibold text-xl">Email</h3>
                                    <p className="text-gray-600">info@peaksheildroofing.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <MapPin className="text-green-500" size={28} />
                                <div>
                                    <h3 className="font-semibold text-xl">Address</h3>
                                    <p className="text-gray-600">1234 Elm Street, Houston, TX 77001

                                        United States</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Clock className="text-green-500" size={28} />
                                <div>
                                    <h3 className="font-semibold text-xl">Business Hours</h3>
                                    <p className="text-gray-600">Mon–Sat: 8AM – 6PM</p>
                                    <p className="text-gray-600">24/7 Emergency Storm Support</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </section>

            <h2 className="text-[35px] font-bold mb-3 text-center">Get a Free <span className="text-green-500">Roofing</span> Quote</h2>
            <p className="text-gray-600 mb-6 w-[85vw] md:w-[60vw] m-auto text-center">
                Tell us what you need and our team will reach out with pricing and next steps.
                This form is for roof repair, installation, inspection, or storm damage requests.
            </p>
            <div className='flex justify-center'>
                <Link href={"getaquote"}><button className="mt-3 text-white px-14 py-3 bg-green-600 rounded-xl hover:bg-green-700 mb-5 hover:scale-105 transition duration-100 ease-in-out cursor-pointer">
                    Get a Free Quote
                </button></Link>
                

            </div>
            </FadeUp>
            
        </>
    );
}
