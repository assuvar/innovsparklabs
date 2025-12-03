"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

// --- Navigation Data ---
const NAV_DATA = {
    projects: {
        label: "Projects",
        categories: [
            {
                title: "Software Projects",
                href: "/projects",
                items: [
                    { label: "Web Applications", href: "/projects" },
                    { label: "Mobile Apps", href: "/projects" },
                    { label: "Automation Tools", href: "/projects" },
                    { label: "Desktop Applications", href: "/projects" },
                    { label: "Cloud Integrations", href: "/projects" },
                ],
                featured: {
                    title: "Building Scalable Web Apps",
                    href: "/projects",
                    desc: "Learn how we architect high-performance web solutions.",
                },
            },
            {
                title: "Hardware Projects",
                href: "/hardware",
                items: [
                    { label: "Arduino", href: "/hardware" },
                    { label: "ESP32", href: "/hardware" },
                    { label: "Raspberry Pi", href: "/hardware" },
                    { label: "Robotics", href: "/hardware" },
                    { label: "Sensors/Actuators", href: "/hardware" },
                ],
                featured: {
                    title: "IoT Revolution 2025",
                    href: "/hardware",
                    desc: "Explore the future of connected devices and smart systems.",
                },
            },
            {
                title: "Data/AI Projects",
                href: "/projects",
                items: [
                    { label: "ML Models", href: "/projects" },
                    { label: "Deep Learning", href: "/projects" },
                    { label: "NLP Models", href: "/projects" },
                    { label: "Recommendation Systems", href: "/projects" },
                    { label: "AI Automation", href: "/projects" },
                ],
                featured: {
                    title: "AI in Healthcare",
                    href: "/projects",
                    desc: "How machine learning is transforming medical diagnostics.",
                },
            },
            {
                title: "IoT Projects",
                href: "/projects",
                items: [
                    { label: "Smart Home", href: "/projects" },
                    { label: "Smart Agriculture", href: "/projects" },
                    { label: "IoT Safety", href: "/projects" },
                    { label: "Industrial IoT", href: "/projects" },
                    { label: "Wearables", href: "/projects" },
                ],
            },
            {
                title: "Final Year Projects",
                href: "/projects",
                items: [
                    { label: "CSE Projects", href: "/projects" },
                    { label: "ECE Projects", href: "/projects" },
                    { label: "Mechanical Mini Projects", href: "/projects" },
                    { label: "MCA Final Projects", href: "/projects" },
                    { label: "Polytechnic Projects", href: "/projects" },
                ],
            },
        ],
    },
    training: {
        label: "Training",
        categories: [
            {
                title: "Bootcamps",
                href: "/bootcamps",
                items: [
                    { label: "AI Bootcamp", href: "/bootcamps" },
                    { label: "Python Bootcamp", href: "/bootcamps" },
                    { label: "Web Dev Bootcamp", href: "/bootcamps" },
                    { label: "IoT Bootcamp", href: "/bootcamps" },
                ],
                featured: {
                    title: "Master Python in 30 Days",
                    href: "/bootcamps",
                    desc: "Join our intensive bootcamp to become a Python pro.",
                },
            },
            {
                title: "Workshops",
                href: "/workshops",
                items: [
                    { label: "1-Day IoT", href: "/workshops" },
                    { label: "2-Day Robotics", href: "/workshops" },
                    { label: "Cybersecurity", href: "/workshops" },
                    { label: "Web App Workshop", href: "/workshops" },
                ],
            },
            {
                title: "Hands-On Training",
                href: "/training",
                items: [
                    { label: "Live Coding", href: "/training" },
                    { label: "Weekend Classes", href: "/training" },
                    { label: "Lab Training", href: "/training" },
                    { label: "College Campus Training", href: "/training" },
                ],
            },
            {
                title: "1:1 Mentorship",
                href: "/guidance",
                items: [
                    { label: "Project Guidance", href: "/guidance" },
                    { label: "Career Advice", href: "/guidance" },
                ],
            },
        ],
    },
    services: {
        label: "Services",
        categories: [
            {
                title: "Assignments",
                href: "/assignments",
                items: [
                    { label: "Coding Problems", href: "/assignments" },
                    { label: "Lab Exercises", href: "/assignments" },
                    { label: "Mini Tasks", href: "/assignments" },
                    { label: "College Classwork", href: "/assignments" },
                ],
            },
            {
                title: "Documentation",
                href: "/assignments",
                items: [
                    { label: "Reports", href: "/assignments" },
                    { label: "PPT", href: "/assignments" },
                    { label: "Synopsis", href: "/assignments" },
                    { label: "IEEE Paper Help", href: "/assignments" },
                ],
            },
            {
                title: "Consultations",
                href: "/free-consultation",
                items: [
                    { label: "Free Project Consultation", href: "/free-consultation" },
                    { label: "Tech Stack Guidance", href: "/guidance" },
                    { label: "Project Planning", href: "/free-consultation" },
                    { label: "Idea Validation", href: "/guidance" },
                ],
                featured: {
                    title: "Book a Free Call",
                    href: "/free-consultation",
                    desc: "Get expert advice on your project idea today.",
                },
            },
        ],
    },
};

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Desktop State
    const [activeMain, setActiveMain] = useState<string | null>(null);
    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    // Mobile State
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [mobileExpandedMain, setMobileExpandedMain] = useState<string | null>(null);
    const [mobileExpandedCategory, setMobileExpandedCategory] = useState<string | null>(null);

    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const pathname = usePathname();

    // Handle Resize & Scroll
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1024);
        const handleScroll = () => setIsScrolled(window.scrollY > 20);

        // Initial check
        handleResize();
        handleScroll();

        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Reset on Route Change
    useEffect(() => {
        setIsMobileMenuOpen(false);
        setActiveMain(null);
        setActiveCategory(null);
        setMobileExpandedMain(null);
        setMobileExpandedCategory(null);
    }, [pathname]);

    // --- Desktop Handlers (Hover) ---
    const handleDesktopMainEnter = (key: string) => {
        if (isMobile) return;
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setActiveMain(key);
        setActiveCategory(null);
    };

    const handleDesktopMainLeave = () => {
        if (isMobile) return;
        timeoutRef.current = setTimeout(() => {
            setActiveMain(null);
            setActiveCategory(null);
        }, 150);
    };

    const handleDesktopCategoryEnter = (title: string) => {
        if (isMobile) return;
        setActiveCategory(title);
    };

    // --- Mobile Handlers (Click) ---
    const toggleMobileMain = (key: string) => {
        setMobileExpandedMain(mobileExpandedMain === key ? null : key);
        setMobileExpandedCategory(null);
    };

    const toggleMobileCategory = (title: string) => {
        setMobileExpandedCategory(mobileExpandedCategory === title ? null : title);
    };

    return (
        <nav
            className={`fixed w-full z-50 top-0 start-0 transition-all duration-300 ${isScrolled || isMobileMenuOpen || activeMain
                ? "bg-[#020617]/95 backdrop-blur-md shadow-lg border-b border-white/5"
                : "bg-transparent border-b border-transparent"
                }`}
        >
            <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center group z-50">
                        <div className="h-20 w-auto relative aspect-[3/1]">
                            <Image
                                src="/assets/logo.svg"
                                alt="InnovSpark Labs Logo"
                                fill
                                className="object-contain object-left"
                                priority
                            />
                        </div>
                    </Link>

                    {/* --- DESKTOP NAVIGATION (Visible >= 1024px) --- */}
                    {!isMobile && (
                        <div className="hidden lg:flex items-center space-x-1">
                            <Link
                                href="/"
                                className="px-4 py-2 text-sm font-medium text-brand-dim hover:text-white transition-colors"
                            >
                                Home
                            </Link>

                            {Object.entries(NAV_DATA).map(([key, data]) => {
                                // Check if this is one of the right-side items that needs left-popping sub-menus
                                const isRightAligned = key === "training" || key === "services";

                                return (
                                    <div
                                        key={key}
                                        className="relative"
                                        onMouseEnter={() => handleDesktopMainEnter(key)}
                                        onMouseLeave={handleDesktopMainLeave}
                                    >
                                        <button
                                            className={`px-4 py-2 text-sm font-medium flex items-center space-x-1 transition-colors ${activeMain === key ? "text-brand-accent" : "text-brand-dim hover:text-white"
                                                }`}
                                        >
                                            <span>{data.label}</span>
                                            <i
                                                className={`fa-solid fa-chevron-down text-xs transition-transform duration-300 ${activeMain === key ? "rotate-180" : ""
                                                    }`}
                                            ></i>
                                        </button>

                                        {/* Panel 1: Categories (Absolute) */}
                                        {activeMain === key && (
                                            <div className={`absolute top-full w-64 pt-4 animate-in fade-in slide-in-from-top-2 duration-200 ${isRightAligned ? "right-0" : "left-0"
                                                }`}>
                                                <div className="bg-[#0f172a]/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl py-2">
                                                    {data.categories.map((cat, idx) => (
                                                        <div
                                                            key={idx}
                                                            className="group/item relative"
                                                            onMouseEnter={() => handleDesktopCategoryEnter(cat.title)}
                                                        >
                                                            <Link
                                                                href={cat.href}
                                                                className={`flex items-center justify-between px-4 py-3 text-sm transition-colors ${activeCategory === cat.title
                                                                    ? "bg-white/10 text-white"
                                                                    : "text-brand-dim hover:bg-white/5 hover:text-white"
                                                                    }`}
                                                            >
                                                                <span>{cat.title}</span>
                                                                <i className="fa-solid fa-chevron-right text-xs opacity-50"></i>
                                                            </Link>

                                                            {/* Panel 2: Sub-items (Cascading Absolute) */}
                                                            {activeCategory === cat.title && (
                                                                <div
                                                                    className={`absolute top-0 w-72 h-full animate-in fade-in duration-200 z-[9999] ${isRightAligned
                                                                        ? "right-full pr-2 slide-in-from-right-2"
                                                                        : "left-full pl-2 slide-in-from-left-2"
                                                                        }`}
                                                                >
                                                                    <div className="bg-[#0f172a]/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl p-4 overflow-hidden min-h-full max-h-[80vh] overflow-y-auto flex flex-col justify-between">
                                                                        <div className="space-y-1">
                                                                            {cat.items.map((item, i) => (
                                                                                <Link
                                                                                    key={i}
                                                                                    href={item.href}
                                                                                    className="block px-3 py-2 text-sm text-brand-dim hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                                                                                >
                                                                                    {item.label}
                                                                                </Link>
                                                                            ))}
                                                                        </div>

                                                                        {/* Featured Blog/Content */}
                                                                        {cat.featured && (
                                                                            <div className="mt-4 pt-4 border-t border-white/10">
                                                                                <p className="text-xs font-bold text-brand-accent uppercase tracking-wider mb-2">
                                                                                    Featured
                                                                                </p>
                                                                                <Link
                                                                                    href={cat.featured.href}
                                                                                    className="block group/blog"
                                                                                >
                                                                                    <h4 className="text-sm font-medium text-white group-hover/blog:text-brand-accent transition-colors">
                                                                                        {cat.featured.title}
                                                                                    </h4>
                                                                                    <p className="text-xs text-brand-dim mt-1 line-clamp-2">
                                                                                        {cat.featured.desc}
                                                                                    </p>
                                                                                </Link>
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}

                            <Link
                                href="/referral"
                                className="px-4 py-2 text-sm font-medium text-brand-dim hover:text-white transition-colors"
                            >
                                Referral
                            </Link>

                            <Link
                                href="/contact"
                                className="px-4 py-2 text-sm font-medium text-brand-dim hover:text-white transition-colors"
                            >
                                Contact
                            </Link>
                        </div>
                    )}

                    {/* --- MOBILE MENU BUTTON (Visible < 1024px) --- */}
                    <button
                        className="lg:hidden p-2 text-gray-400 hover:text-white focus:outline-none z-50"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <i className={`fa-solid ${isMobileMenuOpen ? "fa-xmark" : "fa-bars"} text-2xl`}></i>
                    </button>
                </div>
            </div>

            {/* --- MOBILE MENU OVERLAY (Visible < 1024px) --- */}
            <div
                className={`lg:hidden fixed inset-0 z-40 bg-[#020617] pt-24 px-4 transition-transform duration-300 overflow-y-auto h-[100dvh] w-full ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex flex-col space-y-2 pb-20">
                    <Link
                        href="/"
                        className="p-4 text-lg font-medium text-white border-b border-white/5"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Home
                    </Link>

                    {Object.entries(NAV_DATA).map(([key, data]) => (
                        <div key={key} className="border-b border-white/5">
                            {/* Level 1: Main Item (Accordion) */}
                            <button
                                onClick={() => toggleMobileMain(key)}
                                className="w-full flex items-center justify-between p-4 text-lg font-medium text-white"
                            >
                                <span>{data.label}</span>
                                <i
                                    className={`fa-solid fa-chevron-down transition-transform duration-300 ${mobileExpandedMain === key ? "rotate-180" : ""
                                        }`}
                                ></i>
                            </button>

                            {/* Level 2: Categories (Nested Accordion) */}
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileExpandedMain === key ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <div className="bg-white/5 pl-4">
                                    {data.categories.map((cat, idx) => (
                                        <div key={idx} className="border-l border-white/10">
                                            <button
                                                onClick={() => toggleMobileCategory(cat.title)}
                                                className="w-full flex items-center justify-between p-3 pr-4 text-base font-medium text-brand-light hover:text-white"
                                            >
                                                <span>{cat.title}</span>
                                                <i
                                                    className={`fa-solid fa-chevron-down text-xs transition-transform duration-300 ${mobileExpandedCategory === cat.title ? "rotate-180" : ""
                                                        }`}
                                                ></i>
                                            </button>

                                            {/* Level 3: Sub-items (Static List) */}
                                            <div
                                                className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileExpandedCategory === cat.title
                                                    ? "max-h-[500px] opacity-100"
                                                    : "max-h-0 opacity-0"
                                                    }`}
                                            >
                                                <div className="bg-black/20 pl-4 py-2">
                                                    {cat.items.map((item, i) => (
                                                        <Link
                                                            key={i}
                                                            href={item.href}
                                                            className="block py-3 text-sm text-brand-dim hover:text-brand-accent"
                                                            onClick={() => setIsMobileMenuOpen(false)}
                                                        >
                                                            {item.label}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}

                    <Link
                        href="/referral"
                        className="p-4 text-lg font-medium text-white border-b border-white/5"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Referral
                    </Link>

                    <Link
                        href="/contact"
                        className="p-4 text-lg font-medium text-white border-b border-white/5"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
}
