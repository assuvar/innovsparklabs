"use client";

import Link from "next/link";

export default function ReferralPromoCard() {
    return (
        <div className="w-full max-w-4xl mx-auto my-12 p-1">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-brand-accent/20 to-purple-600/20 border border-white/10 backdrop-blur-sm p-8 md:p-10">
                {/* Background Glow */}
                <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-brand-accent/30 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-purple-600/30 rounded-full blur-3xl"></div>

                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-center md:text-left">
                        <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-3 py-1 text-xs font-medium text-brand-accent mb-3">
                            <i className="fa-solid fa-gift"></i>
                            <span>Earn Money</span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                            Refer Friends & Earn <span className="text-brand-accent">20%</span>
                        </h3>
                        <p className="text-brand-dim max-w-lg">
                            Join our referral program and earn commission for every student who joins our workshops, bootcamps, or project guidance programs.
                        </p>
                    </div>

                    <Link
                        href="/referral"
                        className="flex-shrink-0 px-8 py-3 bg-brand-accent hover:bg-brand-accent/90 text-white font-bold rounded-xl transition-all shadow-lg shadow-brand-accent/20 flex items-center space-x-2 group"
                    >
                        <span>Start Earning</span>
                        <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                    </Link>
                </div>
            </div>
        </div>
    );
}
