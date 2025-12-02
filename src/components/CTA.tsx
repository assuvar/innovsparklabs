"use client";

import { useEffect, useState } from "react";

export default function CTA() {
    const [origin, setOrigin] = useState("");

    useEffect(() => {
        if (typeof window !== "undefined") {
            setOrigin(window.location.origin);
        }
    }, []);

    return (
        <section id="contact" className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-brand-accent/10"></div>
            <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
                <p className="text-xl text-brand-dim mb-8">
                    Get a free consultation call to decide your project title and roadmap.
                </p>

                <div className="mb-8">
                    <a
                        href="https://wa.me/916361082605?text=Hi%2C%20I%20want%20to%20book%20a%20consultation."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20 rounded-full font-bold hover:bg-[#25D366]/20 transition-colors animate-pulse"
                    >
                        <i className="fa-brands fa-whatsapp mr-2 text-xl"></i>
                        Or Chat Directly on WhatsApp
                    </a>
                </div>

                <div className="bg-brand-primary p-8 rounded-2xl border border-white/10 shadow-2xl">
                    {/* FormSubmit.co Form */}
                    <form
                        action="https://formsubmit.co/team@innovsparklabs.com"
                        method="POST"
                        className="space-y-4"
                    >
                        {/* Hidden Configuration Fields */}
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_next" value={`${origin}/thanks`} />
                        <input type="hidden" name="_subject" value="New Project Enquiry from Website!" />
                        <input type="text" name="_honey" style={{ display: "none" }} />
                        <input type="hidden" name="_template" value="table" />

                        {/* Referral ID Tracking */}
                        <input type="hidden" name="refId" value={typeof window !== 'undefined' ? localStorage.getItem("iplab_referrer_id") || "" : ""} />

                        <div className="grid md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                required
                                className="w-full bg-brand-dark border border-gray-700 text-white rounded-lg p-3 focus:ring-2 focus:ring-brand-accent outline-none"
                            />
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                required
                                className="w-full bg-brand-dark border border-gray-700 text-white rounded-lg p-3 focus:ring-2 focus:ring-brand-accent outline-none"
                            />
                        </div>
                        <select
                            name="department"
                            className="w-full bg-brand-dark border border-gray-700 text-white rounded-lg p-3 focus:ring-2 focus:ring-brand-accent outline-none"
                        >
                            <option value="Not Selected">Select Your Department</option>
                            <option value="CS/IS">Computer Science (CS/IS)</option>
                            <option value="EC/EEE">Electronics (EC/EEE)</option>
                            <option value="BCA/MCA">BCA / MCA</option>
                        </select>

                        <textarea
                            name="message"
                            placeholder="Any specific requirements? (Optional)"
                            className="w-full bg-brand-dark border border-gray-700 text-white rounded-lg p-3 focus:ring-2 focus:ring-brand-accent outline-none h-24"
                        ></textarea>

                        <button
                            type="submit"
                            className="w-full bg-brand-accent hover:bg-orange-600 text-white font-bold py-4 rounded-lg transition-all shadow-lg text-lg"
                        >
                            Book Free Session
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
