"use client";

import { useReferral } from "@/hooks/useReferral";
import { useState } from "react";

export default function ReferralDashboard() {
    const { referralCode, stats, copyToClipboard, getShareUrl } = useReferral();
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        if (copyToClipboard()) {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const shareUrl = getShareUrl();
    const message = encodeURIComponent(`Hey! Check out InnovSpark Labs for amazing project guidance and workshops. Use my link to join: ${shareUrl}`);

    return (
        <div className="w-full max-w-6xl mx-auto px-4 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Left Column: Stats & Code */}
                <div className="lg:col-span-2 space-y-8">

                    {/* Referral Code Card */}
                    <div className="bg-[#0f172a]/50 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                        <h3 className="text-xl font-bold text-white mb-4">Your Unique Referral Code</h3>
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="flex-1 bg-black/30 border border-white/10 rounded-xl px-6 py-4 flex items-center justify-between">
                                <code className="text-brand-accent font-mono text-xl font-bold tracking-wider">
                                    {referralCode || "Generating..."}
                                </code>
                                <button
                                    onClick={handleCopy}
                                    className="text-brand-dim hover:text-white transition-colors"
                                    title="Copy Code"
                                >
                                    <i className={`fa-solid ${copied ? "fa-check text-green-500" : "fa-copy"}`}></i>
                                </button>
                            </div>
                            <button
                                onClick={handleCopy}
                                className="px-6 py-4 bg-brand-accent hover:bg-brand-accent/90 text-white font-bold rounded-xl transition-colors shadow-lg shadow-brand-accent/20"
                            >
                                {copied ? "Copied!" : "Copy Link"}
                            </button>
                        </div>

                        {/* Share Buttons */}
                        <div className="mt-6 flex flex-wrap gap-3">
                            <a
                                href={`https://wa.me/?text=${message}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 min-w-[120px] px-4 py-3 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/20 rounded-xl flex items-center justify-center space-x-2 transition-colors font-medium"
                            >
                                <i className="fa-brands fa-whatsapp text-lg"></i>
                                <span>WhatsApp</span>
                            </a>
                            <a
                                href={`https://t.me/share/url?url=${shareUrl}&text=${message}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 min-w-[120px] px-4 py-3 bg-[#0088cc]/10 hover:bg-[#0088cc]/20 text-[#0088cc] border border-[#0088cc]/20 rounded-xl flex items-center justify-center space-x-2 transition-colors font-medium"
                            >
                                <i className="fa-brands fa-telegram text-lg"></i>
                                <span>Telegram</span>
                            </a>
                            <a
                                href={`mailto:?subject=Check out InnovSpark Labs&body=${message}`}
                                className="flex-1 min-w-[120px] px-4 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl flex items-center justify-center space-x-2 transition-colors font-medium"
                            >
                                <i className="fa-solid fa-envelope text-lg"></i>
                                <span>Email</span>
                            </a>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-[#0f172a]/50 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 mb-4">
                                <i className="fa-solid fa-mouse-pointer"></i>
                            </div>
                            <p className="text-brand-dim text-sm">Total Clicks</p>
                            <h4 className="text-3xl font-bold text-white mt-1">{stats.clicks}</h4>
                        </div>
                        <div className="bg-[#0f172a]/50 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                            <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500 mb-4">
                                <i className="fa-solid fa-users"></i>
                            </div>
                            <p className="text-brand-dim text-sm">Referred Friends</p>
                            <h4 className="text-3xl font-bold text-white mt-1">{stats.referrals}</h4>
                        </div>
                        <div className="bg-[#0f172a]/50 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 mb-4">
                                <i className="fa-solid fa-indian-rupee-sign"></i>
                            </div>
                            <p className="text-brand-dim text-sm">Est. Earnings</p>
                            <h4 className="text-3xl font-bold text-white mt-1">₹{stats.earnings}</h4>
                        </div>
                    </div>
                </div>

                {/* Right Column: Commission Calculator */}
                <div className="bg-gradient-to-b from-[#0f172a] to-[#020617] border border-white/10 rounded-2xl p-8 backdrop-blur-sm h-full">
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center space-x-2">
                        <i className="fa-solid fa-calculator text-brand-accent"></i>
                        <span>Commission Tiers</span>
                    </h3>

                    <div className="space-y-6 relative">
                        {/* Connecting Line */}
                        <div className="absolute left-[15px] top-4 bottom-4 w-[2px] bg-white/10"></div>

                        {[
                            { label: "1 Friend", percent: "5%", active: stats.referrals >= 1 },
                            { label: "2-3 Friends", percent: "10%", active: stats.referrals >= 2 },
                            { label: "4-7 Friends", percent: "15%", active: stats.referrals >= 4 },
                            { label: "8+ Friends", percent: "20%", active: stats.referrals >= 8 },
                        ].map((tier, idx) => (
                            <div key={idx} className="relative flex items-center space-x-4">
                                <div className={`relative z-10 w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-bold transition-colors ${tier.active
                                    ? "bg-brand-accent border-brand-accent text-white"
                                    : "bg-[#0f172a] border-white/20 text-white/30"
                                    }`}>
                                    {tier.active && <i className="fa-solid fa-check"></i>}
                                </div>
                                <div className={`flex-1 p-4 rounded-xl border transition-colors ${tier.active
                                    ? "bg-brand-accent/10 border-brand-accent/30"
                                    : "bg-white/5 border-white/5"
                                    }`}>
                                    <div className="flex justify-between items-center">
                                        <span className={`font-medium ${tier.active ? "text-white" : "text-brand-dim"}`}>
                                            {tier.label}
                                        </span>
                                        <span className={`font-bold ${tier.active ? "text-brand-accent" : "text-white/30"}`}>
                                            {tier.percent}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                        <p className="text-sm text-blue-200">
                            <i className="fa-solid fa-circle-info mr-2"></i>
                            Commissions are paid out weekly via UPI or Bank Transfer once you reach ₹1000.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
