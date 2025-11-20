
"use client";
import React, { useRef, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function RoofingForm() {
    const [state, handleSubmit] = useForm("mldoppjq");
    const Formref = useRef(null);

    useEffect(() => {
        if (state.succeeded) {
            toast.success("✅ Form Submitted Successfully!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
            if(Formref.current){
                Formref.current.reset();
            }
        }
    }, [state.succeeded]);

    return (
        <>
        <ToastContainer />
        <form 
            ref={Formref} 
            onSubmit={handleSubmit} 
            className="overflow-x-hidden w-[90vw] m-auto md:max-w-md mx-auto p-6 rounded-2xl shadow-[5px_20px_30px_rgba(0,0,0,0.3)] space-y-4 mt-6 mb-8 "
        >
            {/* Name */}
            <div className="flex flex-col">
                <label htmlFor="name" className="font-semibold text-green-500 mb-1">Full Name</label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-black"
                    required
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
            </div>

            {/* Phone */}
            <div className="flex flex-col">
                <label htmlFor="phone" className="font-semibold text-green-500 mb-1">Phone Number</label>
                <input
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone number"
                    className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-black"
                    required
                />
                <ValidationError prefix="Phone" field="phone" errors={state.errors} />
            </div>

            {/* Email */}
            <div className="flex flex-col">
                <label htmlFor="email" className="font-semibold text-green-500 mb-1">Email Address</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-black"
                    required
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>

            {/* Service Type */}
            <div className="flex flex-col">
                <label htmlFor="service" className="font-semibold text-green-500 mb-1">Service Type</label>
                <select
                    id="service"
                    name="service"
                    className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-black"
                    required
                >
                    <option value="">Select a service</option>
                    <option value="roof-installation">Roof Installation</option>
                    <option value="roof-repair">Roof Repair</option>
                    <option value="gutter-cleaning">Gutter Cleaning / Replacement</option>
                    <option value="inspection">Inspection & Maintenance</option>
                    <option value="other">Other</option>
                </select>
                <ValidationError prefix="Service" field="service" errors={state.errors} />
            </div>

            {/* Message */}
            <div className="flex flex-col">
                <label htmlFor="message" className="font-semibold text-green-500 mb-1">Additional Details</label>
                <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Type your message..."
                    className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-black"
                    required
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>

            {/* Submit */}
            <button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover: cursor-pointer hover:scale-105 hover:bg-green-700 transition-colors duration-200"
            >
                {state.submitting ? "Submitting..." : "Submit"}
            </button>

            {/* Trust line above form */}

        </form>
        </>
    );
}
