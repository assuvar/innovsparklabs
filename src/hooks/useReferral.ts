"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

interface ReferralStats {
    clicks: number;
    referrals: number;
    earnings: number;
}

export function useReferral() {
    const [referralCode, setReferralCode] = useState<string | null>(null);
    const [stats, setStats] = useState<ReferralStats>({ clicks: 0, referrals: 0, earnings: 0 });
    const searchParams = useSearchParams();

    // Initialize or Retrieve Referral Code
    useEffect(() => {
        const storedCode = localStorage.getItem("iplab_referral_code");
        if (storedCode) {
            setReferralCode(storedCode);
        } else {
            const newCode = `IPLAB-${crypto.randomUUID().split("-")[0].toUpperCase()}-${crypto.randomUUID().split("-")[1].toUpperCase()}`;
            localStorage.setItem("iplab_referral_code", newCode);
            setReferralCode(newCode);
        }

        // Retrieve Stats
        const storedStats = localStorage.getItem("iplab_referral_stats");
        if (storedStats) {
            setStats(JSON.parse(storedStats));
        }
    }, []);

    // Track Incoming Referrals
    useEffect(() => {
        const refParam = searchParams.get("ref");
        if (refParam) {
            // 1. Store the referral code for attribution (even if user navigates away)
            localStorage.setItem("iplab_referrer_id", refParam);

            // 2. Send data to Google Sheets (Frontend Tracking)
            const trackReferralToGoogleSheets = async () => {
                const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx_YOUR_SCRIPT_ID_HERE/exec"; // Replace with actual URL

                try {
                    await fetch(GOOGLE_SCRIPT_URL, {
                        method: "POST",
                        mode: "no-cors", // Important for Google Sheets
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            referral_id: refParam,
                            timestamp: new Date().toISOString(),
                            landing_page: window.location.pathname,
                            user_agent: navigator.userAgent
                        })
                    });
                    console.log("Referral tracked to Google Sheets");
                } catch (error) {
                    console.error("Error tracking referral:", error);
                }
            };

            // Only track if it's a new session or different code to avoid spamming
            const lastTracked = sessionStorage.getItem("iplab_referral_tracked");
            if (lastTracked !== refParam) {
                trackReferralToGoogleSheets();
                sessionStorage.setItem("iplab_referral_tracked", refParam);
            }

            // 3. Simulate "My Stats" (Demo Logic)
            const myCode = localStorage.getItem("iplab_referral_code");
            if (refParam === myCode) {
                const currentStats = localStorage.getItem("iplab_referral_stats");
                const parsedStats = currentStats ? JSON.parse(currentStats) : { clicks: 0, referrals: 0, earnings: 0 };

                const newStats = {
                    ...parsedStats,
                    clicks: parsedStats.clicks + 1,
                    referrals: Math.floor((parsedStats.clicks + 1) / 5),
                    earnings: Math.floor((parsedStats.clicks + 1) / 5) * 500
                };

                localStorage.setItem("iplab_referral_stats", JSON.stringify(newStats));
                setStats(newStats);
            }
        }
    }, [searchParams]);

    const copyToClipboard = () => {
        if (referralCode) {
            const url = `${window.location.origin}?ref=${referralCode}`;
            navigator.clipboard.writeText(url);
            return true;
        }
        return false;
    };

    const getShareUrl = () => {
        if (typeof window !== "undefined" && referralCode) {
            return `${window.location.origin}?ref=${referralCode}`;
        }
        return "";
    };

    return {
        referralCode,
        stats,
        copyToClipboard,
        getShareUrl
    };
}
