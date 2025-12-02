"use client";

import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";
import ReferralPromoCard from "@/components/ReferralPromoCard";

export default function ContactPage() {
    return (
        <main className="bg-brand-dark min-h-screen">
            <PageHeader
                title="Contact"
                highlight="Us"
                subtitle="Ready to start your project? Get in touch with us today."
            />

            <div className="max-w-7xl mx-auto px-4 pb-20">
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    <div className="glass-card p-6 rounded-xl text-center">
                        <i className="fa-solid fa-phone text-3xl text-brand-accent mb-4"></i>
                        <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
                        <p className="text-brand-dim">+91 98765 43210</p>
                    </div>
                    <div className="glass-card p-6 rounded-xl text-center">
                        <i className="fa-solid fa-envelope text-3xl text-brand-accent mb-4"></i>
                        <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                        <p className="text-brand-dim">contact@innovsparklabs.com</p>
                    </div>
                    <div className="glass-card p-6 rounded-xl text-center">
                        <i className="fa-solid fa-location-dot text-3xl text-brand-accent mb-4"></i>
                        <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
                        <p className="text-brand-dim">Karnataka, India</p>
                    </div>
                </div>

                {/* Reuse existing CTA component which contains the form */}
                <CTA />
            </div>

            <ReferralPromoCard />
        </main>
    );
}
