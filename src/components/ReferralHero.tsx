"use client";

export default function ReferralHero() {
    return (
        <div className="relative py-20 px-4 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-brand-accent/20 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px]"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm">
                    <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-sm font-medium text-brand-dim">Join 500+ Students Earning Today</span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                    Turn Your Network Into <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-purple-500">
                        Passive Income
                    </span>
                </h1>

                <p className="text-lg md:text-xl text-brand-dim max-w-2xl mx-auto mb-10 leading-relaxed">
                    Refer your friends to InnovSpark Labs for their projects, training, or workshops and earn up to <span className="text-white font-bold">20% commission</span> on every successful referral.
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                    <div className="flex items-center space-x-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10">
                        <i className="fa-solid fa-check text-green-500"></i>
                        <span className="text-sm text-brand-dim">Instant Tracking</span>
                    </div>
                    <div className="flex items-center space-x-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10">
                        <i className="fa-solid fa-check text-green-500"></i>
                        <span className="text-sm text-brand-dim">Weekly Payouts</span>
                    </div>
                    <div className="flex items-center space-x-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10">
                        <i className="fa-solid fa-check text-green-500"></i>
                        <span className="text-sm text-brand-dim">No Cap on Earnings</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
