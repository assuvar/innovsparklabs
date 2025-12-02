"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useFooterRotation } from "@/hooks/useFooterRotation";

export default function StickyFooter() {
    const { mode, isVisible, closeFooter } = useFooterRotation();
    const [timeLeft, setTimeLeft] = useState("");

    // Countdown Timer Logic (Simulated for "Today's Offer")
    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date();
            const endOfDay = new Date();
            endOfDay.setHours(23, 59, 59, 999);

            const diff = endOfDay.getTime() - now.getTime();
            const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((diff / (1000 * 60)) % 60);
            const seconds = Math.floor((diff / 1000) % 60);

            return `${hours}h ${minutes}m ${seconds}s`;
        };

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 w-full z-[100] animate-in slide-in-from-bottom-5 duration-500">
            <div className="relative bg-[#0f172a]/90 backdrop-blur-xl border-t border-white/10 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.5)]">
                {/* Gradient Line */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-accent to-transparent"></div>

                <div className="max-w-7xl mx-auto px-4 py-3 md:py-4 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-0">

                    {/* Content Based on Mode */}
                    <div className="flex items-center space-x-4 flex-1 justify-center md:justify-start">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-lg ${mode === 'offer' ? 'bg-red-500' : 'bg-green-500'}`}>
                            <i className={`fa-solid ${mode === 'offer' ? 'fa-fire' : 'fa-money-bill-wave'}`}></i>
                        </div>

                        <div className="text-center md:text-left">
                            {mode === "offer" ? (
                                <>
                                    <p className="text-white font-bold text-sm md:text-base">
                                        🔥 40% OFF on Project Consultation Today!
                                    </p>
                                    <p className="text-xs text-brand-dim font-mono">
                                        Offer ends in: <span className="text-brand-accent">{timeLeft}</span>
                                    </p>
                                </>
                            ) : (
                                <>
                                    <p className="text-white font-bold text-sm md:text-base">
                                        💸 Refer Friends & Earn Up to 20% Commission
                                    </p>
                                    <p className="text-xs text-brand-dim">
                                        Get paid for every student you bring!
                                    </p>
                                </>
                            )}
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="flex items-center space-x-4">
                        <Link
                            href={mode === "offer" ? "/free-consultation" : "/referral"}
                            className={`px-6 py-2 rounded-lg font-bold text-sm transition-all shadow-lg ${mode === "offer"
                                    ? "bg-red-500 hover:bg-red-600 text-white shadow-red-500/20"
                                    : "bg-green-500 hover:bg-green-600 text-white shadow-green-500/20"
                                }`}
                        >
                            {mode === "offer" ? "Get Quote Now" : "Join Program"}
                        </Link>

                        <button
                            onClick={closeFooter}
                            className="text-white/50 hover:text-white transition-colors"
                        >
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
