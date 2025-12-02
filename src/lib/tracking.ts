"use client";

/**
 * Frontend-only User Tracking Library
 * Handles cookies, localStorage, visitor ID, geolocation, UTMs, and page analytics.
 */

// --- Types ---
interface TrackingData {
    visitorId: string | null;
    cookiesAccepted: boolean;
    visitCount: number;
    firstVisit: string | null;
    region: {
        country: string | null;
        city: string | null;
        region: string | null;
    };
    utm: {
        source: string | null;
        medium: string | null;
        campaign: string | null;
        referrer: string | null;
    };
    device: {
        type: string;
        os: string;
        browser: string;
    };
    pageHistory: PageVisit[];
}

interface PageVisit {
    path: string;
    timestamp: string;
    timeSpent?: number; // in seconds
}

// --- Cookie Helpers ---

export const setCookie = (name: string, value: string, days: number = 365) => {
    if (typeof document === "undefined") return;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
};

export const getCookie = (name: string): string | null => {
    if (typeof document === "undefined") return null;
    const nameEQ = name + "=";
    const ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === " ") c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
};

// --- Tracking Functions ---

const trackVisitorID = () => {
    let visitorId = getCookie("visitor_id");
    if (!visitorId) {
        visitorId = crypto.randomUUID();
        setCookie("visitor_id", visitorId);
    }
    return visitorId;
};

const trackVisitStats = () => {
    const firstVisit = getCookie("first_visit");
    if (!firstVisit) {
        setCookie("first_visit", new Date().toISOString());
    }

    // Increment visit count only once per session (simplified here to check if cookie exists, 
    // but for strict session we'd use sessionStorage or a short-lived cookie. 
    // Requirement says "increment each time user comes back". We'll assume a "new visit" 
    // is when the page is loaded and we haven't tracked a visit recently, or just increment on load.)
    // To avoid incrementing on every refresh, we can use a session cookie flag.

    if (!sessionStorage.getItem("visit_tracked")) {
        let count = parseInt(getCookie("visit_count") || "0");
        count++;
        setCookie("visit_count", count.toString());
        sessionStorage.setItem("visit_tracked", "true");
    }
};

const trackRegion = async () => {
    if (getCookie("user_country")) return; // Already tracked

    try {
        const response = await fetch("https://ipapi.co/json/");
        if (response.ok) {
            const data = await response.json();
            setCookie("user_country", data.country_name || "Unknown");
            setCookie("user_region", data.region || "Unknown");
            setCookie("user_city", data.city || "Unknown");
        }
    } catch (error) {
        console.error("Failed to fetch region data:", error);
    }
};

const trackUTM = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const source = urlParams.get("utm_source");
    const medium = urlParams.get("utm_medium");
    const campaign = urlParams.get("utm_campaign");

    if (source || medium || campaign) {
        if (source) setCookie("utm_source", source, 30);
        if (medium) setCookie("utm_medium", medium, 30);
        if (campaign) setCookie("utm_campaign", campaign, 30);
    } else if (!getCookie("referrer") && document.referrer) {
        // Only set referrer if no UTMs and not already set (to keep original source)
        // Or maybe we want to track latest referrer? Requirement says "If user has NO UTM parameters".
        let ref = "Direct";
        if (document.referrer.includes("google")) ref = "Google";
        else if (document.referrer.includes("instagram")) ref = "Instagram";
        else if (document.referrer.includes("facebook")) ref = "Facebook";
        else if (document.referrer.includes("linkedin")) ref = "LinkedIn";
        else if (document.referrer.includes("twitter") || document.referrer.includes("x.com")) ref = "Twitter";
        else ref = new URL(document.referrer).hostname;

        setCookie("referrer", ref, 30);
    }
};

const trackDevice = () => {
    if (getCookie("device_type")) return;

    const ua = navigator.userAgent;
    let type = "Desktop";
    if (/Mobi|Android/i.test(ua)) type = "Mobile";
    else if (/Tablet|iPad/i.test(ua)) type = "Tablet";

    let os = "Unknown";
    if (ua.indexOf("Win") !== -1) os = "Windows";
    else if (ua.indexOf("Mac") !== -1) os = "MacOS";
    else if (ua.indexOf("Linux") !== -1) os = "Linux";
    else if (ua.indexOf("Android") !== -1) os = "Android";
    else if (ua.indexOf("like Mac") !== -1) os = "iOS";

    let browser = "Unknown";
    if (ua.indexOf("Chrome") !== -1) browser = "Chrome";
    else if (ua.indexOf("Firefox") !== -1) browser = "Firefox";
    else if (ua.indexOf("Safari") !== -1) browser = "Safari";
    else if (ua.indexOf("Edge") !== -1) browser = "Edge";

    setCookie("device_type", type);
    setCookie("device_os", os);
    setCookie("device_browser", browser);
};

export const trackPageVisit = (path: string) => {
    if (typeof window === "undefined") return;

    const historyStr = localStorage.getItem("page_history");
    let history: PageVisit[] = historyStr ? JSON.parse(historyStr) : [];

    // Update time spent on last page
    if (history.length > 0) {
        const lastPage = history[history.length - 1];
        const now = new Date();
        const lastTime = new Date(lastPage.timestamp);
        const timeSpent = (now.getTime() - lastTime.getTime()) / 1000; // seconds
        lastPage.timeSpent = timeSpent;
    }

    // Add new page
    history.push({
        path,
        timestamp: new Date().toISOString(),
    });

    localStorage.setItem("page_history", JSON.stringify(history));
};

// --- Initialization ---

export const initTracking = () => {
    if (typeof window === "undefined") return;

    // Check consent
    const consent = getCookie("cookie_consent");
    if (consent === "rejected") {
        console.log("Tracking disabled by user.");
        return;
    }
    if (consent !== "accepted") {
        // Wait for banner acceptance
        return;
    }

    // Run tracking
    trackVisitorID();
    trackVisitStats();
    trackRegion();
    trackUTM();
    trackDevice();

    // Expose data for debugging
    // @ts-ignore
    window.trackingData = getTrackingData();
};

export const getTrackingData = (): TrackingData => {
    if (typeof window === "undefined") return {} as TrackingData;

    const historyStr = localStorage.getItem("page_history");

    return {
        visitorId: getCookie("visitor_id"),
        cookiesAccepted: getCookie("cookie_consent") === "accepted",
        visitCount: parseInt(getCookie("visit_count") || "0"),
        firstVisit: getCookie("first_visit"),
        region: {
            country: getCookie("user_country"),
            city: getCookie("user_city"),
            region: getCookie("user_region"),
        },
        utm: {
            source: getCookie("utm_source"),
            medium: getCookie("utm_medium"),
            campaign: getCookie("utm_campaign"),
            referrer: getCookie("referrer"),
        },
        device: {
            type: getCookie("device_type") || "Unknown",
            os: getCookie("device_os") || "Unknown",
            browser: getCookie("device_browser") || "Unknown",
        },
        pageHistory: historyStr ? JSON.parse(historyStr) : [],
    };
};
