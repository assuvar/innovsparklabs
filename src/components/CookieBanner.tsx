"use client";

import { useState, useEffect } from "react";
import { getCookie, setCookie, initTracking } from "@/lib/tracking";

export default function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = getCookie("cookie_consent");
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        setCookie("cookie_consent", "accepted");
        setIsVisible(false);
        initTracking();
    };

    const handleReject = () => {
        setCookie("cookie_consent", "rejected");
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 bg-brand-dark/95 backdrop-blur-md border-t border-white/10 shadow-2xl animate-in slide-in-from-bottom duration-500">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-brand-dim text-sm md:text-base text-center md:text-left">
                    <p>
                        We use cookies to enhance your experience, analyze site traffic, and personalize content.
                        By clicking "Accept", you consent to our use of cookies.
                    </p>
                </div>
                <div className="flex gap-3 shrink-0">
                    <button
                        onClick={handleReject}
                        className="px-4 py-2 text-sm font-medium text-brand-light hover:text-white transition-colors"
                    >
                        Decline
                    </button>
                    <button
                        onClick={handleAccept}
                        className="px-6 py-2 text-sm font-bold text-white bg-brand-accent rounded-lg hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-500/20"
                    >
                        Accept Cookies
                    </button>
                </div>
            </div>
        </div>
    );
}
