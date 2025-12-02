"use client";

import { useState, useEffect } from "react";

type FooterMode = "offer" | "referral";

export function useFooterRotation() {
    const [mode, setMode] = useState<FooterMode>("offer");
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Check localStorage for last rotation time
        const lastRotation = localStorage.getItem("iplab_footer_rotation_time");
        const storedMode = localStorage.getItem("iplab_footer_mode") as FooterMode;

        const now = Date.now();
        const sixHours = 6 * 60 * 60 * 1000;

        if (!lastRotation || !storedMode || now - parseInt(lastRotation) > sixHours) {
            // Rotate
            const newMode = storedMode === "offer" ? "referral" : "offer";
            localStorage.setItem("iplab_footer_mode", newMode);
            localStorage.setItem("iplab_footer_rotation_time", now.toString());
            setMode(newMode);
        } else {
            setMode(storedMode);
        }
    }, []);

    const closeFooter = () => {
        setIsVisible(false);
        // Optional: Remember closed state for session?
        sessionStorage.setItem("iplab_footer_closed", "true");
    };

    useEffect(() => {
        if (sessionStorage.getItem("iplab_footer_closed") === "true") {
            setIsVisible(false);
        }
    }, []);

    return { mode, isVisible, closeFooter };
}
